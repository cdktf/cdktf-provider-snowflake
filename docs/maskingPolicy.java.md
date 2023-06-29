# `snowflake_masking_policy`

Refer to the Terraform Registory for docs: [`snowflake_masking_policy`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy).

# `maskingPolicy` Submodule <a name="`maskingPolicy` Submodule" id="@cdktf/provider-snowflake.maskingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaskingPolicy <a name="MaskingPolicy" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy snowflake_masking_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.masking_policy.MaskingPolicy;

MaskingPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .maskingExpression(java.lang.String)
    .name(java.lang.String)
    .returnDataType(java.lang.String)
    .schema(java.lang.String)
    .signature(MaskingPolicySignature)
//  .comment(java.lang.String)
//  .exemptOtherPolicies(java.lang.Boolean)
//  .exemptOtherPolicies(IResolvable)
//  .id(java.lang.String)
//  .ifNotExists(java.lang.Boolean)
//  .ifNotExists(IResolvable)
//  .orReplace(java.lang.Boolean)
//  .orReplace(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the masking policy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.maskingExpression">maskingExpression</a></code> | <code>java.lang.String</code> | Specifies the SQL expression that transforms the data. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the masking policy; |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.returnDataType">returnDataType</a></code> | <code>java.lang.String</code> | Specifies the data type to return. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the masking policy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.signature">signature</a></code> | <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature">MaskingPolicySignature</a></code> | signature block. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the masking policy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.exemptOtherPolicies">exemptOtherPolicies</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the row access policy or conditional masking policy can reference a column that is already protected by a masking policy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#id MaskingPolicy#id}. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.ifNotExists">ifNotExists</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Prevent overwriting a previous masking policy with the same name. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.orReplace">orReplace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to override a previous masking policy with the same name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the masking policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#database MaskingPolicy#database}

---

##### `maskingExpression`<sup>Required</sup> <a name="maskingExpression" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.maskingExpression"></a>

- *Type:* java.lang.String

Specifies the SQL expression that transforms the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#masking_expression MaskingPolicy#masking_expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the masking policy;

must be unique for the database and schema in which the masking policy is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#name MaskingPolicy#name}

---

##### `returnDataType`<sup>Required</sup> <a name="returnDataType" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.returnDataType"></a>

- *Type:* java.lang.String

Specifies the data type to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#return_data_type MaskingPolicy#return_data_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the masking policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#schema MaskingPolicy#schema}

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.signature"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature">MaskingPolicySignature</a>

signature block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#signature MaskingPolicy#signature}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the masking policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#comment MaskingPolicy#comment}

---

##### `exemptOtherPolicies`<sup>Optional</sup> <a name="exemptOtherPolicies" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.exemptOtherPolicies"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the row access policy or conditional masking policy can reference a column that is already protected by a masking policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#exempt_other_policies MaskingPolicy#exempt_other_policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#id MaskingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ifNotExists`<sup>Optional</sup> <a name="ifNotExists" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.ifNotExists"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Prevent overwriting a previous masking policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#if_not_exists MaskingPolicy#if_not_exists}

---

##### `orReplace`<sup>Optional</sup> <a name="orReplace" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.Initializer.parameter.orReplace"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to override a previous masking policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#or_replace MaskingPolicy#or_replace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.putSignature">putSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetExemptOtherPolicies">resetExemptOtherPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetIfNotExists">resetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetOrReplace">resetOrReplace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSignature` <a name="putSignature" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.putSignature"></a>

```java
public void putSignature(MaskingPolicySignature value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.putSignature.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature">MaskingPolicySignature</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetComment"></a>

```java
public void resetComment()
```

##### `resetExemptOtherPolicies` <a name="resetExemptOtherPolicies" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetExemptOtherPolicies"></a>

```java
public void resetExemptOtherPolicies()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetIfNotExists` <a name="resetIfNotExists" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetIfNotExists"></a>

```java
public void resetIfNotExists()
```

##### `resetOrReplace` <a name="resetOrReplace" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.resetOrReplace"></a>

```java
public void resetOrReplace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.masking_policy.MaskingPolicy;

MaskingPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.masking_policy.MaskingPolicy;

MaskingPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.masking_policy.MaskingPolicy;

MaskingPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.qualifiedName">qualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.signature">signature</a></code> | <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference">MaskingPolicySignatureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.exemptOtherPoliciesInput">exemptOtherPoliciesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.ifNotExistsInput">ifNotExistsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.maskingExpressionInput">maskingExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.orReplaceInput">orReplaceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.returnDataTypeInput">returnDataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.signatureInput">signatureInput</a></code> | <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature">MaskingPolicySignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.exemptOtherPolicies">exemptOtherPolicies</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.ifNotExists">ifNotExists</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.maskingExpression">maskingExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.orReplace">orReplace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.returnDataType">returnDataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `qualifiedName`<sup>Required</sup> <a name="qualifiedName" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.qualifiedName"></a>

```java
public java.lang.String getQualifiedName();
```

- *Type:* java.lang.String

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.signature"></a>

```java
public MaskingPolicySignatureOutputReference getSignature();
```

- *Type:* <a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference">MaskingPolicySignatureOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `exemptOtherPoliciesInput`<sup>Optional</sup> <a name="exemptOtherPoliciesInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.exemptOtherPoliciesInput"></a>

```java
public java.lang.Object getExemptOtherPoliciesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ifNotExistsInput`<sup>Optional</sup> <a name="ifNotExistsInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.ifNotExistsInput"></a>

```java
public java.lang.Object getIfNotExistsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maskingExpressionInput`<sup>Optional</sup> <a name="maskingExpressionInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.maskingExpressionInput"></a>

```java
public java.lang.String getMaskingExpressionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orReplaceInput`<sup>Optional</sup> <a name="orReplaceInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.orReplaceInput"></a>

```java
public java.lang.Object getOrReplaceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `returnDataTypeInput`<sup>Optional</sup> <a name="returnDataTypeInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.returnDataTypeInput"></a>

```java
public java.lang.String getReturnDataTypeInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.signatureInput"></a>

```java
public MaskingPolicySignature getSignatureInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature">MaskingPolicySignature</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `exemptOtherPolicies`<sup>Required</sup> <a name="exemptOtherPolicies" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.exemptOtherPolicies"></a>

```java
public java.lang.Object getExemptOtherPolicies();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ifNotExists`<sup>Required</sup> <a name="ifNotExists" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.ifNotExists"></a>

```java
public java.lang.Object getIfNotExists();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maskingExpression`<sup>Required</sup> <a name="maskingExpression" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.maskingExpression"></a>

```java
public java.lang.String getMaskingExpression();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orReplace`<sup>Required</sup> <a name="orReplace" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.orReplace"></a>

```java
public java.lang.Object getOrReplace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `returnDataType`<sup>Required</sup> <a name="returnDataType" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.returnDataType"></a>

```java
public java.lang.String getReturnDataType();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MaskingPolicyConfig <a name="MaskingPolicyConfig" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.masking_policy.MaskingPolicyConfig;

MaskingPolicyConfig.builder()
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
    .maskingExpression(java.lang.String)
    .name(java.lang.String)
    .returnDataType(java.lang.String)
    .schema(java.lang.String)
    .signature(MaskingPolicySignature)
//  .comment(java.lang.String)
//  .exemptOtherPolicies(java.lang.Boolean)
//  .exemptOtherPolicies(IResolvable)
//  .id(java.lang.String)
//  .ifNotExists(java.lang.Boolean)
//  .ifNotExists(IResolvable)
//  .orReplace(java.lang.Boolean)
//  .orReplace(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the masking policy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.maskingExpression">maskingExpression</a></code> | <code>java.lang.String</code> | Specifies the SQL expression that transforms the data. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the masking policy; |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.returnDataType">returnDataType</a></code> | <code>java.lang.String</code> | Specifies the data type to return. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the masking policy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.signature">signature</a></code> | <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature">MaskingPolicySignature</a></code> | signature block. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the masking policy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.exemptOtherPolicies">exemptOtherPolicies</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the row access policy or conditional masking policy can reference a column that is already protected by a masking policy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#id MaskingPolicy#id}. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.ifNotExists">ifNotExists</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Prevent overwriting a previous masking policy with the same name. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.orReplace">orReplace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to override a previous masking policy with the same name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the masking policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#database MaskingPolicy#database}

---

##### `maskingExpression`<sup>Required</sup> <a name="maskingExpression" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.maskingExpression"></a>

```java
public java.lang.String getMaskingExpression();
```

- *Type:* java.lang.String

Specifies the SQL expression that transforms the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#masking_expression MaskingPolicy#masking_expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the masking policy;

must be unique for the database and schema in which the masking policy is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#name MaskingPolicy#name}

---

##### `returnDataType`<sup>Required</sup> <a name="returnDataType" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.returnDataType"></a>

```java
public java.lang.String getReturnDataType();
```

- *Type:* java.lang.String

Specifies the data type to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#return_data_type MaskingPolicy#return_data_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the masking policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#schema MaskingPolicy#schema}

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.signature"></a>

```java
public MaskingPolicySignature getSignature();
```

- *Type:* <a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature">MaskingPolicySignature</a>

signature block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#signature MaskingPolicy#signature}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the masking policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#comment MaskingPolicy#comment}

---

##### `exemptOtherPolicies`<sup>Optional</sup> <a name="exemptOtherPolicies" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.exemptOtherPolicies"></a>

```java
public java.lang.Object getExemptOtherPolicies();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the row access policy or conditional masking policy can reference a column that is already protected by a masking policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#exempt_other_policies MaskingPolicy#exempt_other_policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#id MaskingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ifNotExists`<sup>Optional</sup> <a name="ifNotExists" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.ifNotExists"></a>

