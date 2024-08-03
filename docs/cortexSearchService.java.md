# `cortexSearchService` Submodule <a name="`cortexSearchService` Submodule" id="@cdktf/provider-snowflake.cortexSearchService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CortexSearchService <a name="CortexSearchService" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service snowflake_cortex_search_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.cortex_search_service.CortexSearchService;

CortexSearchService.Builder.create(Construct scope, java.lang.String id)
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
    .on(java.lang.String)
    .query(java.lang.String)
    .schema(java.lang.String)
    .targetLag(java.lang.String)
    .warehouse(java.lang.String)
//  .attributes(java.util.List<java.lang.String>)
//  .comment(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.on">on</a></code> | <code>java.lang.String</code> | Specifies the column to use as the search column for the Cortex search service; must be a text value. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.query">query</a></code> | <code>java.lang.String</code> | Specifies the query to use to populate the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.targetLag">targetLag</a></code> | <code>java.lang.String</code> | Specifies the maximum target lag time for the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.warehouse">warehouse</a></code> | <code>java.lang.String</code> | The warehouse in which to create the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.attributes">attributes</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of columns in the base table to enable filtering on when issuing queries to the service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#id CortexSearchService#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#database CortexSearchService#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the name of the Cortex search service.

The name must be unique for the schema in which the service is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#name CortexSearchService#name}

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.on"></a>

- *Type:* java.lang.String

Specifies the column to use as the search column for the Cortex search service; must be a text value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#on CortexSearchService#on}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.query"></a>

- *Type:* java.lang.String

Specifies the query to use to populate the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#query CortexSearchService#query}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#schema CortexSearchService#schema}

---

##### `targetLag`<sup>Required</sup> <a name="targetLag" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.targetLag"></a>

- *Type:* java.lang.String

Specifies the maximum target lag time for the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#target_lag CortexSearchService#target_lag}

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.warehouse"></a>

- *Type:* java.lang.String

The warehouse in which to create the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#warehouse CortexSearchService#warehouse}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.attributes"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the list of columns in the base table to enable filtering on when issuing queries to the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#attributes CortexSearchService#attributes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#comment CortexSearchService#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#id CortexSearchService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CortexSearchService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.cortex_search_service.CortexSearchService;

CortexSearchService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.cortex_search_service.CortexSearchService;

CortexSearchService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.cortex_search_service.CortexSearchService;

CortexSearchService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.cortex_search_service.CortexSearchService;

CortexSearchService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CortexSearchService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CortexSearchService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CortexSearchService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CortexSearchService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CortexSearchService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.attributesInput">attributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.onInput">onInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.targetLagInput">targetLagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.warehouseInput">warehouseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.attributes">attributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.on">on</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.targetLag">targetLag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.attributesInput"></a>

```java
public java.util.List<java.lang.String> getAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `onInput`<sup>Optional</sup> <a name="onInput" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.onInput"></a>

```java
public java.lang.String getOnInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `targetLagInput`<sup>Optional</sup> <a name="targetLagInput" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.targetLagInput"></a>

```java
public java.lang.String getTargetLagInput();
```

- *Type:* java.lang.String

---

##### `warehouseInput`<sup>Optional</sup> <a name="warehouseInput" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.warehouseInput"></a>

```java
public java.lang.String getWarehouseInput();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.attributes"></a>

```java
public java.util.List<java.lang.String> getAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.on"></a>

```java
public java.lang.String getOn();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `targetLag`<sup>Required</sup> <a name="targetLag" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.targetLag"></a>

```java
public java.lang.String getTargetLag();
```

- *Type:* java.lang.String

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CortexSearchServiceConfig <a name="CortexSearchServiceConfig" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.cortex_search_service.CortexSearchServiceConfig;

CortexSearchServiceConfig.builder()
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
    .on(java.lang.String)
    .query(java.lang.String)
    .schema(java.lang.String)
    .targetLag(java.lang.String)
    .warehouse(java.lang.String)
//  .attributes(java.util.List<java.lang.String>)
//  .comment(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.on">on</a></code> | <code>java.lang.String</code> | Specifies the column to use as the search column for the Cortex search service; must be a text value. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.query">query</a></code> | <code>java.lang.String</code> | Specifies the query to use to populate the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.targetLag">targetLag</a></code> | <code>java.lang.String</code> | Specifies the maximum target lag time for the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | The warehouse in which to create the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.attributes">attributes</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of columns in the base table to enable filtering on when issuing queries to the service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#id CortexSearchService#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#database CortexSearchService#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the Cortex search service.

The name must be unique for the schema in which the service is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#name CortexSearchService#name}

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.on"></a>

```java
public java.lang.String getOn();
```

- *Type:* java.lang.String

Specifies the column to use as the search column for the Cortex search service; must be a text value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#on CortexSearchService#on}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Specifies the query to use to populate the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#query CortexSearchService#query}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#schema CortexSearchService#schema}

---

##### `targetLag`<sup>Required</sup> <a name="targetLag" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.targetLag"></a>

```java
public java.lang.String getTargetLag();
```

- *Type:* java.lang.String

Specifies the maximum target lag time for the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#target_lag CortexSearchService#target_lag}

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

The warehouse in which to create the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#warehouse CortexSearchService#warehouse}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.attributes"></a>

```java
public java.util.List<java.lang.String> getAttributes();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of columns in the base table to enable filtering on when issuing queries to the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#attributes CortexSearchService#attributes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#comment CortexSearchService#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/cortex_search_service#id CortexSearchService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



