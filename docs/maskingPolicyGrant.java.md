# `snowflake_masking_policy_grant`

Refer to the Terraform Registory for docs: [`snowflake_masking_policy_grant`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant).

# `maskingPolicyGrant` Submodule <a name="`maskingPolicyGrant` Submodule" id="@cdktf/provider-snowflake.maskingPolicyGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaskingPolicyGrant <a name="MaskingPolicyGrant" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant snowflake_masking_policy_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.masking_policy_grant.MaskingPolicyGrant;

MaskingPolicyGrant.Builder.create(Construct scope, java.lang.String id)
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
    .databaseName(java.lang.String)
    .maskingPolicyName(java.lang.String)
    .schemaName(java.lang.String)
//  .enableMultipleGrants(java.lang.Boolean)
//  .enableMultipleGrants(IResolvable)
//  .id(java.lang.String)
//  .privilege(java.lang.String)
//  .revertOwnershipToRoleName(java.lang.String)
//  .roles(java.util.List<java.lang.String>)
//  .withGrantOption(java.lang.Boolean)
//  .withGrantOption(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of the database containing the masking policy on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.maskingPolicyName">maskingPolicyName</a></code> | <code>java.lang.String</code> | The name of the masking policy on which to grant privileges immediately. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.schemaName">schemaName</a></code> | <code>java.lang.String</code> | The name of the schema containing the masking policy on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.enableMultipleGrants">enableMultipleGrants</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#id MaskingPolicyGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.privilege">privilege</a></code> | <code>java.lang.String</code> | The privilege to grant on the masking policy. To grant all privileges, use the value `ALL PRIVILEGES`. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.revertOwnershipToRoleName">revertOwnershipToRoleName</a></code> | <code>java.lang.String</code> | The name of the role to revert ownership to on destroy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.withGrantOption">withGrantOption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

The name of the database containing the masking policy on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#database_name MaskingPolicyGrant#database_name}

---

##### `maskingPolicyName`<sup>Required</sup> <a name="maskingPolicyName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.maskingPolicyName"></a>

- *Type:* java.lang.String

The name of the masking policy on which to grant privileges immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#masking_policy_name MaskingPolicyGrant#masking_policy_name}

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.schemaName"></a>

- *Type:* java.lang.String

The name of the schema containing the masking policy on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#schema_name MaskingPolicyGrant#schema_name}

---

##### `enableMultipleGrants`<sup>Optional</sup> <a name="enableMultipleGrants" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.enableMultipleGrants"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#enable_multiple_grants MaskingPolicyGrant#enable_multiple_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#id MaskingPolicyGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privilege`<sup>Optional</sup> <a name="privilege" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.privilege"></a>

- *Type:* java.lang.String

The privilege to grant on the masking policy. To grant all privileges, use the value `ALL PRIVILEGES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#privilege MaskingPolicyGrant#privilege}

---

##### `revertOwnershipToRoleName`<sup>Optional</sup> <a name="revertOwnershipToRoleName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.revertOwnershipToRoleName"></a>

- *Type:* java.lang.String

The name of the role to revert ownership to on destroy.

Has no effect unless `privilege` is set to `OWNERSHIP`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#revert_ownership_to_role_name MaskingPolicyGrant#revert_ownership_to_role_name}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.roles"></a>

- *Type:* java.util.List<java.lang.String>

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#roles MaskingPolicyGrant#roles}

---

##### `withGrantOption`<sup>Optional</sup> <a name="withGrantOption" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.withGrantOption"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#with_grant_option MaskingPolicyGrant#with_grant_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetEnableMultipleGrants">resetEnableMultipleGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetPrivilege">resetPrivilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetRevertOwnershipToRoleName">resetRevertOwnershipToRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetWithGrantOption">resetWithGrantOption</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEnableMultipleGrants` <a name="resetEnableMultipleGrants" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetEnableMultipleGrants"></a>

```java
public void resetEnableMultipleGrants()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetId"></a>

```java
public void resetId()
```

##### `resetPrivilege` <a name="resetPrivilege" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetPrivilege"></a>

```java
public void resetPrivilege()
```

##### `resetRevertOwnershipToRoleName` <a name="resetRevertOwnershipToRoleName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetRevertOwnershipToRoleName"></a>

```java
public void resetRevertOwnershipToRoleName()
```

##### `resetRoles` <a name="resetRoles" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetRoles"></a>

```java
public void resetRoles()
```

##### `resetWithGrantOption` <a name="resetWithGrantOption" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetWithGrantOption"></a>

```java
public void resetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.masking_policy_grant.MaskingPolicyGrant;

MaskingPolicyGrant.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.masking_policy_grant.MaskingPolicyGrant;

MaskingPolicyGrant.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.masking_policy_grant.MaskingPolicyGrant;

MaskingPolicyGrant.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.enableMultipleGrantsInput">enableMultipleGrantsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.maskingPolicyNameInput">maskingPolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.privilegeInput">privilegeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.revertOwnershipToRoleNameInput">revertOwnershipToRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.withGrantOptionInput">withGrantOptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.enableMultipleGrants">enableMultipleGrants</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.maskingPolicyName">maskingPolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.privilege">privilege</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.revertOwnershipToRoleName">revertOwnershipToRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.withGrantOption">withGrantOption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `enableMultipleGrantsInput`<sup>Optional</sup> <a name="enableMultipleGrantsInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.enableMultipleGrantsInput"></a>

