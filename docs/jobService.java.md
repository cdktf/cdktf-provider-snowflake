# `jobService` Submodule <a name="`jobService` Submodule" id="@cdktf/provider-snowflake.jobService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JobService <a name="JobService" id="@cdktf/provider-snowflake.jobService.JobService"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service snowflake_job_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobService;

JobService.Builder.create(Construct scope, java.lang.String id)
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
    .computePool(java.lang.String)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .comment(java.lang.String)
//  .externalAccessIntegrations(java.util.List<java.lang.String>)
//  .fromSpecification(JobServiceFromSpecification)
//  .fromSpecificationTemplate(JobServiceFromSpecificationTemplate)
//  .id(java.lang.String)
//  .queryWarehouse(java.lang.String)
//  .timeouts(JobServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.computePool">computePool</a></code> | <code>java.lang.String</code> | Specifies the name of the compute pool in your account on which to run the service. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the service. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the service; |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the service. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the service. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the names of the external access integrations that allow your service to access external sites. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.fromSpecification">fromSpecification</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a></code> | from_specification block. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.fromSpecificationTemplate">fromSpecificationTemplate</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a></code> | from_specification_template block. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#id JobService#id}. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.queryWarehouse">queryWarehouse</a></code> | <code>java.lang.String</code> | Warehouse to use if a service container connects to Snowflake to execute a query but does not explicitly specify a warehouse to use. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computePool`<sup>Required</sup> <a name="computePool" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.computePool"></a>

- *Type:* java.lang.String

Specifies the name of the compute pool in your account on which to run the service.

