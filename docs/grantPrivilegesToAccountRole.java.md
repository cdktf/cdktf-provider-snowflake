# `grantPrivilegesToAccountRole` Submodule <a name="`grantPrivilegesToAccountRole` Submodule" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantPrivilegesToAccountRole <a name="GrantPrivilegesToAccountRole" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role snowflake_grant_privileges_to_account_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_account_role.GrantPrivilegesToAccountRole;

GrantPrivilegesToAccountRole.Builder.create(Construct scope, java.lang.String id)
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
    .accountRoleName(java.lang.String)
//  .allPrivileges(java.lang.Boolean)
//  .allPrivileges(IResolvable)
//  .alwaysApply(java.lang.Boolean)
//  .alwaysApply(IResolvable)
//  .alwaysApplyTrigger(java.lang.String)
//  .id(java.lang.String)
//  .onAccount(java.lang.Boolean)
//  .onAccount(IResolvable)
//  .onAccountObject(GrantPrivilegesToAccountRoleOnAccountObject)
//  .onSchema(GrantPrivilegesToAccountRoleOnSchema)
//  .onSchemaObject(GrantPrivilegesToAccountRoleOnSchemaObject)
//  .privileges(java.util.List<java.lang.String>)
//  .withGrantOption(java.lang.Boolean)
//  .withGrantOption(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.accountRoleName">accountRoleName</a></code> | <code>java.lang.String</code> | The fully qualified name of the account role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.allPrivileges">allPrivileges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant all privileges on the account role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.alwaysApply">alwaysApply</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.alwaysApplyTrigger">alwaysApplyTrigger</a></code> | <code>java.lang.String</code> | This is a helper field and should not be set. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#id GrantPrivilegesToAccountRole#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.onAccount">onAccount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the privileges will be granted on the account. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.onAccountObject">onAccountObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a></code> | on_account_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.onSchema">onSchema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a></code> | on_schema block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.onSchemaObject">onSchemaObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a></code> | on_schema_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | The privileges to grant on the account role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.withGrantOption">withGrantOption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the grantee can grant the privileges to other users. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountRoleName`<sup>Required</sup> <a name="accountRoleName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.accountRoleName"></a>

- *Type:* java.lang.String

The fully qualified name of the account role to which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#account_role_name GrantPrivilegesToAccountRole#account_role_name}

---

##### `allPrivileges`<sup>Optional</sup> <a name="allPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.allPrivileges"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant all privileges on the account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#all_privileges GrantPrivilegesToAccountRole#all_privileges}

---

##### `alwaysApply`<sup>Optional</sup> <a name="alwaysApply" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.alwaysApply"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges.

It is supposed to be used only in “grant privileges on all X’s in database / schema Y” or “grant all privileges to X” scenarios to make sure that every new object in a given database / schema is granted by the account role and every new privilege is granted to the database role. Important note: this flag is not compliant with the Terraform assumptions of the config being eventually convergent (producing an empty plan).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#always_apply GrantPrivilegesToAccountRole#always_apply}

---

##### `alwaysApplyTrigger`<sup>Optional</sup> <a name="alwaysApplyTrigger" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.alwaysApplyTrigger"></a>

- *Type:* java.lang.String

This is a helper field and should not be set.

Its main purpose is to help to achieve the functionality described by the always_apply field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#always_apply_trigger GrantPrivilegesToAccountRole#always_apply_trigger}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#id GrantPrivilegesToAccountRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onAccount`<sup>Optional</sup> <a name="onAccount" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.onAccount"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the privileges will be granted on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#on_account GrantPrivilegesToAccountRole#on_account}

---

##### `onAccountObject`<sup>Optional</sup> <a name="onAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.onAccountObject"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a>

on_account_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#on_account_object GrantPrivilegesToAccountRole#on_account_object}

---

##### `onSchema`<sup>Optional</sup> <a name="onSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.onSchema"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a>

on_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#on_schema GrantPrivilegesToAccountRole#on_schema}

---

##### `onSchemaObject`<sup>Optional</sup> <a name="onSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.onSchemaObject"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a>

on_schema_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#on_schema_object GrantPrivilegesToAccountRole#on_schema_object}

---

##### `privileges`<sup>Optional</sup> <a name="privileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.privileges"></a>

- *Type:* java.util.List<java.lang.String>

