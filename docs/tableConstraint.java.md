# `tableConstraint` Submodule <a name="`tableConstraint` Submodule" id="@cdktf/provider-snowflake.tableConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TableConstraint <a name="TableConstraint" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint snowflake_table_constraint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_constraint.TableConstraint;

TableConstraint.Builder.create(Construct scope, java.lang.String id)
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
    .columns(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .tableId(java.lang.String)
    .type(java.lang.String)
//  .comment(java.lang.String)
//  .deferrable(java.lang.Boolean)
//  .deferrable(IResolvable)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .enforced(java.lang.Boolean)
//  .enforced(IResolvable)
//  .foreignKeyProperties(TableConstraintForeignKeyProperties)
//  .id(java.lang.String)
//  .initially(java.lang.String)
//  .rely(java.lang.Boolean)
//  .rely(IResolvable)
//  .validate(java.lang.Boolean)
//  .validate(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | Columns to use in constraint key. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of constraint. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.tableId">tableId</a></code> | <code>java.lang.String</code> | Identifier for table to create constraint on. Format must follow: "\"&lt;db_name&gt;\".\"&lt;schema_name&gt;\".\"&lt;table_name&gt;\"" or "&lt;db_name&gt;.&lt;schema_name&gt;.&lt;table_name&gt;" (snowflake_table.my_table.id). |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Type of constraint, one of 'UNIQUE', 'PRIMARY KEY', or 'FOREIGN KEY'. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Comment for the table constraint. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.deferrable">deferrable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the constraint is deferrable. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the constraint is enabled or disabled. These properties are provided for compatibility with Oracle. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.enforced">enforced</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the constraint is enforced. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.foreignKeyProperties">foreignKeyProperties</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a></code> | foreign_key_properties block. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#id TableConstraint#id}. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.initially">initially</a></code> | <code>java.lang.String</code> | Whether the constraint is initially deferred or immediate. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.rely">rely</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether a constraint in NOVALIDATE mode is taken into account during query rewrite. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.validate">validate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to validate existing data on the table when a constraint is created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.columns"></a>

- *Type:* java.util.List<java.lang.String>

Columns to use in constraint key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#columns TableConstraint#columns}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#name TableConstraint#name}

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.tableId"></a>

- *Type:* java.lang.String

Identifier for table to create constraint on. Format must follow: "\"&lt;db_name&gt;\".\"&lt;schema_name&gt;\".\"&lt;table_name&gt;\"" or "&lt;db_name&gt;.&lt;schema_name&gt;.&lt;table_name&gt;" (snowflake_table.my_table.id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#table_id TableConstraint#table_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Type of constraint, one of 'UNIQUE', 'PRIMARY KEY', or 'FOREIGN KEY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#type TableConstraint#type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Comment for the table constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#comment TableConstraint#comment}

---

##### `deferrable`<sup>Optional</sup> <a name="deferrable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.deferrable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the constraint is deferrable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#deferrable TableConstraint#deferrable}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.enable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the constraint is enabled or disabled. These properties are provided for compatibility with Oracle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#enable TableConstraint#enable}

---

##### `enforced`<sup>Optional</sup> <a name="enforced" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.enforced"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the constraint is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#enforced TableConstraint#enforced}

---

##### `foreignKeyProperties`<sup>Optional</sup> <a name="foreignKeyProperties" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.foreignKeyProperties"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

foreign_key_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#foreign_key_properties TableConstraint#foreign_key_properties}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#id TableConstraint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initially`<sup>Optional</sup> <a name="initially" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.initially"></a>

- *Type:* java.lang.String

Whether the constraint is initially deferred or immediate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#initially TableConstraint#initially}

---

##### `rely`<sup>Optional</sup> <a name="rely" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.rely"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether a constraint in NOVALIDATE mode is taken into account during query rewrite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#rely TableConstraint#rely}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.validate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to validate existing data on the table when a constraint is created.

Only used in conjunction with the ENABLE property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#validate TableConstraint#validate}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.putForeignKeyProperties">putForeignKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetDeferrable">resetDeferrable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetEnforced">resetEnforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetForeignKeyProperties">resetForeignKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetInitially">resetInitially</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetRely">resetRely</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetValidate">resetValidate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putForeignKeyProperties` <a name="putForeignKeyProperties" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.putForeignKeyProperties"></a>

```java
public void putForeignKeyProperties(TableConstraintForeignKeyProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.putForeignKeyProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetComment"></a>

```java
public void resetComment()
```

##### `resetDeferrable` <a name="resetDeferrable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetDeferrable"></a>

```java
public void resetDeferrable()
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetEnforced` <a name="resetEnforced" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetEnforced"></a>

```java
public void resetEnforced()
```

##### `resetForeignKeyProperties` <a name="resetForeignKeyProperties" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetForeignKeyProperties"></a>

```java
public void resetForeignKeyProperties()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetId"></a>

```java
public void resetId()
```

##### `resetInitially` <a name="resetInitially" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetInitially"></a>

```java
public void resetInitially()
```

##### `resetRely` <a name="resetRely" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetRely"></a>

```java
public void resetRely()
```

##### `resetValidate` <a name="resetValidate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetValidate"></a>

```java
public void resetValidate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TableConstraint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_constraint.TableConstraint;

TableConstraint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_constraint.TableConstraint;

TableConstraint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_constraint.TableConstraint;

TableConstraint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_constraint.TableConstraint;

TableConstraint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TableConstraint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TableConstraint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TableConstraint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TableConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TableConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.foreignKeyProperties">foreignKeyProperties</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference">TableConstraintForeignKeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.columnsInput">columnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.deferrableInput">deferrableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enforcedInput">enforcedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.foreignKeyPropertiesInput">foreignKeyPropertiesInput</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.initiallyInput">initiallyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.relyInput">relyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.validateInput">validateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.deferrable">deferrable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enforced">enforced</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.initially">initially</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.rely">rely</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.validate">validate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `foreignKeyProperties`<sup>Required</sup> <a name="foreignKeyProperties" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.foreignKeyProperties"></a>

```java
public TableConstraintForeignKeyPropertiesOutputReference getForeignKeyProperties();
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference">TableConstraintForeignKeyPropertiesOutputReference</a>

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.columnsInput"></a>

```java
public java.util.List<java.lang.String> getColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `deferrableInput`<sup>Optional</sup> <a name="deferrableInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.deferrableInput"></a>

```java
public java.lang.Object getDeferrableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enforcedInput`<sup>Optional</sup> <a name="enforcedInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enforcedInput"></a>

```java
public java.lang.Object getEnforcedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `foreignKeyPropertiesInput`<sup>Optional</sup> <a name="foreignKeyPropertiesInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.foreignKeyPropertiesInput"></a>

```java
public TableConstraintForeignKeyProperties getForeignKeyPropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initiallyInput`<sup>Optional</sup> <a name="initiallyInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.initiallyInput"></a>

```java
public java.lang.String getInitiallyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `relyInput`<sup>Optional</sup> <a name="relyInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.relyInput"></a>

```java
public java.lang.Object getRelyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.validateInput"></a>

```java
public java.lang.Object getValidateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `deferrable`<sup>Required</sup> <a name="deferrable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.deferrable"></a>

```java
public java.lang.Object getDeferrable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enforced"></a>

```java
public java.lang.Object getEnforced();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initially`<sup>Required</sup> <a name="initially" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.initially"></a>

```java
public java.lang.String getInitially();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rely`<sup>Required</sup> <a name="rely" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.rely"></a>

```java
public java.lang.Object getRely();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.validate"></a>

```java
public java.lang.Object getValidate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TableConstraintConfig <a name="TableConstraintConfig" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_constraint.TableConstraintConfig;

TableConstraintConfig.builder()
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
    .columns(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .tableId(java.lang.String)
    .type(java.lang.String)
//  .comment(java.lang.String)
//  .deferrable(java.lang.Boolean)
//  .deferrable(IResolvable)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .enforced(java.lang.Boolean)
//  .enforced(IResolvable)
//  .foreignKeyProperties(TableConstraintForeignKeyProperties)
//  .id(java.lang.String)
//  .initially(java.lang.String)
//  .rely(java.lang.Boolean)
//  .rely(IResolvable)
//  .validate(java.lang.Boolean)
//  .validate(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | Columns to use in constraint key. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of constraint. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.tableId">tableId</a></code> | <code>java.lang.String</code> | Identifier for table to create constraint on. Format must follow: "\"&lt;db_name&gt;\".\"&lt;schema_name&gt;\".\"&lt;table_name&gt;\"" or "&lt;db_name&gt;.&lt;schema_name&gt;.&lt;table_name&gt;" (snowflake_table.my_table.id). |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.type">type</a></code> | <code>java.lang.String</code> | Type of constraint, one of 'UNIQUE', 'PRIMARY KEY', or 'FOREIGN KEY'. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Comment for the table constraint. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.deferrable">deferrable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the constraint is deferrable. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the constraint is enabled or disabled. These properties are provided for compatibility with Oracle. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.enforced">enforced</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the constraint is enforced. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.foreignKeyProperties">foreignKeyProperties</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a></code> | foreign_key_properties block. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#id TableConstraint#id}. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.initially">initially</a></code> | <code>java.lang.String</code> | Whether the constraint is initially deferred or immediate. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.rely">rely</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether a constraint in NOVALIDATE mode is taken into account during query rewrite. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.validate">validate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to validate existing data on the table when a constraint is created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

Columns to use in constraint key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#columns TableConstraint#columns}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#name TableConstraint#name}

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

Identifier for table to create constraint on. Format must follow: "\"&lt;db_name&gt;\".\"&lt;schema_name&gt;\".\"&lt;table_name&gt;\"" or "&lt;db_name&gt;.&lt;schema_name&gt;.&lt;table_name&gt;" (snowflake_table.my_table.id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#table_id TableConstraint#table_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of constraint, one of 'UNIQUE', 'PRIMARY KEY', or 'FOREIGN KEY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#type TableConstraint#type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Comment for the table constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#comment TableConstraint#comment}

---

##### `deferrable`<sup>Optional</sup> <a name="deferrable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.deferrable"></a>

```java
public java.lang.Object getDeferrable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the constraint is deferrable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#deferrable TableConstraint#deferrable}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the constraint is enabled or disabled. These properties are provided for compatibility with Oracle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#enable TableConstraint#enable}

---

##### `enforced`<sup>Optional</sup> <a name="enforced" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.enforced"></a>

```java
public java.lang.Object getEnforced();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the constraint is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#enforced TableConstraint#enforced}

---

##### `foreignKeyProperties`<sup>Optional</sup> <a name="foreignKeyProperties" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.foreignKeyProperties"></a>

```java
public TableConstraintForeignKeyProperties getForeignKeyProperties();
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

foreign_key_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#foreign_key_properties TableConstraint#foreign_key_properties}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#id TableConstraint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initially`<sup>Optional</sup> <a name="initially" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.initially"></a>

```java
public java.lang.String getInitially();
```

- *Type:* java.lang.String

Whether the constraint is initially deferred or immediate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#initially TableConstraint#initially}

---

##### `rely`<sup>Optional</sup> <a name="rely" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.rely"></a>

```java
public java.lang.Object getRely();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether a constraint in NOVALIDATE mode is taken into account during query rewrite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#rely TableConstraint#rely}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.validate"></a>

```java
public java.lang.Object getValidate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to validate existing data on the table when a constraint is created.

Only used in conjunction with the ENABLE property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#validate TableConstraint#validate}

---

### TableConstraintForeignKeyProperties <a name="TableConstraintForeignKeyProperties" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_constraint.TableConstraintForeignKeyProperties;

TableConstraintForeignKeyProperties.builder()
    .references(TableConstraintForeignKeyPropertiesReferences)
//  .match(java.lang.String)
//  .onDelete(java.lang.String)
//  .onUpdate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.references">references</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a></code> | references block. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.match">match</a></code> | <code>java.lang.String</code> | The match type for the foreign key. Not applicable for primary/unique keys. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.onDelete">onDelete</a></code> | <code>java.lang.String</code> | Specifies the action performed when the primary/unique key for the foreign key is deleted. Not applicable for primary/unique keys. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.onUpdate">onUpdate</a></code> | <code>java.lang.String</code> | Specifies the action performed when the primary/unique key for the foreign key is updated. Not applicable for primary/unique keys. |

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.references"></a>

```java
public TableConstraintForeignKeyPropertiesReferences getReferences();
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a>

references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#references TableConstraint#references}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.match"></a>

```java
public java.lang.String getMatch();
```

- *Type:* java.lang.String

The match type for the foreign key. Not applicable for primary/unique keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#match TableConstraint#match}

---

##### `onDelete`<sup>Optional</sup> <a name="onDelete" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.onDelete"></a>

```java
public java.lang.String getOnDelete();
```

- *Type:* java.lang.String

Specifies the action performed when the primary/unique key for the foreign key is deleted. Not applicable for primary/unique keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#on_delete TableConstraint#on_delete}

---

##### `onUpdate`<sup>Optional</sup> <a name="onUpdate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.onUpdate"></a>

```java
public java.lang.String getOnUpdate();
```

- *Type:* java.lang.String

Specifies the action performed when the primary/unique key for the foreign key is updated. Not applicable for primary/unique keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#on_update TableConstraint#on_update}

---

### TableConstraintForeignKeyPropertiesReferences <a name="TableConstraintForeignKeyPropertiesReferences" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_constraint.TableConstraintForeignKeyPropertiesReferences;

TableConstraintForeignKeyPropertiesReferences.builder()
    .columns(java.util.List<java.lang.String>)
    .tableId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | Columns to use in foreign key reference. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.property.tableId">tableId</a></code> | <code>java.lang.String</code> | Name of constraint. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

Columns to use in foreign key reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#columns TableConstraint#columns}

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

Name of constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/table_constraint#table_id TableConstraint#table_id}

---

## Classes <a name="Classes" id="Classes"></a>

### TableConstraintForeignKeyPropertiesOutputReference <a name="TableConstraintForeignKeyPropertiesOutputReference" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_constraint.TableConstraintForeignKeyPropertiesOutputReference;

new TableConstraintForeignKeyPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.putReferences">putReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetOnDelete">resetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetOnUpdate">resetOnUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReferences` <a name="putReferences" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.putReferences"></a>

```java
public void putReferences(TableConstraintForeignKeyPropertiesReferences value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.putReferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a>

---

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetMatch"></a>

```java
public void resetMatch()
```

##### `resetOnDelete` <a name="resetOnDelete" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetOnDelete"></a>

```java
public void resetOnDelete()
```

##### `resetOnUpdate` <a name="resetOnUpdate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetOnUpdate"></a>

```java
public void resetOnUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.references">references</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference">TableConstraintForeignKeyPropertiesReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.matchInput">matchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onDeleteInput">onDeleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onUpdateInput">onUpdateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.referencesInput">referencesInput</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.match">match</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onDelete">onDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onUpdate">onUpdate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.references"></a>

```java
public TableConstraintForeignKeyPropertiesReferencesOutputReference getReferences();
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference">TableConstraintForeignKeyPropertiesReferencesOutputReference</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.matchInput"></a>

```java
public java.lang.String getMatchInput();
```

- *Type:* java.lang.String

---

##### `onDeleteInput`<sup>Optional</sup> <a name="onDeleteInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onDeleteInput"></a>

```java
public java.lang.String getOnDeleteInput();
```

- *Type:* java.lang.String

---

##### `onUpdateInput`<sup>Optional</sup> <a name="onUpdateInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onUpdateInput"></a>

```java
public java.lang.String getOnUpdateInput();
```

- *Type:* java.lang.String

---

##### `referencesInput`<sup>Optional</sup> <a name="referencesInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.referencesInput"></a>

```java
public TableConstraintForeignKeyPropertiesReferences getReferencesInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.match"></a>

```java
public java.lang.String getMatch();
```

- *Type:* java.lang.String

---

##### `onDelete`<sup>Required</sup> <a name="onDelete" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onDelete"></a>

```java
public java.lang.String getOnDelete();
```

- *Type:* java.lang.String

---

##### `onUpdate`<sup>Required</sup> <a name="onUpdate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onUpdate"></a>

```java
public java.lang.String getOnUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.internalValue"></a>

```java
public TableConstraintForeignKeyProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

---


### TableConstraintForeignKeyPropertiesReferencesOutputReference <a name="TableConstraintForeignKeyPropertiesReferencesOutputReference" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.table_constraint.TableConstraintForeignKeyPropertiesReferencesOutputReference;

new TableConstraintForeignKeyPropertiesReferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.columnsInput">columnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.columnsInput"></a>

```java
public java.util.List<java.lang.String> getColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.internalValue"></a>

```java
public TableConstraintForeignKeyPropertiesReferences getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a>

---