```java
public java.lang.Object getEnableMultipleGrantsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maskingPolicyNameInput`<sup>Optional</sup> <a name="maskingPolicyNameInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.maskingPolicyNameInput"></a>

```java
public java.lang.String getMaskingPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `privilegeInput`<sup>Optional</sup> <a name="privilegeInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.privilegeInput"></a>

```java
public java.lang.String getPrivilegeInput();
```

- *Type:* java.lang.String

---

##### `revertOwnershipToRoleNameInput`<sup>Optional</sup> <a name="revertOwnershipToRoleNameInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.revertOwnershipToRoleNameInput"></a>

```java
public java.lang.String getRevertOwnershipToRoleNameInput();
```

- *Type:* java.lang.String

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="withGrantOptionInput" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.withGrantOptionInput"></a>

```java
public java.lang.Object getWithGrantOptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `enableMultipleGrants`<sup>Required</sup> <a name="enableMultipleGrants" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.enableMultipleGrants"></a>

```java
public java.lang.Object getEnableMultipleGrants();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maskingPolicyName`<sup>Required</sup> <a name="maskingPolicyName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.maskingPolicyName"></a>

```java
public java.lang.String getMaskingPolicyName();
```

- *Type:* java.lang.String

---

##### `privilege`<sup>Required</sup> <a name="privilege" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.privilege"></a>

```java
public java.lang.String getPrivilege();
```

- *Type:* java.lang.String

---

##### `revertOwnershipToRoleName`<sup>Required</sup> <a name="revertOwnershipToRoleName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.revertOwnershipToRoleName"></a>

```java
public java.lang.String getRevertOwnershipToRoleName();
```

- *Type:* java.lang.String

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `withGrantOption`<sup>Required</sup> <a name="withGrantOption" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.withGrantOption"></a>

```java
public java.lang.Object getWithGrantOption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MaskingPolicyGrantConfig <a name="MaskingPolicyGrantConfig" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.masking_policy_grant.MaskingPolicyGrantConfig;

MaskingPolicyGrantConfig.builder()
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
    .databaseName(java.lang.String)
    .maskingPolicyName(java.lang.String)
    .schemaName(java.lang.String)
//  .enableMultipleGrants(java.lang.Boolean)
//  .enableMultipleGrants(IResolvable)
//  .id(java.lang.String)
//  .privilege(java.lang.String)
//  .revertOwnershipToRoleName(java.lang.String)
//  .roles(java.util.List<java.lang.String>)
//  .withGrantOption(java.lang.Boolean)
//  .withGrantOption(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of the database containing the masking policy on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.maskingPolicyName">maskingPolicyName</a></code> | <code>java.lang.String</code> | The name of the masking policy on which to grant privileges immediately. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | The name of the schema containing the masking policy on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.enableMultipleGrants">enableMultipleGrants</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#id MaskingPolicyGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.privilege">privilege</a></code> | <code>java.lang.String</code> | The privilege to grant on the masking policy. To grant all privileges, use the value `ALL PRIVILEGES`. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.revertOwnershipToRoleName">revertOwnershipToRoleName</a></code> | <code>java.lang.String</code> | The name of the role to revert ownership to on destroy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.withGrantOption">withGrantOption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

The name of the database containing the masking policy on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#database_name MaskingPolicyGrant#database_name}

---

##### `maskingPolicyName`<sup>Required</sup> <a name="maskingPolicyName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.maskingPolicyName"></a>

```java
public java.lang.String getMaskingPolicyName();
```

- *Type:* java.lang.String

The name of the masking policy on which to grant privileges immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#masking_policy_name MaskingPolicyGrant#masking_policy_name}

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

The name of the schema containing the masking policy on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#schema_name MaskingPolicyGrant#schema_name}

---

##### `enableMultipleGrants`<sup>Optional</sup> <a name="enableMultipleGrants" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.enableMultipleGrants"></a>

```java
public java.lang.Object getEnableMultipleGrants();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#enable_multiple_grants MaskingPolicyGrant#enable_multiple_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#id MaskingPolicyGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privilege`<sup>Optional</sup> <a name="privilege" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.privilege"></a>

```java
public java.lang.String getPrivilege();
```

- *Type:* java.lang.String

The privilege to grant on the masking policy. To grant all privileges, use the value `ALL PRIVILEGES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#privilege MaskingPolicyGrant#privilege}

---

##### `revertOwnershipToRoleName`<sup>Optional</sup> <a name="revertOwnershipToRoleName" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.revertOwnershipToRoleName"></a>

```java
public java.lang.String getRevertOwnershipToRoleName();
```

- *Type:* java.lang.String

The name of the role to revert ownership to on destroy.

Has no effect unless `privilege` is set to `OWNERSHIP`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#revert_ownership_to_role_name MaskingPolicyGrant#revert_ownership_to_role_name}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#roles MaskingPolicyGrant#roles}

---

##### `withGrantOption`<sup>Optional</sup> <a name="withGrantOption" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.withGrantOption"></a>

```java
public java.lang.Object getWithGrantOption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy_grant#with_grant_option MaskingPolicyGrant#with_grant_option}

---