The privileges to grant on the account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#privileges GrantPrivilegesToAccountRole#privileges}

---

##### `withGrantOption`<sup>Optional</sup> <a name="withGrantOption" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.withGrantOption"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the grantee can grant the privileges to other users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#with_grant_option GrantPrivilegesToAccountRole#with_grant_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnAccountObject">putOnAccountObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchema">putOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchemaObject">putOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAllPrivileges">resetAllPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAlwaysApply">resetAlwaysApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAlwaysApplyTrigger">resetAlwaysApplyTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnAccount">resetOnAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnAccountObject">resetOnAccountObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnSchema">resetOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnSchemaObject">resetOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetPrivileges">resetPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetWithGrantOption">resetWithGrantOption</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOnAccountObject` <a name="putOnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnAccountObject"></a>

```java
public void putOnAccountObject(GrantPrivilegesToAccountRoleOnAccountObject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnAccountObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a>

---

##### `putOnSchema` <a name="putOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchema"></a>

```java
public void putOnSchema(GrantPrivilegesToAccountRoleOnSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a>

---

##### `putOnSchemaObject` <a name="putOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchemaObject"></a>

```java
public void putOnSchemaObject(GrantPrivilegesToAccountRoleOnSchemaObject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchemaObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a>

---

##### `resetAllPrivileges` <a name="resetAllPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAllPrivileges"></a>

```java
public void resetAllPrivileges()
```

##### `resetAlwaysApply` <a name="resetAlwaysApply" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAlwaysApply"></a>

```java
public void resetAlwaysApply()
```

##### `resetAlwaysApplyTrigger` <a name="resetAlwaysApplyTrigger" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAlwaysApplyTrigger"></a>

```java
public void resetAlwaysApplyTrigger()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetId"></a>

```java
public void resetId()
```

##### `resetOnAccount` <a name="resetOnAccount" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnAccount"></a>

```java
public void resetOnAccount()
```

##### `resetOnAccountObject` <a name="resetOnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnAccountObject"></a>

```java
public void resetOnAccountObject()
```

##### `resetOnSchema` <a name="resetOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnSchema"></a>

```java
public void resetOnSchema()
```

##### `resetOnSchemaObject` <a name="resetOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnSchemaObject"></a>

```java
public void resetOnSchemaObject()
```

##### `resetPrivileges` <a name="resetPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetPrivileges"></a>

```java
public void resetPrivileges()
```

##### `resetWithGrantOption` <a name="resetWithGrantOption" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetWithGrantOption"></a>

```java
public void resetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GrantPrivilegesToAccountRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_account_role.GrantPrivilegesToAccountRole;

GrantPrivilegesToAccountRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_account_role.GrantPrivilegesToAccountRole;

GrantPrivilegesToAccountRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_account_role.GrantPrivilegesToAccountRole;

GrantPrivilegesToAccountRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_account_role.GrantPrivilegesToAccountRole;

GrantPrivilegesToAccountRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GrantPrivilegesToAccountRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GrantPrivilegesToAccountRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GrantPrivilegesToAccountRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GrantPrivilegesToAccountRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GrantPrivilegesToAccountRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountObject">onAccountObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference">GrantPrivilegesToAccountRoleOnAccountObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchema">onSchema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference">GrantPrivilegesToAccountRoleOnSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaObject">onSchemaObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.accountRoleNameInput">accountRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.allPrivilegesInput">allPrivilegesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyInput">alwaysApplyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyTriggerInput">alwaysApplyTriggerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountInput">onAccountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountObjectInput">onAccountObjectInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaInput">onSchemaInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaObjectInput">onSchemaObjectInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.privilegesInput">privilegesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.withGrantOptionInput">withGrantOptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.accountRoleName">accountRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.allPrivileges">allPrivileges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApply">alwaysApply</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyTrigger">alwaysApplyTrigger</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccount">onAccount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.withGrantOption">withGrantOption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `onAccountObject`<sup>Required</sup> <a name="onAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountObject"></a>

```java
public GrantPrivilegesToAccountRoleOnAccountObjectOutputReference getOnAccountObject();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference">GrantPrivilegesToAccountRoleOnAccountObjectOutputReference</a>

---

##### `onSchema`<sup>Required</sup> <a name="onSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchema"></a>

```java
public GrantPrivilegesToAccountRoleOnSchemaOutputReference getOnSchema();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference">GrantPrivilegesToAccountRoleOnSchemaOutputReference</a>

---

##### `onSchemaObject`<sup>Required</sup> <a name="onSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaObject"></a>

```java
public GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference getOnSchemaObject();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference</a>

---

##### `accountRoleNameInput`<sup>Optional</sup> <a name="accountRoleNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.accountRoleNameInput"></a>

```java
public java.lang.String getAccountRoleNameInput();
```

- *Type:* java.lang.String

---

##### `allPrivilegesInput`<sup>Optional</sup> <a name="allPrivilegesInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.allPrivilegesInput"></a>

```java
public java.lang.Object getAllPrivilegesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alwaysApplyInput`<sup>Optional</sup> <a name="alwaysApplyInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyInput"></a>

```java
public java.lang.Object getAlwaysApplyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alwaysApplyTriggerInput`<sup>Optional</sup> <a name="alwaysApplyTriggerInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyTriggerInput"></a>

```java
public java.lang.String getAlwaysApplyTriggerInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `onAccountInput`<sup>Optional</sup> <a name="onAccountInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountInput"></a>

```java
public java.lang.Object getOnAccountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `onAccountObjectInput`<sup>Optional</sup> <a name="onAccountObjectInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountObjectInput"></a>

```java
public GrantPrivilegesToAccountRoleOnAccountObject getOnAccountObjectInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a>

---

##### `onSchemaInput`<sup>Optional</sup> <a name="onSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaInput"></a>

```java
public GrantPrivilegesToAccountRoleOnSchema getOnSchemaInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a>

---

##### `onSchemaObjectInput`<sup>Optional</sup> <a name="onSchemaObjectInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaObjectInput"></a>

```java
public GrantPrivilegesToAccountRoleOnSchemaObject getOnSchemaObjectInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a>

---

##### `privilegesInput`<sup>Optional</sup> <a name="privilegesInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.privilegesInput"></a>

```java
public java.util.List<java.lang.String> getPrivilegesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="withGrantOptionInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.withGrantOptionInput"></a>

```java
public java.lang.Object getWithGrantOptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accountRoleName`<sup>Required</sup> <a name="accountRoleName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.accountRoleName"></a>

```java
public java.lang.String getAccountRoleName();
```

- *Type:* java.lang.String

---

##### `allPrivileges`<sup>Required</sup> <a name="allPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.allPrivileges"></a>

```java
public java.lang.Object getAllPrivileges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alwaysApply`<sup>Required</sup> <a name="alwaysApply" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApply"></a>

```java
public java.lang.Object getAlwaysApply();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `alwaysApplyTrigger`<sup>Required</sup> <a name="alwaysApplyTrigger" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyTrigger"></a>

```java
public java.lang.String getAlwaysApplyTrigger();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `onAccount`<sup>Required</sup> <a name="onAccount" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccount"></a>

```java
public java.lang.Object getOnAccount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.privileges"></a>

```java
public java.util.List<java.lang.String> getPrivileges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `withGrantOption`<sup>Required</sup> <a name="withGrantOption" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.withGrantOption"></a>

```java
public java.lang.Object getWithGrantOption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GrantPrivilegesToAccountRoleConfig <a name="GrantPrivilegesToAccountRoleConfig" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_account_role.GrantPrivilegesToAccountRoleConfig;

GrantPrivilegesToAccountRoleConfig.builder()
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
    .accountRoleName(java.lang.String)
//  .allPrivileges(java.lang.Boolean)
//  .allPrivileges(IResolvable)
//  .alwaysApply(java.lang.Boolean)
//  .alwaysApply(IResolvable)
//  .alwaysApplyTrigger(java.lang.String)
//  .id(java.lang.String)
//  .onAccount(java.lang.Boolean)
//  .onAccount(IResolvable)
//  .onAccountObject(GrantPrivilegesToAccountRoleOnAccountObject)
//  .onSchema(GrantPrivilegesToAccountRoleOnSchema)
//  .onSchemaObject(GrantPrivilegesToAccountRoleOnSchemaObject)
//  .privileges(java.util.List<java.lang.String>)
//  .withGrantOption(java.lang.Boolean)
//  .withGrantOption(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.accountRoleName">accountRoleName</a></code> | <code>java.lang.String</code> | The fully qualified name of the account role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.allPrivileges">allPrivileges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Grant all privileges on the account role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.alwaysApply">alwaysApply</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.alwaysApplyTrigger">alwaysApplyTrigger</a></code> | <code>java.lang.String</code> | This is a helper field and should not be set. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#id GrantPrivilegesToAccountRole#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onAccount">onAccount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the privileges will be granted on the account. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onAccountObject">onAccountObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a></code> | on_account_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onSchema">onSchema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a></code> | on_schema block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onSchemaObject">onSchemaObject</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a></code> | on_schema_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | The privileges to grant on the account role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.withGrantOption">withGrantOption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the grantee can grant the privileges to other users. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountRoleName`<sup>Required</sup> <a name="accountRoleName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.accountRoleName"></a>

```java
public java.lang.String getAccountRoleName();
```

- *Type:* java.lang.String

The fully qualified name of the account role to which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#account_role_name GrantPrivilegesToAccountRole#account_role_name}

---

##### `allPrivileges`<sup>Optional</sup> <a name="allPrivileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.allPrivileges"></a>

```java
public java.lang.Object getAllPrivileges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Grant all privileges on the account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#all_privileges GrantPrivilegesToAccountRole#all_privileges}

---

##### `alwaysApply`<sup>Optional</sup> <a name="alwaysApply" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.alwaysApply"></a>

```java
public java.lang.Object getAlwaysApply();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges.

It is supposed to be used only in “grant privileges on all X’s in database / schema Y” or “grant all privileges to X” scenarios to make sure that every new object in a given database / schema is granted by the account role and every new privilege is granted to the database role. Important note: this flag is not compliant with the Terraform assumptions of the config being eventually convergent (producing an empty plan).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#always_apply GrantPrivilegesToAccountRole#always_apply}

---

##### `alwaysApplyTrigger`<sup>Optional</sup> <a name="alwaysApplyTrigger" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.alwaysApplyTrigger"></a>

```java
public java.lang.String getAlwaysApplyTrigger();
```

- *Type:* java.lang.String

This is a helper field and should not be set.

Its main purpose is to help to achieve the functionality described by the always_apply field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#always_apply_trigger GrantPrivilegesToAccountRole#always_apply_trigger}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#id GrantPrivilegesToAccountRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onAccount`<sup>Optional</sup> <a name="onAccount" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onAccount"></a>

```java
public java.lang.Object getOnAccount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the privileges will be granted on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#on_account GrantPrivilegesToAccountRole#on_account}

---

##### `onAccountObject`<sup>Optional</sup> <a name="onAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onAccountObject"></a>

```java
public GrantPrivilegesToAccountRoleOnAccountObject getOnAccountObject();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a>

on_account_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#on_account_object GrantPrivilegesToAccountRole#on_account_object}

---

##### `onSchema`<sup>Optional</sup> <a name="onSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onSchema"></a>

```java
public GrantPrivilegesToAccountRoleOnSchema getOnSchema();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a>

on_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#on_schema GrantPrivilegesToAccountRole#on_schema}

---

##### `onSchemaObject`<sup>Optional</sup> <a name="onSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onSchemaObject"></a>

```java
public GrantPrivilegesToAccountRoleOnSchemaObject getOnSchemaObject();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a>

on_schema_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#on_schema_object GrantPrivilegesToAccountRole#on_schema_object}

---

##### `privileges`<sup>Optional</sup> <a name="privileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.privileges"></a>

```java
public java.util.List<java.lang.String> getPrivileges();
```

- *Type:* java.util.List<java.lang.String>

The privileges to grant on the account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#privileges GrantPrivilegesToAccountRole#privileges}

---

##### `withGrantOption`<sup>Optional</sup> <a name="withGrantOption" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.withGrantOption"></a>

```java
public java.lang.Object getWithGrantOption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the grantee can grant the privileges to other users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#with_grant_option GrantPrivilegesToAccountRole#with_grant_option}

---

### GrantPrivilegesToAccountRoleOnAccountObject <a name="GrantPrivilegesToAccountRoleOnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_account_role.GrantPrivilegesToAccountRoleOnAccountObject;

GrantPrivilegesToAccountRoleOnAccountObject.builder()
    .objectName(java.lang.String)
    .objectType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject.property.objectName">objectName</a></code> | <code>java.lang.String</code> | The fully qualified name of the object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject.property.objectType">objectType</a></code> | <code>java.lang.String</code> | The object type of the account object on which privileges will be granted. |

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject.property.objectName"></a>

```java
public java.lang.String getObjectName();
```

- *Type:* java.lang.String

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#object_name GrantPrivilegesToAccountRole#object_name}

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

The object type of the account object on which privileges will be granted.

Valid values are: USER | RESOURCE MONITOR | WAREHOUSE | COMPUTE POOL | DATABASE | INTEGRATION | FAILOVER GROUP | REPLICATION GROUP | EXTERNAL VOLUME

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#object_type GrantPrivilegesToAccountRole#object_type}

---

### GrantPrivilegesToAccountRoleOnSchema <a name="GrantPrivilegesToAccountRoleOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_account_role.GrantPrivilegesToAccountRoleOnSchema;

GrantPrivilegesToAccountRoleOnSchema.builder()
//  .allSchemasInDatabase(java.lang.String)
//  .futureSchemasInDatabase(java.lang.String)
//  .schemaName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.allSchemasInDatabase">allSchemasInDatabase</a></code> | <code>java.lang.String</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.futureSchemasInDatabase">futureSchemasInDatabase</a></code> | <code>java.lang.String</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | The fully qualified name of the schema. |

---

##### `allSchemasInDatabase`<sup>Optional</sup> <a name="allSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.allSchemasInDatabase"></a>

```java
public java.lang.String getAllSchemasInDatabase();
```

- *Type:* java.lang.String

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#all_schemas_in_database GrantPrivilegesToAccountRole#all_schemas_in_database}

---

##### `futureSchemasInDatabase`<sup>Optional</sup> <a name="futureSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.futureSchemasInDatabase"></a>

```java
public java.lang.String getFutureSchemasInDatabase();
```

- *Type:* java.lang.String

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#future_schemas_in_database GrantPrivilegesToAccountRole#future_schemas_in_database}

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#schema_name GrantPrivilegesToAccountRole#schema_name}

---

### GrantPrivilegesToAccountRoleOnSchemaObject <a name="GrantPrivilegesToAccountRoleOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_account_role.GrantPrivilegesToAccountRoleOnSchemaObject;

GrantPrivilegesToAccountRoleOnSchemaObject.builder()
//  .all(GrantPrivilegesToAccountRoleOnSchemaObjectAll)
//  .future(GrantPrivilegesToAccountRoleOnSchemaObjectFuture)
//  .objectName(java.lang.String)
//  .objectType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.all">all</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a></code> | all block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.future">future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a></code> | future block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.objectName">objectName</a></code> | <code>java.lang.String</code> | The fully qualified name of the object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.objectType">objectType</a></code> | <code>java.lang.String</code> | The object type of the schema object on which privileges will be granted. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.all"></a>

```java
public GrantPrivilegesToAccountRoleOnSchemaObjectAll getAll();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a>

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#all GrantPrivilegesToAccountRole#all}

---

##### `future`<sup>Optional</sup> <a name="future" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.future"></a>

```java
public GrantPrivilegesToAccountRoleOnSchemaObjectFuture getFuture();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a>

future block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#future GrantPrivilegesToAccountRole#future}

---

##### `objectName`<sup>Optional</sup> <a name="objectName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.objectName"></a>

```java
public java.lang.String getObjectName();
```

- *Type:* java.lang.String

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#object_name GrantPrivilegesToAccountRole#object_name}

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

The object type of the schema object on which privileges will be granted.

Valid values are: AGGREGATION POLICY | ALERT | AUTHENTICATION POLICY | CORTEX SEARCH SERVICE | DATA METRIC FUNCTION | DYNAMIC TABLE | EVENT TABLE | EXTERNAL TABLE | FILE FORMAT | FUNCTION | GIT REPOSITORY | HYBRID TABLE | IMAGE REPOSITORY | ICEBERG TABLE | MASKING POLICY | MATERIALIZED VIEW | MODEL | NETWORK RULE | NOTEBOOK | PACKAGES POLICY | PASSWORD POLICY | PIPE | PROCEDURE | PROJECTION POLICY | ROW ACCESS POLICY | SECRET | SERVICE | SESSION POLICY | SEQUENCE | SNAPSHOT | STAGE | STREAM | TABLE | TAG | TASK | VIEW | STREAMLIT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#object_type GrantPrivilegesToAccountRole#object_type}

---

### GrantPrivilegesToAccountRoleOnSchemaObjectAll <a name="GrantPrivilegesToAccountRoleOnSchemaObjectAll" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_account_role.GrantPrivilegesToAccountRoleOnSchemaObjectAll;

GrantPrivilegesToAccountRoleOnSchemaObjectAll.builder()
    .objectTypePlural(java.lang.String)
//  .inDatabase(java.lang.String)
//  .inSchema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.objectTypePlural">objectTypePlural</a></code> | <code>java.lang.String</code> | The plural object type of the schema object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.inDatabase">inDatabase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#in_database GrantPrivilegesToAccountRole#in_database}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.inSchema">inSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#in_schema GrantPrivilegesToAccountRole#in_schema}. |

---

##### `objectTypePlural`<sup>Required</sup> <a name="objectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.objectTypePlural"></a>

```java
public java.lang.String getObjectTypePlural();
```

- *Type:* java.lang.String

The plural object type of the schema object on which privileges will be granted.

Valid values are: AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | CORTEX SEARCH SERVICES | DATA METRIC FUNCTIONS | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | IMAGE REPOSITORIES | ICEBERG TABLES | MASKING POLICIES | MATERIALIZED VIEWS | MODELS | NETWORK RULES | NOTEBOOKS | PACKAGES POLICIES | PASSWORD POLICIES | PIPES | PROCEDURES | PROJECTION POLICIES | ROW ACCESS POLICIES | SECRETS | SERVICES | SESSION POLICIES | SEQUENCES | SNAPSHOTS | STAGES | STREAMS | TABLES | TAGS | TASKS | VIEWS | STREAMLITS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#object_type_plural GrantPrivilegesToAccountRole#object_type_plural}

---

##### `inDatabase`<sup>Optional</sup> <a name="inDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.inDatabase"></a>

```java
public java.lang.String getInDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#in_database GrantPrivilegesToAccountRole#in_database}.

---

##### `inSchema`<sup>Optional</sup> <a name="inSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.inSchema"></a>

```java
public java.lang.String getInSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#in_schema GrantPrivilegesToAccountRole#in_schema}.

---

### GrantPrivilegesToAccountRoleOnSchemaObjectFuture <a name="GrantPrivilegesToAccountRoleOnSchemaObjectFuture" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_account_role.GrantPrivilegesToAccountRoleOnSchemaObjectFuture;

GrantPrivilegesToAccountRoleOnSchemaObjectFuture.builder()
    .objectTypePlural(java.lang.String)
//  .inDatabase(java.lang.String)
//  .inSchema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.objectTypePlural">objectTypePlural</a></code> | <code>java.lang.String</code> | The plural object type of the schema object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.inDatabase">inDatabase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#in_database GrantPrivilegesToAccountRole#in_database}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.inSchema">inSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#in_schema GrantPrivilegesToAccountRole#in_schema}. |

---

##### `objectTypePlural`<sup>Required</sup> <a name="objectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.objectTypePlural"></a>

```java
public java.lang.String getObjectTypePlural();
```

- *Type:* java.lang.String

The plural object type of the schema object on which privileges will be granted.

Valid values are: ALERTS | AUTHENTICATION POLICIES | DATA METRIC FUNCTIONS | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | ICEBERG TABLES | MATERIALIZED VIEWS | MODELS | NETWORK RULES | NOTEBOOKS | PASSWORD POLICIES | PIPES | PROCEDURES | SECRETS | SERVICES | SEQUENCES | SNAPSHOTS | STAGES | STREAMS | TABLES | TASKS | VIEWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#object_type_plural GrantPrivilegesToAccountRole#object_type_plural}

---

##### `inDatabase`<sup>Optional</sup> <a name="inDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.inDatabase"></a>

```java
public java.lang.String getInDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#in_database GrantPrivilegesToAccountRole#in_database}.

---

##### `inSchema`<sup>Optional</sup> <a name="inSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.inSchema"></a>

```java
public java.lang.String getInSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/grant_privileges_to_account_role#in_schema GrantPrivilegesToAccountRole#in_schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrantPrivilegesToAccountRoleOnAccountObjectOutputReference <a name="GrantPrivilegesToAccountRoleOnAccountObjectOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_account_role.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference;

new GrantPrivilegesToAccountRoleOnAccountObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectNameInput">objectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectTypeInput">objectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectName">objectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectNameInput`<sup>Optional</sup> <a name="objectNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectNameInput"></a>

```java
public java.lang.String getObjectNameInput();
```

- *Type:* java.lang.String

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectTypeInput"></a>

```java
public java.lang.String getObjectTypeInput();
```

- *Type:* java.lang.String

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectName"></a>

```java
public java.lang.String getObjectName();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.internalValue"></a>

```java
public GrantPrivilegesToAccountRoleOnAccountObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a>

---


### GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference <a name="GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_account_role.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference;

new GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resetInDatabase">resetInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resetInSchema">resetInSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInDatabase` <a name="resetInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resetInDatabase"></a>

```java
public void resetInDatabase()
```

##### `resetInSchema` <a name="resetInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resetInSchema"></a>

```java
public void resetInSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inDatabaseInput">inDatabaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inSchemaInput">inSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.objectTypePluralInput">objectTypePluralInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inDatabase">inDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inSchema">inSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.objectTypePlural">objectTypePlural</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inDatabaseInput`<sup>Optional</sup> <a name="inDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inDatabaseInput"></a>

```java
public java.lang.String getInDatabaseInput();
```

- *Type:* java.lang.String

---

##### `inSchemaInput`<sup>Optional</sup> <a name="inSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inSchemaInput"></a>

```java
public java.lang.String getInSchemaInput();
```

- *Type:* java.lang.String

---

##### `objectTypePluralInput`<sup>Optional</sup> <a name="objectTypePluralInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.objectTypePluralInput"></a>

```java
public java.lang.String getObjectTypePluralInput();
```

- *Type:* java.lang.String

---

##### `inDatabase`<sup>Required</sup> <a name="inDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inDatabase"></a>

```java
public java.lang.String getInDatabase();
```

- *Type:* java.lang.String

---

##### `inSchema`<sup>Required</sup> <a name="inSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inSchema"></a>

```java
public java.lang.String getInSchema();
```

- *Type:* java.lang.String

---

##### `objectTypePlural`<sup>Required</sup> <a name="objectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.objectTypePlural"></a>

```java
public java.lang.String getObjectTypePlural();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.internalValue"></a>

```java
public GrantPrivilegesToAccountRoleOnSchemaObjectAll getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a>

---


### GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference <a name="GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_account_role.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference;

new GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resetInDatabase">resetInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resetInSchema">resetInSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInDatabase` <a name="resetInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resetInDatabase"></a>

```java
public void resetInDatabase()
```

##### `resetInSchema` <a name="resetInSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resetInSchema"></a>

```java
public void resetInSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inDatabaseInput">inDatabaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inSchemaInput">inSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.objectTypePluralInput">objectTypePluralInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inDatabase">inDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inSchema">inSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.objectTypePlural">objectTypePlural</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inDatabaseInput`<sup>Optional</sup> <a name="inDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inDatabaseInput"></a>

```java
public java.lang.String getInDatabaseInput();
```

- *Type:* java.lang.String

---

##### `inSchemaInput`<sup>Optional</sup> <a name="inSchemaInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inSchemaInput"></a>

```java
public java.lang.String getInSchemaInput();
```

- *Type:* java.lang.String

---

##### `objectTypePluralInput`<sup>Optional</sup> <a name="objectTypePluralInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.objectTypePluralInput"></a>

```java
public java.lang.String getObjectTypePluralInput();
```

- *Type:* java.lang.String

---

##### `inDatabase`<sup>Required</sup> <a name="inDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inDatabase"></a>

```java
public java.lang.String getInDatabase();
```

- *Type:* java.lang.String

---

##### `inSchema`<sup>Required</sup> <a name="inSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inSchema"></a>

```java
public java.lang.String getInSchema();
```

- *Type:* java.lang.String

---

##### `objectTypePlural`<sup>Required</sup> <a name="objectTypePlural" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.objectTypePlural"></a>

```java
public java.lang.String getObjectTypePlural();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.internalValue"></a>

```java
public GrantPrivilegesToAccountRoleOnSchemaObjectFuture getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a>

---


### GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference <a name="GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_account_role.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference;

new GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putAll">putAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putFuture">putFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetFuture">resetFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetObjectName">resetObjectName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetObjectType">resetObjectType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAll` <a name="putAll" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putAll"></a>

```java
public void putAll(GrantPrivilegesToAccountRoleOnSchemaObjectAll value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putAll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a>

---

##### `putFuture` <a name="putFuture" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putFuture"></a>

```java
public void putFuture(GrantPrivilegesToAccountRoleOnSchemaObjectFuture value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putFuture.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a>

---

##### `resetAll` <a name="resetAll" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetAll"></a>

```java
public void resetAll()
```

##### `resetFuture` <a name="resetFuture" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetFuture"></a>

```java
public void resetFuture()
```

##### `resetObjectName` <a name="resetObjectName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetObjectName"></a>

```java
public void resetObjectName()
```

##### `resetObjectType` <a name="resetObjectType" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetObjectType"></a>

```java
public void resetObjectType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.all">all</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.future">future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.allInput">allInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.futureInput">futureInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectNameInput">objectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectTypeInput">objectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectName">objectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.all"></a>

```java
public GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference getAll();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference</a>

---

##### `future`<sup>Required</sup> <a name="future" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.future"></a>

```java
public GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference getFuture();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference</a>

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.allInput"></a>

```java
public GrantPrivilegesToAccountRoleOnSchemaObjectAll getAllInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a>

---

##### `futureInput`<sup>Optional</sup> <a name="futureInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.futureInput"></a>

```java
public GrantPrivilegesToAccountRoleOnSchemaObjectFuture getFutureInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a>

---

##### `objectNameInput`<sup>Optional</sup> <a name="objectNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectNameInput"></a>

```java
public java.lang.String getObjectNameInput();
```

- *Type:* java.lang.String

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectTypeInput"></a>

```java
public java.lang.String getObjectTypeInput();
```

- *Type:* java.lang.String

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectName"></a>

```java
public java.lang.String getObjectName();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.internalValue"></a>

```java
public GrantPrivilegesToAccountRoleOnSchemaObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a>

---


### GrantPrivilegesToAccountRoleOnSchemaOutputReference <a name="GrantPrivilegesToAccountRoleOnSchemaOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.grant_privileges_to_account_role.GrantPrivilegesToAccountRoleOnSchemaOutputReference;

new GrantPrivilegesToAccountRoleOnSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetAllSchemasInDatabase">resetAllSchemasInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetFutureSchemasInDatabase">resetFutureSchemasInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllSchemasInDatabase` <a name="resetAllSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetAllSchemasInDatabase"></a>

```java
public void resetAllSchemasInDatabase()
```

##### `resetFutureSchemasInDatabase` <a name="resetFutureSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetFutureSchemasInDatabase"></a>

```java
public void resetFutureSchemasInDatabase()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.allSchemasInDatabaseInput">allSchemasInDatabaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.futureSchemasInDatabaseInput">futureSchemasInDatabaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.allSchemasInDatabase">allSchemasInDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.futureSchemasInDatabase">futureSchemasInDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allSchemasInDatabaseInput`<sup>Optional</sup> <a name="allSchemasInDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.allSchemasInDatabaseInput"></a>

```java
public java.lang.String getAllSchemasInDatabaseInput();
```

- *Type:* java.lang.String

---

##### `futureSchemasInDatabaseInput`<sup>Optional</sup> <a name="futureSchemasInDatabaseInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.futureSchemasInDatabaseInput"></a>

```java
public java.lang.String getFutureSchemasInDatabaseInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `allSchemasInDatabase`<sup>Required</sup> <a name="allSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.allSchemasInDatabase"></a>

```java
public java.lang.String getAllSchemasInDatabase();
```

- *Type:* java.lang.String

---

##### `futureSchemasInDatabase`<sup>Required</sup> <a name="futureSchemasInDatabase" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.futureSchemasInDatabase"></a>

```java
public java.lang.String getFutureSchemasInDatabase();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.internalValue"></a>

```java
public GrantPrivilegesToAccountRoleOnSchema getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a>

---



