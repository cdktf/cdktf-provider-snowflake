# `dataSnowflakeParameters` Submodule <a name="`dataSnowflakeParameters` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeParameters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeParameters <a name="DataSnowflakeParameters" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/parameters snowflake_parameters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_parameters.DataSnowflakeParameters;

DataSnowflakeParameters.Builder.create(Construct scope, java.lang.String id)
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
//  .objectName(java.lang.String)
//  .objectType(java.lang.String)
//  .parameterType(java.lang.String)
//  .pattern(java.lang.String)
//  .user(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/parameters#id DataSnowflakeParameters#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.objectName">objectName</a></code> | <code>java.lang.String</code> | If parameter_type is set to "OBJECT" then object_name is the name of the object to display object parameters for. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.objectType">objectType</a></code> | <code>java.lang.String</code> | If parameter_type is set to "OBJECT" then object_type is the type of object to display object parameters for. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.parameterType">parameterType</a></code> | <code>java.lang.String</code> | The type of parameter to filter by. Valid values are: "ACCOUNT", "SESSION", "OBJECT". |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.pattern">pattern</a></code> | <code>java.lang.String</code> | Allows limiting the list of parameters by name using LIKE clause. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.user">user</a></code> | <code>java.lang.String</code> | If parameter_type is set to "SESSION" then user is the name of the user to display session parameters for. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/parameters#id DataSnowflakeParameters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectName`<sup>Optional</sup> <a name="objectName" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.objectName"></a>

- *Type:* java.lang.String

If parameter_type is set to "OBJECT" then object_name is the name of the object to display object parameters for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/parameters#object_name DataSnowflakeParameters#object_name}

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.objectType"></a>

- *Type:* java.lang.String

If parameter_type is set to "OBJECT" then object_type is the type of object to display object parameters for.

