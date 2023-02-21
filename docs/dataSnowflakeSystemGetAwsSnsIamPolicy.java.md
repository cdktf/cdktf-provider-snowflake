# `dataSnowflakeSystemGetAwsSnsIamPolicy` Submodule <a name="`dataSnowflakeSystemGetAwsSnsIamPolicy` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeSystemGetAwsSnsIamPolicy <a name="DataSnowflakeSystemGetAwsSnsIamPolicy" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy snowflake_system_get_aws_sns_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_system_get_aws_sns_iam_policy.DataSnowflakeSystemGetAwsSnsIamPolicy;

DataSnowflakeSystemGetAwsSnsIamPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .awsSnsTopicArn(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.awsSnsTopicArn">awsSnsTopicArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name (ARN) of the SNS topic for your S3 bucket. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy#id DataSnowflakeSystemGetAwsSnsIamPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsSnsTopicArn`<sup>Required</sup> <a name="awsSnsTopicArn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.awsSnsTopicArn"></a>

- *Type:* java.lang.String

Amazon Resource Name (ARN) of the SNS topic for your S3 bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy#aws_sns_topic_arn DataSnowflakeSystemGetAwsSnsIamPolicy#aws_sns_topic_arn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy#id DataSnowflakeSystemGetAwsSnsIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_system_get_aws_sns_iam_policy.DataSnowflakeSystemGetAwsSnsIamPolicy;

DataSnowflakeSystemGetAwsSnsIamPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_system_get_aws_sns_iam_policy.DataSnowflakeSystemGetAwsSnsIamPolicy;

DataSnowflakeSystemGetAwsSnsIamPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_system_get_aws_sns_iam_policy.DataSnowflakeSystemGetAwsSnsIamPolicy;

DataSnowflakeSystemGetAwsSnsIamPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.awsSnsTopicPolicyJson">awsSnsTopicPolicyJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.awsSnsTopicArnInput">awsSnsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.awsSnsTopicArn">awsSnsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `awsSnsTopicPolicyJson`<sup>Required</sup> <a name="awsSnsTopicPolicyJson" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.awsSnsTopicPolicyJson"></a>

```java
public java.lang.String getAwsSnsTopicPolicyJson();
```

- *Type:* java.lang.String

---

##### `awsSnsTopicArnInput`<sup>Optional</sup> <a name="awsSnsTopicArnInput" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.awsSnsTopicArnInput"></a>

```java
public java.lang.String getAwsSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `awsSnsTopicArn`<sup>Required</sup> <a name="awsSnsTopicArn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.awsSnsTopicArn"></a>

```java
public java.lang.String getAwsSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeSystemGetAwsSnsIamPolicyConfig <a name="DataSnowflakeSystemGetAwsSnsIamPolicyConfig" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_system_get_aws_sns_iam_policy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig;

DataSnowflakeSystemGetAwsSnsIamPolicyConfig.builder()
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
    .awsSnsTopicArn(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.awsSnsTopicArn">awsSnsTopicArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name (ARN) of the SNS topic for your S3 bucket. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy#id DataSnowflakeSystemGetAwsSnsIamPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsSnsTopicArn`<sup>Required</sup> <a name="awsSnsTopicArn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.awsSnsTopicArn"></a>

```java
public java.lang.String getAwsSnsTopicArn();
```

- *Type:* java.lang.String

Amazon Resource Name (ARN) of the SNS topic for your S3 bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy#aws_sns_topic_arn DataSnowflakeSystemGetAwsSnsIamPolicy#aws_sns_topic_arn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy#id DataSnowflakeSystemGetAwsSnsIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



