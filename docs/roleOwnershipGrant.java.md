# `roleOwnershipGrant` Submodule <a name="`roleOwnershipGrant` Submodule" id="@cdktf/provider-snowflake.roleOwnershipGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RoleOwnershipGrant <a name="RoleOwnershipGrant" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant snowflake_role_ownership_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.role_ownership_grant.RoleOwnershipGrant;

RoleOwnershipGrant.Builder.create(Construct scope, java.lang.String id)
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
    .onRoleName(java.lang.String)
    .toRoleName(java.lang.String)
//  .currentGrants(java.lang.String)
//  .id(java.lang.String)
//  .revertOwnershipToRoleName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.onRoleName">onRoleName</a></code> | <code>java.lang.String</code> | The name of the role ownership is granted on. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.toRoleName">toRoleName</a></code> | <code>java.lang.String</code> | The name of the role to grant ownership. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.currentGrants">currentGrants</a></code> | <code>java.lang.String</code> | Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#id RoleOwnershipGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.revertOwnershipToRoleName">revertOwnershipToRoleName</a></code> | <code>java.lang.String</code> | The name of the role to revert ownership to on destroy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `onRoleName`<sup>Required</sup> <a name="onRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.onRoleName"></a>

- *Type:* java.lang.String

The name of the role ownership is granted on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#on_role_name RoleOwnershipGrant#on_role_name}

---

##### `toRoleName`<sup>Required</sup> <a name="toRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.toRoleName"></a>

- *Type:* java.lang.String

The name of the role to grant ownership.

Please ensure that the role that terraform is using is granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#to_role_name RoleOwnershipGrant#to_role_name}

---

##### `currentGrants`<sup>Optional</sup> <a name="currentGrants" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.currentGrants"></a>

- *Type:* java.lang.String

Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#current_grants RoleOwnershipGrant#current_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#id RoleOwnershipGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `revertOwnershipToRoleName`<sup>Optional</sup> <a name="revertOwnershipToRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.Initializer.parameter.revertOwnershipToRoleName"></a>

- *Type:* java.lang.String

The name of the role to revert ownership to on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#revert_ownership_to_role_name RoleOwnershipGrant#revert_ownership_to_role_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetCurrentGrants">resetCurrentGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetRevertOwnershipToRoleName">resetRevertOwnershipToRoleName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetCurrentGrants` <a name="resetCurrentGrants" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetCurrentGrants"></a>

```java
public void resetCurrentGrants()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetId"></a>

```java
public void resetId()
```

##### `resetRevertOwnershipToRoleName` <a name="resetRevertOwnershipToRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.resetRevertOwnershipToRoleName"></a>

```java
public void resetRevertOwnershipToRoleName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RoleOwnershipGrant resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.role_ownership_grant.RoleOwnershipGrant;

RoleOwnershipGrant.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.role_ownership_grant.RoleOwnershipGrant;

RoleOwnershipGrant.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.role_ownership_grant.RoleOwnershipGrant;

RoleOwnershipGrant.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.role_ownership_grant.RoleOwnershipGrant;

RoleOwnershipGrant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RoleOwnershipGrant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RoleOwnershipGrant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RoleOwnershipGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RoleOwnershipGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RoleOwnershipGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.currentGrantsInput">currentGrantsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.onRoleNameInput">onRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.revertOwnershipToRoleNameInput">revertOwnershipToRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.toRoleNameInput">toRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.currentGrants">currentGrants</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.onRoleName">onRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.revertOwnershipToRoleName">revertOwnershipToRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.toRoleName">toRoleName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `currentGrantsInput`<sup>Optional</sup> <a name="currentGrantsInput" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.currentGrantsInput"></a>

```java
public java.lang.String getCurrentGrantsInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `onRoleNameInput`<sup>Optional</sup> <a name="onRoleNameInput" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.onRoleNameInput"></a>

```java
public java.lang.String getOnRoleNameInput();
```

- *Type:* java.lang.String

---

##### `revertOwnershipToRoleNameInput`<sup>Optional</sup> <a name="revertOwnershipToRoleNameInput" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.revertOwnershipToRoleNameInput"></a>

```java
public java.lang.String getRevertOwnershipToRoleNameInput();
```

- *Type:* java.lang.String

---

##### `toRoleNameInput`<sup>Optional</sup> <a name="toRoleNameInput" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.toRoleNameInput"></a>

```java
public java.lang.String getToRoleNameInput();
```

- *Type:* java.lang.String

---

##### `currentGrants`<sup>Required</sup> <a name="currentGrants" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.currentGrants"></a>

```java
public java.lang.String getCurrentGrants();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `onRoleName`<sup>Required</sup> <a name="onRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.onRoleName"></a>

```java
public java.lang.String getOnRoleName();
```

- *Type:* java.lang.String

---

##### `revertOwnershipToRoleName`<sup>Required</sup> <a name="revertOwnershipToRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.revertOwnershipToRoleName"></a>

```java
public java.lang.String getRevertOwnershipToRoleName();
```

- *Type:* java.lang.String

---

##### `toRoleName`<sup>Required</sup> <a name="toRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.toRoleName"></a>

```java
public java.lang.String getToRoleName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrant.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RoleOwnershipGrantConfig <a name="RoleOwnershipGrantConfig" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.role_ownership_grant.RoleOwnershipGrantConfig;

RoleOwnershipGrantConfig.builder()
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
    .onRoleName(java.lang.String)
    .toRoleName(java.lang.String)
//  .currentGrants(java.lang.String)
//  .id(java.lang.String)
//  .revertOwnershipToRoleName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.onRoleName">onRoleName</a></code> | <code>java.lang.String</code> | The name of the role ownership is granted on. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.toRoleName">toRoleName</a></code> | <code>java.lang.String</code> | The name of the role to grant ownership. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.currentGrants">currentGrants</a></code> | <code>java.lang.String</code> | Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#id RoleOwnershipGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.revertOwnershipToRoleName">revertOwnershipToRoleName</a></code> | <code>java.lang.String</code> | The name of the role to revert ownership to on destroy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `onRoleName`<sup>Required</sup> <a name="onRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.onRoleName"></a>

```java
public java.lang.String getOnRoleName();
```

- *Type:* java.lang.String

The name of the role ownership is granted on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#on_role_name RoleOwnershipGrant#on_role_name}

---

##### `toRoleName`<sup>Required</sup> <a name="toRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.toRoleName"></a>

```java
public java.lang.String getToRoleName();
```

- *Type:* java.lang.String

The name of the role to grant ownership.

Please ensure that the role that terraform is using is granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#to_role_name RoleOwnershipGrant#to_role_name}

---

##### `currentGrants`<sup>Optional</sup> <a name="currentGrants" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.currentGrants"></a>

```java
public java.lang.String getCurrentGrants();
```

- *Type:* java.lang.String

Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#current_grants RoleOwnershipGrant#current_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#id RoleOwnershipGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `revertOwnershipToRoleName`<sup>Optional</sup> <a name="revertOwnershipToRoleName" id="@cdktf/provider-snowflake.roleOwnershipGrant.RoleOwnershipGrantConfig.property.revertOwnershipToRoleName"></a>

```java
public java.lang.String getRevertOwnershipToRoleName();
```

- *Type:* java.lang.String

The name of the role to revert ownership to on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/role_ownership_grant#revert_ownership_to_role_name RoleOwnershipGrant#revert_ownership_to_role_name}

---



