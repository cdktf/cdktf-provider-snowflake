# `semanticView` Submodule <a name="`semanticView` Submodule" id="@cdktf/provider-snowflake.semanticView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SemanticView <a name="SemanticView" id="@cdktf/provider-snowflake.semanticView.SemanticView"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view snowflake_semantic_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticView;

SemanticView.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
    .tables(IResolvable|java.util.List<SemanticViewTables>)
//  .comment(java.lang.String)
//  .dimensions(IResolvable|java.util.List<SemanticViewDimensions>)
//  .facts(IResolvable|java.util.List<SemanticViewFacts>)
//  .id(java.lang.String)
//  .metrics(IResolvable|java.util.List<SemanticViewMetrics>)
//  .relationships(IResolvable|java.util.List<SemanticViewRelationships>)
//  .timeouts(SemanticViewTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the semantic view; |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.tables">tables</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>></code> | tables block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.dimensions">dimensions</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>></code> | dimensions block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.facts">facts</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>></code> | facts block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#id SemanticView#id}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.metrics">metrics</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>></code> | metrics block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.relationships">relationships</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>></code> | relationships block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the semantic view.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#database SemanticView#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the semantic view;

must be unique within the schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#name SemanticView#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the semantic view.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#schema SemanticView#schema}

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.tables"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>>

tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#tables SemanticView#tables}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the semantic view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.dimensions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>>

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#dimensions SemanticView#dimensions}

---

##### `facts`<sup>Optional</sup> <a name="facts" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.facts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>>

facts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#facts SemanticView#facts}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#id SemanticView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.metrics"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#metrics SemanticView#metrics}

---

##### `relationships`<sup>Optional</sup> <a name="relationships" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.relationships"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>>

relationships block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationships SemanticView#relationships}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#timeouts SemanticView#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putFacts">putFacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putMetrics">putMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putRelationships">putRelationships</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putTables">putTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetFacts">resetFacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetMetrics">resetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetRelationships">resetRelationships</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticView.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.semanticView.SemanticView.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.semanticView.SemanticView.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.semanticView.SemanticView.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.semanticView.SemanticView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.semanticView.SemanticView.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.semanticView.SemanticView.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.semanticView.SemanticView.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.semanticView.SemanticView.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.semanticView.SemanticView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.semanticView.SemanticView.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.semanticView.SemanticView.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.semanticView.SemanticView.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDimensions` <a name="putDimensions" id="@cdktf/provider-snowflake.semanticView.SemanticView.putDimensions"></a>