Identifiers with special or lower-case characters are not supported. This limitation in the provider follows the limitation in Snowflake (see [docs](https://docs.snowflake.com/en/sql-reference/sql/create-compute-pool)). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#compute_pool JobService#compute_pool}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the service.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#database JobService#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the service;

must be unique for the schema in which the service is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#name JobService#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the service.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#schema JobService#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#comment JobService#comment}

---

##### `externalAccessIntegrations`<sup>Optional</sup> <a name="externalAccessIntegrations" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.externalAccessIntegrations"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the names of the external access integrations that allow your service to access external sites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#external_access_integrations JobService#external_access_integrations}

---

##### `fromSpecification`<sup>Optional</sup> <a name="fromSpecification" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.fromSpecification"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a>

from_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#from_specification JobService#from_specification}

---

##### `fromSpecificationTemplate`<sup>Optional</sup> <a name="fromSpecificationTemplate" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.fromSpecificationTemplate"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a>

from_specification_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#from_specification_template JobService#from_specification_template}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#id JobService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryWarehouse`<sup>Optional</sup> <a name="queryWarehouse" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.queryWarehouse"></a>

- *Type:* java.lang.String

Warehouse to use if a service container connects to Snowflake to execute a query but does not explicitly specify a warehouse to use.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#query_warehouse JobService#query_warehouse}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#timeouts JobService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.putFromSpecification">putFromSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.putFromSpecificationTemplate">putFromSpecificationTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.resetExternalAccessIntegrations">resetExternalAccessIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.resetFromSpecification">resetFromSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.resetFromSpecificationTemplate">resetFromSpecificationTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.resetQueryWarehouse">resetQueryWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.jobService.JobService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.jobService.JobService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.jobService.JobService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.jobService.JobService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.jobService.JobService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.jobService.JobService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.jobService.JobService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.jobService.JobService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.jobService.JobService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.jobService.JobService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.jobService.JobService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.jobService.JobService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.jobService.JobService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.jobService.JobService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.jobService.JobService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.jobService.JobService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.jobService.JobService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.jobService.JobService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.jobService.JobService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.jobService.JobService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.jobService.JobService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.jobService.JobService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.jobService.JobService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.jobService.JobService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFromSpecification` <a name="putFromSpecification" id="@cdktf/provider-snowflake.jobService.JobService.putFromSpecification"></a>

```java
public void putFromSpecification(JobServiceFromSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.jobService.JobService.putFromSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a>

---

##### `putFromSpecificationTemplate` <a name="putFromSpecificationTemplate" id="@cdktf/provider-snowflake.jobService.JobService.putFromSpecificationTemplate"></a>

```java
public void putFromSpecificationTemplate(JobServiceFromSpecificationTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.jobService.JobService.putFromSpecificationTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.jobService.JobService.putTimeouts"></a>

```java
public void putTimeouts(JobServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.jobService.JobService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.jobService.JobService.resetComment"></a>

```java
public void resetComment()
```

##### `resetExternalAccessIntegrations` <a name="resetExternalAccessIntegrations" id="@cdktf/provider-snowflake.jobService.JobService.resetExternalAccessIntegrations"></a>

```java
public void resetExternalAccessIntegrations()
```

##### `resetFromSpecification` <a name="resetFromSpecification" id="@cdktf/provider-snowflake.jobService.JobService.resetFromSpecification"></a>

```java
public void resetFromSpecification()
```

##### `resetFromSpecificationTemplate` <a name="resetFromSpecificationTemplate" id="@cdktf/provider-snowflake.jobService.JobService.resetFromSpecificationTemplate"></a>

```java
public void resetFromSpecificationTemplate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.jobService.JobService.resetId"></a>

```java
public void resetId()
```

##### `resetQueryWarehouse` <a name="resetQueryWarehouse" id="@cdktf/provider-snowflake.jobService.JobService.resetQueryWarehouse"></a>

```java
public void resetQueryWarehouse()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.jobService.JobService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a JobService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.jobService.JobService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobService;

JobService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.jobService.JobService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.jobService.JobService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobService;

JobService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.jobService.JobService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.jobService.JobService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobService;

JobService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.jobService.JobService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.jobService.JobService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobService;

JobService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),JobService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a JobService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.jobService.JobService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.jobService.JobService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the JobService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.jobService.JobService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing JobService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.jobService.JobService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the JobService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList">JobServiceDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.fromSpecification">fromSpecification</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference">JobServiceFromSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.fromSpecificationTemplate">fromSpecificationTemplate</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference">JobServiceFromSpecificationTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList">JobServiceShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference">JobServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.computePoolInput">computePoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.externalAccessIntegrationsInput">externalAccessIntegrationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.fromSpecificationInput">fromSpecificationInput</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.fromSpecificationTemplateInput">fromSpecificationTemplateInput</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.queryWarehouseInput">queryWarehouseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.computePool">computePool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.queryWarehouse">queryWarehouse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.jobService.JobService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.jobService.JobService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.jobService.JobService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.jobService.JobService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.jobService.JobService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.jobService.JobService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.jobService.JobService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.jobService.JobService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.jobService.JobService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.jobService.JobService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.jobService.JobService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.jobService.JobService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.jobService.JobService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.jobService.JobService.property.describeOutput"></a>

```java
public JobServiceDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList">JobServiceDescribeOutputList</a>

---

##### `fromSpecification`<sup>Required</sup> <a name="fromSpecification" id="@cdktf/provider-snowflake.jobService.JobService.property.fromSpecification"></a>

```java
public JobServiceFromSpecificationOutputReference getFromSpecification();
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference">JobServiceFromSpecificationOutputReference</a>

---

##### `fromSpecificationTemplate`<sup>Required</sup> <a name="fromSpecificationTemplate" id="@cdktf/provider-snowflake.jobService.JobService.property.fromSpecificationTemplate"></a>

```java
public JobServiceFromSpecificationTemplateOutputReference getFromSpecificationTemplate();
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference">JobServiceFromSpecificationTemplateOutputReference</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.jobService.JobService.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktf/provider-snowflake.jobService.JobService.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.jobService.JobService.property.showOutput"></a>

```java
public JobServiceShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList">JobServiceShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.jobService.JobService.property.timeouts"></a>

```java
public JobServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference">JobServiceTimeoutsOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.jobService.JobService.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `computePoolInput`<sup>Optional</sup> <a name="computePoolInput" id="@cdktf/provider-snowflake.jobService.JobService.property.computePoolInput"></a>

```java
public java.lang.String getComputePoolInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.jobService.JobService.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `externalAccessIntegrationsInput`<sup>Optional</sup> <a name="externalAccessIntegrationsInput" id="@cdktf/provider-snowflake.jobService.JobService.property.externalAccessIntegrationsInput"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fromSpecificationInput`<sup>Optional</sup> <a name="fromSpecificationInput" id="@cdktf/provider-snowflake.jobService.JobService.property.fromSpecificationInput"></a>

```java
public JobServiceFromSpecification getFromSpecificationInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a>

---

##### `fromSpecificationTemplateInput`<sup>Optional</sup> <a name="fromSpecificationTemplateInput" id="@cdktf/provider-snowflake.jobService.JobService.property.fromSpecificationTemplateInput"></a>

```java
public JobServiceFromSpecificationTemplate getFromSpecificationTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.jobService.JobService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.jobService.JobService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryWarehouseInput`<sup>Optional</sup> <a name="queryWarehouseInput" id="@cdktf/provider-snowflake.jobService.JobService.property.queryWarehouseInput"></a>

```java
public java.lang.String getQueryWarehouseInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.jobService.JobService.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.jobService.JobService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.jobService.JobService.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `computePool`<sup>Required</sup> <a name="computePool" id="@cdktf/provider-snowflake.jobService.JobService.property.computePool"></a>

```java
public java.lang.String getComputePool();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.jobService.JobService.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktf/provider-snowflake.jobService.JobService.property.externalAccessIntegrations"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.jobService.JobService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.jobService.JobService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `queryWarehouse`<sup>Required</sup> <a name="queryWarehouse" id="@cdktf/provider-snowflake.jobService.JobService.property.queryWarehouse"></a>

```java
public java.lang.String getQueryWarehouse();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.jobService.JobService.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.jobService.JobService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### JobServiceConfig <a name="JobServiceConfig" id="@cdktf/provider-snowflake.jobService.JobServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobServiceConfig;

JobServiceConfig.builder()
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
    .computePool(java.lang.String)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .comment(java.lang.String)
//  .externalAccessIntegrations(java.util.List<java.lang.String>)
//  .fromSpecification(JobServiceFromSpecification)
//  .fromSpecificationTemplate(JobServiceFromSpecificationTemplate)
//  .id(java.lang.String)
//  .queryWarehouse(java.lang.String)
//  .timeouts(JobServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.computePool">computePool</a></code> | <code>java.lang.String</code> | Specifies the name of the compute pool in your account on which to run the service. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the service. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the service; |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the service. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the service. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the names of the external access integrations that allow your service to access external sites. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.fromSpecification">fromSpecification</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a></code> | from_specification block. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.fromSpecificationTemplate">fromSpecificationTemplate</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a></code> | from_specification_template block. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#id JobService#id}. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.queryWarehouse">queryWarehouse</a></code> | <code>java.lang.String</code> | Warehouse to use if a service container connects to Snowflake to execute a query but does not explicitly specify a warehouse to use. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computePool`<sup>Required</sup> <a name="computePool" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.computePool"></a>

```java
public java.lang.String getComputePool();
```

- *Type:* java.lang.String

Specifies the name of the compute pool in your account on which to run the service.

Identifiers with special or lower-case characters are not supported. This limitation in the provider follows the limitation in Snowflake (see [docs](https://docs.snowflake.com/en/sql-reference/sql/create-compute-pool)). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#compute_pool JobService#compute_pool}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the service.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#database JobService#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the service;

must be unique for the schema in which the service is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#name JobService#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the service.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#schema JobService#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#comment JobService#comment}

---

##### `externalAccessIntegrations`<sup>Optional</sup> <a name="externalAccessIntegrations" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.externalAccessIntegrations"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrations();
```

- *Type:* java.util.List<java.lang.String>

Specifies the names of the external access integrations that allow your service to access external sites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#external_access_integrations JobService#external_access_integrations}

---

##### `fromSpecification`<sup>Optional</sup> <a name="fromSpecification" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.fromSpecification"></a>

```java
public JobServiceFromSpecification getFromSpecification();
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a>

from_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#from_specification JobService#from_specification}

---

##### `fromSpecificationTemplate`<sup>Optional</sup> <a name="fromSpecificationTemplate" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.fromSpecificationTemplate"></a>

```java
public JobServiceFromSpecificationTemplate getFromSpecificationTemplate();
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a>

from_specification_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#from_specification_template JobService#from_specification_template}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#id JobService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryWarehouse`<sup>Optional</sup> <a name="queryWarehouse" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.queryWarehouse"></a>

```java
public java.lang.String getQueryWarehouse();
```

- *Type:* java.lang.String

Warehouse to use if a service container connects to Snowflake to execute a query but does not explicitly specify a warehouse to use.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#query_warehouse JobService#query_warehouse}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.timeouts"></a>

```java
public JobServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#timeouts JobService#timeouts}

---

### JobServiceDescribeOutput <a name="JobServiceDescribeOutput" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobServiceDescribeOutput;

JobServiceDescribeOutput.builder()
    .build();
```


### JobServiceFromSpecification <a name="JobServiceFromSpecification" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobServiceFromSpecification;

JobServiceFromSpecification.builder()
//  .file(java.lang.String)
//  .path(java.lang.String)
//  .stage(java.lang.String)
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.property.file">file</a></code> | <code>java.lang.String</code> | The file name of the service specification. Example: `spec.yaml`. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.property.path">path</a></code> | <code>java.lang.String</code> | The path to the service specification file on the given stage. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.property.stage">stage</a></code> | <code>java.lang.String</code> | The fully qualified name of the stage containing the service specification file. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.property.text">text</a></code> | <code>java.lang.String</code> | The embedded text of the service specification. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

The file name of the service specification. Example: `spec.yaml`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#file JobService#file}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path to the service specification file on the given stage.

When the path is specified, the `/` character is automatically added as a path prefix. Example: `path/to/spec`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#path JobService#path}

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

The fully qualified name of the stage containing the service specification file.

At symbol (`@`) is added automatically. Example: `"\"<db_name>\".\"<schema_name>\".\"<stage_name>\""`. For more information about this resource, see [docs](./stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#stage JobService#stage}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

The embedded text of the service specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#text JobService#text}

---

### JobServiceFromSpecificationTemplate <a name="JobServiceFromSpecificationTemplate" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobServiceFromSpecificationTemplate;

JobServiceFromSpecificationTemplate.builder()
    .using(IResolvable)
    .using(java.util.List<JobServiceFromSpecificationTemplateUsing>)
//  .file(java.lang.String)
//  .path(java.lang.String)
//  .stage(java.lang.String)
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.using">using</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>></code> | using block. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.file">file</a></code> | <code>java.lang.String</code> | The file name of the service specification template. Example: `spec.yaml`. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.path">path</a></code> | <code>java.lang.String</code> | The path to the service specification template file on the given stage. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.stage">stage</a></code> | <code>java.lang.String</code> | The fully qualified name of the stage containing the service specification template file. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.text">text</a></code> | <code>java.lang.String</code> | The embedded text of the service specification template. |

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.using"></a>

```java
public java.lang.Object getUsing();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>>

using block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#using JobService#using}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

The file name of the service specification template. Example: `spec.yaml`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#file JobService#file}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path to the service specification template file on the given stage.

When the path is specified, the `/` character is automatically added as a path prefix. Example: `path/to/spec`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#path JobService#path}

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

The fully qualified name of the stage containing the service specification template file.

At symbol (`@`) is added automatically. Example: `"\"<db_name>\".\"<schema_name>\".\"<stage_name>\""`. For more information about this resource, see [docs](./stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#stage JobService#stage}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

The embedded text of the service specification template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#text JobService#text}

---

### JobServiceFromSpecificationTemplateUsing <a name="JobServiceFromSpecificationTemplateUsing" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobServiceFromSpecificationTemplateUsing;

JobServiceFromSpecificationTemplateUsing.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing.property.key">key</a></code> | <code>java.lang.String</code> | The name of the template variable. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing.property.value">value</a></code> | <code>java.lang.String</code> | The value to assign to the variable in the template. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name of the template variable.

The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the spec definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#key JobService#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value to assign to the variable in the template.

The provider wraps it in `$$` by default, so be aware of that while referencing the argument in the spec definition. The value must either be alphanumeric or valid JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#value JobService#value}

---

### JobServiceShowOutput <a name="JobServiceShowOutput" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobServiceShowOutput;

JobServiceShowOutput.builder()
    .build();
```


### JobServiceTimeouts <a name="JobServiceTimeouts" id="@cdktf/provider-snowflake.jobService.JobServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.jobService.JobServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobServiceTimeouts;

JobServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#create JobService#create}. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#delete JobService#delete}. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#read JobService#read}. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#update JobService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.jobService.JobServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#create JobService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.jobService.JobServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#delete JobService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.jobService.JobServiceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#read JobService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.jobService.JobServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#update JobService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### JobServiceDescribeOutputList <a name="JobServiceDescribeOutputList" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobServiceDescribeOutputList;

new JobServiceDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.get"></a>

```java
public JobServiceDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### JobServiceDescribeOutputOutputReference <a name="JobServiceDescribeOutputOutputReference" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobServiceDescribeOutputOutputReference;

new JobServiceDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.autoResume">autoResume</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.autoSuspendSecs">autoSuspendSecs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.computePool">computePool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.currentInstances">currentInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.isAsyncJob">isAsyncJob</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.isJob">isJob</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.isUpgrading">isUpgrading</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.managingObjectDomain">managingObjectDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.managingObjectName">managingObjectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.minReadyInstances">minReadyInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.queryWarehouse">queryWarehouse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.resumedOn">resumedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.spec">spec</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.specDigest">specDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.suspendedOn">suspendedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.targetInstances">targetInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutput">JobServiceDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoResume`<sup>Required</sup> <a name="autoResume" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.autoResume"></a>

```java
public IResolvable getAutoResume();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `autoSuspendSecs`<sup>Required</sup> <a name="autoSuspendSecs" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.autoSuspendSecs"></a>

```java
public java.lang.Number getAutoSuspendSecs();
```

- *Type:* java.lang.Number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `computePool`<sup>Required</sup> <a name="computePool" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.computePool"></a>

```java
public java.lang.String getComputePool();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `currentInstances`<sup>Required</sup> <a name="currentInstances" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.currentInstances"></a>

```java
public java.lang.Number getCurrentInstances();
```

- *Type:* java.lang.Number

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.externalAccessIntegrations"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isAsyncJob`<sup>Required</sup> <a name="isAsyncJob" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.isAsyncJob"></a>

```java
public IResolvable getIsAsyncJob();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isJob`<sup>Required</sup> <a name="isJob" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.isJob"></a>

```java
public IResolvable getIsJob();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isUpgrading`<sup>Required</sup> <a name="isUpgrading" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.isUpgrading"></a>

```java
public IResolvable getIsUpgrading();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `managingObjectDomain`<sup>Required</sup> <a name="managingObjectDomain" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.managingObjectDomain"></a>

```java
public java.lang.String getManagingObjectDomain();
```

- *Type:* java.lang.String

---

##### `managingObjectName`<sup>Required</sup> <a name="managingObjectName" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.managingObjectName"></a>

```java
public java.lang.String getManagingObjectName();
```

- *Type:* java.lang.String

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

---

##### `minReadyInstances`<sup>Required</sup> <a name="minReadyInstances" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.minReadyInstances"></a>

```java
public java.lang.Number getMinReadyInstances();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `queryWarehouse`<sup>Required</sup> <a name="queryWarehouse" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.queryWarehouse"></a>

```java
public java.lang.String getQueryWarehouse();
```

- *Type:* java.lang.String

---

##### `resumedOn`<sup>Required</sup> <a name="resumedOn" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.resumedOn"></a>

```java
public java.lang.String getResumedOn();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.spec"></a>

```java
public java.lang.String getSpec();
```

- *Type:* java.lang.String

---

##### `specDigest`<sup>Required</sup> <a name="specDigest" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.specDigest"></a>

```java
public java.lang.String getSpecDigest();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `suspendedOn`<sup>Required</sup> <a name="suspendedOn" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.suspendedOn"></a>

```java
public java.lang.String getSuspendedOn();
```

- *Type:* java.lang.String

---

##### `targetInstances`<sup>Required</sup> <a name="targetInstances" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.targetInstances"></a>

```java
public java.lang.Number getTargetInstances();
```

- *Type:* java.lang.Number

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.updatedOn"></a>

```java
public java.lang.String getUpdatedOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.internalValue"></a>

```java
public JobServiceDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutput">JobServiceDescribeOutput</a>

---


### JobServiceFromSpecificationOutputReference <a name="JobServiceFromSpecificationOutputReference" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobServiceFromSpecificationOutputReference;

new JobServiceFromSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resetStage">resetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFile` <a name="resetFile" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resetFile"></a>

```java
public void resetFile()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetStage` <a name="resetStage" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resetStage"></a>

```java
public void resetStage()
```

##### `resetText` <a name="resetText" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.fileInput">fileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.stageInput">stageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.stage">stage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.fileInput"></a>

```java
public java.lang.String getFileInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.stageInput"></a>

```java
public java.lang.String getStageInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.internalValue"></a>

```java
public JobServiceFromSpecification getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a>

---


### JobServiceFromSpecificationTemplateOutputReference <a name="JobServiceFromSpecificationTemplateOutputReference" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobServiceFromSpecificationTemplateOutputReference;

new JobServiceFromSpecificationTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.putUsing">putUsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resetStage">resetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsing` <a name="putUsing" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.putUsing"></a>

```java
public void putUsing(IResolvable OR java.util.List<JobServiceFromSpecificationTemplateUsing> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.putUsing.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>>

---

##### `resetFile` <a name="resetFile" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resetFile"></a>

```java
public void resetFile()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetStage` <a name="resetStage" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resetStage"></a>

```java
public void resetStage()
```

##### `resetText` <a name="resetText" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.using">using</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList">JobServiceFromSpecificationTemplateUsingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.fileInput">fileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.stageInput">stageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.usingInput">usingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.stage">stage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.using"></a>

```java
public JobServiceFromSpecificationTemplateUsingList getUsing();
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList">JobServiceFromSpecificationTemplateUsingList</a>

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.fileInput"></a>

```java
public java.lang.String getFileInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.stageInput"></a>

```java
public java.lang.String getStageInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `usingInput`<sup>Optional</sup> <a name="usingInput" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.usingInput"></a>

```java
public java.lang.Object getUsingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>>

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.internalValue"></a>

```java
public JobServiceFromSpecificationTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a>

---


### JobServiceFromSpecificationTemplateUsingList <a name="JobServiceFromSpecificationTemplateUsingList" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobServiceFromSpecificationTemplateUsingList;

new JobServiceFromSpecificationTemplateUsingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.get"></a>

```java
public JobServiceFromSpecificationTemplateUsingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>>

---


### JobServiceFromSpecificationTemplateUsingOutputReference <a name="JobServiceFromSpecificationTemplateUsingOutputReference" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobServiceFromSpecificationTemplateUsingOutputReference;

new JobServiceFromSpecificationTemplateUsingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>

---


### JobServiceShowOutputList <a name="JobServiceShowOutputList" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobServiceShowOutputList;

new JobServiceShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.get"></a>

```java
public JobServiceShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### JobServiceShowOutputOutputReference <a name="JobServiceShowOutputOutputReference" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobServiceShowOutputOutputReference;

new JobServiceShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.autoResume">autoResume</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.autoSuspendSecs">autoSuspendSecs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.computePool">computePool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.currentInstances">currentInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.isAsyncJob">isAsyncJob</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.isJob">isJob</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.isUpgrading">isUpgrading</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.managingObjectDomain">managingObjectDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.managingObjectName">managingObjectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.minReadyInstances">minReadyInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.queryWarehouse">queryWarehouse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.resumedOn">resumedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.specDigest">specDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.suspendedOn">suspendedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.targetInstances">targetInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutput">JobServiceShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoResume`<sup>Required</sup> <a name="autoResume" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.autoResume"></a>

```java
public IResolvable getAutoResume();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `autoSuspendSecs`<sup>Required</sup> <a name="autoSuspendSecs" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.autoSuspendSecs"></a>

```java
public java.lang.Number getAutoSuspendSecs();
```

- *Type:* java.lang.Number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `computePool`<sup>Required</sup> <a name="computePool" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.computePool"></a>

```java
public java.lang.String getComputePool();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `currentInstances`<sup>Required</sup> <a name="currentInstances" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.currentInstances"></a>

```java
public java.lang.Number getCurrentInstances();
```

- *Type:* java.lang.Number

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.externalAccessIntegrations"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isAsyncJob`<sup>Required</sup> <a name="isAsyncJob" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.isAsyncJob"></a>

```java
public IResolvable getIsAsyncJob();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isJob`<sup>Required</sup> <a name="isJob" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.isJob"></a>

```java
public IResolvable getIsJob();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isUpgrading`<sup>Required</sup> <a name="isUpgrading" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.isUpgrading"></a>

```java
public IResolvable getIsUpgrading();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `managingObjectDomain`<sup>Required</sup> <a name="managingObjectDomain" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.managingObjectDomain"></a>

```java
public java.lang.String getManagingObjectDomain();
```

- *Type:* java.lang.String

---

##### `managingObjectName`<sup>Required</sup> <a name="managingObjectName" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.managingObjectName"></a>

```java
public java.lang.String getManagingObjectName();
```

- *Type:* java.lang.String

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

---

##### `minReadyInstances`<sup>Required</sup> <a name="minReadyInstances" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.minReadyInstances"></a>

```java
public java.lang.Number getMinReadyInstances();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `queryWarehouse`<sup>Required</sup> <a name="queryWarehouse" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.queryWarehouse"></a>

```java
public java.lang.String getQueryWarehouse();
```

- *Type:* java.lang.String

---

##### `resumedOn`<sup>Required</sup> <a name="resumedOn" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.resumedOn"></a>

```java
public java.lang.String getResumedOn();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `specDigest`<sup>Required</sup> <a name="specDigest" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.specDigest"></a>

```java
public java.lang.String getSpecDigest();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `suspendedOn`<sup>Required</sup> <a name="suspendedOn" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.suspendedOn"></a>

```java
public java.lang.String getSuspendedOn();
```

- *Type:* java.lang.String

---

##### `targetInstances`<sup>Required</sup> <a name="targetInstances" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.targetInstances"></a>

```java
public java.lang.Number getTargetInstances();
```

- *Type:* java.lang.Number

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.updatedOn"></a>

```java
public java.lang.String getUpdatedOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.internalValue"></a>

```java
public JobServiceShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutput">JobServiceShowOutput</a>

---


### JobServiceTimeoutsOutputReference <a name="JobServiceTimeoutsOutputReference" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.job_service.JobServiceTimeoutsOutputReference;

new JobServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a>

---



