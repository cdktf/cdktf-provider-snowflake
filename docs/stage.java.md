# `snowflake_stage`

Refer to the Terraform Registory for docs: [`snowflake_stage`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage).

# `stage` Submodule <a name="`stage` Submodule" id="@cdktf/provider-snowflake.stage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Stage <a name="Stage" id="@cdktf/provider-snowflake.stage.Stage"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage snowflake_stage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.stage.Stage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.stage.Stage;

Stage.Builder.create(Construct scope, java.lang.String id)
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
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .awsExternalId(java.lang.String)
//  .comment(java.lang.String)
//  .copyOptions(java.lang.String)
//  .credentials(java.lang.String)
//  .directory(java.lang.String)
//  .encryption(java.lang.String)
//  .fileFormat(java.lang.String)
//  .id(java.lang.String)
//  .snowflakeIamUser(java.lang.String)
//  .storageIntegration(java.lang.String)
//  .tag(IResolvable)
//  .tag(java.util.List<StageTag>)
//  .url(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the stage. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the stage; |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the stage. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.awsExternalId">awsExternalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#aws_external_id Stage#aws_external_id}. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the stage. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.copyOptions">copyOptions</a></code> | <code>java.lang.String</code> | Specifies the copy options for the stage. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.credentials">credentials</a></code> | <code>java.lang.String</code> | Specifies the credentials for the stage. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.directory">directory</a></code> | <code>java.lang.String</code> | Specifies the directory settings for the stage. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.encryption">encryption</a></code> | <code>java.lang.String</code> | Specifies the encryption settings for the stage. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.fileFormat">fileFormat</a></code> | <code>java.lang.String</code> | Specifies the file format for the stage. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#id Stage#id}. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.snowflakeIamUser">snowflakeIamUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#snowflake_iam_user Stage#snowflake_iam_user}. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.storageIntegration">storageIntegration</a></code> | <code>java.lang.String</code> | Specifies the name of the storage integration used to delegate authentication responsibility for external cloud storage to a Snowflake identity and access management (IAM) entity. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.tag">tag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.stage.StageTag">StageTag</a>></code> | tag block. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Specifies the URL for the stage. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#database Stage#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the stage;

must be unique for the database and schema in which the stage is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#name Stage#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#schema Stage#schema}

---

##### `awsExternalId`<sup>Optional</sup> <a name="awsExternalId" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.awsExternalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#aws_external_id Stage#aws_external_id}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#comment Stage#comment}

---

##### `copyOptions`<sup>Optional</sup> <a name="copyOptions" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.copyOptions"></a>

- *Type:* java.lang.String

Specifies the copy options for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#copy_options Stage#copy_options}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.credentials"></a>

- *Type:* java.lang.String

Specifies the credentials for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#credentials Stage#credentials}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.directory"></a>

- *Type:* java.lang.String

Specifies the directory settings for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#directory Stage#directory}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.encryption"></a>

- *Type:* java.lang.String

Specifies the encryption settings for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#encryption Stage#encryption}

---

##### `fileFormat`<sup>Optional</sup> <a name="fileFormat" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.fileFormat"></a>

- *Type:* java.lang.String

Specifies the file format for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#file_format Stage#file_format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#id Stage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `snowflakeIamUser`<sup>Optional</sup> <a name="snowflakeIamUser" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.snowflakeIamUser"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#snowflake_iam_user Stage#snowflake_iam_user}.

---

##### `storageIntegration`<sup>Optional</sup> <a name="storageIntegration" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.storageIntegration"></a>

- *Type:* java.lang.String

Specifies the name of the storage integration used to delegate authentication responsibility for external cloud storage to a Snowflake identity and access management (IAM) entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#storage_integration Stage#storage_integration}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.tag"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.stage.StageTag">StageTag</a>>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#tag Stage#tag}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-snowflake.stage.Stage.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Specifies the URL for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#url Stage#url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.resetAwsExternalId">resetAwsExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.resetCopyOptions">resetCopyOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.resetFileFormat">resetFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.resetSnowflakeIamUser">resetSnowflakeIamUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.resetStorageIntegration">resetStorageIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.stage.Stage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.stage.Stage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.stage.Stage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.stage.Stage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.stage.Stage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.stage.Stage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.stage.Stage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.stage.Stage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.stage.Stage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.stage.Stage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.Stage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.stage.Stage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.Stage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.stage.Stage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.Stage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.stage.Stage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.Stage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.stage.Stage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.Stage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.stage.Stage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.Stage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.stage.Stage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.Stage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.stage.Stage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.Stage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.stage.Stage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.Stage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.stage.Stage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.Stage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTag` <a name="putTag" id="@cdktf/provider-snowflake.stage.Stage.putTag"></a>

