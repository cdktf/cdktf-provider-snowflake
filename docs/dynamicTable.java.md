# `dynamicTable` Submodule <a name="`dynamicTable` Submodule" id="@cdktf/provider-snowflake.dynamicTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamicTable <a name="DynamicTable" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table snowflake_dynamic_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.dynamic_table.DynamicTable;

DynamicTable.Builder.create(Construct scope, java.lang.String id)
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
    .query(java.lang.String)
    .schema(java.lang.String)
    .targetLag(DynamicTableTargetLag)
    .warehouse(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .orReplace(java.lang.Boolean)
//  .orReplace(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier (i.e. name) for the dynamic table; must be unique for the schema in which the dynamic table is created. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.query">query</a></code> | <code>java.lang.String</code> | Specifies the query to use to populate the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.targetLag">targetLag</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a></code> | target_lag block. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.warehouse">warehouse</a></code> | <code>java.lang.String</code> | The warehouse in which to create the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#id DynamicTable#id}. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.orReplace">orReplace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to replace the dynamic table if it already exists. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#database DynamicTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier (i.e. name) for the dynamic table; must be unique for the schema in which the dynamic table is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#name DynamicTable#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.query"></a>

- *Type:* java.lang.String

Specifies the query to use to populate the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#query DynamicTable#query}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#schema DynamicTable#schema}

---

##### `targetLag`<sup>Required</sup> <a name="targetLag" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.targetLag"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a>

target_lag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#target_lag DynamicTable#target_lag}

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.warehouse"></a>

- *Type:* java.lang.String

The warehouse in which to create the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#warehouse DynamicTable#warehouse}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#comment DynamicTable#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#id DynamicTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orReplace`<sup>Optional</sup> <a name="orReplace" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.orReplace"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to replace the dynamic table if it already exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#or_replace DynamicTable#or_replace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.putTargetLag">putTargetLag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetOrReplace">resetOrReplace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTargetLag` <a name="putTargetLag" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.putTargetLag"></a>

```java
public void putTargetLag(DynamicTableTargetLag value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.putTargetLag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetId"></a>

```java
public void resetId()
```

##### `resetOrReplace` <a name="resetOrReplace" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetOrReplace"></a>

```java
public void resetOrReplace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DynamicTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.dynamic_table.DynamicTable;

DynamicTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.dynamic_table.DynamicTable;

DynamicTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.dynamic_table.DynamicTable;

DynamicTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.dynamic_table.DynamicTable;

DynamicTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DynamicTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DynamicTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DynamicTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DynamicTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DynamicTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.automaticClustering">automaticClustering</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.bytes">bytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.clusterBy">clusterBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.dataTimestamp">dataTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.isClone">isClone</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.isReplica">isReplica</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.lastSuspendedOn">lastSuspendedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.refreshMode">refreshMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.refreshModeReason">refreshModeReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.rows">rows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schedulingState">schedulingState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.targetLag">targetLag</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference">DynamicTableTargetLagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.orReplaceInput">orReplaceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.targetLagInput">targetLagInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.warehouseInput">warehouseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.orReplace">orReplace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `automaticClustering`<sup>Required</sup> <a name="automaticClustering" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.automaticClustering"></a>

```java
public IResolvable getAutomaticClustering();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.bytes"></a>

```java
public java.lang.Number getBytes();
```

- *Type:* java.lang.Number

---

##### `clusterBy`<sup>Required</sup> <a name="clusterBy" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.clusterBy"></a>

```java
public java.lang.String getClusterBy();
```

- *Type:* java.lang.String

---

##### `dataTimestamp`<sup>Required</sup> <a name="dataTimestamp" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.dataTimestamp"></a>

```java
public java.lang.String getDataTimestamp();
```

- *Type:* java.lang.String

---

##### `isClone`<sup>Required</sup> <a name="isClone" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.isClone"></a>

```java
public IResolvable getIsClone();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isReplica`<sup>Required</sup> <a name="isReplica" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.isReplica"></a>

```java
public IResolvable getIsReplica();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastSuspendedOn`<sup>Required</sup> <a name="lastSuspendedOn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.lastSuspendedOn"></a>

```java
public java.lang.String getLastSuspendedOn();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `refreshMode`<sup>Required</sup> <a name="refreshMode" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.refreshMode"></a>

```java
public java.lang.String getRefreshMode();
```

- *Type:* java.lang.String

---

##### `refreshModeReason`<sup>Required</sup> <a name="refreshModeReason" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.refreshModeReason"></a>

```java
public java.lang.String getRefreshModeReason();
```

- *Type:* java.lang.String

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.rows"></a>

```java
public java.lang.Number getRows();
```

- *Type:* java.lang.Number

---

##### `schedulingState`<sup>Required</sup> <a name="schedulingState" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schedulingState"></a>

```java
public java.lang.String getSchedulingState();
```

- *Type:* java.lang.String

---

##### `targetLag`<sup>Required</sup> <a name="targetLag" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.targetLag"></a>

```java
public DynamicTableTargetLagOutputReference getTargetLag();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference">DynamicTableTargetLagOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orReplaceInput`<sup>Optional</sup> <a name="orReplaceInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.orReplaceInput"></a>

```java
public java.lang.Object getOrReplaceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `targetLagInput`<sup>Optional</sup> <a name="targetLagInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.targetLagInput"></a>

```java
public DynamicTableTargetLag getTargetLagInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a>

---

##### `warehouseInput`<sup>Optional</sup> <a name="warehouseInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.warehouseInput"></a>

```java
public java.lang.String getWarehouseInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orReplace`<sup>Required</sup> <a name="orReplace" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.orReplace"></a>

```java
public java.lang.Object getOrReplace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DynamicTableConfig <a name="DynamicTableConfig" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.dynamic_table.DynamicTableConfig;

DynamicTableConfig.builder()
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
    .query(java.lang.String)
    .schema(java.lang.String)
    .targetLag(DynamicTableTargetLag)
    .warehouse(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .orReplace(java.lang.Boolean)
//  .orReplace(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier (i.e. name) for the dynamic table; must be unique for the schema in which the dynamic table is created. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.query">query</a></code> | <code>java.lang.String</code> | Specifies the query to use to populate the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.targetLag">targetLag</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a></code> | target_lag block. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | The warehouse in which to create the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#id DynamicTable#id}. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.orReplace">orReplace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to replace the dynamic table if it already exists. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#database DynamicTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier (i.e. name) for the dynamic table; must be unique for the schema in which the dynamic table is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#name DynamicTable#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Specifies the query to use to populate the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#query DynamicTable#query}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#schema DynamicTable#schema}

---

##### `targetLag`<sup>Required</sup> <a name="targetLag" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.targetLag"></a>

```java
public DynamicTableTargetLag getTargetLag();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a>

target_lag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#target_lag DynamicTable#target_lag}

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

The warehouse in which to create the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#warehouse DynamicTable#warehouse}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#comment DynamicTable#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#id DynamicTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orReplace`<sup>Optional</sup> <a name="orReplace" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.orReplace"></a>

```java
public java.lang.Object getOrReplace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to replace the dynamic table if it already exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#or_replace DynamicTable#or_replace}

---

### DynamicTableTargetLag <a name="DynamicTableTargetLag" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.dynamic_table.DynamicTableTargetLag;

DynamicTableTargetLag.builder()
//  .downstream(java.lang.Boolean)
//  .downstream(IResolvable)
//  .maximumDuration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag.property.downstream">downstream</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the target lag time is downstream. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag.property.maximumDuration">maximumDuration</a></code> | <code>java.lang.String</code> | Specifies the maximum target lag time for the dynamic table. |

---

##### `downstream`<sup>Optional</sup> <a name="downstream" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag.property.downstream"></a>

```java
public java.lang.Object getDownstream();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the target lag time is downstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#downstream DynamicTable#downstream}

---

##### `maximumDuration`<sup>Optional</sup> <a name="maximumDuration" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag.property.maximumDuration"></a>

```java
public java.lang.String getMaximumDuration();
```

- *Type:* java.lang.String

Specifies the maximum target lag time for the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/dynamic_table#maximum_duration DynamicTable#maximum_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### DynamicTableTargetLagOutputReference <a name="DynamicTableTargetLagOutputReference" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.dynamic_table.DynamicTableTargetLagOutputReference;

new DynamicTableTargetLagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resetDownstream">resetDownstream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resetMaximumDuration">resetMaximumDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDownstream` <a name="resetDownstream" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resetDownstream"></a>

```java
public void resetDownstream()
```

##### `resetMaximumDuration` <a name="resetMaximumDuration" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resetMaximumDuration"></a>

```java
public void resetMaximumDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.downstreamInput">downstreamInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.maximumDurationInput">maximumDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.downstream">downstream</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.maximumDuration">maximumDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `downstreamInput`<sup>Optional</sup> <a name="downstreamInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.downstreamInput"></a>

```java
public java.lang.Object getDownstreamInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maximumDurationInput`<sup>Optional</sup> <a name="maximumDurationInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.maximumDurationInput"></a>

```java
public java.lang.String getMaximumDurationInput();
```

- *Type:* java.lang.String

---

##### `downstream`<sup>Required</sup> <a name="downstream" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.downstream"></a>

```java
public java.lang.Object getDownstream();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maximumDuration`<sup>Required</sup> <a name="maximumDuration" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.maximumDuration"></a>

```java
public java.lang.String getMaximumDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.internalValue"></a>

```java
public DynamicTableTargetLag getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a>

---



