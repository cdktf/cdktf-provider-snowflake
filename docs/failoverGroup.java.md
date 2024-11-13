# `failoverGroup` Submodule <a name="`failoverGroup` Submodule" id="@cdktf/provider-snowflake.failoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FailoverGroup <a name="FailoverGroup" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group snowflake_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.failover_group.FailoverGroup;

FailoverGroup.Builder.create(Construct scope, java.lang.String id)
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
//  .allowedAccounts(java.util.List<java.lang.String>)
//  .allowedDatabases(java.util.List<java.lang.String>)
//  .allowedIntegrationTypes(java.util.List<java.lang.String>)
//  .allowedShares(java.util.List<java.lang.String>)
//  .fromReplica(FailoverGroupFromReplica)
//  .id(java.lang.String)
//  .ignoreEditionCheck(java.lang.Boolean)
//  .ignoreEditionCheck(IResolvable)
//  .objectTypes(java.util.List<java.lang.String>)
//  .replicationSchedule(FailoverGroupReplicationSchedule)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the failover group. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedAccounts">allowedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the target account or list of target accounts to which replication and failover of specified objects from the source account is enabled. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedDatabases">allowedDatabases</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the database or list of databases for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedIntegrationTypes">allowedIntegrationTypes</a></code> | <code>java.util.List<java.lang.String></code> | Type(s) of integrations for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedShares">allowedShares</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the share or list of shares for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.fromReplica">fromReplica</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | from_replica block. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#id FailoverGroup#id}. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows replicating objects to accounts on lower editions. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.objectTypes">objectTypes</a></code> | <code>java.util.List<java.lang.String></code> | Type(s) of objects for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.replicationSchedule">replicationSchedule</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | replication_schedule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the failover group.

The identifier must start with an alphabetic character and cannot contain spaces or special characters unless the identifier string is enclosed in double quotes (e.g. "My object"). Identifiers enclosed in double quotes are also case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#name FailoverGroup#name}

---

##### `allowedAccounts`<sup>Optional</sup> <a name="allowedAccounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedAccounts"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the target account or list of target accounts to which replication and failover of specified objects from the source account is enabled.

Secondary failover groups in the target accounts in this list can be promoted to serve as the primary failover group in case of failover. Expected in the form <org_name>.<target_account_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#allowed_accounts FailoverGroup#allowed_accounts}

---

##### `allowedDatabases`<sup>Optional</sup> <a name="allowedDatabases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedDatabases"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the database or list of databases for which you are enabling replication and failover from the source account to the target account.

The OBJECT_TYPES list must include DATABASES to set this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#allowed_databases FailoverGroup#allowed_databases}

---

##### `allowedIntegrationTypes`<sup>Optional</sup> <a name="allowedIntegrationTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedIntegrationTypes"></a>

- *Type:* java.util.List<java.lang.String>

Type(s) of integrations for which you are enabling replication and failover from the source account to the target account.

This property requires that the OBJECT_TYPES list include INTEGRATIONS to set this parameter. The following integration types are supported: "SECURITY INTEGRATIONS", "API INTEGRATIONS", "STORAGE INTEGRATIONS", "EXTERNAL ACCESS INTEGRATIONS", "NOTIFICATION INTEGRATIONS"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#allowed_integration_types FailoverGroup#allowed_integration_types}

---

##### `allowedShares`<sup>Optional</sup> <a name="allowedShares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedShares"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the share or list of shares for which you are enabling replication and failover from the source account to the target account.

The OBJECT_TYPES list must include SHARES to set this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#allowed_shares FailoverGroup#allowed_shares}

---

##### `fromReplica`<sup>Optional</sup> <a name="fromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.fromReplica"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

from_replica block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#from_replica FailoverGroup#from_replica}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#id FailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreEditionCheck`<sup>Optional</sup> <a name="ignoreEditionCheck" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.ignoreEditionCheck"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows replicating objects to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#ignore_edition_check FailoverGroup#ignore_edition_check}

---

##### `objectTypes`<sup>Optional</sup> <a name="objectTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.objectTypes"></a>

- *Type:* java.util.List<java.lang.String>

Type(s) of objects for which you are enabling replication and failover from the source account to the target account.

The following object types are supported: "ACCOUNT PARAMETERS", "DATABASES", "INTEGRATIONS", "NETWORK POLICIES", "RESOURCE MONITORS", "ROLES", "SHARES", "USERS", "WAREHOUSES"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#object_types FailoverGroup#object_types}

---

##### `replicationSchedule`<sup>Optional</sup> <a name="replicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.replicationSchedule"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

replication_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#replication_schedule FailoverGroup#replication_schedule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica">putFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putReplicationSchedule">putReplicationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedAccounts">resetAllowedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases">resetAllowedDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes">resetAllowedIntegrationTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares">resetAllowedShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetFromReplica">resetFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck">resetIgnoreEditionCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetObjectTypes">resetObjectTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule">resetReplicationSchedule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFromReplica` <a name="putFromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica"></a>

