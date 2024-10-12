# `pipe` Submodule <a name="`pipe` Submodule" id="@cdktf/provider-snowflake.pipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pipe <a name="Pipe" id="@cdktf/provider-snowflake.pipe.Pipe"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe snowflake_pipe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.pipe.Pipe;

Pipe.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .copyStatement(java.lang.String)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .autoIngest(java.lang.Boolean)
//  .autoIngest(IResolvable)
//  .awsSnsTopicArn(java.lang.String)
//  .comment(java.lang.String)
//  .errorIntegration(java.lang.String)
//  .id(java.lang.String)
//  .integration(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.copyStatement">copyStatement</a></code> | <code>java.lang.String</code> | Specifies the copy statement for the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the pipe; |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.autoIngest">autoIngest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies a auto_ingest param for the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.awsSnsTopicArn">awsSnsTopicArn</a></code> | <code>java.lang.String</code> | Specifies the Amazon Resource Name (ARN) for the SNS topic for your S3 bucket. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.errorIntegration">errorIntegration</a></code> | <code>java.lang.String</code> | Specifies the name of the notification integration used for error notifications. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#id Pipe#id}. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.integration">integration</a></code> | <code>java.lang.String</code> | Specifies an integration for the pipe. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `copyStatement`<sup>Required</sup> <a name="copyStatement" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.copyStatement"></a>

- *Type:* java.lang.String

Specifies the copy statement for the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#copy_statement Pipe#copy_statement}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#database Pipe#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the pipe;

must be unique for the database and schema in which the pipe is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#name Pipe#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#schema Pipe#schema}

---

##### `autoIngest`<sup>Optional</sup> <a name="autoIngest" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.autoIngest"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies a auto_ingest param for the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#auto_ingest Pipe#auto_ingest}

---

##### `awsSnsTopicArn`<sup>Optional</sup> <a name="awsSnsTopicArn" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.awsSnsTopicArn"></a>

- *Type:* java.lang.String

Specifies the Amazon Resource Name (ARN) for the SNS topic for your S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#aws_sns_topic_arn Pipe#aws_sns_topic_arn}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#comment Pipe#comment}

---

##### `errorIntegration`<sup>Optional</sup> <a name="errorIntegration" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.errorIntegration"></a>

- *Type:* java.lang.String

Specifies the name of the notification integration used for error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#error_integration Pipe#error_integration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#id Pipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.integration"></a>

- *Type:* java.lang.String

Specifies an integration for the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#integration Pipe#integration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetAutoIngest">resetAutoIngest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetAwsSnsTopicArn">resetAwsSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetErrorIntegration">resetErrorIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetIntegration">resetIntegration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.pipe.Pipe.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.pipe.Pipe.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.pipe.Pipe.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.pipe.Pipe.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.pipe.Pipe.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.pipe.Pipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.pipe.Pipe.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.pipe.Pipe.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.pipe.Pipe.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.pipe.Pipe.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.pipe.Pipe.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.pipe.Pipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.pipe.Pipe.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.pipe.Pipe.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.pipe.Pipe.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.pipe.Pipe.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipe.Pipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.pipe.Pipe.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.pipe.Pipe.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.pipe.Pipe.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.pipe.Pipe.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.pipe.Pipe.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.pipe.Pipe.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.pipe.Pipe.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAutoIngest` <a name="resetAutoIngest" id="@cdktf/provider-snowflake.pipe.Pipe.resetAutoIngest"></a>

```java
public void resetAutoIngest()
```

##### `resetAwsSnsTopicArn` <a name="resetAwsSnsTopicArn" id="@cdktf/provider-snowflake.pipe.Pipe.resetAwsSnsTopicArn"></a>

```java
public void resetAwsSnsTopicArn()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.pipe.Pipe.resetComment"></a>

```java
public void resetComment()
```

##### `resetErrorIntegration` <a name="resetErrorIntegration" id="@cdktf/provider-snowflake.pipe.Pipe.resetErrorIntegration"></a>

```java
public void resetErrorIntegration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.pipe.Pipe.resetId"></a>

```java
public void resetId()
```

##### `resetIntegration` <a name="resetIntegration" id="@cdktf/provider-snowflake.pipe.Pipe.resetIntegration"></a>

```java
public void resetIntegration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Pipe resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.pipe.Pipe.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.pipe.Pipe;

Pipe.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.pipe.Pipe.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.pipe.Pipe.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.pipe.Pipe;

Pipe.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.pipe.Pipe.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.pipe.Pipe.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.pipe.Pipe;

Pipe.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.pipe.Pipe.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.pipe.Pipe.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.pipe.Pipe;

Pipe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Pipe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Pipe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.pipe.Pipe.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.pipe.Pipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Pipe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.pipe.Pipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Pipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.pipe.Pipe.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Pipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.notificationChannel">notificationChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.autoIngestInput">autoIngestInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.awsSnsTopicArnInput">awsSnsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.copyStatementInput">copyStatementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.errorIntegrationInput">errorIntegrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.integrationInput">integrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.autoIngest">autoIngest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.awsSnsTopicArn">awsSnsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.copyStatement">copyStatement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.errorIntegration">errorIntegration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.integration">integration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.pipe.Pipe.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.pipe.Pipe.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.pipe.Pipe.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.pipe.Pipe.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.pipe.Pipe.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.pipe.Pipe.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.pipe.Pipe.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.pipe.Pipe.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.pipe.Pipe.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.pipe.Pipe.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.pipe.Pipe.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.pipe.Pipe.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.pipe.Pipe.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.pipe.Pipe.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.pipe.Pipe.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `notificationChannel`<sup>Required</sup> <a name="notificationChannel" id="@cdktf/provider-snowflake.pipe.Pipe.property.notificationChannel"></a>

```java
public java.lang.String getNotificationChannel();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.pipe.Pipe.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `autoIngestInput`<sup>Optional</sup> <a name="autoIngestInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.autoIngestInput"></a>

