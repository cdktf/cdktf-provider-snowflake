# `snowflake_database`

Refer to the Terraform Registory for docs: [`snowflake_database`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database).

# `database` Submodule <a name="`database` Submodule" id="@cdktf/provider-snowflake.database"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Database <a name="Database" id="@cdktf/provider-snowflake.database.Database"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database snowflake_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.Database.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.Database;

Database.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .comment(java.lang.String)
//  .dataRetentionTimeInDays(java.lang.Number)
//  .fromDatabase(java.lang.String)
//  .fromReplica(java.lang.String)
//  .fromShare(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isTransient(java.lang.Boolean)
//  .isTransient(IResolvable)
//  .replicationConfiguration(DatabaseReplicationConfiguration)
//  .tag(IResolvable)
//  .tag(java.util.List<DatabaseTag>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#name Database#name}. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#comment Database#comment}. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.fromDatabase">fromDatabase</a></code> | <code>java.lang.String</code> | Specify a database to create a clone from. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.fromReplica">fromReplica</a></code> | <code>java.lang.String</code> | Specify a fully-qualified path to a database to create a replica from. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.fromShare">fromShare</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specify a provider and a share in this map to create a database from a share. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#id Database#id}. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.isTransient">isTransient</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies a database as transient. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration">DatabaseReplicationConfiguration</a></code> | replication_configuration block. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.tag">tag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.database.DatabaseTag">DatabaseTag</a>></code> | tag block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#name Database#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#comment Database#comment}.

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.dataRetentionTimeInDays"></a>

- *Type:* java.lang.Number

Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object.

A value of 0 effectively disables Time Travel for the specified database, schema, or table. For more information, see Understanding & Using Time Travel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#data_retention_time_in_days Database#data_retention_time_in_days}

---

##### `fromDatabase`<sup>Optional</sup> <a name="fromDatabase" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.fromDatabase"></a>

- *Type:* java.lang.String

Specify a database to create a clone from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#from_database Database#from_database}

---

##### `fromReplica`<sup>Optional</sup> <a name="fromReplica" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.fromReplica"></a>

- *Type:* java.lang.String

Specify a fully-qualified path to a database to create a replica from.

A fully qualified path follows the format of "<organization_name>"."<account_name>"."<db_name>". An example would be: "myorg1"."account1"."db1"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#from_replica Database#from_replica}

---

##### `fromShare`<sup>Optional</sup> <a name="fromShare" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.fromShare"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specify a provider and a share in this map to create a database from a share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#from_share Database#from_share}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTransient`<sup>Optional</sup> <a name="isTransient" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.isTransient"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies a database as transient.

Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#is_transient Database#is_transient}

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.replicationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration">DatabaseReplicationConfiguration</a>

replication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#replication_configuration Database#replication_configuration}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.tag"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.database.DatabaseTag">DatabaseTag</a>>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#tag Database#tag}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.putReplicationConfiguration">putReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetDataRetentionTimeInDays">resetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetFromDatabase">resetFromDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetFromReplica">resetFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetFromShare">resetFromShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetIsTransient">resetIsTransient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetReplicationConfiguration">resetReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetTag">resetTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.database.Database.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.database.Database.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.database.Database.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.Database.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.database.Database.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.database.Database.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.database.Database.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.database.Database.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.database.Database.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.database.Database.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.database.Database.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.database.Database.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.database.Database.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.database.Database.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.database.Database.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.database.Database.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putReplicationConfiguration` <a name="putReplicationConfiguration" id="@cdktf/provider-snowflake.database.Database.putReplicationConfiguration"></a>

