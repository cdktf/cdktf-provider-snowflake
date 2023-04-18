# `snowflake_pipe_grant`

Refer to the Terraform Registory for docs: [`snowflake_pipe_grant`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant).

# `pipeGrant` Submodule <a name="`pipeGrant` Submodule" id="@cdktf/provider-snowflake.pipeGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipeGrant <a name="PipeGrant" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant snowflake_pipe_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.pipe_grant.PipeGrant;

PipeGrant.Builder.create(Construct scope, java.lang.String id)
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
    .databaseName(java.lang.String)
//  .enableMultipleGrants(java.lang.Boolean)
//  .enableMultipleGrants(IResolvable)
//  .id(java.lang.String)
//  .onFuture(java.lang.Boolean)
//  .onFuture(IResolvable)
//  .pipeName(java.lang.String)
//  .privilege(java.lang.String)
//  .roles(java.util.List<java.lang.String>)
//  .schemaName(java.lang.String)
//  .withGrantOption(java.lang.Boolean)
//  .withGrantOption(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of the database containing the current or future pipes on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.enableMultipleGrants">enableMultipleGrants</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#id PipeGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.onFuture">onFuture</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When this is set to true and a schema_name is provided, apply this grant on all future pipes in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.pipeName">pipeName</a></code> | <code>java.lang.String</code> | The name of the pipe on which to grant privileges immediately (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.privilege">privilege</a></code> | <code>java.lang.String</code> | The privilege to grant on the current or future pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.schemaName">schemaName</a></code> | <code>java.lang.String</code> | The name of the schema containing the current or future pipes on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.withGrantOption">withGrantOption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

The name of the database containing the current or future pipes on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#database_name PipeGrant#database_name}

---

##### `enableMultipleGrants`<sup>Optional</sup> <a name="enableMultipleGrants" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.enableMultipleGrants"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#enable_multiple_grants PipeGrant#enable_multiple_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#id PipeGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onFuture`<sup>Optional</sup> <a name="onFuture" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.onFuture"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When this is set to true and a schema_name is provided, apply this grant on all future pipes in the given schema.

When this is true and no schema_name is provided apply this grant on all future pipes in the given database. The pipe_name field must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#on_future PipeGrant#on_future}

---

##### `pipeName`<sup>Optional</sup> <a name="pipeName" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.pipeName"></a>

- *Type:* java.lang.String

The name of the pipe on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#pipe_name PipeGrant#pipe_name}

---

##### `privilege`<sup>Optional</sup> <a name="privilege" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.privilege"></a>

- *Type:* java.lang.String

The privilege to grant on the current or future pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#privilege PipeGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.roles"></a>

- *Type:* java.util.List<java.lang.String>

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#roles PipeGrant#roles}

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.schemaName"></a>

- *Type:* java.lang.String

The name of the schema containing the current or future pipes on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#schema_name PipeGrant#schema_name}

---

##### `withGrantOption`<sup>Optional</sup> <a name="withGrantOption" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.Initializer.parameter.withGrantOption"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#with_grant_option PipeGrant#with_grant_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetEnableMultipleGrants">resetEnableMultipleGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetOnFuture">resetOnFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetPipeName">resetPipeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetPrivilege">resetPrivilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetWithGrantOption">resetWithGrantOption</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEnableMultipleGrants` <a name="resetEnableMultipleGrants" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetEnableMultipleGrants"></a>

```java
public void resetEnableMultipleGrants()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetId"></a>

```java
public void resetId()
```

##### `resetOnFuture` <a name="resetOnFuture" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetOnFuture"></a>

```java
public void resetOnFuture()
```

##### `resetPipeName` <a name="resetPipeName" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetPipeName"></a>

```java
public void resetPipeName()
```

##### `resetPrivilege` <a name="resetPrivilege" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetPrivilege"></a>

```java
public void resetPrivilege()
```

##### `resetRoles` <a name="resetRoles" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetRoles"></a>

```java
public void resetRoles()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetSchemaName"></a>

```java
public void resetSchemaName()
```

##### `resetWithGrantOption` <a name="resetWithGrantOption" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.resetWithGrantOption"></a>

```java
public void resetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.pipe_grant.PipeGrant;

PipeGrant.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.pipe_grant.PipeGrant;

PipeGrant.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.pipe_grant.PipeGrant;

PipeGrant.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.enableMultipleGrantsInput">enableMultipleGrantsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.onFutureInput">onFutureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.pipeNameInput">pipeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.privilegeInput">privilegeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.withGrantOptionInput">withGrantOptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.enableMultipleGrants">enableMultipleGrants</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.onFuture">onFuture</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.pipeName">pipeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.privilege">privilege</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.withGrantOption">withGrantOption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `enableMultipleGrantsInput`<sup>Optional</sup> <a name="enableMultipleGrantsInput" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.enableMultipleGrantsInput"></a>

```java
public java.lang.Object getEnableMultipleGrantsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `onFutureInput`<sup>Optional</sup> <a name="onFutureInput" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.onFutureInput"></a>