```java
public java.lang.Object getAutoIngestInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `awsSnsTopicArnInput`<sup>Optional</sup> <a name="awsSnsTopicArnInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.awsSnsTopicArnInput"></a>

```java
public java.lang.String getAwsSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `copyStatementInput`<sup>Optional</sup> <a name="copyStatementInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.copyStatementInput"></a>

```java
public java.lang.String getCopyStatementInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `errorIntegrationInput`<sup>Optional</sup> <a name="errorIntegrationInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.errorIntegrationInput"></a>

```java
public java.lang.String getErrorIntegrationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationInput`<sup>Optional</sup> <a name="integrationInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.integrationInput"></a>

```java
public java.lang.String getIntegrationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.pipe.Pipe.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `autoIngest`<sup>Required</sup> <a name="autoIngest" id="@cdktf/provider-snowflake.pipe.Pipe.property.autoIngest"></a>

```java
public java.lang.Object getAutoIngest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `awsSnsTopicArn`<sup>Required</sup> <a name="awsSnsTopicArn" id="@cdktf/provider-snowflake.pipe.Pipe.property.awsSnsTopicArn"></a>

```java
public java.lang.String getAwsSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.pipe.Pipe.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `copyStatement`<sup>Required</sup> <a name="copyStatement" id="@cdktf/provider-snowflake.pipe.Pipe.property.copyStatement"></a>

```java
public java.lang.String getCopyStatement();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.pipe.Pipe.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `errorIntegration`<sup>Required</sup> <a name="errorIntegration" id="@cdktf/provider-snowflake.pipe.Pipe.property.errorIntegration"></a>

```java
public java.lang.String getErrorIntegration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.pipe.Pipe.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktf/provider-snowflake.pipe.Pipe.property.integration"></a>

```java
public java.lang.String getIntegration();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.pipe.Pipe.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.pipe.Pipe.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.pipe.Pipe.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PipeConfig <a name="PipeConfig" id="@cdktf/provider-snowflake.pipe.PipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.pipe.PipeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.pipe.PipeConfig;

PipeConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .copyStatement(java.lang.String)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .autoIngest(java.lang.Boolean)
//  .autoIngest(IResolvable)
//  .awsSnsTopicArn(java.lang.String)
//  .comment(java.lang.String)
//  .errorIntegration(java.lang.String)
//  .id(java.lang.String)
//  .integration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.copyStatement">copyStatement</a></code> | <code>java.lang.String</code> | Specifies the copy statement for the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the pipe; |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.autoIngest">autoIngest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies a auto_ingest param for the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.awsSnsTopicArn">awsSnsTopicArn</a></code> | <code>java.lang.String</code> | Specifies the Amazon Resource Name (ARN) for the SNS topic for your S3 bucket. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.errorIntegration">errorIntegration</a></code> | <code>java.lang.String</code> | Specifies the name of the notification integration used for error notifications. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#id Pipe#id}. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.integration">integration</a></code> | <code>java.lang.String</code> | Specifies an integration for the pipe. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `copyStatement`<sup>Required</sup> <a name="copyStatement" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.copyStatement"></a>

```java
public java.lang.String getCopyStatement();
```

- *Type:* java.lang.String

Specifies the copy statement for the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#copy_statement Pipe#copy_statement}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#database Pipe#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the pipe;

must be unique for the database and schema in which the pipe is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#name Pipe#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#schema Pipe#schema}

---

##### `autoIngest`<sup>Optional</sup> <a name="autoIngest" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.autoIngest"></a>

```java
public java.lang.Object getAutoIngest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies a auto_ingest param for the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#auto_ingest Pipe#auto_ingest}

---

##### `awsSnsTopicArn`<sup>Optional</sup> <a name="awsSnsTopicArn" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.awsSnsTopicArn"></a>

```java
public java.lang.String getAwsSnsTopicArn();
```

- *Type:* java.lang.String

Specifies the Amazon Resource Name (ARN) for the SNS topic for your S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#aws_sns_topic_arn Pipe#aws_sns_topic_arn}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#comment Pipe#comment}

---

##### `errorIntegration`<sup>Optional</sup> <a name="errorIntegration" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.errorIntegration"></a>

```java
public java.lang.String getErrorIntegration();
```

- *Type:* java.lang.String

Specifies the name of the notification integration used for error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#error_integration Pipe#error_integration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#id Pipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.integration"></a>

```java
public java.lang.String getIntegration();
```

- *Type:* java.lang.String

Specifies an integration for the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/pipe#integration Pipe#integration}

---



