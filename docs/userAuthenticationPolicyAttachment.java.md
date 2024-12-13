# `userAuthenticationPolicyAttachment` Submodule <a name="`userAuthenticationPolicyAttachment` Submodule" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserAuthenticationPolicyAttachment <a name="UserAuthenticationPolicyAttachment" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment snowflake_user_authentication_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.user_authentication_policy_attachment.UserAuthenticationPolicyAttachment;

UserAuthenticationPolicyAttachment.Builder.create(Construct scope, java.lang.String id)
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
    .authenticationPolicyName(java.lang.String)
    .userName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.authenticationPolicyName">authenticationPolicyName</a></code> | <code>java.lang.String</code> | Fully qualified name of the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.userName">userName</a></code> | <code>java.lang.String</code> | User name of the user you want to attach the authentication policy to. |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment#id UserAuthenticationPolicyAttachment#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationPolicyName`<sup>Required</sup> <a name="authenticationPolicyName" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.authenticationPolicyName"></a>

- *Type:* java.lang.String

Fully qualified name of the authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment#authentication_policy_name UserAuthenticationPolicyAttachment#authentication_policy_name}

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.userName"></a>

- *Type:* java.lang.String

User name of the user you want to attach the authentication policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment#user_name UserAuthenticationPolicyAttachment#user_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment#id UserAuthenticationPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a UserAuthenticationPolicyAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.user_authentication_policy_attachment.UserAuthenticationPolicyAttachment;

UserAuthenticationPolicyAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.user_authentication_policy_attachment.UserAuthenticationPolicyAttachment;

UserAuthenticationPolicyAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.user_authentication_policy_attachment.UserAuthenticationPolicyAttachment;

UserAuthenticationPolicyAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.user_authentication_policy_attachment.UserAuthenticationPolicyAttachment;

UserAuthenticationPolicyAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),UserAuthenticationPolicyAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a UserAuthenticationPolicyAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the UserAuthenticationPolicyAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing UserAuthenticationPolicyAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the UserAuthenticationPolicyAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.authenticationPolicyNameInput">authenticationPolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.authenticationPolicyName">authenticationPolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationPolicyNameInput`<sup>Optional</sup> <a name="authenticationPolicyNameInput" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.authenticationPolicyNameInput"></a>

```java
public java.lang.String getAuthenticationPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `authenticationPolicyName`<sup>Required</sup> <a name="authenticationPolicyName" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.authenticationPolicyName"></a>

```java
public java.lang.String getAuthenticationPolicyName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UserAuthenticationPolicyAttachmentConfig <a name="UserAuthenticationPolicyAttachmentConfig" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.user_authentication_policy_attachment.UserAuthenticationPolicyAttachmentConfig;

UserAuthenticationPolicyAttachmentConfig.builder()
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
    .authenticationPolicyName(java.lang.String)
    .userName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.authenticationPolicyName">authenticationPolicyName</a></code> | <code>java.lang.String</code> | Fully qualified name of the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.userName">userName</a></code> | <code>java.lang.String</code> | User name of the user you want to attach the authentication policy to. |
| <code><a href="#@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment#id UserAuthenticationPolicyAttachment#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationPolicyName`<sup>Required</sup> <a name="authenticationPolicyName" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.authenticationPolicyName"></a>

```java
public java.lang.String getAuthenticationPolicyName();
```

- *Type:* java.lang.String

Fully qualified name of the authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment#authentication_policy_name UserAuthenticationPolicyAttachment#authentication_policy_name}

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

User name of the user you want to attach the authentication policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment#user_name UserAuthenticationPolicyAttachment#user_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.userAuthenticationPolicyAttachment.UserAuthenticationPolicyAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment#id UserAuthenticationPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