Valid values are any object supported by the IN clause of the [SHOW PARAMETERS](https://docs.snowflake.com/en/sql-reference/sql/show-parameters.html#parameters) statement, including: WAREHOUSE | DATABASE | SCHEMA | TASK | TABLE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/parameters#object_type DataSnowflakeParameters#object_type}

---

##### `parameterType`<sup>Optional</sup> <a name="parameterType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.parameterType"></a>

- *Type:* java.lang.String

The type of parameter to filter by. Valid values are: "ACCOUNT", "SESSION", "OBJECT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/parameters#parameter_type DataSnowflakeParameters#parameter_type}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.pattern"></a>

- *Type:* java.lang.String

Allows limiting the list of parameters by name using LIKE clause.

Refer to [Limiting the List of Parameters by Name](https://docs.snowflake.com/en/sql-reference/parameters.html#limiting-the-list-of-parameters-by-name)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/parameters#pattern DataSnowflakeParameters#pattern}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.user"></a>

- *Type:* java.lang.String

If parameter_type is set to "SESSION" then user is the name of the user to display session parameters for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/parameters#user DataSnowflakeParameters#user}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetObjectName">resetObjectName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetObjectType">resetObjectType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetParameterType">resetParameterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetId"></a>

```java
public void resetId()
```

##### `resetObjectName` <a name="resetObjectName" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetObjectName"></a>

```java
public void resetObjectName()
```

##### `resetObjectType` <a name="resetObjectType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetObjectType"></a>

```java
public void resetObjectType()
```

##### `resetParameterType` <a name="resetParameterType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetParameterType"></a>

```java
public void resetParameterType()
```

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetPattern"></a>

```java
public void resetPattern()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetUser"></a>

```java
public void resetUser()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeParameters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_parameters.DataSnowflakeParameters;

DataSnowflakeParameters.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_parameters.DataSnowflakeParameters;

DataSnowflakeParameters.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_parameters.DataSnowflakeParameters;

DataSnowflakeParameters.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_parameters.DataSnowflakeParameters;

DataSnowflakeParameters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSnowflakeParameters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataSnowflakeParameters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSnowflakeParameters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSnowflakeParameters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/parameters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeParameters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList">DataSnowflakeParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.objectNameInput">objectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.objectTypeInput">objectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.parameterTypeInput">parameterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.objectName">objectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.parameterType">parameterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.parameters"></a>

```java
public DataSnowflakeParametersParametersList getParameters();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList">DataSnowflakeParametersParametersList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `objectNameInput`<sup>Optional</sup> <a name="objectNameInput" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.objectNameInput"></a>

```java
public java.lang.String getObjectNameInput();
```

- *Type:* java.lang.String

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.objectTypeInput"></a>

```java
public java.lang.String getObjectTypeInput();
```

- *Type:* java.lang.String

---

##### `parameterTypeInput`<sup>Optional</sup> <a name="parameterTypeInput" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.parameterTypeInput"></a>

```java
public java.lang.String getParameterTypeInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.objectName"></a>

```java
public java.lang.String getObjectName();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `parameterType`<sup>Required</sup> <a name="parameterType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.parameterType"></a>

```java
public java.lang.String getParameterType();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeParametersConfig <a name="DataSnowflakeParametersConfig" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_parameters.DataSnowflakeParametersConfig;

DataSnowflakeParametersConfig.builder()
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
//  .objectName(java.lang.String)
//  .objectType(java.lang.String)
//  .parameterType(java.lang.String)
//  .pattern(java.lang.String)
//  .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/parameters#id DataSnowflakeParameters#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.objectName">objectName</a></code> | <code>java.lang.String</code> | If parameter_type is set to "OBJECT" then object_name is the name of the object to display object parameters for. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.objectType">objectType</a></code> | <code>java.lang.String</code> | If parameter_type is set to "OBJECT" then object_type is the type of object to display object parameters for. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.parameterType">parameterType</a></code> | <code>java.lang.String</code> | The type of parameter to filter by. Valid values are: "ACCOUNT", "SESSION", "OBJECT". |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.pattern">pattern</a></code> | <code>java.lang.String</code> | Allows limiting the list of parameters by name using LIKE clause. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.user">user</a></code> | <code>java.lang.String</code> | If parameter_type is set to "SESSION" then user is the name of the user to display session parameters for. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/parameters#id DataSnowflakeParameters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectName`<sup>Optional</sup> <a name="objectName" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.objectName"></a>

```java
public java.lang.String getObjectName();
```

- *Type:* java.lang.String

If parameter_type is set to "OBJECT" then object_name is the name of the object to display object parameters for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/parameters#object_name DataSnowflakeParameters#object_name}

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

If parameter_type is set to "OBJECT" then object_type is the type of object to display object parameters for.

Valid values are any object supported by the IN clause of the [SHOW PARAMETERS](https://docs.snowflake.com/en/sql-reference/sql/show-parameters.html#parameters) statement, including: WAREHOUSE | DATABASE | SCHEMA | TASK | TABLE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/parameters#object_type DataSnowflakeParameters#object_type}

---

##### `parameterType`<sup>Optional</sup> <a name="parameterType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.parameterType"></a>

```java
public java.lang.String getParameterType();
```

- *Type:* java.lang.String

The type of parameter to filter by. Valid values are: "ACCOUNT", "SESSION", "OBJECT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/parameters#parameter_type DataSnowflakeParameters#parameter_type}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

Allows limiting the list of parameters by name using LIKE clause.

Refer to [Limiting the List of Parameters by Name](https://docs.snowflake.com/en/sql-reference/parameters.html#limiting-the-list-of-parameters-by-name)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/parameters#pattern DataSnowflakeParameters#pattern}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

If parameter_type is set to "SESSION" then user is the name of the user to display session parameters for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/parameters#user DataSnowflakeParameters#user}

---

### DataSnowflakeParametersParameters <a name="DataSnowflakeParametersParameters" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_parameters.DataSnowflakeParametersParameters;

DataSnowflakeParametersParameters.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeParametersParametersList <a name="DataSnowflakeParametersParametersList" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_parameters.DataSnowflakeParametersParametersList;

new DataSnowflakeParametersParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.get"></a>

```java
public DataSnowflakeParametersParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeParametersParametersOutputReference <a name="DataSnowflakeParametersParametersOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.data_snowflake_parameters.DataSnowflakeParametersParametersOutputReference;

new DataSnowflakeParametersParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParameters">DataSnowflakeParametersParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.internalValue"></a>

```java
public DataSnowflakeParametersParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParameters">DataSnowflakeParametersParameters</a>

---



