# `notificationIntegration` Submodule <a name="`notificationIntegration` Submodule" id="@cdktf/provider-snowflake.notificationIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationIntegration <a name="NotificationIntegration" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration snowflake_notification_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.notification_integration.NotificationIntegration;

NotificationIntegration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .awsSnsRoleArn(java.lang.String)
//  .awsSnsTopicArn(java.lang.String)
//  .awsSqsArn(java.lang.String)
//  .awsSqsRoleArn(java.lang.String)
//  .azureStorageQueuePrimaryUri(java.lang.String)
//  .azureTenantId(java.lang.String)
//  .comment(java.lang.String)
//  .direction(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .gcpPubsubSubscriptionName(java.lang.String)
//  .id(java.lang.String)
//  .notificationProvider(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#name NotificationIntegration#name}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.awsSnsRoleArn">awsSnsRoleArn</a></code> | <code>java.lang.String</code> | AWS IAM role ARN for notification integration to assume. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.awsSnsTopicArn">awsSnsTopicArn</a></code> | <code>java.lang.String</code> | AWS SNS Topic ARN for notification integration to connect to. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.awsSqsArn">awsSqsArn</a></code> | <code>java.lang.String</code> | AWS SQS queue ARN for notification integration to connect to. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.awsSqsRoleArn">awsSqsRoleArn</a></code> | <code>java.lang.String</code> | AWS IAM role ARN for notification integration to assume. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.azureStorageQueuePrimaryUri">azureStorageQueuePrimaryUri</a></code> | <code>java.lang.String</code> | The queue ID for the Azure Queue Storage queue created for Event Grid notifications. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | The ID of the Azure Active Directory tenant used for identity management. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | A comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | Direction of the cloud messaging with respect to Snowflake (required only for error notifications). |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#enabled NotificationIntegration#enabled}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.gcpPubsubSubscriptionName">gcpPubsubSubscriptionName</a></code> | <code>java.lang.String</code> | The subscription id that Snowflake will listen to when using the GCP_PUBSUB provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#id NotificationIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.notificationProvider">notificationProvider</a></code> | <code>java.lang.String</code> | The third-party cloud message queuing service (e.g. AZURE_STORAGE_QUEUE, AWS_SQS, AWS_SNS). |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | A type of integration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#name NotificationIntegration#name}.

---

##### `awsSnsRoleArn`<sup>Optional</sup> <a name="awsSnsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.awsSnsRoleArn"></a>

- *Type:* java.lang.String

AWS IAM role ARN for notification integration to assume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#aws_sns_role_arn NotificationIntegration#aws_sns_role_arn}

---

##### `awsSnsTopicArn`<sup>Optional</sup> <a name="awsSnsTopicArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.awsSnsTopicArn"></a>

- *Type:* java.lang.String

AWS SNS Topic ARN for notification integration to connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#aws_sns_topic_arn NotificationIntegration#aws_sns_topic_arn}

---

##### `awsSqsArn`<sup>Optional</sup> <a name="awsSqsArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.awsSqsArn"></a>

- *Type:* java.lang.String

AWS SQS queue ARN for notification integration to connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#aws_sqs_arn NotificationIntegration#aws_sqs_arn}

---

##### `awsSqsRoleArn`<sup>Optional</sup> <a name="awsSqsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.awsSqsRoleArn"></a>

- *Type:* java.lang.String

AWS IAM role ARN for notification integration to assume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#aws_sqs_role_arn NotificationIntegration#aws_sqs_role_arn}

---

##### `azureStorageQueuePrimaryUri`<sup>Optional</sup> <a name="azureStorageQueuePrimaryUri" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.azureStorageQueuePrimaryUri"></a>

- *Type:* java.lang.String

The queue ID for the Azure Queue Storage queue created for Event Grid notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#azure_storage_queue_primary_uri NotificationIntegration#azure_storage_queue_primary_uri}

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.azureTenantId"></a>

- *Type:* java.lang.String

The ID of the Azure Active Directory tenant used for identity management.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#azure_tenant_id NotificationIntegration#azure_tenant_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

A comment for the integration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#comment NotificationIntegration#comment}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

Direction of the cloud messaging with respect to Snowflake (required only for error notifications).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#direction NotificationIntegration#direction}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#enabled NotificationIntegration#enabled}.

---