```java
public void putReplicationConfiguration(DatabaseReplicationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.Database.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration">DatabaseReplicationConfiguration</a>

---

##### `putTag` <a name="putTag" id="@cdktf/provider-snowflake.database.Database.putTag"></a>

```java
public void putTag(IResolvable OR java.util.List<DatabaseTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.Database.putTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.database.DatabaseTag">DatabaseTag</a>>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.database.Database.resetComment"></a>

```java
public void resetComment()
```

##### `resetDataRetentionTimeInDays` <a name="resetDataRetentionTimeInDays" id="@cdktf/provider-snowflake.database.Database.resetDataRetentionTimeInDays"></a>

```java
public void resetDataRetentionTimeInDays()
```

##### `resetFromDatabase` <a name="resetFromDatabase" id="@cdktf/provider-snowflake.database.Database.resetFromDatabase"></a>

```java
public void resetFromDatabase()
```

##### `resetFromReplica` <a name="resetFromReplica" id="@cdktf/provider-snowflake.database.Database.resetFromReplica"></a>

```java
public void resetFromReplica()
```

##### `resetFromShare` <a name="resetFromShare" id="@cdktf/provider-snowflake.database.Database.resetFromShare"></a>

```java
public void resetFromShare()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.database.Database.resetId"></a>

```java
public void resetId()
```

##### `resetIsTransient` <a name="resetIsTransient" id="@cdktf/provider-snowflake.database.Database.resetIsTransient"></a>

```java
public void resetIsTransient()
```

##### `resetReplicationConfiguration` <a name="resetReplicationConfiguration" id="@cdktf/provider-snowflake.database.Database.resetReplicationConfiguration"></a>

```java
public void resetReplicationConfiguration()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-snowflake.database.Database.resetTag"></a>

```java
public void resetTag()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.database.Database.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.Database;

Database.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.database.Database.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.database.Database.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.Database;

Database.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.database.Database.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.database.Database.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.Database;

Database.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.database.Database.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference">DatabaseReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagList">DatabaseTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDaysInput">dataRetentionTimeInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fromDatabaseInput">fromDatabaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fromReplicaInput">fromReplicaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fromShareInput">fromShareInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.isTransientInput">isTransientInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replicationConfigurationInput">replicationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration">DatabaseReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.tagInput">tagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.database.DatabaseTag">DatabaseTag</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fromDatabase">fromDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fromReplica">fromReplica</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fromShare">fromShare</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.isTransient">isTransient</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.database.Database.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.database.Database.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.Database.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.database.Database.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.database.Database.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.database.Database.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.database.Database.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.database.Database.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.database.Database.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.database.Database.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.database.Database.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.database.Database.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.Database.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.database.Database.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@cdktf/provider-snowflake.database.Database.property.replicationConfiguration"></a>

```java
public DatabaseReplicationConfigurationOutputReference getReplicationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference">DatabaseReplicationConfigurationOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-snowflake.database.Database.property.tag"></a>

```java
public DatabaseTagList getTag();
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseTagList">DatabaseTagList</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.database.Database.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `dataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="dataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDaysInput"></a>

```java
public java.lang.Number getDataRetentionTimeInDaysInput();
```

- *Type:* java.lang.Number

---

##### `fromDatabaseInput`<sup>Optional</sup> <a name="fromDatabaseInput" id="@cdktf/provider-snowflake.database.Database.property.fromDatabaseInput"></a>

```java
public java.lang.String getFromDatabaseInput();
```

- *Type:* java.lang.String

---

##### `fromReplicaInput`<sup>Optional</sup> <a name="fromReplicaInput" id="@cdktf/provider-snowflake.database.Database.property.fromReplicaInput"></a>

```java
public java.lang.String getFromReplicaInput();
```

- *Type:* java.lang.String

---

##### `fromShareInput`<sup>Optional</sup> <a name="fromShareInput" id="@cdktf/provider-snowflake.database.Database.property.fromShareInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFromShareInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.database.Database.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isTransientInput`<sup>Optional</sup> <a name="isTransientInput" id="@cdktf/provider-snowflake.database.Database.property.isTransientInput"></a>

```java
public java.lang.Object getIsTransientInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.database.Database.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `replicationConfigurationInput`<sup>Optional</sup> <a name="replicationConfigurationInput" id="@cdktf/provider-snowflake.database.Database.property.replicationConfigurationInput"></a>

```java
public DatabaseReplicationConfiguration getReplicationConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration">DatabaseReplicationConfiguration</a>

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-snowflake.database.Database.property.tagInput"></a>

```java
public java.lang.Object getTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.database.DatabaseTag">DatabaseTag</a>>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.database.Database.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDays"></a>

```java
public java.lang.Number getDataRetentionTimeInDays();
```

- *Type:* java.lang.Number

---

##### `fromDatabase`<sup>Required</sup> <a name="fromDatabase" id="@cdktf/provider-snowflake.database.Database.property.fromDatabase"></a>

```java
public java.lang.String getFromDatabase();
```

- *Type:* java.lang.String

---

##### `fromReplica`<sup>Required</sup> <a name="fromReplica" id="@cdktf/provider-snowflake.database.Database.property.fromReplica"></a>

```java
public java.lang.String getFromReplica();
```

- *Type:* java.lang.String

---

##### `fromShare`<sup>Required</sup> <a name="fromShare" id="@cdktf/provider-snowflake.database.Database.property.fromShare"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFromShare();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isTransient`<sup>Required</sup> <a name="isTransient" id="@cdktf/provider-snowflake.database.Database.property.isTransient"></a>

```java
public java.lang.Object getIsTransient();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.database.Database.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.database.Database.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseConfig <a name="DatabaseConfig" id="@cdktf/provider-snowflake.database.DatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.DatabaseConfig;

DatabaseConfig.builder()
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
    .name(java.lang.String)
//  .comment(java.lang.String)
//  .dataRetentionTimeInDays(java.lang.Number)
//  .fromDatabase(java.lang.String)
//  .fromReplica(java.lang.String)
//  .fromShare(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isTransient(java.lang.Boolean)
//  .isTransient(IResolvable)
//  .replicationConfiguration(DatabaseReplicationConfiguration)
//  .tag(IResolvable)
//  .tag(java.util.List<DatabaseTag>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#name Database#name}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#comment Database#comment}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.fromDatabase">fromDatabase</a></code> | <code>java.lang.String</code> | Specify a database to create a clone from. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.fromReplica">fromReplica</a></code> | <code>java.lang.String</code> | Specify a fully-qualified path to a database to create a replica from. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.fromShare">fromShare</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specify a provider and a share in this map to create a database from a share. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#id Database#id}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.isTransient">isTransient</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies a database as transient. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration">DatabaseReplicationConfiguration</a></code> | replication_configuration block. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.tag">tag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.database.DatabaseTag">DatabaseTag</a>></code> | tag block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#name Database#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#comment Database#comment}.

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.dataRetentionTimeInDays"></a>

```java
public java.lang.Number getDataRetentionTimeInDays();
```

- *Type:* java.lang.Number

Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object.

A value of 0 effectively disables Time Travel for the specified database, schema, or table. For more information, see Understanding & Using Time Travel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#data_retention_time_in_days Database#data_retention_time_in_days}

---

##### `fromDatabase`<sup>Optional</sup> <a name="fromDatabase" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.fromDatabase"></a>

```java
public java.lang.String getFromDatabase();
```

- *Type:* java.lang.String

Specify a database to create a clone from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#from_database Database#from_database}

---

##### `fromReplica`<sup>Optional</sup> <a name="fromReplica" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.fromReplica"></a>

```java
public java.lang.String getFromReplica();
```

- *Type:* java.lang.String

Specify a fully-qualified path to a database to create a replica from.

A fully qualified path follows the format of "<organization_name>"."<account_name>"."<db_name>". An example would be: "myorg1"."account1"."db1"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#from_replica Database#from_replica}

---

##### `fromShare`<sup>Optional</sup> <a name="fromShare" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.fromShare"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFromShare();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specify a provider and a share in this map to create a database from a share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#from_share Database#from_share}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTransient`<sup>Optional</sup> <a name="isTransient" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.isTransient"></a>

```java
public java.lang.Object getIsTransient();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies a database as transient.

Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#is_transient Database#is_transient}

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.replicationConfiguration"></a>

```java
public DatabaseReplicationConfiguration getReplicationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration">DatabaseReplicationConfiguration</a>

replication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#replication_configuration Database#replication_configuration}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.tag"></a>

```java
public java.lang.Object getTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.database.DatabaseTag">DatabaseTag</a>>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#tag Database#tag}

---

### DatabaseReplicationConfiguration <a name="DatabaseReplicationConfiguration" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.DatabaseReplicationConfiguration;

DatabaseReplicationConfiguration.builder()
    .accounts(java.util.List<java.lang.String>)
//  .ignoreEditionCheck(java.lang.Boolean)
//  .ignoreEditionCheck(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration.property.accounts">accounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#accounts Database#accounts}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#ignore_edition_check Database#ignore_edition_check}. |

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration.property.accounts"></a>

```java
public java.util.List<java.lang.String> getAccounts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#accounts Database#accounts}.

---

##### `ignoreEditionCheck`<sup>Optional</sup> <a name="ignoreEditionCheck" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration.property.ignoreEditionCheck"></a>

```java
public java.lang.Object getIgnoreEditionCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#ignore_edition_check Database#ignore_edition_check}.

---

### DatabaseTag <a name="DatabaseTag" id="@cdktf/provider-snowflake.database.DatabaseTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.DatabaseTag;

DatabaseTag.builder()
    .name(java.lang.String)
    .value(java.lang.String)
//  .database(java.lang.String)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTag.property.name">name</a></code> | <code>java.lang.String</code> | Tag name, e.g. department. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTag.property.value">value</a></code> | <code>java.lang.String</code> | Tag value, e.g. marketing_info. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTag.property.database">database</a></code> | <code>java.lang.String</code> | Name of the database that the tag was created in. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTag.property.schema">schema</a></code> | <code>java.lang.String</code> | Name of the schema that the tag was created in. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.database.DatabaseTag.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Tag name, e.g. department.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#name Database#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.DatabaseTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Tag value, e.g. marketing_info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#value Database#value}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.database.DatabaseTag.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Name of the database that the tag was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#database Database#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.database.DatabaseTag.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Name of the schema that the tag was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/database#schema Database#schema}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseReplicationConfigurationOutputReference <a name="DatabaseReplicationConfigurationOutputReference" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.DatabaseReplicationConfigurationOutputReference;

new DatabaseReplicationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.resetIgnoreEditionCheck">resetIgnoreEditionCheck</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreEditionCheck` <a name="resetIgnoreEditionCheck" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.resetIgnoreEditionCheck"></a>

```java
public void resetIgnoreEditionCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.accountsInput">accountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.ignoreEditionCheckInput">ignoreEditionCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.accounts">accounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration">DatabaseReplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountsInput`<sup>Optional</sup> <a name="accountsInput" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.accountsInput"></a>

```java
public java.util.List<java.lang.String> getAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ignoreEditionCheckInput`<sup>Optional</sup> <a name="ignoreEditionCheckInput" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.ignoreEditionCheckInput"></a>

```java
public java.lang.Object getIgnoreEditionCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.accounts"></a>

```java
public java.util.List<java.lang.String> getAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ignoreEditionCheck`<sup>Required</sup> <a name="ignoreEditionCheck" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.ignoreEditionCheck"></a>

```java
public java.lang.Object getIgnoreEditionCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.internalValue"></a>

```java
public DatabaseReplicationConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration">DatabaseReplicationConfiguration</a>

---


### DatabaseTagList <a name="DatabaseTagList" id="@cdktf/provider-snowflake.database.DatabaseTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.DatabaseTagList;

new DatabaseTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.database.DatabaseTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.database.DatabaseTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.database.DatabaseTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.database.DatabaseTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.database.DatabaseTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.database.DatabaseTagList.get"></a>

```java
public DatabaseTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.database.DatabaseTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.database.DatabaseTag">DatabaseTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.database.DatabaseTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.DatabaseTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.database.DatabaseTagList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.database.DatabaseTag">DatabaseTag</a>>

---


### DatabaseTagOutputReference <a name="DatabaseTagOutputReference" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.DatabaseTagOutputReference;

new DatabaseTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseTag">DatabaseTag</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.database.DatabaseTagOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseTag">DatabaseTag</a> OR com.hashicorp.cdktf.IResolvable

---



