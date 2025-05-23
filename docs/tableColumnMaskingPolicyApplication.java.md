# `tableColumnMaskingPolicyApplication` Submodule <a name="`tableColumnMaskingPolicyApplication` Submodule" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TableColumnMaskingPolicyApplication <a name="TableColumnMaskingPolicyApplication" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application snowflake_table_column_masking_policy_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_column_masking_policy_application.TableColumnMaskingPolicyApplication;

TableColumnMaskingPolicyApplication.Builder.create(Construct scope, java.lang.String id)
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
    .column(java.lang.String)
    .maskingPolicy(java.lang.String)
    .table(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(TableColumnMaskingPolicyApplicationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.column">column</a></code> | <code>java.lang.String</code> | The column to apply the masking policy to. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.maskingPolicy">maskingPolicy</a></code> | <code>java.lang.String</code> | Fully qualified name (`database.schema.policyname`) of the policy to apply. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.table">table</a></code> | <code>java.lang.String</code> | The fully qualified name (`database.schema.table`) of the table to apply the masking policy to. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#id TableColumnMaskingPolicyApplication#id}. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts">TableColumnMaskingPolicyApplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.column"></a>

- *Type:* java.lang.String

The column to apply the masking policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#column TableColumnMaskingPolicyApplication#column}

---

##### `maskingPolicy`<sup>Required</sup> <a name="maskingPolicy" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.maskingPolicy"></a>

- *Type:* java.lang.String

Fully qualified name (`database.schema.policyname`) of the policy to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#masking_policy TableColumnMaskingPolicyApplication#masking_policy}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.table"></a>

- *Type:* java.lang.String

The fully qualified name (`database.schema.table`) of the table to apply the masking policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#table TableColumnMaskingPolicyApplication#table}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#id TableColumnMaskingPolicyApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts">TableColumnMaskingPolicyApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#timeouts TableColumnMaskingPolicyApplication#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.putTimeouts"></a>

```java
public void putTimeouts(TableColumnMaskingPolicyApplicationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts">TableColumnMaskingPolicyApplicationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TableColumnMaskingPolicyApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_column_masking_policy_application.TableColumnMaskingPolicyApplication;

TableColumnMaskingPolicyApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_column_masking_policy_application.TableColumnMaskingPolicyApplication;

TableColumnMaskingPolicyApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_column_masking_policy_application.TableColumnMaskingPolicyApplication;

TableColumnMaskingPolicyApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_column_masking_policy_application.TableColumnMaskingPolicyApplication;

TableColumnMaskingPolicyApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TableColumnMaskingPolicyApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TableColumnMaskingPolicyApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TableColumnMaskingPolicyApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TableColumnMaskingPolicyApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TableColumnMaskingPolicyApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference">TableColumnMaskingPolicyApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.columnInput">columnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.maskingPolicyInput">maskingPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.tableInput">tableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts">TableColumnMaskingPolicyApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.column">column</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.maskingPolicy">maskingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.table">table</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.timeouts"></a>

```java
public TableColumnMaskingPolicyApplicationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference">TableColumnMaskingPolicyApplicationTimeoutsOutputReference</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.columnInput"></a>

```java
public java.lang.String getColumnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maskingPolicyInput`<sup>Optional</sup> <a name="maskingPolicyInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.maskingPolicyInput"></a>

```java
public java.lang.String getMaskingPolicyInput();
```

- *Type:* java.lang.String

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.tableInput"></a>

```java
public java.lang.String getTableInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts">TableColumnMaskingPolicyApplicationTimeouts</a>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.column"></a>

```java
public java.lang.String getColumn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maskingPolicy`<sup>Required</sup> <a name="maskingPolicy" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.maskingPolicy"></a>

```java
public java.lang.String getMaskingPolicy();
```

- *Type:* java.lang.String

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TableColumnMaskingPolicyApplicationConfig <a name="TableColumnMaskingPolicyApplicationConfig" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_column_masking_policy_application.TableColumnMaskingPolicyApplicationConfig;

TableColumnMaskingPolicyApplicationConfig.builder()
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
    .column(java.lang.String)
    .maskingPolicy(java.lang.String)
    .table(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(TableColumnMaskingPolicyApplicationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.column">column</a></code> | <code>java.lang.String</code> | The column to apply the masking policy to. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.maskingPolicy">maskingPolicy</a></code> | <code>java.lang.String</code> | Fully qualified name (`database.schema.policyname`) of the policy to apply. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.table">table</a></code> | <code>java.lang.String</code> | The fully qualified name (`database.schema.table`) of the table to apply the masking policy to. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#id TableColumnMaskingPolicyApplication#id}. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts">TableColumnMaskingPolicyApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.column"></a>

```java
public java.lang.String getColumn();
```

- *Type:* java.lang.String

The column to apply the masking policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#column TableColumnMaskingPolicyApplication#column}

---

##### `maskingPolicy`<sup>Required</sup> <a name="maskingPolicy" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.maskingPolicy"></a>

```java
public java.lang.String getMaskingPolicy();
```

- *Type:* java.lang.String

Fully qualified name (`database.schema.policyname`) of the policy to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#masking_policy TableColumnMaskingPolicyApplication#masking_policy}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

The fully qualified name (`database.schema.table`) of the table to apply the masking policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#table TableColumnMaskingPolicyApplication#table}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#id TableColumnMaskingPolicyApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.timeouts"></a>

```java
public TableColumnMaskingPolicyApplicationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts">TableColumnMaskingPolicyApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#timeouts TableColumnMaskingPolicyApplication#timeouts}

---

### TableColumnMaskingPolicyApplicationTimeouts <a name="TableColumnMaskingPolicyApplicationTimeouts" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_column_masking_policy_application.TableColumnMaskingPolicyApplicationTimeouts;

TableColumnMaskingPolicyApplicationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#create TableColumnMaskingPolicyApplication#create}. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#delete TableColumnMaskingPolicyApplication#delete}. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#read TableColumnMaskingPolicyApplication#read}. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#update TableColumnMaskingPolicyApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#create TableColumnMaskingPolicyApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#delete TableColumnMaskingPolicyApplication#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#read TableColumnMaskingPolicyApplication#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/table_column_masking_policy_application#update TableColumnMaskingPolicyApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TableColumnMaskingPolicyApplicationTimeoutsOutputReference <a name="TableColumnMaskingPolicyApplicationTimeoutsOutputReference" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_column_masking_policy_application.TableColumnMaskingPolicyApplicationTimeoutsOutputReference;

new TableColumnMaskingPolicyApplicationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts">TableColumnMaskingPolicyApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationTimeouts">TableColumnMaskingPolicyApplicationTimeouts</a>

---