```java
public java.lang.Object getOnFutureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pipeNameInput`<sup>Optional</sup> <a name="pipeNameInput" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.pipeNameInput"></a>

```java
public java.lang.String getPipeNameInput();
```

- *Type:* java.lang.String

---

##### `privilegeInput`<sup>Optional</sup> <a name="privilegeInput" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.privilegeInput"></a>

```java
public java.lang.String getPrivilegeInput();
```

- *Type:* java.lang.String

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="withGrantOptionInput" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.withGrantOptionInput"></a>

```java
public java.lang.Object getWithGrantOptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `enableMultipleGrants`<sup>Required</sup> <a name="enableMultipleGrants" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.enableMultipleGrants"></a>

```java
public java.lang.Object getEnableMultipleGrants();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `onFuture`<sup>Required</sup> <a name="onFuture" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.onFuture"></a>

```java
public java.lang.Object getOnFuture();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pipeName`<sup>Required</sup> <a name="pipeName" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.pipeName"></a>

```java
public java.lang.String getPipeName();
```

- *Type:* java.lang.String

---

##### `privilege`<sup>Required</sup> <a name="privilege" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.privilege"></a>

```java
public java.lang.String getPrivilege();
```

- *Type:* java.lang.String

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `withGrantOption`<sup>Required</sup> <a name="withGrantOption" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.withGrantOption"></a>

```java
public java.lang.Object getWithGrantOption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.pipeGrant.PipeGrant.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PipeGrantConfig <a name="PipeGrantConfig" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.pipe_grant.PipeGrantConfig;

PipeGrantConfig.builder()
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
    .databaseName(java.lang.String)
//  .enableMultipleGrants(java.lang.Boolean)
//  .enableMultipleGrants(IResolvable)
//  .id(java.lang.String)
//  .onFuture(java.lang.Boolean)
//  .onFuture(IResolvable)
//  .pipeName(java.lang.String)
//  .privilege(java.lang.String)
//  .roles(java.util.List<java.lang.String>)
//  .schemaName(java.lang.String)
//  .withGrantOption(java.lang.Boolean)
//  .withGrantOption(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of the database containing the current or future pipes on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.enableMultipleGrants">enableMultipleGrants</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#id PipeGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.onFuture">onFuture</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When this is set to true and a schema_name is provided, apply this grant on all future pipes in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.pipeName">pipeName</a></code> | <code>java.lang.String</code> | The name of the pipe on which to grant privileges immediately (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.privilege">privilege</a></code> | <code>java.lang.String</code> | The privilege to grant on the current or future pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | The name of the schema containing the current or future pipes on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.withGrantOption">withGrantOption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

The name of the database containing the current or future pipes on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#database_name PipeGrant#database_name}

---

##### `enableMultipleGrants`<sup>Optional</sup> <a name="enableMultipleGrants" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.enableMultipleGrants"></a>

```java
public java.lang.Object getEnableMultipleGrants();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#enable_multiple_grants PipeGrant#enable_multiple_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#id PipeGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onFuture`<sup>Optional</sup> <a name="onFuture" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.onFuture"></a>

```java
public java.lang.Object getOnFuture();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When this is set to true and a schema_name is provided, apply this grant on all future pipes in the given schema.

When this is true and no schema_name is provided apply this grant on all future pipes in the given database. The pipe_name field must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#on_future PipeGrant#on_future}

---

##### `pipeName`<sup>Optional</sup> <a name="pipeName" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.pipeName"></a>

```java
public java.lang.String getPipeName();
```

- *Type:* java.lang.String

The name of the pipe on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#pipe_name PipeGrant#pipe_name}

---

##### `privilege`<sup>Optional</sup> <a name="privilege" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.privilege"></a>

```java
public java.lang.String getPrivilege();
```

- *Type:* java.lang.String

The privilege to grant on the current or future pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#privilege PipeGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#roles PipeGrant#roles}

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

The name of the schema containing the current or future pipes on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#schema_name PipeGrant#schema_name}

---

##### `withGrantOption`<sup>Optional</sup> <a name="withGrantOption" id="@cdktf/provider-snowflake.pipeGrant.PipeGrantConfig.property.withGrantOption"></a>

```java
public java.lang.Object getWithGrantOption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/pipe_grant#with_grant_option PipeGrant#with_grant_option}

---



