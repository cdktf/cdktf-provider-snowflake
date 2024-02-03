# `dataSnowflakeDynamicTables` Submodule <a name="`dataSnowflakeDynamicTables` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeDynamicTables <a name="DataSnowflakeDynamicTables" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables snowflake_dynamic_tables}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_dynamic_tables.DataSnowflakeDynamicTables;

DataSnowflakeDynamicTables.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .in(DataSnowflakeDynamicTablesIn)
//  .like(DataSnowflakeDynamicTablesLike)
//  .limit(DataSnowflakeDynamicTablesLimit)
//  .startsWith(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#id DataSnowflakeDynamicTables#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a></code> | in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.like">like</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a></code> | like block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.startsWith">startsWith</a></code> | <code>java.lang.String</code> | Optionally filters the command output based on the characters that appear at the beginning of the object name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#id DataSnowflakeDynamicTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#in DataSnowflakeDynamicTables#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.like"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a>

like block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#like DataSnowflakeDynamicTables#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#limit DataSnowflakeDynamicTables#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.Initializer.parameter.startsWith"></a>

- *Type:* java.lang.String

Optionally filters the command output based on the characters that appear at the beginning of the object name.

The string is case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#starts_with DataSnowflakeDynamicTables#starts_with}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putIn">putIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLike">putLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetStartsWith">resetStartsWith</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putIn` <a name="putIn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putIn"></a>

