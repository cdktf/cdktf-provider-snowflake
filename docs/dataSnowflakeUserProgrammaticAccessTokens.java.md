# `dataSnowflakeUserProgrammaticAccessTokens` Submodule <a name="`dataSnowflakeUserProgrammaticAccessTokens` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeUserProgrammaticAccessTokens <a name="DataSnowflakeUserProgrammaticAccessTokens" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/user_programmatic_access_tokens snowflake_user_programmatic_access_tokens}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_user_programmatic_access_tokens.DataSnowflakeUserProgrammaticAccessTokens;

DataSnowflakeUserProgrammaticAccessTokens.Builder.create(Construct scope, java.lang.String id)
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
    .forUser(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.forUser">forUser</a></code> | <code>java.lang.String</code> | Returns programmatic access tokens for the specified user. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/user_programmatic_access_tokens#id DataSnowflakeUserProgrammaticAccessTokens#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `forUser`<sup>Required</sup> <a name="forUser" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.forUser"></a>

- *Type:* java.lang.String

Returns programmatic access tokens for the specified user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/user_programmatic_access_tokens#for_user DataSnowflakeUserProgrammaticAccessTokens#for_user}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/user_programmatic_access_tokens#id DataSnowflakeUserProgrammaticAccessTokens#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeUserProgrammaticAccessTokens resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_user_programmatic_access_tokens.DataSnowflakeUserProgrammaticAccessTokens;

DataSnowflakeUserProgrammaticAccessTokens.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_user_programmatic_access_tokens.DataSnowflakeUserProgrammaticAccessTokens;

DataSnowflakeUserProgrammaticAccessTokens.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_user_programmatic_access_tokens.DataSnowflakeUserProgrammaticAccessTokens;

DataSnowflakeUserProgrammaticAccessTokens.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_user_programmatic_access_tokens.DataSnowflakeUserProgrammaticAccessTokens;

DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataSnowflakeUserProgrammaticAccessTokens resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSnowflakeUserProgrammaticAccessTokens to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSnowflakeUserProgrammaticAccessTokens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/user_programmatic_access_tokens#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeUserProgrammaticAccessTokens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.userProgrammaticAccessTokens">userProgrammaticAccessTokens</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forUserInput">forUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forUser">forUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `userProgrammaticAccessTokens`<sup>Required</sup> <a name="userProgrammaticAccessTokens" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.userProgrammaticAccessTokens"></a>

```java
public DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList getUserProgrammaticAccessTokens();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList</a>

---

##### `forUserInput`<sup>Optional</sup> <a name="forUserInput" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forUserInput"></a>

```java
public java.lang.String getForUserInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `forUser`<sup>Required</sup> <a name="forUser" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.forUser"></a>

```java
public java.lang.String getForUser();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokens.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeUserProgrammaticAccessTokensConfig <a name="DataSnowflakeUserProgrammaticAccessTokensConfig" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_user_programmatic_access_tokens.DataSnowflakeUserProgrammaticAccessTokensConfig;

DataSnowflakeUserProgrammaticAccessTokensConfig.builder()
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
    .forUser(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.forUser">forUser</a></code> | <code>java.lang.String</code> | Returns programmatic access tokens for the specified user. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/user_programmatic_access_tokens#id DataSnowflakeUserProgrammaticAccessTokens#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `forUser`<sup>Required</sup> <a name="forUser" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.forUser"></a>

```java
public java.lang.String getForUser();
```

- *Type:* java.lang.String

Returns programmatic access tokens for the specified user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/user_programmatic_access_tokens#for_user DataSnowflakeUserProgrammaticAccessTokens#for_user}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/user_programmatic_access_tokens#id DataSnowflakeUserProgrammaticAccessTokens#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_user_programmatic_access_tokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens;

DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens.builder()
    .build();
```


### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_user_programmatic_access_tokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput;

DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_user_programmatic_access_tokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList;

new DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.get"></a>

```java
public DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_user_programmatic_access_tokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference;

new DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.showOutput"></a>

```java
public DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference.property.internalValue"></a>

```java
public DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens</a>

---


### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_user_programmatic_access_tokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList;

new DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.get"></a>

```java
public DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference <a name="DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_user_programmatic_access_tokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference;

new DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.minsToBypassNetworkPolicyRequirement">minsToBypassNetworkPolicyRequirement</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.roleRestriction">roleRestriction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.rotatedTo">rotatedTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `minsToBypassNetworkPolicyRequirement`<sup>Required</sup> <a name="minsToBypassNetworkPolicyRequirement" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.minsToBypassNetworkPolicyRequirement"></a>

```java
public java.lang.Number getMinsToBypassNetworkPolicyRequirement();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleRestriction`<sup>Required</sup> <a name="roleRestriction" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.roleRestriction"></a>

```java
public java.lang.String getRoleRestriction();
```

- *Type:* java.lang.String

---

##### `rotatedTo`<sup>Required</sup> <a name="rotatedTo" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.rotatedTo"></a>

```java
public java.lang.String getRotatedTo();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeUserProgrammaticAccessTokens.DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput">DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput</a>

---