##### `gcpPubsubSubscriptionName`<sup>Optional</sup> <a name="gcpPubsubSubscriptionName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.gcpPubsubSubscriptionName"></a>

- *Type:* java.lang.String

The subscription id that Snowflake will listen to when using the GCP_PUBSUB provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#gcp_pubsub_subscription_name NotificationIntegration#gcp_pubsub_subscription_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#id NotificationIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationProvider`<sup>Optional</sup> <a name="notificationProvider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.notificationProvider"></a>

- *Type:* java.lang.String

The third-party cloud message queuing service (e.g. AZURE_STORAGE_QUEUE, AWS_SQS, AWS_SNS).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#notification_provider NotificationIntegration#notification_provider}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.type"></a>

- *Type:* java.lang.String

A type of integration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#type NotificationIntegration#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSnsRoleArn">resetAwsSnsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSnsTopicArn">resetAwsSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSqsArn">resetAwsSqsArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSqsRoleArn">resetAwsSqsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAzureStorageQueuePrimaryUri">resetAzureStorageQueuePrimaryUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAzureTenantId">resetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetGcpPubsubSubscriptionName">resetGcpPubsubSubscriptionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetNotificationProvider">resetNotificationProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAwsSnsRoleArn` <a name="resetAwsSnsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSnsRoleArn"></a>

```java
public void resetAwsSnsRoleArn()
```

##### `resetAwsSnsTopicArn` <a name="resetAwsSnsTopicArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSnsTopicArn"></a>

```java
public void resetAwsSnsTopicArn()
```

##### `resetAwsSqsArn` <a name="resetAwsSqsArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSqsArn"></a>

```java
public void resetAwsSqsArn()
```

##### `resetAwsSqsRoleArn` <a name="resetAwsSqsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSqsRoleArn"></a>

```java
public void resetAwsSqsRoleArn()
```

##### `resetAzureStorageQueuePrimaryUri` <a name="resetAzureStorageQueuePrimaryUri" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAzureStorageQueuePrimaryUri"></a>

```java
public void resetAzureStorageQueuePrimaryUri()
```

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAzureTenantId"></a>

```java
public void resetAzureTenantId()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetComment"></a>

```java
public void resetComment()
```

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetGcpPubsubSubscriptionName` <a name="resetGcpPubsubSubscriptionName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetGcpPubsubSubscriptionName"></a>

```java
public void resetGcpPubsubSubscriptionName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetId"></a>

```java
public void resetId()
```

##### `resetNotificationProvider` <a name="resetNotificationProvider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetNotificationProvider"></a>

```java
public void resetNotificationProvider()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.notification_integration.NotificationIntegration;

NotificationIntegration.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.notification_integration.NotificationIntegration;

NotificationIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.notification_integration.NotificationIntegration;

NotificationIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsExternalId">awsSnsExternalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsIamUserArn">awsSnsIamUserArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsExternalId">awsSqsExternalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsIamUserArn">awsSqsIamUserArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubServiceAccount">gcpPubsubServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsRoleArnInput">awsSnsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsTopicArnInput">awsSnsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsArnInput">awsSqsArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsRoleArnInput">awsSqsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureStorageQueuePrimaryUriInput">azureStorageQueuePrimaryUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubSubscriptionNameInput">gcpPubsubSubscriptionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.notificationProviderInput">notificationProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsRoleArn">awsSnsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsTopicArn">awsSnsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsArn">awsSqsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsRoleArn">awsSqsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureStorageQueuePrimaryUri">azureStorageQueuePrimaryUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubSubscriptionName">gcpPubsubSubscriptionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.notificationProvider">notificationProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsSnsExternalId`<sup>Required</sup> <a name="awsSnsExternalId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsExternalId"></a>

```java
public java.lang.String getAwsSnsExternalId();
```

- *Type:* java.lang.String

---

##### `awsSnsIamUserArn`<sup>Required</sup> <a name="awsSnsIamUserArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsIamUserArn"></a>

```java
public java.lang.String getAwsSnsIamUserArn();
```

- *Type:* java.lang.String

---

##### `awsSqsExternalId`<sup>Required</sup> <a name="awsSqsExternalId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsExternalId"></a>

```java
public java.lang.String getAwsSqsExternalId();
```

- *Type:* java.lang.String

---

##### `awsSqsIamUserArn`<sup>Required</sup> <a name="awsSqsIamUserArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsIamUserArn"></a>