```java
public void putTag(IResolvable OR java.util.List<StageTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.stage.Stage.putTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.stage.StageTag">StageTag</a>>

---

##### `resetAwsExternalId` <a name="resetAwsExternalId" id="@cdktf/provider-snowflake.stage.Stage.resetAwsExternalId"></a>

```java
public void resetAwsExternalId()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.stage.Stage.resetComment"></a>

```java
public void resetComment()
```

##### `resetCopyOptions` <a name="resetCopyOptions" id="@cdktf/provider-snowflake.stage.Stage.resetCopyOptions"></a>

```java
public void resetCopyOptions()
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-snowflake.stage.Stage.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-snowflake.stage.Stage.resetDirectory"></a>

```java
public void resetDirectory()
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktf/provider-snowflake.stage.Stage.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetFileFormat` <a name="resetFileFormat" id="@cdktf/provider-snowflake.stage.Stage.resetFileFormat"></a>

```java
public void resetFileFormat()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.stage.Stage.resetId"></a>

```java
public void resetId()
```

##### `resetSnowflakeIamUser` <a name="resetSnowflakeIamUser" id="@cdktf/provider-snowflake.stage.Stage.resetSnowflakeIamUser"></a>

```java
public void resetSnowflakeIamUser()
```

##### `resetStorageIntegration` <a name="resetStorageIntegration" id="@cdktf/provider-snowflake.stage.Stage.resetStorageIntegration"></a>

```java
public void resetStorageIntegration()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-snowflake.stage.Stage.resetTag"></a>

```java
public void resetTag()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-snowflake.stage.Stage.resetUrl"></a>

```java
public void resetUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.stage.Stage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.stage.Stage;

Stage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.stage.Stage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.stage.Stage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.stage.Stage;

Stage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.stage.Stage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.stage.Stage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.stage.Stage;

Stage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.stage.Stage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-snowflake.stage.StageTagList">StageTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.awsExternalIdInput">awsExternalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.copyOptionsInput">copyOptionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.credentialsInput">credentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.directoryInput">directoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.encryptionInput">encryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.fileFormatInput">fileFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.snowflakeIamUserInput">snowflakeIamUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.storageIntegrationInput">storageIntegrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.tagInput">tagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.stage.StageTag">StageTag</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.awsExternalId">awsExternalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.copyOptions">copyOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.credentials">credentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.directory">directory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.encryption">encryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.fileFormat">fileFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.snowflakeIamUser">snowflakeIamUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.storageIntegration">storageIntegration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.stage.Stage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.stage.Stage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.stage.Stage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.stage.Stage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.stage.Stage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.stage.Stage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.stage.Stage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.stage.Stage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.stage.Stage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.stage.Stage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.stage.Stage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.stage.Stage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.stage.Stage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.stage.Stage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-snowflake.stage.Stage.property.tag"></a>

```java
public StageTagList getTag();
```

- *Type:* <a href="#@cdktf/provider-snowflake.stage.StageTagList">StageTagList</a>

---

##### `awsExternalIdInput`<sup>Optional</sup> <a name="awsExternalIdInput" id="@cdktf/provider-snowflake.stage.Stage.property.awsExternalIdInput"></a>

```java
public java.lang.String getAwsExternalIdInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.stage.Stage.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `copyOptionsInput`<sup>Optional</sup> <a name="copyOptionsInput" id="@cdktf/provider-snowflake.stage.Stage.property.copyOptionsInput"></a>

```java
public java.lang.String getCopyOptionsInput();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-snowflake.stage.Stage.property.credentialsInput"></a>

```java
public java.lang.String getCredentialsInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.stage.Stage.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-snowflake.stage.Stage.property.directoryInput"></a>

```java
public java.lang.String getDirectoryInput();
```

- *Type:* java.lang.String

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-snowflake.stage.Stage.property.encryptionInput"></a>

```java
public java.lang.String getEncryptionInput();
```

- *Type:* java.lang.String

---

##### `fileFormatInput`<sup>Optional</sup> <a name="fileFormatInput" id="@cdktf/provider-snowflake.stage.Stage.property.fileFormatInput"></a>

