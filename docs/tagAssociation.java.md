# `tagAssociation` Submodule <a name="`tagAssociation` Submodule" id="@cdktf/provider-snowflake.tagAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagAssociation <a name="TagAssociation" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association snowflake_tag_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.tag_association.TagAssociation;

TagAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .objectIdentifiers(java.util.List<java.lang.String>)
    .objectType(java.lang.String)
    .tagId(java.lang.String)
    .tagValue(java.lang.String)
//  .id(java.lang.String)
//  .skipValidation(java.lang.Boolean|IResolvable)
//  .timeouts(TagAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.objectIdentifiers">objectIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the object identifiers for the tag association. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.objectType">objectType</a></code> | <code>java.lang.String</code> | Specifies the type of object to add a tag. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.tagId">tagId</a></code> | <code>java.lang.String</code> | Specifies the identifier for the tag. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specifies the value of the tag, (e.g. 'finance' or 'engineering'). |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#id TagAssociation#id}. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.skipValidation">skipValidation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | (Default: `true`) If true, skips validation of the tag association. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts">TagAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `objectIdentifiers`<sup>Required</sup> <a name="objectIdentifiers" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.objectIdentifiers"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the object identifiers for the tag association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#object_identifiers TagAssociation#object_identifiers}

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.objectType"></a>

- *Type:* java.lang.String

Specifies the type of object to add a tag.