```java
public void putDimensions(IResolvable|java.util.List<SemanticViewDimensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putDimensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>>

---

##### `putFacts` <a name="putFacts" id="@cdktf/provider-snowflake.semanticView.SemanticView.putFacts"></a>

```java
public void putFacts(IResolvable|java.util.List<SemanticViewFacts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putFacts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>>

---

##### `putMetrics` <a name="putMetrics" id="@cdktf/provider-snowflake.semanticView.SemanticView.putMetrics"></a>

```java
public void putMetrics(IResolvable|java.util.List<SemanticViewMetrics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putMetrics.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>>

---

##### `putRelationships` <a name="putRelationships" id="@cdktf/provider-snowflake.semanticView.SemanticView.putRelationships"></a>

```java
public void putRelationships(IResolvable|java.util.List<SemanticViewRelationships> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putRelationships.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>>

---

##### `putTables` <a name="putTables" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTables"></a>

```java
public void putTables(IResolvable|java.util.List<SemanticViewTables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTables.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTimeouts"></a>

```java
public void putTimeouts(SemanticViewTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetComment"></a>

```java
public void resetComment()
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetFacts` <a name="resetFacts" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetFacts"></a>

```java
public void resetFacts()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetId"></a>

```java
public void resetId()
```

##### `resetMetrics` <a name="resetMetrics" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetMetrics"></a>

```java
public void resetMetrics()
```

##### `resetRelationships` <a name="resetRelationships" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetRelationships"></a>

```java
public void resetRelationships()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SemanticView resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.semanticView.SemanticView.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticView;

SemanticView.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.semanticView.SemanticView.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticView;

SemanticView.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticView;

SemanticView.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticView;

SemanticView.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SemanticView.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SemanticView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SemanticView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SemanticView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SemanticView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList">SemanticViewDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.facts">facts</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList">SemanticViewFactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList">SemanticViewMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.relationships">relationships</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList">SemanticViewRelationshipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList">SemanticViewShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.tables">tables</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList">SemanticViewTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference">SemanticViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.dimensionsInput">dimensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.factsInput">factsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.metricsInput">metricsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.relationshipsInput">relationshipsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.tablesInput">tablesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.dimensions"></a>

```java
public SemanticViewDimensionsList getDimensions();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList">SemanticViewDimensionsList</a>

---

##### `facts`<sup>Required</sup> <a name="facts" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.facts"></a>

```java
public SemanticViewFactsList getFacts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList">SemanticViewFactsList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.metrics"></a>

```java
public SemanticViewMetricsList getMetrics();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList">SemanticViewMetricsList</a>

---

##### `relationships`<sup>Required</sup> <a name="relationships" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.relationships"></a>

```java
public SemanticViewRelationshipsList getRelationships();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList">SemanticViewRelationshipsList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.showOutput"></a>

```java
public SemanticViewShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList">SemanticViewShowOutputList</a>

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.tables"></a>

```java
public SemanticViewTablesList getTables();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList">SemanticViewTablesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.timeouts"></a>

```java
public SemanticViewTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference">SemanticViewTimeoutsOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.dimensionsInput"></a>

```java
public IResolvable|java.util.List<SemanticViewDimensions> getDimensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>>

---

##### `factsInput`<sup>Optional</sup> <a name="factsInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.factsInput"></a>

```java
public IResolvable|java.util.List<SemanticViewFacts> getFactsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.metricsInput"></a>

```java
public IResolvable|java.util.List<SemanticViewMetrics> getMetricsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `relationshipsInput`<sup>Optional</sup> <a name="relationshipsInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.relationshipsInput"></a>

```java
public IResolvable|java.util.List<SemanticViewRelationships> getRelationshipsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `tablesInput`<sup>Optional</sup> <a name="tablesInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.tablesInput"></a>

```java
public IResolvable|java.util.List<SemanticViewTables> getTablesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.timeoutsInput"></a>

```java
public IResolvable|SemanticViewTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SemanticViewConfig <a name="SemanticViewConfig" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewConfig;

SemanticViewConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
    .tables(IResolvable|java.util.List<SemanticViewTables>)
//  .comment(java.lang.String)
//  .dimensions(IResolvable|java.util.List<SemanticViewDimensions>)
//  .facts(IResolvable|java.util.List<SemanticViewFacts>)
//  .id(java.lang.String)
//  .metrics(IResolvable|java.util.List<SemanticViewMetrics>)
//  .relationships(IResolvable|java.util.List<SemanticViewRelationships>)
//  .timeouts(SemanticViewTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the semantic view; |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.tables">tables</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>></code> | tables block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.dimensions">dimensions</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>></code> | dimensions block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.facts">facts</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>></code> | facts block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#id SemanticView#id}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.metrics">metrics</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>></code> | metrics block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.relationships">relationships</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>></code> | relationships block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the semantic view.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#database SemanticView#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the semantic view;

must be unique within the schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#name SemanticView#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the semantic view.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#schema SemanticView#schema}

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.tables"></a>

```java
public IResolvable|java.util.List<SemanticViewTables> getTables();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>>

tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#tables SemanticView#tables}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the semantic view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.dimensions"></a>

```java
public IResolvable|java.util.List<SemanticViewDimensions> getDimensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>>

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#dimensions SemanticView#dimensions}

---

##### `facts`<sup>Optional</sup> <a name="facts" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.facts"></a>

```java
public IResolvable|java.util.List<SemanticViewFacts> getFacts();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>>

facts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#facts SemanticView#facts}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#id SemanticView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.metrics"></a>

```java
public IResolvable|java.util.List<SemanticViewMetrics> getMetrics();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#metrics SemanticView#metrics}

---

##### `relationships`<sup>Optional</sup> <a name="relationships" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.relationships"></a>

```java
public IResolvable|java.util.List<SemanticViewRelationships> getRelationships();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>>

relationships block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationships SemanticView#relationships}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.timeouts"></a>

```java
public SemanticViewTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#timeouts SemanticView#timeouts}

---

### SemanticViewDimensions <a name="SemanticViewDimensions" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewDimensions;

SemanticViewDimensions.builder()
    .qualifiedExpressionName(java.lang.String)
    .sqlExpression(java.lang.String)
//  .comment(java.lang.String)
//  .synonym(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.qualifiedExpressionName">qualifiedExpressionName</a></code> | <code>java.lang.String</code> | Specifies a qualified name for the dimension, including the table name and a unique identifier for the dimension: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.sqlExpression">sqlExpression</a></code> | <code>java.lang.String</code> | The SQL expression used to compute the dimension. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the dimension. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.synonym">synonym</a></code> | <code>java.util.List<java.lang.String></code> | List of synonyms for the dimension. |

---

##### `qualifiedExpressionName`<sup>Required</sup> <a name="qualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.qualifiedExpressionName"></a>

```java
public java.lang.String getQualifiedExpressionName();
```

- *Type:* java.lang.String

Specifies a qualified name for the dimension, including the table name and a unique identifier for the dimension: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.sqlExpression"></a>

```java
public java.lang.String getSqlExpression();
```

- *Type:* java.lang.String

The SQL expression used to compute the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `synonym`<sup>Optional</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.synonym"></a>

```java
public java.util.List<java.lang.String> getSynonym();
```

- *Type:* java.util.List<java.lang.String>

List of synonyms for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

### SemanticViewFacts <a name="SemanticViewFacts" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewFacts;

SemanticViewFacts.builder()
    .qualifiedExpressionName(java.lang.String)
    .sqlExpression(java.lang.String)
//  .comment(java.lang.String)
//  .synonym(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.qualifiedExpressionName">qualifiedExpressionName</a></code> | <code>java.lang.String</code> | Specifies a qualified name for the fact, including the table name and a unique identifier for the fact: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.sqlExpression">sqlExpression</a></code> | <code>java.lang.String</code> | The SQL expression used to compute the fact. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the fact. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.synonym">synonym</a></code> | <code>java.util.List<java.lang.String></code> | List of synonyms for the fact. |

---

##### `qualifiedExpressionName`<sup>Required</sup> <a name="qualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.qualifiedExpressionName"></a>

```java
public java.lang.String getQualifiedExpressionName();
```

- *Type:* java.lang.String

Specifies a qualified name for the fact, including the table name and a unique identifier for the fact: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.sqlExpression"></a>

```java
public java.lang.String getSqlExpression();
```

- *Type:* java.lang.String

The SQL expression used to compute the fact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the fact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `synonym`<sup>Optional</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.synonym"></a>

```java
public java.util.List<java.lang.String> getSynonym();
```

- *Type:* java.util.List<java.lang.String>

List of synonyms for the fact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

### SemanticViewMetrics <a name="SemanticViewMetrics" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewMetrics;

SemanticViewMetrics.builder()
//  .semanticExpression(SemanticViewMetricsSemanticExpression)
//  .windowFunction(SemanticViewMetricsWindowFunction)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.property.semanticExpression">semanticExpression</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a></code> | semantic_expression block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.property.windowFunction">windowFunction</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a></code> | window_function block. |

---

##### `semanticExpression`<sup>Optional</sup> <a name="semanticExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.property.semanticExpression"></a>

```java
public SemanticViewMetricsSemanticExpression getSemanticExpression();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a>

semantic_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#semantic_expression SemanticView#semantic_expression}

---

##### `windowFunction`<sup>Optional</sup> <a name="windowFunction" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.property.windowFunction"></a>

```java
public SemanticViewMetricsWindowFunction getWindowFunction();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a>

window_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#window_function SemanticView#window_function}

---

### SemanticViewMetricsSemanticExpression <a name="SemanticViewMetricsSemanticExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewMetricsSemanticExpression;

SemanticViewMetricsSemanticExpression.builder()
    .qualifiedExpressionName(java.lang.String)
    .sqlExpression(java.lang.String)
//  .comment(java.lang.String)
//  .synonym(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.qualifiedExpressionName">qualifiedExpressionName</a></code> | <code>java.lang.String</code> | Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.sqlExpression">sqlExpression</a></code> | <code>java.lang.String</code> | The SQL expression used to compute the metric. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the semantic expression. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.synonym">synonym</a></code> | <code>java.util.List<java.lang.String></code> | List of synonyms for this semantic expression. |

---

##### `qualifiedExpressionName`<sup>Required</sup> <a name="qualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.qualifiedExpressionName"></a>

```java
public java.lang.String getQualifiedExpressionName();
```

- *Type:* java.lang.String

Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.sqlExpression"></a>

```java
public java.lang.String getSqlExpression();
```

- *Type:* java.lang.String

The SQL expression used to compute the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the semantic expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `synonym`<sup>Optional</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.synonym"></a>

```java
public java.util.List<java.lang.String> getSynonym();
```

- *Type:* java.util.List<java.lang.String>

List of synonyms for this semantic expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

### SemanticViewMetricsWindowFunction <a name="SemanticViewMetricsWindowFunction" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewMetricsWindowFunction;

SemanticViewMetricsWindowFunction.builder()
    .overClause(SemanticViewMetricsWindowFunctionOverClause)
    .qualifiedExpressionName(java.lang.String)
    .sqlExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.overClause">overClause</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a></code> | over_clause block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.qualifiedExpressionName">qualifiedExpressionName</a></code> | <code>java.lang.String</code> | Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.sqlExpression">sqlExpression</a></code> | <code>java.lang.String</code> | The SQL expression used to compute the metric following the `<window_function>(<metric>)` format. |

---

##### `overClause`<sup>Required</sup> <a name="overClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.overClause"></a>

```java
public SemanticViewMetricsWindowFunctionOverClause getOverClause();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a>

over_clause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#over_clause SemanticView#over_clause}

---

##### `qualifiedExpressionName`<sup>Required</sup> <a name="qualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.qualifiedExpressionName"></a>

```java
public java.lang.String getQualifiedExpressionName();
```

- *Type:* java.lang.String

Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.sqlExpression"></a>

```java
public java.lang.String getSqlExpression();
```

- *Type:* java.lang.String

The SQL expression used to compute the metric following the `<window_function>(<metric>)` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

### SemanticViewMetricsWindowFunctionOverClause <a name="SemanticViewMetricsWindowFunctionOverClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewMetricsWindowFunctionOverClause;

SemanticViewMetricsWindowFunctionOverClause.builder()
//  .orderBy(java.lang.String)
//  .partitionBy(java.lang.String)
//  .windowFrameClause(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | Specifies an order by clause. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.partitionBy">partitionBy</a></code> | <code>java.lang.String</code> | Specifies a partition by clause. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.windowFrameClause">windowFrameClause</a></code> | <code>java.lang.String</code> | Specifies a window frame clause. |

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

Specifies an order by clause.

It must be a complete SQL expression, including any `[ ASC | DESC ] [ NULLS { FIRST | LAST } ]` modifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#order_by SemanticView#order_by}

---

##### `partitionBy`<sup>Optional</sup> <a name="partitionBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.partitionBy"></a>

```java
public java.lang.String getPartitionBy();
```

- *Type:* java.lang.String

Specifies a partition by clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#partition_by SemanticView#partition_by}

---

##### `windowFrameClause`<sup>Optional</sup> <a name="windowFrameClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.windowFrameClause"></a>

```java
public java.lang.String getWindowFrameClause();
```

- *Type:* java.lang.String

Specifies a window frame clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#window_frame_clause SemanticView#window_frame_clause}

---

### SemanticViewRelationships <a name="SemanticViewRelationships" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewRelationships;

SemanticViewRelationships.builder()
    .referencedTableNameOrAlias(SemanticViewRelationshipsReferencedTableNameOrAlias)
    .relationshipColumns(java.util.List<java.lang.String>)
    .tableNameOrAlias(SemanticViewRelationshipsTableNameOrAlias)
//  .referencedRelationshipColumns(java.util.List<java.lang.String>)
//  .relationshipIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.referencedTableNameOrAlias">referencedTableNameOrAlias</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a></code> | referenced_table_name_or_alias block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.relationshipColumns">relationshipColumns</a></code> | <code>java.util.List<java.lang.String></code> | Specifies one or more columns in the first logical table that refers to columns in another logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.tableNameOrAlias">tableNameOrAlias</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a></code> | table_name_or_alias block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.referencedRelationshipColumns">referencedRelationshipColumns</a></code> | <code>java.util.List<java.lang.String></code> | Specifies one or more columns in the second logical table that are referred to by the first logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.relationshipIdentifier">relationshipIdentifier</a></code> | <code>java.lang.String</code> | Specifies an optional identifier for the relationship. |

---

##### `referencedTableNameOrAlias`<sup>Required</sup> <a name="referencedTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.referencedTableNameOrAlias"></a>

```java
public SemanticViewRelationshipsReferencedTableNameOrAlias getReferencedTableNameOrAlias();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a>

referenced_table_name_or_alias block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#referenced_table_name_or_alias SemanticView#referenced_table_name_or_alias}

---

##### `relationshipColumns`<sup>Required</sup> <a name="relationshipColumns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.relationshipColumns"></a>

```java
public java.util.List<java.lang.String> getRelationshipColumns();
```

- *Type:* java.util.List<java.lang.String>

Specifies one or more columns in the first logical table that refers to columns in another logical table.

Column names in this list are case-sensitive - the provider uses double quotes to wrap each of them when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationship_columns SemanticView#relationship_columns}

---

##### `tableNameOrAlias`<sup>Required</sup> <a name="tableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.tableNameOrAlias"></a>

```java
public SemanticViewRelationshipsTableNameOrAlias getTableNameOrAlias();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a>

table_name_or_alias block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name_or_alias SemanticView#table_name_or_alias}

---

##### `referencedRelationshipColumns`<sup>Optional</sup> <a name="referencedRelationshipColumns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.referencedRelationshipColumns"></a>

```java
public java.util.List<java.lang.String> getReferencedRelationshipColumns();
```

- *Type:* java.util.List<java.lang.String>

Specifies one or more columns in the second logical table that are referred to by the first logical table.

Column names in this list are case-sensitive - the provider uses double quotes to wrap each of them when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#referenced_relationship_columns SemanticView#referenced_relationship_columns}

---

##### `relationshipIdentifier`<sup>Optional</sup> <a name="relationshipIdentifier" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.relationshipIdentifier"></a>

```java
public java.lang.String getRelationshipIdentifier();
```

- *Type:* java.lang.String

Specifies an optional identifier for the relationship.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationship_identifier SemanticView#relationship_identifier}

---

### SemanticViewRelationshipsReferencedTableNameOrAlias <a name="SemanticViewRelationshipsReferencedTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewRelationshipsReferencedTableNameOrAlias;

SemanticViewRelationshipsReferencedTableNameOrAlias.builder()
//  .tableAlias(java.lang.String)
//  .tableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.property.tableAlias">tableAlias</a></code> | <code>java.lang.String</code> | The alias used for the logical table, cannot be used in combination with the `table_name`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.property.tableName">tableName</a></code> | <code>java.lang.String</code> | The name of the logical table, cannot be used in combination with the `table_alias`. |

---

##### `tableAlias`<sup>Optional</sup> <a name="tableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.property.tableAlias"></a>

```java
public java.lang.String getTableAlias();
```

- *Type:* java.lang.String

The alias used for the logical table, cannot be used in combination with the `table_name`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

The name of the logical table, cannot be used in combination with the `table_alias`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}

---

### SemanticViewRelationshipsTableNameOrAlias <a name="SemanticViewRelationshipsTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewRelationshipsTableNameOrAlias;

SemanticViewRelationshipsTableNameOrAlias.builder()
//  .tableAlias(java.lang.String)
//  .tableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.property.tableAlias">tableAlias</a></code> | <code>java.lang.String</code> | The alias used for the logical table, cannot be used in combination with the `table_name`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.property.tableName">tableName</a></code> | <code>java.lang.String</code> | The name of the logical table, cannot be used in combination with the `table_alias`. |

---

##### `tableAlias`<sup>Optional</sup> <a name="tableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.property.tableAlias"></a>

```java
public java.lang.String getTableAlias();
```

- *Type:* java.lang.String

The alias used for the logical table, cannot be used in combination with the `table_name`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

The name of the logical table, cannot be used in combination with the `table_alias`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}

---

### SemanticViewShowOutput <a name="SemanticViewShowOutput" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewShowOutput;

SemanticViewShowOutput.builder()
    .build();
```


### SemanticViewTables <a name="SemanticViewTables" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewTables;

SemanticViewTables.builder()
    .tableAlias(java.lang.String)
    .tableName(java.lang.String)
//  .comment(java.lang.String)
//  .primaryKey(java.util.List<java.lang.String>)
//  .synonym(java.util.List<java.lang.String>)
//  .unique(IResolvable|java.util.List<SemanticViewTablesUnique>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.tableAlias">tableAlias</a></code> | <code>java.lang.String</code> | Specifies an alias for a logical table in the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Specifies an identifier for the logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.primaryKey">primaryKey</a></code> | <code>java.util.List<java.lang.String></code> | Definitions of primary keys in the logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.synonym">synonym</a></code> | <code>java.util.List<java.lang.String></code> | List of synonyms for the logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.unique">unique</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>></code> | unique block. |

---

##### `tableAlias`<sup>Required</sup> <a name="tableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.tableAlias"></a>

```java
public java.lang.String getTableAlias();
```

- *Type:* java.lang.String

Specifies an alias for a logical table in the semantic view.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Specifies an identifier for the logical table.

Example: `"\"<db_name>\".\"<schema_name>\".\"<table_name>\""`. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the logical table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `primaryKey`<sup>Optional</sup> <a name="primaryKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.primaryKey"></a>

```java
public java.util.List<java.lang.String> getPrimaryKey();
```

- *Type:* java.util.List<java.lang.String>

Definitions of primary keys in the logical table.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#primary_key SemanticView#primary_key}

---

##### `synonym`<sup>Optional</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.synonym"></a>

```java
public java.util.List<java.lang.String> getSynonym();
```

- *Type:* java.util.List<java.lang.String>

List of synonyms for the logical table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.unique"></a>

```java
public IResolvable|java.util.List<SemanticViewTablesUnique> getUnique();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>>

unique block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#unique SemanticView#unique}

---

### SemanticViewTablesUnique <a name="SemanticViewTablesUnique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewTablesUnique;

SemanticViewTablesUnique.builder()
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Unique key combinations in the logical table. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Unique key combinations in the logical table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#values SemanticView#values}

---

### SemanticViewTimeouts <a name="SemanticViewTimeouts" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewTimeouts;

SemanticViewTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#create SemanticView#create}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#delete SemanticView#delete}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#read SemanticView#read}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#update SemanticView#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#create SemanticView#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#delete SemanticView#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#read SemanticView#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#update SemanticView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SemanticViewDimensionsList <a name="SemanticViewDimensionsList" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewDimensionsList;

new SemanticViewDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.get"></a>

```java
public SemanticViewDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SemanticViewDimensions> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>>

---


### SemanticViewDimensionsOutputReference <a name="SemanticViewDimensionsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewDimensionsOutputReference;

new SemanticViewDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resetSynonym">resetSynonym</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetSynonym` <a name="resetSynonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resetSynonym"></a>

```java
public void resetSynonym()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.qualifiedExpressionNameInput">qualifiedExpressionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.sqlExpressionInput">sqlExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.synonymInput">synonymInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.qualifiedExpressionName">qualifiedExpressionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.synonym">synonym</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `qualifiedExpressionNameInput`<sup>Optional</sup> <a name="qualifiedExpressionNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.qualifiedExpressionNameInput"></a>

```java
public java.lang.String getQualifiedExpressionNameInput();
```

- *Type:* java.lang.String

---

##### `sqlExpressionInput`<sup>Optional</sup> <a name="sqlExpressionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.sqlExpressionInput"></a>

```java
public java.lang.String getSqlExpressionInput();
```

- *Type:* java.lang.String

---

##### `synonymInput`<sup>Optional</sup> <a name="synonymInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.synonymInput"></a>

```java
public java.util.List<java.lang.String> getSynonymInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `qualifiedExpressionName`<sup>Required</sup> <a name="qualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.qualifiedExpressionName"></a>

```java
public java.lang.String getQualifiedExpressionName();
```

- *Type:* java.lang.String

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.sqlExpression"></a>

```java
public java.lang.String getSqlExpression();
```

- *Type:* java.lang.String

---

##### `synonym`<sup>Required</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.synonym"></a>

```java
public java.util.List<java.lang.String> getSynonym();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SemanticViewDimensions getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>

---


### SemanticViewFactsList <a name="SemanticViewFactsList" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewFactsList;

new SemanticViewFactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.get"></a>

```java
public SemanticViewFactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SemanticViewFacts> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>>

---


### SemanticViewFactsOutputReference <a name="SemanticViewFactsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewFactsOutputReference;

new SemanticViewFactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resetSynonym">resetSynonym</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetSynonym` <a name="resetSynonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resetSynonym"></a>

```java
public void resetSynonym()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.qualifiedExpressionNameInput">qualifiedExpressionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.sqlExpressionInput">sqlExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.synonymInput">synonymInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.qualifiedExpressionName">qualifiedExpressionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.synonym">synonym</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `qualifiedExpressionNameInput`<sup>Optional</sup> <a name="qualifiedExpressionNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.qualifiedExpressionNameInput"></a>

```java
public java.lang.String getQualifiedExpressionNameInput();
```

- *Type:* java.lang.String

---

##### `sqlExpressionInput`<sup>Optional</sup> <a name="sqlExpressionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.sqlExpressionInput"></a>

```java
public java.lang.String getSqlExpressionInput();
```

- *Type:* java.lang.String

---

##### `synonymInput`<sup>Optional</sup> <a name="synonymInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.synonymInput"></a>

```java
public java.util.List<java.lang.String> getSynonymInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `qualifiedExpressionName`<sup>Required</sup> <a name="qualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.qualifiedExpressionName"></a>

```java
public java.lang.String getQualifiedExpressionName();
```

- *Type:* java.lang.String

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.sqlExpression"></a>

```java
public java.lang.String getSqlExpression();
```

- *Type:* java.lang.String

---

##### `synonym`<sup>Required</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.synonym"></a>

```java
public java.util.List<java.lang.String> getSynonym();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.internalValue"></a>

```java
public IResolvable|SemanticViewFacts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>

---


### SemanticViewMetricsList <a name="SemanticViewMetricsList" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewMetricsList;

new SemanticViewMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.get"></a>

```java
public SemanticViewMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SemanticViewMetrics> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>>

---


### SemanticViewMetricsOutputReference <a name="SemanticViewMetricsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewMetricsOutputReference;

new SemanticViewMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putSemanticExpression">putSemanticExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putWindowFunction">putWindowFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resetSemanticExpression">resetSemanticExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resetWindowFunction">resetWindowFunction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSemanticExpression` <a name="putSemanticExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putSemanticExpression"></a>

```java
public void putSemanticExpression(SemanticViewMetricsSemanticExpression value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putSemanticExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a>

---

##### `putWindowFunction` <a name="putWindowFunction" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putWindowFunction"></a>

```java
public void putWindowFunction(SemanticViewMetricsWindowFunction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putWindowFunction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a>

---

##### `resetSemanticExpression` <a name="resetSemanticExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resetSemanticExpression"></a>

```java
public void resetSemanticExpression()
```

##### `resetWindowFunction` <a name="resetWindowFunction" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resetWindowFunction"></a>

```java
public void resetWindowFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.semanticExpression">semanticExpression</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference">SemanticViewMetricsSemanticExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.windowFunction">windowFunction</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference">SemanticViewMetricsWindowFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.semanticExpressionInput">semanticExpressionInput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.windowFunctionInput">windowFunctionInput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `semanticExpression`<sup>Required</sup> <a name="semanticExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.semanticExpression"></a>

```java
public SemanticViewMetricsSemanticExpressionOutputReference getSemanticExpression();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference">SemanticViewMetricsSemanticExpressionOutputReference</a>

---

##### `windowFunction`<sup>Required</sup> <a name="windowFunction" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.windowFunction"></a>

```java
public SemanticViewMetricsWindowFunctionOutputReference getWindowFunction();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference">SemanticViewMetricsWindowFunctionOutputReference</a>

---

##### `semanticExpressionInput`<sup>Optional</sup> <a name="semanticExpressionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.semanticExpressionInput"></a>

```java
public SemanticViewMetricsSemanticExpression getSemanticExpressionInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a>

---

##### `windowFunctionInput`<sup>Optional</sup> <a name="windowFunctionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.windowFunctionInput"></a>

```java
public SemanticViewMetricsWindowFunction getWindowFunctionInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|SemanticViewMetrics getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>

---


### SemanticViewMetricsSemanticExpressionOutputReference <a name="SemanticViewMetricsSemanticExpressionOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewMetricsSemanticExpressionOutputReference;

new SemanticViewMetricsSemanticExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resetSynonym">resetSynonym</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetSynonym` <a name="resetSynonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resetSynonym"></a>

```java
public void resetSynonym()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.qualifiedExpressionNameInput">qualifiedExpressionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.sqlExpressionInput">sqlExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.synonymInput">synonymInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.qualifiedExpressionName">qualifiedExpressionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.synonym">synonym</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `qualifiedExpressionNameInput`<sup>Optional</sup> <a name="qualifiedExpressionNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.qualifiedExpressionNameInput"></a>

```java
public java.lang.String getQualifiedExpressionNameInput();
```

- *Type:* java.lang.String

---

##### `sqlExpressionInput`<sup>Optional</sup> <a name="sqlExpressionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.sqlExpressionInput"></a>

```java
public java.lang.String getSqlExpressionInput();
```

- *Type:* java.lang.String

---

##### `synonymInput`<sup>Optional</sup> <a name="synonymInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.synonymInput"></a>

```java
public java.util.List<java.lang.String> getSynonymInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `qualifiedExpressionName`<sup>Required</sup> <a name="qualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.qualifiedExpressionName"></a>

```java
public java.lang.String getQualifiedExpressionName();
```

- *Type:* java.lang.String

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.sqlExpression"></a>

```java
public java.lang.String getSqlExpression();
```

- *Type:* java.lang.String

---

##### `synonym`<sup>Required</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.synonym"></a>

```java
public java.util.List<java.lang.String> getSynonym();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.internalValue"></a>

```java
public SemanticViewMetricsSemanticExpression getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a>

---


### SemanticViewMetricsWindowFunctionOutputReference <a name="SemanticViewMetricsWindowFunctionOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewMetricsWindowFunctionOutputReference;

new SemanticViewMetricsWindowFunctionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.putOverClause">putOverClause</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOverClause` <a name="putOverClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.putOverClause"></a>

```java
public void putOverClause(SemanticViewMetricsWindowFunctionOverClause value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.putOverClause.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.overClause">overClause</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference">SemanticViewMetricsWindowFunctionOverClauseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.overClauseInput">overClauseInput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.qualifiedExpressionNameInput">qualifiedExpressionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.sqlExpressionInput">sqlExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.qualifiedExpressionName">qualifiedExpressionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `overClause`<sup>Required</sup> <a name="overClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.overClause"></a>

```java
public SemanticViewMetricsWindowFunctionOverClauseOutputReference getOverClause();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference">SemanticViewMetricsWindowFunctionOverClauseOutputReference</a>

---

##### `overClauseInput`<sup>Optional</sup> <a name="overClauseInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.overClauseInput"></a>

```java
public SemanticViewMetricsWindowFunctionOverClause getOverClauseInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a>

---

##### `qualifiedExpressionNameInput`<sup>Optional</sup> <a name="qualifiedExpressionNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.qualifiedExpressionNameInput"></a>

```java
public java.lang.String getQualifiedExpressionNameInput();
```

- *Type:* java.lang.String

---

##### `sqlExpressionInput`<sup>Optional</sup> <a name="sqlExpressionInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.sqlExpressionInput"></a>

```java
public java.lang.String getSqlExpressionInput();
```

- *Type:* java.lang.String

---

##### `qualifiedExpressionName`<sup>Required</sup> <a name="qualifiedExpressionName" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.qualifiedExpressionName"></a>

```java
public java.lang.String getQualifiedExpressionName();
```

- *Type:* java.lang.String

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.sqlExpression"></a>

```java
public java.lang.String getSqlExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.internalValue"></a>

```java
public SemanticViewMetricsWindowFunction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a>

---


### SemanticViewMetricsWindowFunctionOverClauseOutputReference <a name="SemanticViewMetricsWindowFunctionOverClauseOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewMetricsWindowFunctionOverClauseOutputReference;

new SemanticViewMetricsWindowFunctionOverClauseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetPartitionBy">resetPartitionBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetWindowFrameClause">resetWindowFrameClause</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetOrderBy"></a>

```java
public void resetOrderBy()
```

##### `resetPartitionBy` <a name="resetPartitionBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetPartitionBy"></a>

```java
public void resetPartitionBy()
```

##### `resetWindowFrameClause` <a name="resetWindowFrameClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetWindowFrameClause"></a>

```java
public void resetWindowFrameClause()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.orderByInput">orderByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.partitionByInput">partitionByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.windowFrameClauseInput">windowFrameClauseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.partitionBy">partitionBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.windowFrameClause">windowFrameClause</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.orderByInput"></a>

```java
public java.lang.String getOrderByInput();
```

- *Type:* java.lang.String

---

##### `partitionByInput`<sup>Optional</sup> <a name="partitionByInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.partitionByInput"></a>

```java
public java.lang.String getPartitionByInput();
```

- *Type:* java.lang.String

---

##### `windowFrameClauseInput`<sup>Optional</sup> <a name="windowFrameClauseInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.windowFrameClauseInput"></a>

```java
public java.lang.String getWindowFrameClauseInput();
```

- *Type:* java.lang.String

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

---

##### `partitionBy`<sup>Required</sup> <a name="partitionBy" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.partitionBy"></a>

```java
public java.lang.String getPartitionBy();
```

- *Type:* java.lang.String

---

##### `windowFrameClause`<sup>Required</sup> <a name="windowFrameClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.windowFrameClause"></a>

```java
public java.lang.String getWindowFrameClause();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.internalValue"></a>

```java
public SemanticViewMetricsWindowFunctionOverClause getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a>

---


### SemanticViewRelationshipsList <a name="SemanticViewRelationshipsList" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewRelationshipsList;

new SemanticViewRelationshipsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.get"></a>

```java
public SemanticViewRelationshipsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SemanticViewRelationships> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>>

---


### SemanticViewRelationshipsOutputReference <a name="SemanticViewRelationshipsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewRelationshipsOutputReference;

new SemanticViewRelationshipsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putReferencedTableNameOrAlias">putReferencedTableNameOrAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putTableNameOrAlias">putTableNameOrAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resetReferencedRelationshipColumns">resetReferencedRelationshipColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resetRelationshipIdentifier">resetRelationshipIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReferencedTableNameOrAlias` <a name="putReferencedTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putReferencedTableNameOrAlias"></a>

```java
public void putReferencedTableNameOrAlias(SemanticViewRelationshipsReferencedTableNameOrAlias value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putReferencedTableNameOrAlias.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a>

---

##### `putTableNameOrAlias` <a name="putTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putTableNameOrAlias"></a>

```java
public void putTableNameOrAlias(SemanticViewRelationshipsTableNameOrAlias value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putTableNameOrAlias.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a>

---

##### `resetReferencedRelationshipColumns` <a name="resetReferencedRelationshipColumns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resetReferencedRelationshipColumns"></a>

```java
public void resetReferencedRelationshipColumns()
```

##### `resetRelationshipIdentifier` <a name="resetRelationshipIdentifier" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resetRelationshipIdentifier"></a>

```java
public void resetRelationshipIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedTableNameOrAlias">referencedTableNameOrAlias</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference">SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.tableNameOrAlias">tableNameOrAlias</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference">SemanticViewRelationshipsTableNameOrAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedRelationshipColumnsInput">referencedRelationshipColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedTableNameOrAliasInput">referencedTableNameOrAliasInput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipColumnsInput">relationshipColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipIdentifierInput">relationshipIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.tableNameOrAliasInput">tableNameOrAliasInput</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedRelationshipColumns">referencedRelationshipColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipColumns">relationshipColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipIdentifier">relationshipIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `referencedTableNameOrAlias`<sup>Required</sup> <a name="referencedTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedTableNameOrAlias"></a>

```java
public SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference getReferencedTableNameOrAlias();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference">SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference</a>

---

##### `tableNameOrAlias`<sup>Required</sup> <a name="tableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.tableNameOrAlias"></a>

```java
public SemanticViewRelationshipsTableNameOrAliasOutputReference getTableNameOrAlias();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference">SemanticViewRelationshipsTableNameOrAliasOutputReference</a>

---

##### `referencedRelationshipColumnsInput`<sup>Optional</sup> <a name="referencedRelationshipColumnsInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedRelationshipColumnsInput"></a>

```java
public java.util.List<java.lang.String> getReferencedRelationshipColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `referencedTableNameOrAliasInput`<sup>Optional</sup> <a name="referencedTableNameOrAliasInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedTableNameOrAliasInput"></a>

```java
public SemanticViewRelationshipsReferencedTableNameOrAlias getReferencedTableNameOrAliasInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a>

---

##### `relationshipColumnsInput`<sup>Optional</sup> <a name="relationshipColumnsInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipColumnsInput"></a>

```java
public java.util.List<java.lang.String> getRelationshipColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `relationshipIdentifierInput`<sup>Optional</sup> <a name="relationshipIdentifierInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipIdentifierInput"></a>

```java
public java.lang.String getRelationshipIdentifierInput();
```

- *Type:* java.lang.String

---

##### `tableNameOrAliasInput`<sup>Optional</sup> <a name="tableNameOrAliasInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.tableNameOrAliasInput"></a>

```java
public SemanticViewRelationshipsTableNameOrAlias getTableNameOrAliasInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a>

---

##### `referencedRelationshipColumns`<sup>Required</sup> <a name="referencedRelationshipColumns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedRelationshipColumns"></a>

```java
public java.util.List<java.lang.String> getReferencedRelationshipColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `relationshipColumns`<sup>Required</sup> <a name="relationshipColumns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipColumns"></a>

```java
public java.util.List<java.lang.String> getRelationshipColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `relationshipIdentifier`<sup>Required</sup> <a name="relationshipIdentifier" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipIdentifier"></a>

```java
public java.lang.String getRelationshipIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.internalValue"></a>

```java
public IResolvable|SemanticViewRelationships getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>

---


### SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference <a name="SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference;

new SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resetTableAlias">resetTableAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTableAlias` <a name="resetTableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resetTableAlias"></a>

```java
public void resetTableAlias()
```

##### `resetTableName` <a name="resetTableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resetTableName"></a>

```java
public void resetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableAliasInput">tableAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableAlias">tableAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tableAliasInput`<sup>Optional</sup> <a name="tableAliasInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableAliasInput"></a>

```java
public java.lang.String getTableAliasInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `tableAlias`<sup>Required</sup> <a name="tableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableAlias"></a>

```java
public java.lang.String getTableAlias();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.internalValue"></a>

```java
public SemanticViewRelationshipsReferencedTableNameOrAlias getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a>

---


### SemanticViewRelationshipsTableNameOrAliasOutputReference <a name="SemanticViewRelationshipsTableNameOrAliasOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewRelationshipsTableNameOrAliasOutputReference;

new SemanticViewRelationshipsTableNameOrAliasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resetTableAlias">resetTableAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTableAlias` <a name="resetTableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resetTableAlias"></a>

```java
public void resetTableAlias()
```

##### `resetTableName` <a name="resetTableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resetTableName"></a>

```java
public void resetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableAliasInput">tableAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableAlias">tableAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tableAliasInput`<sup>Optional</sup> <a name="tableAliasInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableAliasInput"></a>

```java
public java.lang.String getTableAliasInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `tableAlias`<sup>Required</sup> <a name="tableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableAlias"></a>

```java
public java.lang.String getTableAlias();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.internalValue"></a>

```java
public SemanticViewRelationshipsTableNameOrAlias getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a>

---


### SemanticViewShowOutputList <a name="SemanticViewShowOutputList" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewShowOutputList;

new SemanticViewShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.get"></a>

```java
public SemanticViewShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SemanticViewShowOutputOutputReference <a name="SemanticViewShowOutputOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewShowOutputOutputReference;

new SemanticViewShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.extension">extension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutput">SemanticViewShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.extension"></a>

```java
public java.lang.String getExtension();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.internalValue"></a>

```java
public SemanticViewShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutput">SemanticViewShowOutput</a>

---


### SemanticViewTablesList <a name="SemanticViewTablesList" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewTablesList;

new SemanticViewTablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.get"></a>

```java
public SemanticViewTablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SemanticViewTables> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>>

---


### SemanticViewTablesOutputReference <a name="SemanticViewTablesOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewTablesOutputReference;

new SemanticViewTablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.putUnique">putUnique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetPrimaryKey">resetPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetSynonym">resetSynonym</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetUnique">resetUnique</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUnique` <a name="putUnique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.putUnique"></a>

```java
public void putUnique(IResolvable|java.util.List<SemanticViewTablesUnique> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.putUnique.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetPrimaryKey` <a name="resetPrimaryKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetPrimaryKey"></a>

```java
public void resetPrimaryKey()
```

##### `resetSynonym` <a name="resetSynonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetSynonym"></a>

```java
public void resetSynonym()
```

##### `resetUnique` <a name="resetUnique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetUnique"></a>

```java
public void resetUnique()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.unique">unique</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList">SemanticViewTablesUniqueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.primaryKeyInput">primaryKeyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.synonymInput">synonymInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableAliasInput">tableAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.uniqueInput">uniqueInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.primaryKey">primaryKey</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.synonym">synonym</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableAlias">tableAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.unique"></a>

```java
public SemanticViewTablesUniqueList getUnique();
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList">SemanticViewTablesUniqueList</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.primaryKeyInput"></a>

```java
public java.util.List<java.lang.String> getPrimaryKeyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `synonymInput`<sup>Optional</sup> <a name="synonymInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.synonymInput"></a>

```java
public java.util.List<java.lang.String> getSynonymInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tableAliasInput`<sup>Optional</sup> <a name="tableAliasInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableAliasInput"></a>

```java
public java.lang.String getTableAliasInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `uniqueInput`<sup>Optional</sup> <a name="uniqueInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.uniqueInput"></a>

```java
public IResolvable|java.util.List<SemanticViewTablesUnique> getUniqueInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.primaryKey"></a>

```java
public java.util.List<java.lang.String> getPrimaryKey();
```

- *Type:* java.util.List<java.lang.String>

---

##### `synonym`<sup>Required</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.synonym"></a>

```java
public java.util.List<java.lang.String> getSynonym();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tableAlias`<sup>Required</sup> <a name="tableAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableAlias"></a>

```java
public java.lang.String getTableAlias();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.internalValue"></a>

```java
public IResolvable|SemanticViewTables getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>

---


### SemanticViewTablesUniqueList <a name="SemanticViewTablesUniqueList" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewTablesUniqueList;

new SemanticViewTablesUniqueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.get"></a>

```java
public SemanticViewTablesUniqueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SemanticViewTablesUnique> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>>

---


### SemanticViewTablesUniqueOutputReference <a name="SemanticViewTablesUniqueOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewTablesUniqueOutputReference;

new SemanticViewTablesUniqueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.internalValue"></a>

```java
public IResolvable|SemanticViewTablesUnique getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>

---


### SemanticViewTimeoutsOutputReference <a name="SemanticViewTimeoutsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.semantic_view.SemanticViewTimeoutsOutputReference;

new SemanticViewTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SemanticViewTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a>

---