```java
public java.lang.String getFileFormatInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.stage.Stage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.stage.Stage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.stage.Stage.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `snowflakeIamUserInput`<sup>Optional</sup> <a name="snowflakeIamUserInput" id="@cdktf/provider-snowflake.stage.Stage.property.snowflakeIamUserInput"></a>

```java
public java.lang.String getSnowflakeIamUserInput();
```

- *Type:* java.lang.String

---

##### `storageIntegrationInput`<sup>Optional</sup> <a name="storageIntegrationInput" id="@cdktf/provider-snowflake.stage.Stage.property.storageIntegrationInput"></a>

```java
public java.lang.String getStorageIntegrationInput();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-snowflake.stage.Stage.property.tagInput"></a>

```java
public java.lang.Object getTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.stage.StageTag">StageTag</a>>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-snowflake.stage.Stage.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `awsExternalId`<sup>Required</sup> <a name="awsExternalId" id="@cdktf/provider-snowflake.stage.Stage.property.awsExternalId"></a>

```java
public java.lang.String getAwsExternalId();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.stage.Stage.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `copyOptions`<sup>Required</sup> <a name="copyOptions" id="@cdktf/provider-snowflake.stage.Stage.property.copyOptions"></a>

```java
public java.lang.String getCopyOptions();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-snowflake.stage.Stage.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.stage.Stage.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-snowflake.stage.Stage.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-snowflake.stage.Stage.property.encryption"></a>

```java
public java.lang.String getEncryption();
```

- *Type:* java.lang.String

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktf/provider-snowflake.stage.Stage.property.fileFormat"></a>

```java
public java.lang.String getFileFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.stage.Stage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.stage.Stage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.stage.Stage.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `snowflakeIamUser`<sup>Required</sup> <a name="snowflakeIamUser" id="@cdktf/provider-snowflake.stage.Stage.property.snowflakeIamUser"></a>

```java
public java.lang.String getSnowflakeIamUser();
```

- *Type:* java.lang.String

---

##### `storageIntegration`<sup>Required</sup> <a name="storageIntegration" id="@cdktf/provider-snowflake.stage.Stage.property.storageIntegration"></a>

```java
public java.lang.String getStorageIntegration();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-snowflake.stage.Stage.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stage.Stage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.stage.Stage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StageConfig <a name="StageConfig" id="@cdktf/provider-snowflake.stage.StageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.stage.StageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.stage.StageConfig;

StageConfig.builder()
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
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .awsExternalId(java.lang.String)
//  .comment(java.lang.String)
//  .copyOptions(java.lang.String)
//  .credentials(java.lang.String)
//  .directory(java.lang.String)
//  .encryption(java.lang.String)
//  .fileFormat(java.lang.String)
//  .id(java.lang.String)
//  .snowflakeIamUser(java.lang.String)
//  .storageIntegration(java.lang.String)
//  .tag(IResolvable)
//  .tag(java.util.List<StageTag>)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the stage. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the stage; |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the stage. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.awsExternalId">awsExternalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#aws_external_id Stage#aws_external_id}. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the stage. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.copyOptions">copyOptions</a></code> | <code>java.lang.String</code> | Specifies the copy options for the stage. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.credentials">credentials</a></code> | <code>java.lang.String</code> | Specifies the credentials for the stage. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.directory">directory</a></code> | <code>java.lang.String</code> | Specifies the directory settings for the stage. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.encryption">encryption</a></code> | <code>java.lang.String</code> | Specifies the encryption settings for the stage. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.fileFormat">fileFormat</a></code> | <code>java.lang.String</code> | Specifies the file format for the stage. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#id Stage#id}. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.snowflakeIamUser">snowflakeIamUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#snowflake_iam_user Stage#snowflake_iam_user}. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.storageIntegration">storageIntegration</a></code> | <code>java.lang.String</code> | Specifies the name of the storage integration used to delegate authentication responsibility for external cloud storage to a Snowflake identity and access management (IAM) entity. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.tag">tag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.stage.StageTag">StageTag</a>></code> | tag block. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageConfig.property.url">url</a></code> | <code>java.lang.String</code> | Specifies the URL for the stage. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.stage.StageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.stage.StageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.stage.StageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.stage.StageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.stage.StageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.stage.StageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.stage.StageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.stage.StageConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#database Stage#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.stage.StageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the stage;

must be unique for the database and schema in which the stage is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#name Stage#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.stage.StageConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#schema Stage#schema}

---

##### `awsExternalId`<sup>Optional</sup> <a name="awsExternalId" id="@cdktf/provider-snowflake.stage.StageConfig.property.awsExternalId"></a>

```java
public java.lang.String getAwsExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#aws_external_id Stage#aws_external_id}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.stage.StageConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#comment Stage#comment}