Allowed object types: `ACCOUNT` | `APPLICATION` | `APPLICATION PACKAGE` | `COMPUTE POOL` | `DATABASE` | `FAILOVER GROUP` | `INTEGRATION` | `NETWORK POLICY` | `REPLICATION GROUP` | `ROLE` | `SHARE` | `USER` | `WAREHOUSE` | `DATABASE ROLE` | `SCHEMA` | `ALERT` | `SNOWFLAKE.CORE.BUDGET` | `SNOWFLAKE.ML.CLASSIFICATION` | `EXTERNAL FUNCTION` | `EXTERNAL TABLE` | `FUNCTION` | `IMAGE REPOSITORY` | `GIT REPOSITORY` | `ICEBERG TABLE` | `MATERIALIZED VIEW` | `PIPE` | `MASKING POLICY` | `PASSWORD POLICY` | `ROW ACCESS POLICY` | `SESSION POLICY` | `PRIVACY POLICY` | `PROCEDURE` | `SERVICE` | `STAGE` | `STREAM` | `TABLE` | `TASK` | `VIEW` | `COLUMN` | `EVENT TABLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#object_type TagAssociation#object_type}

---

##### `tagId`<sup>Required</sup> <a name="tagId" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.tagId"></a>

- *Type:* java.lang.String

Specifies the identifier for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#tag_id TagAssociation#tag_id}

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.tagValue"></a>

- *Type:* java.lang.String

Specifies the value of the tag, (e.g. 'finance' or 'engineering').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#tag_value TagAssociation#tag_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#id TagAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `skipValidation`<sup>Optional</sup> <a name="skipValidation" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.skipValidation"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

(Default: `true`) If true, skips validation of the tag association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#skip_validation TagAssociation#skip_validation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts">TagAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#timeouts TagAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.resetSkipValidation">resetSkipValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.putTimeouts"></a>

```java
public void putTimeouts(TagAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts">TagAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetSkipValidation` <a name="resetSkipValidation" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.resetSkipValidation"></a>

```java
public void resetSkipValidation()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TagAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.tag_association.TagAssociation;

TagAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.tag_association.TagAssociation;

TagAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.tag_association.TagAssociation;

TagAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.tag_association.TagAssociation;

TagAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TagAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TagAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TagAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TagAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TagAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference">TagAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.objectIdentifiersInput">objectIdentifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.objectTypeInput">objectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.skipValidationInput">skipValidationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.tagIdInput">tagIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts">TagAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.objectIdentifiers">objectIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.skipValidation">skipValidation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.tagId">tagId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.timeouts"></a>

```java
public TagAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference">TagAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `objectIdentifiersInput`<sup>Optional</sup> <a name="objectIdentifiersInput" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.objectIdentifiersInput"></a>

```java
public java.util.List<java.lang.String> getObjectIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.objectTypeInput"></a>

```java
public java.lang.String getObjectTypeInput();
```

- *Type:* java.lang.String

---

##### `skipValidationInput`<sup>Optional</sup> <a name="skipValidationInput" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.skipValidationInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipValidationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tagIdInput`<sup>Optional</sup> <a name="tagIdInput" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.tagIdInput"></a>

```java
public java.lang.String getTagIdInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.timeoutsInput"></a>

```java
public IResolvable|TagAssociationTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts">TagAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `objectIdentifiers`<sup>Required</sup> <a name="objectIdentifiers" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.objectIdentifiers"></a>

```java
public java.util.List<java.lang.String> getObjectIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `skipValidation`<sup>Required</sup> <a name="skipValidation" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.skipValidation"></a>

```java
public java.lang.Boolean|IResolvable getSkipValidation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tagId`<sup>Required</sup> <a name="tagId" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.tagId"></a>

```java
public java.lang.String getTagId();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.tagAssociation.TagAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TagAssociationConfig <a name="TagAssociationConfig" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.tag_association.TagAssociationConfig;

TagAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .objectIdentifiers(java.util.List<java.lang.String>)
    .objectType(java.lang.String)
    .tagId(java.lang.String)
    .tagValue(java.lang.String)
//  .id(java.lang.String)
//  .skipValidation(java.lang.Boolean|IResolvable)
//  .timeouts(TagAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.objectIdentifiers">objectIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the object identifiers for the tag association. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.objectType">objectType</a></code> | <code>java.lang.String</code> | Specifies the type of object to add a tag. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.tagId">tagId</a></code> | <code>java.lang.String</code> | Specifies the identifier for the tag. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specifies the value of the tag, (e.g. 'finance' or 'engineering'). |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#id TagAssociation#id}. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.skipValidation">skipValidation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | (Default: `true`) If true, skips validation of the tag association. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts">TagAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `objectIdentifiers`<sup>Required</sup> <a name="objectIdentifiers" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.objectIdentifiers"></a>

```java
public java.util.List<java.lang.String> getObjectIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

Specifies the object identifiers for the tag association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#object_identifiers TagAssociation#object_identifiers}

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

Specifies the type of object to add a tag.

Allowed object types: `ACCOUNT` | `APPLICATION` | `APPLICATION PACKAGE` | `COMPUTE POOL` | `DATABASE` | `FAILOVER GROUP` | `INTEGRATION` | `NETWORK POLICY` | `REPLICATION GROUP` | `ROLE` | `SHARE` | `USER` | `WAREHOUSE` | `DATABASE ROLE` | `SCHEMA` | `ALERT` | `SNOWFLAKE.CORE.BUDGET` | `SNOWFLAKE.ML.CLASSIFICATION` | `EXTERNAL FUNCTION` | `EXTERNAL TABLE` | `FUNCTION` | `IMAGE REPOSITORY` | `GIT REPOSITORY` | `ICEBERG TABLE` | `MATERIALIZED VIEW` | `PIPE` | `MASKING POLICY` | `PASSWORD POLICY` | `ROW ACCESS POLICY` | `SESSION POLICY` | `PRIVACY POLICY` | `PROCEDURE` | `SERVICE` | `STAGE` | `STREAM` | `TABLE` | `TASK` | `VIEW` | `COLUMN` | `EVENT TABLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#object_type TagAssociation#object_type}

---

##### `tagId`<sup>Required</sup> <a name="tagId" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.tagId"></a>

```java
public java.lang.String getTagId();
```

- *Type:* java.lang.String

Specifies the identifier for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#tag_id TagAssociation#tag_id}

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specifies the value of the tag, (e.g. 'finance' or 'engineering').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#tag_value TagAssociation#tag_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#id TagAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `skipValidation`<sup>Optional</sup> <a name="skipValidation" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.skipValidation"></a>

```java
public java.lang.Boolean|IResolvable getSkipValidation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

(Default: `true`) If true, skips validation of the tag association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#skip_validation TagAssociation#skip_validation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationConfig.property.timeouts"></a>

```java
public TagAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts">TagAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#timeouts TagAssociation#timeouts}

---

### TagAssociationTimeouts <a name="TagAssociationTimeouts" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.tag_association.TagAssociationTimeouts;

TagAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#create TagAssociation#create}. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#delete TagAssociation#delete}. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#read TagAssociation#read}. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#update TagAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#create TagAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#delete TagAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#read TagAssociation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/tag_association#update TagAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TagAssociationTimeoutsOutputReference <a name="TagAssociationTimeoutsOutputReference" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.tag_association.TagAssociationTimeoutsOutputReference;

new TagAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts">TagAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|TagAssociationTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.tagAssociation.TagAssociationTimeouts">TagAssociationTimeouts</a>

---