```java
public void putFromReplica(FailoverGroupFromReplica value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

---

##### `putReplicationSchedule` <a name="putReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putReplicationSchedule"></a>

```java
public void putReplicationSchedule(FailoverGroupReplicationSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putReplicationSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

---

##### `resetAllowedAccounts` <a name="resetAllowedAccounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedAccounts"></a>

```java
public void resetAllowedAccounts()
```

##### `resetAllowedDatabases` <a name="resetAllowedDatabases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases"></a>

```java
public void resetAllowedDatabases()
```

##### `resetAllowedIntegrationTypes` <a name="resetAllowedIntegrationTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes"></a>

```java
public void resetAllowedIntegrationTypes()
```

##### `resetAllowedShares` <a name="resetAllowedShares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares"></a>

```java
public void resetAllowedShares()
```

##### `resetFromReplica` <a name="resetFromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetFromReplica"></a>

```java
public void resetFromReplica()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreEditionCheck` <a name="resetIgnoreEditionCheck" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck"></a>

```java
public void resetIgnoreEditionCheck()
```

##### `resetObjectTypes` <a name="resetObjectTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetObjectTypes"></a>

```java
public void resetObjectTypes()
```

##### `resetReplicationSchedule` <a name="resetReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule"></a>

```java
public void resetReplicationSchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FailoverGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.failover_group.FailoverGroup;

FailoverGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.failover_group.FailoverGroup;

FailoverGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.failover_group.FailoverGroup;

FailoverGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.failover_group.FailoverGroup;

FailoverGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FailoverGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FailoverGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FailoverGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplica">fromReplica</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference">FailoverGroupFromReplicaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule">replicationSchedule</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference">FailoverGroupReplicationScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput">allowedAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput">allowedDatabasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput">allowedIntegrationTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput">allowedSharesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplicaInput">fromReplicaInput</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput">ignoreEditionCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput">objectTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput">replicationScheduleInput</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts">allowedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases">allowedDatabases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes">allowedIntegrationTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares">allowedShares</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes">objectTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fromReplica`<sup>Required</sup> <a name="fromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplica"></a>

```java
public FailoverGroupFromReplicaOutputReference getFromReplica();
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference">FailoverGroupFromReplicaOutputReference</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule"></a>

```java
public FailoverGroupReplicationScheduleOutputReference getReplicationSchedule();
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference">FailoverGroupReplicationScheduleOutputReference</a>

---

##### `allowedAccountsInput`<sup>Optional</sup> <a name="allowedAccountsInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedDatabasesInput`<sup>Optional</sup> <a name="allowedDatabasesInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedDatabasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIntegrationTypesInput`<sup>Optional</sup> <a name="allowedIntegrationTypesInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIntegrationTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedSharesInput`<sup>Optional</sup> <a name="allowedSharesInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedSharesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fromReplicaInput`<sup>Optional</sup> <a name="fromReplicaInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplicaInput"></a>

```java
public FailoverGroupFromReplica getFromReplicaInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreEditionCheckInput`<sup>Optional</sup> <a name="ignoreEditionCheckInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput"></a>

```java
public java.lang.Object getIgnoreEditionCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `objectTypesInput`<sup>Optional</sup> <a name="objectTypesInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput"></a>

```java
public java.util.List<java.lang.String> getObjectTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `replicationScheduleInput`<sup>Optional</sup> <a name="replicationScheduleInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput"></a>

```java
public FailoverGroupReplicationSchedule getReplicationScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

---

##### `allowedAccounts`<sup>Required</sup> <a name="allowedAccounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts"></a>

```java
public java.util.List<java.lang.String> getAllowedAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedDatabases`<sup>Required</sup> <a name="allowedDatabases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases"></a>

```java
public java.util.List<java.lang.String> getAllowedDatabases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIntegrationTypes`<sup>Required</sup> <a name="allowedIntegrationTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedIntegrationTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedShares`<sup>Required</sup> <a name="allowedShares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares"></a>

```java
public java.util.List<java.lang.String> getAllowedShares();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreEditionCheck`<sup>Required</sup> <a name="ignoreEditionCheck" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck"></a>

```java
public java.lang.Object getIgnoreEditionCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `objectTypes`<sup>Required</sup> <a name="objectTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes"></a>

```java
public java.util.List<java.lang.String> getObjectTypes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FailoverGroupConfig <a name="FailoverGroupConfig" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.failover_group.FailoverGroupConfig;

FailoverGroupConfig.builder()
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
//  .allowedAccounts(java.util.List<java.lang.String>)
//  .allowedDatabases(java.util.List<java.lang.String>)
//  .allowedIntegrationTypes(java.util.List<java.lang.String>)
//  .allowedShares(java.util.List<java.lang.String>)
//  .fromReplica(FailoverGroupFromReplica)
//  .id(java.lang.String)
//  .ignoreEditionCheck(java.lang.Boolean)
//  .ignoreEditionCheck(IResolvable)
//  .objectTypes(java.util.List<java.lang.String>)
//  .replicationSchedule(FailoverGroupReplicationSchedule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the failover group. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts">allowedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the target account or list of target accounts to which replication and failover of specified objects from the source account is enabled. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases">allowedDatabases</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the database or list of databases for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes">allowedIntegrationTypes</a></code> | <code>java.util.List<java.lang.String></code> | Type(s) of integrations for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares">allowedShares</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the share or list of shares for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.fromReplica">fromReplica</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | from_replica block. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#id FailoverGroup#id}. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows replicating objects to accounts on lower editions. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes">objectTypes</a></code> | <code>java.util.List<java.lang.String></code> | Type(s) of objects for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule">replicationSchedule</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | replication_schedule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the failover group.

The identifier must start with an alphabetic character and cannot contain spaces or special characters unless the identifier string is enclosed in double quotes (e.g. "My object"). Identifiers enclosed in double quotes are also case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#name FailoverGroup#name}

---

##### `allowedAccounts`<sup>Optional</sup> <a name="allowedAccounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts"></a>

```java
public java.util.List<java.lang.String> getAllowedAccounts();
```

- *Type:* java.util.List<java.lang.String>

Specifies the target account or list of target accounts to which replication and failover of specified objects from the source account is enabled.

Secondary failover groups in the target accounts in this list can be promoted to serve as the primary failover group in case of failover. Expected in the form <org_name>.<target_account_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#allowed_accounts FailoverGroup#allowed_accounts}

---

##### `allowedDatabases`<sup>Optional</sup> <a name="allowedDatabases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases"></a>

```java
public java.util.List<java.lang.String> getAllowedDatabases();
```

- *Type:* java.util.List<java.lang.String>

Specifies the database or list of databases for which you are enabling replication and failover from the source account to the target account.

The OBJECT_TYPES list must include DATABASES to set this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#allowed_databases FailoverGroup#allowed_databases}

---

##### `allowedIntegrationTypes`<sup>Optional</sup> <a name="allowedIntegrationTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedIntegrationTypes();
```

- *Type:* java.util.List<java.lang.String>

Type(s) of integrations for which you are enabling replication and failover from the source account to the target account.

This property requires that the OBJECT_TYPES list include INTEGRATIONS to set this parameter. The following integration types are supported: "SECURITY INTEGRATIONS", "API INTEGRATIONS", "STORAGE INTEGRATIONS", "EXTERNAL ACCESS INTEGRATIONS", "NOTIFICATION INTEGRATIONS"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#allowed_integration_types FailoverGroup#allowed_integration_types}

---

##### `allowedShares`<sup>Optional</sup> <a name="allowedShares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares"></a>

```java
public java.util.List<java.lang.String> getAllowedShares();
```

- *Type:* java.util.List<java.lang.String>

Specifies the share or list of shares for which you are enabling replication and failover from the source account to the target account.

The OBJECT_TYPES list must include SHARES to set this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#allowed_shares FailoverGroup#allowed_shares}

---

##### `fromReplica`<sup>Optional</sup> <a name="fromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.fromReplica"></a>

```java
public FailoverGroupFromReplica getFromReplica();
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

from_replica block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#from_replica FailoverGroup#from_replica}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#id FailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreEditionCheck`<sup>Optional</sup> <a name="ignoreEditionCheck" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck"></a>

```java
public java.lang.Object getIgnoreEditionCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows replicating objects to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#ignore_edition_check FailoverGroup#ignore_edition_check}

---

##### `objectTypes`<sup>Optional</sup> <a name="objectTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes"></a>

```java
public java.util.List<java.lang.String> getObjectTypes();
```

- *Type:* java.util.List<java.lang.String>

Type(s) of objects for which you are enabling replication and failover from the source account to the target account.

The following object types are supported: "ACCOUNT PARAMETERS", "DATABASES", "INTEGRATIONS", "NETWORK POLICIES", "RESOURCE MONITORS", "ROLES", "SHARES", "USERS", "WAREHOUSES"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#object_types FailoverGroup#object_types}

---

##### `replicationSchedule`<sup>Optional</sup> <a name="replicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule"></a>

```java
public FailoverGroupReplicationSchedule getReplicationSchedule();
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

replication_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#replication_schedule FailoverGroup#replication_schedule}

---

### FailoverGroupFromReplica <a name="FailoverGroupFromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.failover_group.FailoverGroupFromReplica;

FailoverGroupFromReplica.builder()
    .name(java.lang.String)
    .organizationName(java.lang.String)
    .sourceAccountName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.name">name</a></code> | <code>java.lang.String</code> | Identifier for the primary failover group in the source account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | Name of your Snowflake organization. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.sourceAccountName">sourceAccountName</a></code> | <code>java.lang.String</code> | Source account from which you are enabling replication and failover of the specified objects. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Identifier for the primary failover group in the source account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#name FailoverGroup#name}

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

Name of your Snowflake organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#organization_name FailoverGroup#organization_name}

---

##### `sourceAccountName`<sup>Required</sup> <a name="sourceAccountName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.sourceAccountName"></a>

```java
public java.lang.String getSourceAccountName();
```

- *Type:* java.lang.String

Source account from which you are enabling replication and failover of the specified objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#source_account_name FailoverGroup#source_account_name}

---

### FailoverGroupReplicationSchedule <a name="FailoverGroupReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.failover_group.FailoverGroupReplicationSchedule;

FailoverGroupReplicationSchedule.builder()
//  .cron(FailoverGroupReplicationScheduleCron)
//  .interval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.cron">cron</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a></code> | cron block. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.interval">interval</a></code> | <code>java.lang.Number</code> | Specifies the interval in minutes for the replication schedule. |

---

##### `cron`<sup>Optional</sup> <a name="cron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.cron"></a>

```java
public FailoverGroupReplicationScheduleCron getCron();
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

cron block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#cron FailoverGroup#cron}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Specifies the interval in minutes for the replication schedule.

The interval must be greater than 0 and less than 1440 (24 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#interval FailoverGroup#interval}

---

### FailoverGroupReplicationScheduleCron <a name="FailoverGroupReplicationScheduleCron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.failover_group.FailoverGroupReplicationScheduleCron;

FailoverGroupReplicationScheduleCron.builder()
    .expression(java.lang.String)
    .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.expression">expression</a></code> | <code>java.lang.String</code> | Specifies the cron expression for the replication schedule. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Specifies the time zone for secondary group refresh. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Specifies the cron expression for the replication schedule.

The cron expression must be in the following format: "minute hour day-of-month month day-of-week". The following values are supported: minute: 0-59 hour: 0-23 day-of-month: 1-31 month: 1-12 day-of-week: 0-6 (0 is Sunday)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#expression FailoverGroup#expression}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Specifies the time zone for secondary group refresh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/failover_group#time_zone FailoverGroup#time_zone}

---

## Classes <a name="Classes" id="Classes"></a>

### FailoverGroupFromReplicaOutputReference <a name="FailoverGroupFromReplicaOutputReference" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.failover_group.FailoverGroupFromReplicaOutputReference;

new FailoverGroupFromReplicaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountNameInput">sourceAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountName">sourceAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationNameInput"></a>

```java
public java.lang.String getOrganizationNameInput();
```

- *Type:* java.lang.String

---

##### `sourceAccountNameInput`<sup>Optional</sup> <a name="sourceAccountNameInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountNameInput"></a>

```java
public java.lang.String getSourceAccountNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `sourceAccountName`<sup>Required</sup> <a name="sourceAccountName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountName"></a>

```java
public java.lang.String getSourceAccountName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.internalValue"></a>

```java
public FailoverGroupFromReplica getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

---


### FailoverGroupReplicationScheduleCronOutputReference <a name="FailoverGroupReplicationScheduleCronOutputReference" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.failover_group.FailoverGroupReplicationScheduleCronOutputReference;

new FailoverGroupReplicationScheduleCronOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.internalValue"></a>

```java
public FailoverGroupReplicationScheduleCron getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

---


### FailoverGroupReplicationScheduleOutputReference <a name="FailoverGroupReplicationScheduleOutputReference" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.failover_group.FailoverGroupReplicationScheduleOutputReference;

new FailoverGroupReplicationScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.putCron">putCron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetCron">resetCron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetInterval">resetInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCron` <a name="putCron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.putCron"></a>

```java
public void putCron(FailoverGroupReplicationScheduleCron value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.putCron.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

---

##### `resetCron` <a name="resetCron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetCron"></a>

```java
public void resetCron()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetInterval"></a>

```java
public void resetInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cron">cron</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference">FailoverGroupReplicationScheduleCronOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cronInput">cronInput</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cron"></a>

```java
public FailoverGroupReplicationScheduleCronOutputReference getCron();
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference">FailoverGroupReplicationScheduleCronOutputReference</a>

---

##### `cronInput`<sup>Optional</sup> <a name="cronInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cronInput"></a>

```java
public FailoverGroupReplicationScheduleCron getCronInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.internalValue"></a>

```java
public FailoverGroupReplicationSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

---



