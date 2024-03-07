# `grantPrivilegesToShare` Submodule <a name="`grantPrivilegesToShare` Submodule" id="@cdktf/provider-snowflake.grantPrivilegesToShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantPrivilegesToShare <a name="GrantPrivilegesToShare" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share snowflake_grant_privileges_to_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_share.GrantPrivilegesToShare;

GrantPrivilegesToShare.Builder.create(Construct scope, java.lang.String id)
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
    .privileges(java.util.List<java.lang.String>)
    .toShare(java.lang.String)
//  .id(java.lang.String)
//  .onAllTablesInSchema(java.lang.String)
//  .onDatabase(java.lang.String)
//  .onSchema(java.lang.String)
//  .onTable(java.lang.String)
//  .onTag(java.lang.String)
//  .onView(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | The privileges to grant on the share. See available list of privileges: https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-share#syntax. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.toShare">toShare</a></code> | <code>java.lang.String</code> | The fully qualified name of the share on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#id GrantPrivilegesToShare#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.onAllTablesInSchema">onAllTablesInSchema</a></code> | <code>java.lang.String</code> | The fully qualified identifier for the schema for which the specified privilege will be granted for all tables. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.onDatabase">onDatabase</a></code> | <code>java.lang.String</code> | The fully qualified name of the database on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.onSchema">onSchema</a></code> | <code>java.lang.String</code> | The fully qualified name of the schema on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.onTable">onTable</a></code> | <code>java.lang.String</code> | The fully qualified name of the table on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.onTag">onTag</a></code> | <code>java.lang.String</code> | The fully qualified name of the tag on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.onView">onView</a></code> | <code>java.lang.String</code> | The fully qualified name of the view on which privileges will be granted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.privileges"></a>

- *Type:* java.util.List<java.lang.String>

The privileges to grant on the share. See available list of privileges: https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-share#syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#privileges GrantPrivilegesToShare#privileges}

---

##### `toShare`<sup>Required</sup> <a name="toShare" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.toShare"></a>

- *Type:* java.lang.String

The fully qualified name of the share on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#to_share GrantPrivilegesToShare#to_share}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#id GrantPrivilegesToShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onAllTablesInSchema`<sup>Optional</sup> <a name="onAllTablesInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.onAllTablesInSchema"></a>

- *Type:* java.lang.String

The fully qualified identifier for the schema for which the specified privilege will be granted for all tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#on_all_tables_in_schema GrantPrivilegesToShare#on_all_tables_in_schema}

---

##### `onDatabase`<sup>Optional</sup> <a name="onDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.onDatabase"></a>

- *Type:* java.lang.String

The fully qualified name of the database on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#on_database GrantPrivilegesToShare#on_database}

---

##### `onSchema`<sup>Optional</sup> <a name="onSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.onSchema"></a>

- *Type:* java.lang.String

The fully qualified name of the schema on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#on_schema GrantPrivilegesToShare#on_schema}

---

##### `onTable`<sup>Optional</sup> <a name="onTable" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.onTable"></a>

- *Type:* java.lang.String

The fully qualified name of the table on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#on_table GrantPrivilegesToShare#on_table}

---

##### `onTag`<sup>Optional</sup> <a name="onTag" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.onTag"></a>

- *Type:* java.lang.String

The fully qualified name of the tag on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#on_tag GrantPrivilegesToShare#on_tag}

---

##### `onView`<sup>Optional</sup> <a name="onView" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.onView"></a>

- *Type:* java.lang.String

The fully qualified name of the view on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#on_view GrantPrivilegesToShare#on_view}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnAllTablesInSchema">resetOnAllTablesInSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnDatabase">resetOnDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnSchema">resetOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnTable">resetOnTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnTag">resetOnTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnView">resetOnView</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetId"></a>

```java
public void resetId()
```

##### `resetOnAllTablesInSchema` <a name="resetOnAllTablesInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnAllTablesInSchema"></a>

```java
public void resetOnAllTablesInSchema()
```

##### `resetOnDatabase` <a name="resetOnDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnDatabase"></a>