```java
public java.lang.String getAwsSqsIamUserArn();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `gcpPubsubServiceAccount`<sup>Required</sup> <a name="gcpPubsubServiceAccount" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubServiceAccount"></a>

```java
public java.lang.String getGcpPubsubServiceAccount();
```

- *Type:* java.lang.String

---

##### `awsSnsRoleArnInput`<sup>Optional</sup> <a name="awsSnsRoleArnInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsRoleArnInput"></a>

```java
public java.lang.String getAwsSnsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `awsSnsTopicArnInput`<sup>Optional</sup> <a name="awsSnsTopicArnInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsTopicArnInput"></a>

```java
public java.lang.String getAwsSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `awsSqsArnInput`<sup>Optional</sup> <a name="awsSqsArnInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsArnInput"></a>

```java
public java.lang.String getAwsSqsArnInput();
```

- *Type:* java.lang.String

---

##### `awsSqsRoleArnInput`<sup>Optional</sup> <a name="awsSqsRoleArnInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsRoleArnInput"></a>

```java
public java.lang.String getAwsSqsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `azureStorageQueuePrimaryUriInput`<sup>Optional</sup> <a name="azureStorageQueuePrimaryUriInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureStorageQueuePrimaryUriInput"></a>

```java
public java.lang.String getAzureStorageQueuePrimaryUriInput();
```

- *Type:* java.lang.String

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureTenantIdInput"></a>

```java
public java.lang.String getAzureTenantIdInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gcpPubsubSubscriptionNameInput`<sup>Optional</sup> <a name="gcpPubsubSubscriptionNameInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubSubscriptionNameInput"></a>

```java
public java.lang.String getGcpPubsubSubscriptionNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationProviderInput`<sup>Optional</sup> <a name="notificationProviderInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.notificationProviderInput"></a>

```java
public java.lang.String getNotificationProviderInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `awsSnsRoleArn`<sup>Required</sup> <a name="awsSnsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsRoleArn"></a>

```java
public java.lang.String getAwsSnsRoleArn();
```

- *Type:* java.lang.String

---

##### `awsSnsTopicArn`<sup>Required</sup> <a name="awsSnsTopicArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsTopicArn"></a>

```java
public java.lang.String getAwsSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `awsSqsArn`<sup>Required</sup> <a name="awsSqsArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsArn"></a>

```java
public java.lang.String getAwsSqsArn();
```

- *Type:* java.lang.String

---

##### `awsSqsRoleArn`<sup>Required</sup> <a name="awsSqsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsRoleArn"></a>

```java
public java.lang.String getAwsSqsRoleArn();
```

- *Type:* java.lang.String

---

##### `azureStorageQueuePrimaryUri`<sup>Required</sup> <a name="azureStorageQueuePrimaryUri" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureStorageQueuePrimaryUri"></a>

```java
public java.lang.String getAzureStorageQueuePrimaryUri();
```

- *Type:* java.lang.String

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gcpPubsubSubscriptionName`<sup>Required</sup> <a name="gcpPubsubSubscriptionName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubSubscriptionName"></a>

```java
public java.lang.String getGcpPubsubSubscriptionName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notificationProvider`<sup>Required</sup> <a name="notificationProvider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.notificationProvider"></a>

```java
public java.lang.String getNotificationProvider();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationIntegrationConfig <a name="NotificationIntegrationConfig" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.notification_integration.NotificationIntegrationConfig;

NotificationIntegrationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .awsSnsRoleArn(java.lang.String)
//  .awsSnsTopicArn(java.lang.String)
//  .awsSqsArn(java.lang.String)
//  .awsSqsRoleArn(java.lang.String)
//  .azureStorageQueuePrimaryUri(java.lang.String)
//  .azureTenantId(java.lang.String)
//  .comment(java.lang.String)
//  .direction(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .gcpPubsubSubscriptionName(java.lang.String)
//  .id(java.lang.String)
//  .notificationProvider(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#name NotificationIntegration#name}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSnsRoleArn">awsSnsRoleArn</a></code> | <code>java.lang.String</code> | AWS IAM role ARN for notification integration to assume. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSnsTopicArn">awsSnsTopicArn</a></code> | <code>java.lang.String</code> | AWS SNS Topic ARN for notification integration to connect to. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSqsArn">awsSqsArn</a></code> | <code>java.lang.String</code> | AWS SQS queue ARN for notification integration to connect to. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSqsRoleArn">awsSqsRoleArn</a></code> | <code>java.lang.String</code> | AWS IAM role ARN for notification integration to assume. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.azureStorageQueuePrimaryUri">azureStorageQueuePrimaryUri</a></code> | <code>java.lang.String</code> | The queue ID for the Azure Queue Storage queue created for Event Grid notifications. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | The ID of the Azure Active Directory tenant used for identity management. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | A comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | Direction of the cloud messaging with respect to Snowflake (required only for error notifications). |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#enabled NotificationIntegration#enabled}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.gcpPubsubSubscriptionName">gcpPubsubSubscriptionName</a></code> | <code>java.lang.String</code> | The subscription id that Snowflake will listen to when using the GCP_PUBSUB provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#id NotificationIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.notificationProvider">notificationProvider</a></code> | <code>java.lang.String</code> | The third-party cloud message queuing service (e.g. AZURE_STORAGE_QUEUE, AWS_SQS, AWS_SNS). |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.type">type</a></code> | <code>java.lang.String</code> | A type of integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#name NotificationIntegration#name}.

---

##### `awsSnsRoleArn`<sup>Optional</sup> <a name="awsSnsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSnsRoleArn"></a>

```java
public java.lang.String getAwsSnsRoleArn();
```

- *Type:* java.lang.String

AWS IAM role ARN for notification integration to assume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#aws_sns_role_arn NotificationIntegration#aws_sns_role_arn}

---

##### `awsSnsTopicArn`<sup>Optional</sup> <a name="awsSnsTopicArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSnsTopicArn"></a>

```java
public java.lang.String getAwsSnsTopicArn();
```

- *Type:* java.lang.String

AWS SNS Topic ARN for notification integration to connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#aws_sns_topic_arn NotificationIntegration#aws_sns_topic_arn}

---

##### `awsSqsArn`<sup>Optional</sup> <a name="awsSqsArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSqsArn"></a>

```java
public java.lang.String getAwsSqsArn();
```

- *Type:* java.lang.String

AWS SQS queue ARN for notification integration to connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#aws_sqs_arn NotificationIntegration#aws_sqs_arn}

---

##### `awsSqsRoleArn`<sup>Optional</sup> <a name="awsSqsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSqsRoleArn"></a>

```java
public java.lang.String getAwsSqsRoleArn();
```

- *Type:* java.lang.String

AWS IAM role ARN for notification integration to assume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#aws_sqs_role_arn NotificationIntegration#aws_sqs_role_arn}

---

##### `azureStorageQueuePrimaryUri`<sup>Optional</sup> <a name="azureStorageQueuePrimaryUri" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.azureStorageQueuePrimaryUri"></a>

```java
public java.lang.String getAzureStorageQueuePrimaryUri();
```

- *Type:* java.lang.String

The queue ID for the Azure Queue Storage queue created for Event Grid notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#azure_storage_queue_primary_uri NotificationIntegration#azure_storage_queue_primary_uri}

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

The ID of the Azure Active Directory tenant used for identity management.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#azure_tenant_id NotificationIntegration#azure_tenant_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

A comment for the integration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#comment NotificationIntegration#comment}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Direction of the cloud messaging with respect to Snowflake (required only for error notifications).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#direction NotificationIntegration#direction}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#enabled NotificationIntegration#enabled}.

---

##### `gcpPubsubSubscriptionName`<sup>Optional</sup> <a name="gcpPubsubSubscriptionName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.gcpPubsubSubscriptionName"></a>

```java
public java.lang.String getGcpPubsubSubscriptionName();
```

- *Type:* java.lang.String

The subscription id that Snowflake will listen to when using the GCP_PUBSUB provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#gcp_pubsub_subscription_name NotificationIntegration#gcp_pubsub_subscription_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#id NotificationIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationProvider`<sup>Optional</sup> <a name="notificationProvider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.notificationProvider"></a>

```java
public java.lang.String getNotificationProvider();
```

- *Type:* java.lang.String

The third-party cloud message queuing service (e.g. AZURE_STORAGE_QUEUE, AWS_SQS, AWS_SNS).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#notification_provider NotificationIntegration#notification_provider}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

A type of integration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/notification_integration#type NotificationIntegration#type}

---