```java
public void putIn(DataSnowflakeDynamicTablesIn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a>

---

##### `putLike` <a name="putLike" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLike"></a>

```java
public void putLike(DataSnowflakeDynamicTablesLike value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLike.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a>

---

##### `putLimit` <a name="putLimit" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLimit"></a>

```java
public void putLimit(DataSnowflakeDynamicTablesLimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetId"></a>

```java
public void resetId()
```

##### `resetIn` <a name="resetIn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetIn"></a>

```java
public void resetIn()
```

##### `resetLike` <a name="resetLike" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetLike"></a>

```java
public void resetLike()
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetLimit"></a>

```java
public void resetLimit()
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.resetStartsWith"></a>

```java
public void resetStartsWith()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeDynamicTables resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_dynamic_tables.DataSnowflakeDynamicTables;

DataSnowflakeDynamicTables.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_dynamic_tables.DataSnowflakeDynamicTables;

DataSnowflakeDynamicTables.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_dynamic_tables.DataSnowflakeDynamicTables;

DataSnowflakeDynamicTables.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_dynamic_tables.DataSnowflakeDynamicTables;

DataSnowflakeDynamicTables.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSnowflakeDynamicTables.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataSnowflakeDynamicTables resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSnowflakeDynamicTables to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSnowflakeDynamicTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeDynamicTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference">DataSnowflakeDynamicTablesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.like">like</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference">DataSnowflakeDynamicTablesLikeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference">DataSnowflakeDynamicTablesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.records">records</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList">DataSnowflakeDynamicTablesRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.inInput">inInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.likeInput">likeInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.limitInput">limitInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.startsWithInput">startsWithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.startsWith">startsWith</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.in"></a>

```java
public DataSnowflakeDynamicTablesInOutputReference getIn();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference">DataSnowflakeDynamicTablesInOutputReference</a>

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.like"></a>

```java
public DataSnowflakeDynamicTablesLikeOutputReference getLike();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference">DataSnowflakeDynamicTablesLikeOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.limit"></a>

```java
public DataSnowflakeDynamicTablesLimitOutputReference getLimit();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference">DataSnowflakeDynamicTablesLimitOutputReference</a>

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.records"></a>

```java
public DataSnowflakeDynamicTablesRecordsList getRecords();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList">DataSnowflakeDynamicTablesRecordsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.inInput"></a>

```java
public DataSnowflakeDynamicTablesIn getInInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a>

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.likeInput"></a>

```java
public DataSnowflakeDynamicTablesLike getLikeInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a>

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.limitInput"></a>

```java
public DataSnowflakeDynamicTablesLimit getLimitInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.startsWithInput"></a>

```java
public java.lang.String getStartsWithInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.startsWith"></a>

```java
public java.lang.String getStartsWith();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTables.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeDynamicTablesConfig <a name="DataSnowflakeDynamicTablesConfig" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_dynamic_tables.DataSnowflakeDynamicTablesConfig;

DataSnowflakeDynamicTablesConfig.builder()
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
//  .id(java.lang.String)
//  .in(DataSnowflakeDynamicTablesIn)
//  .like(DataSnowflakeDynamicTablesLike)
//  .limit(DataSnowflakeDynamicTablesLimit)
//  .startsWith(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#id DataSnowflakeDynamicTables#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a></code> | in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.like">like</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a></code> | like block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.startsWith">startsWith</a></code> | <code>java.lang.String</code> | Optionally filters the command output based on the characters that appear at the beginning of the object name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#id DataSnowflakeDynamicTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.in"></a>

```java
public DataSnowflakeDynamicTablesIn getIn();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#in DataSnowflakeDynamicTables#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.like"></a>

```java
public DataSnowflakeDynamicTablesLike getLike();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a>

like block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#like DataSnowflakeDynamicTables#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.limit"></a>

```java
public DataSnowflakeDynamicTablesLimit getLimit();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#limit DataSnowflakeDynamicTables#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesConfig.property.startsWith"></a>

```java
public java.lang.String getStartsWith();
```

- *Type:* java.lang.String

Optionally filters the command output based on the characters that appear at the beginning of the object name.

The string is case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#starts_with DataSnowflakeDynamicTables#starts_with}

---

### DataSnowflakeDynamicTablesIn <a name="DataSnowflakeDynamicTablesIn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_dynamic_tables.DataSnowflakeDynamicTablesIn;

DataSnowflakeDynamicTablesIn.builder()
//  .account(java.lang.Boolean)
//  .account(IResolvable)
//  .database(java.lang.String)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.account">account</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.database">database</a></code> | <code>java.lang.String</code> | Returns records for the current database in use or for a specified database (db_name). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.schema">schema</a></code> | <code>java.lang.String</code> | Returns records for the current schema in use or a specified schema (schema_name). |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.account"></a>

```java
public java.lang.Object getAccount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#account DataSnowflakeDynamicTables#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Returns records for the current database in use or for a specified database (db_name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#database DataSnowflakeDynamicTables#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Returns records for the current schema in use or a specified schema (schema_name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#schema DataSnowflakeDynamicTables#schema}

---

### DataSnowflakeDynamicTablesLike <a name="DataSnowflakeDynamicTablesLike" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_dynamic_tables.DataSnowflakeDynamicTablesLike;

DataSnowflakeDynamicTablesLike.builder()
    .pattern(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike.property.pattern">pattern</a></code> | <code>java.lang.String</code> | Filters the command output by object name. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

Filters the command output by object name.

The filter uses case-insensitive pattern matching with support for SQL wildcard characters (% and _).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#pattern DataSnowflakeDynamicTables#pattern}

---

### DataSnowflakeDynamicTablesLimit <a name="DataSnowflakeDynamicTablesLimit" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_dynamic_tables.DataSnowflakeDynamicTablesLimit;

DataSnowflakeDynamicTablesLimit.builder()
//  .from(java.lang.String)
//  .rows(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit.property.from">from</a></code> | <code>java.lang.String</code> | The optional FROM 'name_string' subclause effectively serves as a “cursor” for the results. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit.property.rows">rows</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of rows to return. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

The optional FROM 'name_string' subclause effectively serves as a “cursor” for the results.

This enables fetching the specified number of rows following the first row whose object name matches the specified string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#from DataSnowflakeDynamicTables#from}

---

##### `rows`<sup>Optional</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit.property.rows"></a>

```java
public java.lang.Number getRows();
```

- *Type:* java.lang.Number

Specifies the maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/data-sources/dynamic_tables#rows DataSnowflakeDynamicTables#rows}

---

### DataSnowflakeDynamicTablesRecords <a name="DataSnowflakeDynamicTablesRecords" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecords.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_dynamic_tables.DataSnowflakeDynamicTablesRecords;

DataSnowflakeDynamicTablesRecords.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeDynamicTablesInOutputReference <a name="DataSnowflakeDynamicTablesInOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_dynamic_tables.DataSnowflakeDynamicTablesInOutputReference;

new DataSnowflakeDynamicTablesInOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetAccount"></a>

```java
public void resetAccount()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.accountInput">accountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.account">account</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.accountInput"></a>

```java
public java.lang.Object getAccountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.account"></a>

```java
public java.lang.Object getAccount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesInOutputReference.property.internalValue"></a>

```java
public DataSnowflakeDynamicTablesIn getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesIn">DataSnowflakeDynamicTablesIn</a>

---


### DataSnowflakeDynamicTablesLikeOutputReference <a name="DataSnowflakeDynamicTablesLikeOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_dynamic_tables.DataSnowflakeDynamicTablesLikeOutputReference;

new DataSnowflakeDynamicTablesLikeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLikeOutputReference.property.internalValue"></a>

```java
public DataSnowflakeDynamicTablesLike getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLike">DataSnowflakeDynamicTablesLike</a>

---


### DataSnowflakeDynamicTablesLimitOutputReference <a name="DataSnowflakeDynamicTablesLimitOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_dynamic_tables.DataSnowflakeDynamicTablesLimitOutputReference;

new DataSnowflakeDynamicTablesLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resetRows">resetRows</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetRows` <a name="resetRows" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.resetRows"></a>

```java
public void resetRows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.rowsInput">rowsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.rows">rows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.rowsInput"></a>

```java
public java.lang.Number getRowsInput();
```

- *Type:* java.lang.Number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.rows"></a>

```java
public java.lang.Number getRows();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimitOutputReference.property.internalValue"></a>

```java
public DataSnowflakeDynamicTablesLimit getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesLimit">DataSnowflakeDynamicTablesLimit</a>

---


### DataSnowflakeDynamicTablesRecordsList <a name="DataSnowflakeDynamicTablesRecordsList" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_dynamic_tables.DataSnowflakeDynamicTablesRecordsList;

new DataSnowflakeDynamicTablesRecordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.get"></a>

```java
public DataSnowflakeDynamicTablesRecordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeDynamicTablesRecordsOutputReference <a name="DataSnowflakeDynamicTablesRecordsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_dynamic_tables.DataSnowflakeDynamicTablesRecordsOutputReference;

new DataSnowflakeDynamicTablesRecordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.automaticClustering">automaticClustering</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.bytes">bytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.clusterBy">clusterBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.dataTimestamp">dataTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.isClone">isClone</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.isReplica">isReplica</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.lastSuspendedOn">lastSuspendedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.refreshMode">refreshMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.refreshModeReason">refreshModeReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.rows">rows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.schedulingState">schedulingState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.targetLag">targetLag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecords">DataSnowflakeDynamicTablesRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automaticClustering`<sup>Required</sup> <a name="automaticClustering" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.automaticClustering"></a>

```java
public IResolvable getAutomaticClustering();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.bytes"></a>

```java
public java.lang.Number getBytes();
```

- *Type:* java.lang.Number

---

##### `clusterBy`<sup>Required</sup> <a name="clusterBy" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.clusterBy"></a>

```java
public java.lang.String getClusterBy();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `dataTimestamp`<sup>Required</sup> <a name="dataTimestamp" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.dataTimestamp"></a>

```java
public java.lang.String getDataTimestamp();
```

- *Type:* java.lang.String

---

##### `isClone`<sup>Required</sup> <a name="isClone" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.isClone"></a>

```java
public IResolvable getIsClone();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isReplica`<sup>Required</sup> <a name="isReplica" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.isReplica"></a>

```java
public IResolvable getIsReplica();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastSuspendedOn`<sup>Required</sup> <a name="lastSuspendedOn" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.lastSuspendedOn"></a>

```java
public java.lang.String getLastSuspendedOn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `refreshMode`<sup>Required</sup> <a name="refreshMode" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.refreshMode"></a>

```java
public java.lang.String getRefreshMode();
```

- *Type:* java.lang.String

---

##### `refreshModeReason`<sup>Required</sup> <a name="refreshModeReason" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.refreshModeReason"></a>

```java
public java.lang.String getRefreshModeReason();
```

- *Type:* java.lang.String

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.rows"></a>

```java
public java.lang.Number getRows();
```

- *Type:* java.lang.Number

---

##### `schedulingState`<sup>Required</sup> <a name="schedulingState" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.schedulingState"></a>

```java
public java.lang.String getSchedulingState();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `targetLag`<sup>Required</sup> <a name="targetLag" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.targetLag"></a>

```java
public java.lang.String getTargetLag();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecordsOutputReference.property.internalValue"></a>

```java
public DataSnowflakeDynamicTablesRecords getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeDynamicTables.DataSnowflakeDynamicTablesRecords">DataSnowflakeDynamicTablesRecords</a>

---