```java
public void resetOnDatabase()
```

##### `resetOnSchema` <a name="resetOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnSchema"></a>

```java
public void resetOnSchema()
```

##### `resetOnTable` <a name="resetOnTable" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnTable"></a>

```java
public void resetOnTable()
```

##### `resetOnTag` <a name="resetOnTag" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnTag"></a>

```java
public void resetOnTag()
```

##### `resetOnView` <a name="resetOnView" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnView"></a>

```java
public void resetOnView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GrantPrivilegesToShare resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_share.GrantPrivilegesToShare;

GrantPrivilegesToShare.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_share.GrantPrivilegesToShare;

GrantPrivilegesToShare.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_share.GrantPrivilegesToShare;

GrantPrivilegesToShare.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_share.GrantPrivilegesToShare;

GrantPrivilegesToShare.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GrantPrivilegesToShare.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GrantPrivilegesToShare resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GrantPrivilegesToShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GrantPrivilegesToShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GrantPrivilegesToShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onAllTablesInSchemaInput">onAllTablesInSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onDatabaseInput">onDatabaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onSchemaInput">onSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTableInput">onTableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTagInput">onTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onViewInput">onViewInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.privilegesInput">privilegesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.toShareInput">toShareInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onAllTablesInSchema">onAllTablesInSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onDatabase">onDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onSchema">onSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTable">onTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTag">onTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onView">onView</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.toShare">toShare</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `onAllTablesInSchemaInput`<sup>Optional</sup> <a name="onAllTablesInSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onAllTablesInSchemaInput"></a>

```java
public java.lang.String getOnAllTablesInSchemaInput();
```

- *Type:* java.lang.String

---

##### `onDatabaseInput`<sup>Optional</sup> <a name="onDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onDatabaseInput"></a>

```java
public java.lang.String getOnDatabaseInput();
```

- *Type:* java.lang.String

---

##### `onSchemaInput`<sup>Optional</sup> <a name="onSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onSchemaInput"></a>

```java
public java.lang.String getOnSchemaInput();
```

- *Type:* java.lang.String

---

##### `onTableInput`<sup>Optional</sup> <a name="onTableInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTableInput"></a>

```java
public java.lang.String getOnTableInput();
```

- *Type:* java.lang.String

---

##### `onTagInput`<sup>Optional</sup> <a name="onTagInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTagInput"></a>

```java
public java.lang.String getOnTagInput();
```

- *Type:* java.lang.String

---

##### `onViewInput`<sup>Optional</sup> <a name="onViewInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onViewInput"></a>

```java
public java.lang.String getOnViewInput();
```

- *Type:* java.lang.String

---

##### `privilegesInput`<sup>Optional</sup> <a name="privilegesInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.privilegesInput"></a>

```java
public java.util.List<java.lang.String> getPrivilegesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `toShareInput`<sup>Optional</sup> <a name="toShareInput" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.toShareInput"></a>

```java
public java.lang.String getToShareInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `onAllTablesInSchema`<sup>Required</sup> <a name="onAllTablesInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onAllTablesInSchema"></a>

```java
public java.lang.String getOnAllTablesInSchema();
```

- *Type:* java.lang.String

---

##### `onDatabase`<sup>Required</sup> <a name="onDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onDatabase"></a>

```java
public java.lang.String getOnDatabase();
```

- *Type:* java.lang.String

---

##### `onSchema`<sup>Required</sup> <a name="onSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onSchema"></a>

```java
public java.lang.String getOnSchema();
```

- *Type:* java.lang.String

---

##### `onTable`<sup>Required</sup> <a name="onTable" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTable"></a>

```java
public java.lang.String getOnTable();
```

- *Type:* java.lang.String

---

##### `onTag`<sup>Required</sup> <a name="onTag" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTag"></a>

```java
public java.lang.String getOnTag();
```

- *Type:* java.lang.String

---

##### `onView`<sup>Required</sup> <a name="onView" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onView"></a>

```java
public java.lang.String getOnView();
```

- *Type:* java.lang.String

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.privileges"></a>

```java
public java.util.List<java.lang.String> getPrivileges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `toShare`<sup>Required</sup> <a name="toShare" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.toShare"></a>