```java
public java.lang.Object getIfNotExists();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Prevent overwriting a previous masking policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#if_not_exists MaskingPolicy#if_not_exists}

---

##### `orReplace`<sup>Optional</sup> <a name="orReplace" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicyConfig.property.orReplace"></a>

```java
public java.lang.Object getOrReplace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to override a previous masking policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#or_replace MaskingPolicy#or_replace}

---

### MaskingPolicySignature <a name="MaskingPolicySignature" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.masking_policy.MaskingPolicySignature;

MaskingPolicySignature.builder()
    .column(IResolvable)
    .column(java.util.List<MaskingPolicySignatureColumn>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature.property.column">column</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn">MaskingPolicySignatureColumn</a>></code> | column block. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature.property.column"></a>

```java
public java.lang.Object getColumn();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn">MaskingPolicySignatureColumn</a>>

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#column MaskingPolicy#column}

---

### MaskingPolicySignatureColumn <a name="MaskingPolicySignatureColumn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.masking_policy.MaskingPolicySignatureColumn;

MaskingPolicySignatureColumn.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the column name to mask. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn.property.type">type</a></code> | <code>java.lang.String</code> | Specifies the column type to mask. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the column name to mask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#name MaskingPolicy#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies the column type to mask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.67.0/docs/resources/masking_policy#type MaskingPolicy#type}

---

## Classes <a name="Classes" id="Classes"></a>

### MaskingPolicySignatureColumnList <a name="MaskingPolicySignatureColumnList" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.masking_policy.MaskingPolicySignatureColumnList;

new MaskingPolicySignatureColumnList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.get"></a>

```java
public MaskingPolicySignatureColumnOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn">MaskingPolicySignatureColumn</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn">MaskingPolicySignatureColumn</a>>

---


### MaskingPolicySignatureColumnOutputReference <a name="MaskingPolicySignatureColumnOutputReference" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.masking_policy.MaskingPolicySignatureColumnOutputReference;

new MaskingPolicySignatureColumnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn">MaskingPolicySignatureColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn">MaskingPolicySignatureColumn</a>

---


### MaskingPolicySignatureOutputReference <a name="MaskingPolicySignatureOutputReference" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.masking_policy.MaskingPolicySignatureOutputReference;

new MaskingPolicySignatureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.putColumn">putColumn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumn` <a name="putColumn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.putColumn"></a>

```java
public void putColumn(IResolvable OR java.util.List<MaskingPolicySignatureColumn> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.putColumn.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn">MaskingPolicySignatureColumn</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.column">column</a></code> | <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList">MaskingPolicySignatureColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.columnInput">columnInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn">MaskingPolicySignatureColumn</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature">MaskingPolicySignature</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.column"></a>

```java
public MaskingPolicySignatureColumnList getColumn();
```

- *Type:* <a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumnList">MaskingPolicySignatureColumnList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.columnInput"></a>

```java
public java.lang.Object getColumnInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureColumn">MaskingPolicySignatureColumn</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignatureOutputReference.property.internalValue"></a>

```java
public MaskingPolicySignature getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.maskingPolicy.MaskingPolicySignature">MaskingPolicySignature</a>

---



