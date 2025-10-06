# `grantOwnership` Submodule <a name="`grantOwnership` Submodule" id="@cdktf/provider-snowflake.grantOwnership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantOwnership <a name="GrantOwnership" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership snowflake_grant_ownership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_ownership.GrantOwnership;

GrantOwnership.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .on(GrantOwnershipOn)
//  .accountRoleName(java.lang.String)
//  .databaseRoleName(java.lang.String)
//  .id(java.lang.String)
//  .outboundPrivileges(java.lang.String)
//  .timeouts(GrantOwnershipTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.on">on</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a></code> | on block. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.accountRoleName">accountRoleName</a></code> | <code>java.lang.String</code> | The fully qualified name of the account role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.databaseRoleName">databaseRoleName</a></code> | <code>java.lang.String</code> | The fully qualified name of the database role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#id GrantOwnership#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.outboundPrivileges">outboundPrivileges</a></code> | <code>java.lang.String</code> | Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts">GrantOwnershipTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.on"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#on GrantOwnership#on}

---

##### `accountRoleName`<sup>Optional</sup> <a name="accountRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.accountRoleName"></a>

- *Type:* java.lang.String

The fully qualified name of the account role to which privileges will be granted.

For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#account_role_name GrantOwnership#account_role_name}

---

##### `databaseRoleName`<sup>Optional</sup> <a name="databaseRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.databaseRoleName"></a>

- *Type:* java.lang.String

The fully qualified name of the database role to which privileges will be granted.