```java
public java.lang.String getToShare();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GrantPrivilegesToShareConfig <a name="GrantPrivilegesToShareConfig" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_share.GrantPrivilegesToShareConfig;

GrantPrivilegesToShareConfig.builder()
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
    .privileges(java.util.List<java.lang.String>)
    .toShare(java.lang.String)
//  .id(java.lang.String)
//  .onAllTablesInSchema(java.lang.String)
//  .onDatabase(java.lang.String)
//  .onSchema(java.lang.String)
//  .onTable(java.lang.String)
//  .onTag(java.lang.String)
//  .onView(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | The privileges to grant on the share. See available list of privileges: https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-share#syntax. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.toShare">toShare</a></code> | <code>java.lang.String</code> | The fully qualified name of the share on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#id GrantPrivilegesToShare#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onAllTablesInSchema">onAllTablesInSchema</a></code> | <code>java.lang.String</code> | The fully qualified identifier for the schema for which the specified privilege will be granted for all tables. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onDatabase">onDatabase</a></code> | <code>java.lang.String</code> | The fully qualified name of the database on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onSchema">onSchema</a></code> | <code>java.lang.String</code> | The fully qualified name of the schema on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onTable">onTable</a></code> | <code>java.lang.String</code> | The fully qualified name of the table on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onTag">onTag</a></code> | <code>java.lang.String</code> | The fully qualified name of the tag on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onView">onView</a></code> | <code>java.lang.String</code> | The fully qualified name of the view on which privileges will be granted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.privileges"></a>

```java
public java.util.List<java.lang.String> getPrivileges();
```

- *Type:* java.util.List<java.lang.String>

The privileges to grant on the share. See available list of privileges: https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-share#syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#privileges GrantPrivilegesToShare#privileges}

---

##### `toShare`<sup>Required</sup> <a name="toShare" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.toShare"></a>

```java
public java.lang.String getToShare();
```

- *Type:* java.lang.String

The fully qualified name of the share on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#to_share GrantPrivilegesToShare#to_share}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#id GrantPrivilegesToShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onAllTablesInSchema`<sup>Optional</sup> <a name="onAllTablesInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onAllTablesInSchema"></a>

```java
public java.lang.String getOnAllTablesInSchema();
```

- *Type:* java.lang.String

The fully qualified identifier for the schema for which the specified privilege will be granted for all tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#on_all_tables_in_schema GrantPrivilegesToShare#on_all_tables_in_schema}

---

##### `onDatabase`<sup>Optional</sup> <a name="onDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onDatabase"></a>

```java
public java.lang.String getOnDatabase();
```

- *Type:* java.lang.String

The fully qualified name of the database on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#on_database GrantPrivilegesToShare#on_database}

---

##### `onSchema`<sup>Optional</sup> <a name="onSchema" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onSchema"></a>

```java
public java.lang.String getOnSchema();
```

- *Type:* java.lang.String

The fully qualified name of the schema on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#on_schema GrantPrivilegesToShare#on_schema}

---

##### `onTable`<sup>Optional</sup> <a name="onTable" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onTable"></a>

```java
public java.lang.String getOnTable();
```

- *Type:* java.lang.String

The fully qualified name of the table on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#on_table GrantPrivilegesToShare#on_table}

---

##### `onTag`<sup>Optional</sup> <a name="onTag" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onTag"></a>

```java
public java.lang.String getOnTag();
```

- *Type:* java.lang.String

The fully qualified name of the tag on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#on_tag GrantPrivilegesToShare#on_tag}

---

##### `onView`<sup>Optional</sup> <a name="onView" id="@cdktf/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onView"></a>

```java
public java.lang.String getOnView();
```

- *Type:* java.lang.String

The fully qualified name of the view on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.1/docs/resources/grant_privileges_to_share#on_view GrantPrivilegesToShare#on_view}

---