---

##### `copyOptions`<sup>Optional</sup> <a name="copyOptions" id="@cdktf/provider-snowflake.stage.StageConfig.property.copyOptions"></a>

```java
public java.lang.String getCopyOptions();
```

- *Type:* java.lang.String

Specifies the copy options for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#copy_options Stage#copy_options}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-snowflake.stage.StageConfig.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

Specifies the credentials for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#credentials Stage#credentials}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-snowflake.stage.StageConfig.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

Specifies the directory settings for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#directory Stage#directory}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-snowflake.stage.StageConfig.property.encryption"></a>

```java
public java.lang.String getEncryption();
```

- *Type:* java.lang.String

Specifies the encryption settings for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#encryption Stage#encryption}

---

##### `fileFormat`<sup>Optional</sup> <a name="fileFormat" id="@cdktf/provider-snowflake.stage.StageConfig.property.fileFormat"></a>

```java
public java.lang.String getFileFormat();
```

- *Type:* java.lang.String

Specifies the file format for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#file_format Stage#file_format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.stage.StageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#id Stage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `snowflakeIamUser`<sup>Optional</sup> <a name="snowflakeIamUser" id="@cdktf/provider-snowflake.stage.StageConfig.property.snowflakeIamUser"></a>

```java
public java.lang.String getSnowflakeIamUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#snowflake_iam_user Stage#snowflake_iam_user}.

---

##### `storageIntegration`<sup>Optional</sup> <a name="storageIntegration" id="@cdktf/provider-snowflake.stage.StageConfig.property.storageIntegration"></a>

```java
public java.lang.String getStorageIntegration();
```

- *Type:* java.lang.String

Specifies the name of the storage integration used to delegate authentication responsibility for external cloud storage to a Snowflake identity and access management (IAM) entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#storage_integration Stage#storage_integration}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-snowflake.stage.StageConfig.property.tag"></a>

```java
public java.lang.Object getTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.stage.StageTag">StageTag</a>>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#tag Stage#tag}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-snowflake.stage.StageConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Specifies the URL for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#url Stage#url}

---

### StageTag <a name="StageTag" id="@cdktf/provider-snowflake.stage.StageTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.stage.StageTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.stage.StageTag;

StageTag.builder()
    .name(java.lang.String)
    .value(java.lang.String)
//  .database(java.lang.String)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTag.property.name">name</a></code> | <code>java.lang.String</code> | Tag name, e.g. department. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTag.property.value">value</a></code> | <code>java.lang.String</code> | Tag value, e.g. marketing_info. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTag.property.database">database</a></code> | <code>java.lang.String</code> | Name of the database that the tag was created in. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTag.property.schema">schema</a></code> | <code>java.lang.String</code> | Name of the schema that the tag was created in. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.stage.StageTag.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Tag name, e.g. department.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#name Stage#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.stage.StageTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Tag value, e.g. marketing_info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#value Stage#value}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.stage.StageTag.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Name of the database that the tag was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#database Stage#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.stage.StageTag.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Name of the schema that the tag was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/stage#schema Stage#schema}

---

## Classes <a name="Classes" id="Classes"></a>

### StageTagList <a name="StageTagList" id="@cdktf/provider-snowflake.stage.StageTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.stage.StageTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.stage.StageTagList;

new StageTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.stage.StageTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.StageTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.stage.StageTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.stage.StageTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.stage.StageTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.stage.StageTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.stage.StageTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.stage.StageTagList.get"></a>

```java
public StageTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.stage.StageTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.stage.StageTag">StageTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.stage.StageTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.stage.StageTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.stage.StageTagList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.stage.StageTag">StageTag</a>>

---


### StageTagOutputReference <a name="StageTagOutputReference" id="@cdktf/provider-snowflake.stage.StageTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.stage.StageTagOutputReference;

new StageTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stage.StageTagOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.stage.StageTag">StageTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.stage.StageTagOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.stage.StageTag">StageTag</a>

---