For more information about this resource, see [docs](./database_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#database_role_name GrantOwnership#database_role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#id GrantOwnership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outboundPrivileges`<sup>Optional</sup> <a name="outboundPrivileges" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.outboundPrivileges"></a>

- *Type:* java.lang.String

Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role.

Available options are: REVOKE for removing existing privileges and COPY to transfer them with ownership. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#optional-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#outbound_privileges GrantOwnership#outbound_privileges}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts">GrantOwnershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#timeouts GrantOwnership#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putOn">putOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetAccountRoleName">resetAccountRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetDatabaseRoleName">resetDatabaseRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetOutboundPrivileges">resetOutboundPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOn` <a name="putOn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putOn"></a>

```java
public void putOn(GrantOwnershipOn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putOn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putTimeouts"></a>

```java
public void putTimeouts(GrantOwnershipTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts">GrantOwnershipTimeouts</a>

---

##### `resetAccountRoleName` <a name="resetAccountRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetAccountRoleName"></a>

```java
public void resetAccountRoleName()
```

##### `resetDatabaseRoleName` <a name="resetDatabaseRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetDatabaseRoleName"></a>

```java
public void resetDatabaseRoleName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetId"></a>

```java
public void resetId()
```

##### `resetOutboundPrivileges` <a name="resetOutboundPrivileges" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetOutboundPrivileges"></a>

```java
public void resetOutboundPrivileges()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GrantOwnership resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_ownership.GrantOwnership;

GrantOwnership.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_ownership.GrantOwnership;

GrantOwnership.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_ownership.GrantOwnership;

GrantOwnership.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_ownership.GrantOwnership;

GrantOwnership.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GrantOwnership.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GrantOwnership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GrantOwnership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GrantOwnership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GrantOwnership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.on">on</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference">GrantOwnershipOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference">GrantOwnershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.accountRoleNameInput">accountRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.databaseRoleNameInput">databaseRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.onInput">onInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.outboundPrivilegesInput">outboundPrivilegesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts">GrantOwnershipTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.accountRoleName">accountRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.databaseRoleName">databaseRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.outboundPrivileges">outboundPrivileges</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.on"></a>

```java
public GrantOwnershipOnOutputReference getOn();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference">GrantOwnershipOnOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.timeouts"></a>

```java
public GrantOwnershipTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference">GrantOwnershipTimeoutsOutputReference</a>

---

##### `accountRoleNameInput`<sup>Optional</sup> <a name="accountRoleNameInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.accountRoleNameInput"></a>

```java
public java.lang.String getAccountRoleNameInput();
```

- *Type:* java.lang.String

---

##### `databaseRoleNameInput`<sup>Optional</sup> <a name="databaseRoleNameInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.databaseRoleNameInput"></a>

```java
public java.lang.String getDatabaseRoleNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `onInput`<sup>Optional</sup> <a name="onInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.onInput"></a>

```java
public GrantOwnershipOn getOnInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

---

##### `outboundPrivilegesInput`<sup>Optional</sup> <a name="outboundPrivilegesInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.outboundPrivilegesInput"></a>

```java
public java.lang.String getOutboundPrivilegesInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.timeoutsInput"></a>

```java
public IResolvable|GrantOwnershipTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts">GrantOwnershipTimeouts</a>

---

##### `accountRoleName`<sup>Required</sup> <a name="accountRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.accountRoleName"></a>

```java
public java.lang.String getAccountRoleName();
```

- *Type:* java.lang.String

---

##### `databaseRoleName`<sup>Required</sup> <a name="databaseRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.databaseRoleName"></a>

```java
public java.lang.String getDatabaseRoleName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `outboundPrivileges`<sup>Required</sup> <a name="outboundPrivileges" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.outboundPrivileges"></a>

```java
public java.lang.String getOutboundPrivileges();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GrantOwnershipConfig <a name="GrantOwnershipConfig" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_ownership.GrantOwnershipConfig;

GrantOwnershipConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .on(GrantOwnershipOn)
//  .accountRoleName(java.lang.String)
//  .databaseRoleName(java.lang.String)
//  .id(java.lang.String)
//  .outboundPrivileges(java.lang.String)
//  .timeouts(GrantOwnershipTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.on">on</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a></code> | on block. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.accountRoleName">accountRoleName</a></code> | <code>java.lang.String</code> | The fully qualified name of the account role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.databaseRoleName">databaseRoleName</a></code> | <code>java.lang.String</code> | The fully qualified name of the database role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#id GrantOwnership#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.outboundPrivileges">outboundPrivileges</a></code> | <code>java.lang.String</code> | Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts">GrantOwnershipTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.on"></a>

```java
public GrantOwnershipOn getOn();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#on GrantOwnership#on}

---

##### `accountRoleName`<sup>Optional</sup> <a name="accountRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.accountRoleName"></a>

```java
public java.lang.String getAccountRoleName();
```

- *Type:* java.lang.String

The fully qualified name of the account role to which privileges will be granted.

For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#account_role_name GrantOwnership#account_role_name}

---

##### `databaseRoleName`<sup>Optional</sup> <a name="databaseRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.databaseRoleName"></a>

```java
public java.lang.String getDatabaseRoleName();
```

- *Type:* java.lang.String

The fully qualified name of the database role to which privileges will be granted.

For more information about this resource, see [docs](./database_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#database_role_name GrantOwnership#database_role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#id GrantOwnership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outboundPrivileges`<sup>Optional</sup> <a name="outboundPrivileges" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.outboundPrivileges"></a>

```java
public java.lang.String getOutboundPrivileges();
```

- *Type:* java.lang.String

Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role.

Available options are: REVOKE for removing existing privileges and COPY to transfer them with ownership. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#optional-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#outbound_privileges GrantOwnership#outbound_privileges}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.timeouts"></a>

```java
public GrantOwnershipTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts">GrantOwnershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#timeouts GrantOwnership#timeouts}

---

### GrantOwnershipOn <a name="GrantOwnershipOn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_ownership.GrantOwnershipOn;

GrantOwnershipOn.builder()
//  .all(GrantOwnershipOnAll)
//  .future(GrantOwnershipOnFuture)
//  .objectName(java.lang.String)
//  .objectType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.all">all</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a></code> | all block. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.future">future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a></code> | future block. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.objectName">objectName</a></code> | <code>java.lang.String</code> | Specifies the identifier for the object on which you are transferring ownership. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.objectType">objectType</a></code> | <code>java.lang.String</code> | Specifies the type of object on which you are transferring ownership. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.all"></a>

```java
public GrantOwnershipOnAll getAll();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a>

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#all GrantOwnership#all}

---

##### `future`<sup>Optional</sup> <a name="future" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.future"></a>

```java
public GrantOwnershipOnFuture getFuture();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a>

future block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#future GrantOwnership#future}

---

##### `objectName`<sup>Optional</sup> <a name="objectName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.objectName"></a>

```java
public java.lang.String getObjectName();
```

- *Type:* java.lang.String

Specifies the identifier for the object on which you are transferring ownership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#object_name GrantOwnership#object_name}

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

Specifies the type of object on which you are transferring ownership.

Available values are: AGGREGATION POLICY | ALERT | AUTHENTICATION POLICY | COMPUTE POOL | DATA METRIC FUNCTION | DATABASE | DATABASE ROLE | DYNAMIC TABLE | EVENT TABLE | EXTERNAL TABLE | EXTERNAL VOLUME | FAILOVER GROUP | FILE FORMAT | FUNCTION | GIT REPOSITORY | HYBRID TABLE | ICEBERG TABLE | IMAGE REPOSITORY | INTEGRATION | MATERIALIZED VIEW | NETWORK POLICY | NETWORK RULE | PACKAGES POLICY | PIPE | PROCEDURE | MASKING POLICY | PASSWORD POLICY | PROJECTION POLICY | REPLICATION GROUP | RESOURCE MONITOR | ROLE | ROW ACCESS POLICY | SCHEMA | SESSION POLICY | SECRET | SEQUENCE | STAGE | STREAM | TABLE | TAG | TASK | USER | VIEW | WAREHOUSE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#object_type GrantOwnership#object_type}

---

### GrantOwnershipOnAll <a name="GrantOwnershipOnAll" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_ownership.GrantOwnershipOnAll;

GrantOwnershipOnAll.builder()
    .objectTypePlural(java.lang.String)
//  .inDatabase(java.lang.String)
//  .inSchema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.objectTypePlural">objectTypePlural</a></code> | <code>java.lang.String</code> | Specifies the type of object in plural form on which you are transferring ownership. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.inDatabase">inDatabase</a></code> | <code>java.lang.String</code> | The fully qualified name of the database. For more information about this resource, see [docs](./database). |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.inSchema">inSchema</a></code> | <code>java.lang.String</code> | The fully qualified name of the schema. For more information about this resource, see [docs](./schema). |

---

##### `objectTypePlural`<sup>Required</sup> <a name="objectTypePlural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.objectTypePlural"></a>

```java
public java.lang.String getObjectTypePlural();
```

- *Type:* java.lang.String

Specifies the type of object in plural form on which you are transferring ownership.

Available values are: AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | COMPUTE POOLS | DATA METRIC FUNCTIONS | DATABASES | DATABASE ROLES | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | EXTERNAL VOLUMES | FAILOVER GROUPS | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | ICEBERG TABLES | IMAGE REPOSITORIES | INTEGRATIONS | MATERIALIZED VIEWS | NETWORK POLICIES | NETWORK RULES | PACKAGES POLICIES | PIPES | PROCEDURES | MASKING POLICIES | PASSWORD POLICIES | PROJECTION POLICIES | REPLICATION GROUPS | RESOURCE MONITORS | ROLES | ROW ACCESS POLICIES | SCHEMAS | SESSION POLICIES | SECRETS | SEQUENCES | STAGES | STREAMS | TABLES | TAGS | TASKS | USERS | VIEWS | WAREHOUSES. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#required-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#object_type_plural GrantOwnership#object_type_plural}

---

##### `inDatabase`<sup>Optional</sup> <a name="inDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.inDatabase"></a>

```java
public java.lang.String getInDatabase();
```

- *Type:* java.lang.String

The fully qualified name of the database. For more information about this resource, see [docs](./database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#in_database GrantOwnership#in_database}

---

##### `inSchema`<sup>Optional</sup> <a name="inSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.inSchema"></a>

```java
public java.lang.String getInSchema();
```

- *Type:* java.lang.String

The fully qualified name of the schema. For more information about this resource, see [docs](./schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#in_schema GrantOwnership#in_schema}

---

### GrantOwnershipOnFuture <a name="GrantOwnershipOnFuture" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_ownership.GrantOwnershipOnFuture;

GrantOwnershipOnFuture.builder()
    .objectTypePlural(java.lang.String)
//  .inDatabase(java.lang.String)
//  .inSchema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.objectTypePlural">objectTypePlural</a></code> | <code>java.lang.String</code> | Specifies the type of object in plural form on which you are transferring ownership. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.inDatabase">inDatabase</a></code> | <code>java.lang.String</code> | The fully qualified name of the database. For more information about this resource, see [docs](./database). |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.inSchema">inSchema</a></code> | <code>java.lang.String</code> | The fully qualified name of the schema. For more information about this resource, see [docs](./schema). |

---

##### `objectTypePlural`<sup>Required</sup> <a name="objectTypePlural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.objectTypePlural"></a>

```java
public java.lang.String getObjectTypePlural();
```

- *Type:* java.lang.String

Specifies the type of object in plural form on which you are transferring ownership.

Available values are: AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | COMPUTE POOLS | DATA METRIC FUNCTIONS | DATABASES | DATABASE ROLES | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | EXTERNAL VOLUMES | FAILOVER GROUPS | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | ICEBERG TABLES | IMAGE REPOSITORIES | INTEGRATIONS | MATERIALIZED VIEWS | NETWORK POLICIES | NETWORK RULES | PACKAGES POLICIES | PIPES | PROCEDURES | MASKING POLICIES | PASSWORD POLICIES | PROJECTION POLICIES | REPLICATION GROUPS | RESOURCE MONITORS | ROLES | ROW ACCESS POLICIES | SCHEMAS | SESSION POLICIES | SECRETS | SEQUENCES | STAGES | STREAMS | TABLES | TAGS | TASKS | USERS | VIEWS | WAREHOUSES. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#required-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#object_type_plural GrantOwnership#object_type_plural}

---

##### `inDatabase`<sup>Optional</sup> <a name="inDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.inDatabase"></a>

```java
public java.lang.String getInDatabase();
```

- *Type:* java.lang.String

The fully qualified name of the database. For more information about this resource, see [docs](./database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#in_database GrantOwnership#in_database}

---

##### `inSchema`<sup>Optional</sup> <a name="inSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.inSchema"></a>

```java
public java.lang.String getInSchema();
```

- *Type:* java.lang.String

The fully qualified name of the schema. For more information about this resource, see [docs](./schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#in_schema GrantOwnership#in_schema}

---

### GrantOwnershipTimeouts <a name="GrantOwnershipTimeouts" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_ownership.GrantOwnershipTimeouts;

GrantOwnershipTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#create GrantOwnership#create}. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#delete GrantOwnership#delete}. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#read GrantOwnership#read}. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#update GrantOwnership#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#create GrantOwnership#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#delete GrantOwnership#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#read GrantOwnership#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#update GrantOwnership#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrantOwnershipOnAllOutputReference <a name="GrantOwnershipOnAllOutputReference" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_ownership.GrantOwnershipOnAllOutputReference;

new GrantOwnershipOnAllOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resetInDatabase">resetInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resetInSchema">resetInSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInDatabase` <a name="resetInDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resetInDatabase"></a>

```java
public void resetInDatabase()
```

##### `resetInSchema` <a name="resetInSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resetInSchema"></a>

```java
public void resetInSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inDatabaseInput">inDatabaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inSchemaInput">inSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.objectTypePluralInput">objectTypePluralInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inDatabase">inDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inSchema">inSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.objectTypePlural">objectTypePlural</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inDatabaseInput`<sup>Optional</sup> <a name="inDatabaseInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inDatabaseInput"></a>

```java
public java.lang.String getInDatabaseInput();
```

- *Type:* java.lang.String

---

##### `inSchemaInput`<sup>Optional</sup> <a name="inSchemaInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inSchemaInput"></a>

```java
public java.lang.String getInSchemaInput();
```

- *Type:* java.lang.String

---

##### `objectTypePluralInput`<sup>Optional</sup> <a name="objectTypePluralInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.objectTypePluralInput"></a>

```java
public java.lang.String getObjectTypePluralInput();
```

- *Type:* java.lang.String

---

##### `inDatabase`<sup>Required</sup> <a name="inDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inDatabase"></a>

```java
public java.lang.String getInDatabase();
```

- *Type:* java.lang.String

---

##### `inSchema`<sup>Required</sup> <a name="inSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inSchema"></a>

```java
public java.lang.String getInSchema();
```

- *Type:* java.lang.String

---

##### `objectTypePlural`<sup>Required</sup> <a name="objectTypePlural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.objectTypePlural"></a>

```java
public java.lang.String getObjectTypePlural();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.internalValue"></a>

```java
public GrantOwnershipOnAll getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a>

---


### GrantOwnershipOnFutureOutputReference <a name="GrantOwnershipOnFutureOutputReference" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_ownership.GrantOwnershipOnFutureOutputReference;

new GrantOwnershipOnFutureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resetInDatabase">resetInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resetInSchema">resetInSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInDatabase` <a name="resetInDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resetInDatabase"></a>

```java
public void resetInDatabase()
```

##### `resetInSchema` <a name="resetInSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resetInSchema"></a>

```java
public void resetInSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inDatabaseInput">inDatabaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inSchemaInput">inSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.objectTypePluralInput">objectTypePluralInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inDatabase">inDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inSchema">inSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.objectTypePlural">objectTypePlural</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inDatabaseInput`<sup>Optional</sup> <a name="inDatabaseInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inDatabaseInput"></a>

```java
public java.lang.String getInDatabaseInput();
```

- *Type:* java.lang.String

---

##### `inSchemaInput`<sup>Optional</sup> <a name="inSchemaInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inSchemaInput"></a>

```java
public java.lang.String getInSchemaInput();
```

- *Type:* java.lang.String

---

##### `objectTypePluralInput`<sup>Optional</sup> <a name="objectTypePluralInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.objectTypePluralInput"></a>

```java
public java.lang.String getObjectTypePluralInput();
```

- *Type:* java.lang.String

---

##### `inDatabase`<sup>Required</sup> <a name="inDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inDatabase"></a>

```java
public java.lang.String getInDatabase();
```

- *Type:* java.lang.String

---

##### `inSchema`<sup>Required</sup> <a name="inSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inSchema"></a>

```java
public java.lang.String getInSchema();
```

- *Type:* java.lang.String

---

##### `objectTypePlural`<sup>Required</sup> <a name="objectTypePlural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.objectTypePlural"></a>

```java
public java.lang.String getObjectTypePlural();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.internalValue"></a>

```java
public GrantOwnershipOnFuture getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a>

---


### GrantOwnershipOnOutputReference <a name="GrantOwnershipOnOutputReference" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_ownership.GrantOwnershipOnOutputReference;

new GrantOwnershipOnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putAll">putAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putFuture">putFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetFuture">resetFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetObjectName">resetObjectName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetObjectType">resetObjectType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAll` <a name="putAll" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putAll"></a>

```java
public void putAll(GrantOwnershipOnAll value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putAll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a>

---

##### `putFuture` <a name="putFuture" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putFuture"></a>

```java
public void putFuture(GrantOwnershipOnFuture value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putFuture.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a>

---

##### `resetAll` <a name="resetAll" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetAll"></a>

```java
public void resetAll()
```

##### `resetFuture` <a name="resetFuture" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetFuture"></a>

```java
public void resetFuture()
```

##### `resetObjectName` <a name="resetObjectName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetObjectName"></a>

```java
public void resetObjectName()
```

##### `resetObjectType` <a name="resetObjectType" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetObjectType"></a>

```java
public void resetObjectType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.all">all</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference">GrantOwnershipOnAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.future">future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference">GrantOwnershipOnFutureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.allInput">allInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.futureInput">futureInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectNameInput">objectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectTypeInput">objectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectName">objectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.all"></a>

```java
public GrantOwnershipOnAllOutputReference getAll();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference">GrantOwnershipOnAllOutputReference</a>

---

##### `future`<sup>Required</sup> <a name="future" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.future"></a>

```java
public GrantOwnershipOnFutureOutputReference getFuture();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference">GrantOwnershipOnFutureOutputReference</a>

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.allInput"></a>

```java
public GrantOwnershipOnAll getAllInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a>

---

##### `futureInput`<sup>Optional</sup> <a name="futureInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.futureInput"></a>

```java
public GrantOwnershipOnFuture getFutureInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a>

---

##### `objectNameInput`<sup>Optional</sup> <a name="objectNameInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectNameInput"></a>

```java
public java.lang.String getObjectNameInput();
```

- *Type:* java.lang.String

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectTypeInput"></a>

```java
public java.lang.String getObjectTypeInput();
```

- *Type:* java.lang.String

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectName"></a>

```java
public java.lang.String getObjectName();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.internalValue"></a>

```java
public GrantOwnershipOn getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

---


### GrantOwnershipTimeoutsOutputReference <a name="GrantOwnershipTimeoutsOutputReference" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_ownership.GrantOwnershipTimeoutsOutputReference;

new GrantOwnershipTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts">GrantOwnershipTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GrantOwnershipTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts">GrantOwnershipTimeouts</a>

---



