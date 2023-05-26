# `snowflake_function`

Refer to the Terraform Registory for docs: [`snowflake_function`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function).

# `functionResource` Submodule <a name="`functionResource` Submodule" id="@cdktf/provider-snowflake.functionResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionResource <a name="FunctionResource" id="@cdktf/provider-snowflake.functionResource.FunctionResource"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function snowflake_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_resource.FunctionResource;

FunctionResource.Builder.create(Construct scope, java.lang.String id)
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
    .returnType(java.lang.String)
    .schema(java.lang.String)
    .statement(java.lang.String)
//  .arguments(IResolvable)
//  .arguments(java.util.List<FunctionResourceArguments>)
//  .comment(java.lang.String)
//  .handler(java.lang.String)
//  .id(java.lang.String)
//  .imports(java.util.List<java.lang.String>)
//  .isSecure(java.lang.Boolean)
//  .isSecure(IResolvable)
//  .language(java.lang.String)
//  .nullInputBehavior(java.lang.String)
//  .packages(java.util.List<java.lang.String>)
//  .returnBehavior(java.lang.String)
//  .runtimeVersion(java.lang.String)
//  .targetPath(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the function. Don't use the \| character. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the function; |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.returnType">returnType</a></code> | <code>java.lang.String</code> | The return type of the function. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the function. Don't use the \| character. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.statement">statement</a></code> | <code>java.lang.String</code> | Specifies the javascript / java / sql / python code used to create the function. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.arguments">arguments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>></code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the function. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.handler">handler</a></code> | <code>java.lang.String</code> | The handler method for Java / Python function. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#id FunctionResource#id}. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.imports">imports</a></code> | <code>java.util.List<java.lang.String></code> | Imports for Java / Python functions. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.isSecure">isSecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies that the function is secure. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.language">language</a></code> | <code>java.lang.String</code> | The language of the statement. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.nullInputBehavior">nullInputBehavior</a></code> | <code>java.lang.String</code> | Specifies the behavior of the function when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.packages">packages</a></code> | <code>java.util.List<java.lang.String></code> | List of package imports to use for Java / Python functions. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.returnBehavior">returnBehavior</a></code> | <code>java.lang.String</code> | Specifies the behavior of the function when returning results. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | Required for Python functions. Specifies Python runtime version. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.targetPath">targetPath</a></code> | <code>java.lang.String</code> | The target path for the Java / Python functions. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the function. Don't use the | character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#database FunctionResource#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the function;

does not have to be unique for the schema in which the function is created. Don't use the | character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#name FunctionResource#name}

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.returnType"></a>

- *Type:* java.lang.String

The return type of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#return_type FunctionResource#return_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the function. Don't use the | character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#schema FunctionResource#schema}

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.statement"></a>

- *Type:* java.lang.String

Specifies the javascript / java / sql / python code used to create the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#statement FunctionResource#statement}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.arguments"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>>

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#arguments FunctionResource#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#comment FunctionResource#comment}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.handler"></a>

- *Type:* java.lang.String

The handler method for Java / Python function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#handler FunctionResource#handler}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#id FunctionResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.imports"></a>

- *Type:* java.util.List<java.lang.String>

Imports for Java / Python functions.

For Java this a list of jar files, for Python this is a list of Python files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#imports FunctionResource#imports}

---

##### `isSecure`<sup>Optional</sup> <a name="isSecure" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.isSecure"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies that the function is secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#is_secure FunctionResource#is_secure}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.language"></a>

- *Type:* java.lang.String

The language of the statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#language FunctionResource#language}

---

##### `nullInputBehavior`<sup>Optional</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.nullInputBehavior"></a>

- *Type:* java.lang.String

Specifies the behavior of the function when called with null inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#null_input_behavior FunctionResource#null_input_behavior}

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.packages"></a>

- *Type:* java.util.List<java.lang.String>

List of package imports to use for Java / Python functions.

For Java, package imports should be of the form: package_name:version_number, where package_name is snowflake_domain:package. For Python use it should be: ('numpy','pandas','xgboost==1.5.0').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#packages FunctionResource#packages}

---

##### `returnBehavior`<sup>Optional</sup> <a name="returnBehavior" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.returnBehavior"></a>

- *Type:* java.lang.String

Specifies the behavior of the function when returning results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#return_behavior FunctionResource#return_behavior}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.runtimeVersion"></a>

- *Type:* java.lang.String

Required for Python functions. Specifies Python runtime version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#runtime_version FunctionResource#runtime_version}

---

##### `targetPath`<sup>Optional</sup> <a name="targetPath" id="@cdktf/provider-snowflake.functionResource.FunctionResource.Initializer.parameter.targetPath"></a>

- *Type:* java.lang.String

The target path for the Java / Python functions.

For Java, it is the path of compiled jar files and for the Python it is the path of the Python files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#target_path FunctionResource#target_path}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.putArguments">putArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetHandler">resetHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetImports">resetImports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetIsSecure">resetIsSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetNullInputBehavior">resetNullInputBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetPackages">resetPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetReturnBehavior">resetReturnBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.resetTargetPath">resetTargetPath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionResource.FunctionResource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.functionResource.FunctionResource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.functionResource.FunctionResource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionResource.FunctionResource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.functionResource.FunctionResource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.functionResource.FunctionResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.functionResource.FunctionResource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.functionResource.FunctionResource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putArguments` <a name="putArguments" id="@cdktf/provider-snowflake.functionResource.FunctionResource.putArguments"></a>

```java
public void putArguments(IResolvable OR java.util.List<FunctionResourceArguments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionResource.FunctionResource.putArguments.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>>

---

##### `resetArguments` <a name="resetArguments" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetArguments"></a>

```java
public void resetArguments()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetComment"></a>

```java
public void resetComment()
```

##### `resetHandler` <a name="resetHandler" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetHandler"></a>

```java
public void resetHandler()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetId"></a>

```java
public void resetId()
```

##### `resetImports` <a name="resetImports" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetImports"></a>

```java
public void resetImports()
```

##### `resetIsSecure` <a name="resetIsSecure" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetIsSecure"></a>

```java
public void resetIsSecure()
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetLanguage"></a>

```java
public void resetLanguage()
```

##### `resetNullInputBehavior` <a name="resetNullInputBehavior" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetNullInputBehavior"></a>

```java
public void resetNullInputBehavior()
```

##### `resetPackages` <a name="resetPackages" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetPackages"></a>

```java
public void resetPackages()
```

##### `resetReturnBehavior` <a name="resetReturnBehavior" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetReturnBehavior"></a>

```java
public void resetReturnBehavior()
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetRuntimeVersion"></a>

```java
public void resetRuntimeVersion()
```

##### `resetTargetPath` <a name="resetTargetPath" id="@cdktf/provider-snowflake.functionResource.FunctionResource.resetTargetPath"></a>

```java
public void resetTargetPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.functionResource.FunctionResource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_resource.FunctionResource;

FunctionResource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionResource.FunctionResource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.functionResource.FunctionResource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_resource.FunctionResource;

FunctionResource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionResource.FunctionResource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.functionResource.FunctionResource.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_resource.FunctionResource;

FunctionResource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionResource.FunctionResource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.arguments">arguments</a></code> | <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList">FunctionResourceArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.argumentsInput">argumentsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.handlerInput">handlerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.importsInput">importsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.isSecureInput">isSecureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.languageInput">languageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.nullInputBehaviorInput">nullInputBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.packagesInput">packagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.returnBehaviorInput">returnBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.returnTypeInput">returnTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.statementInput">statementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.targetPathInput">targetPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.handler">handler</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.imports">imports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.isSecure">isSecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.nullInputBehavior">nullInputBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.packages">packages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.returnBehavior">returnBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.returnType">returnType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.statement">statement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.targetPath">targetPath</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.arguments"></a>

```java
public FunctionResourceArgumentsList getArguments();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList">FunctionResourceArgumentsList</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.argumentsInput"></a>

```java
public java.lang.Object getArgumentsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `handlerInput`<sup>Optional</sup> <a name="handlerInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.handlerInput"></a>

```java
public java.lang.String getHandlerInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importsInput`<sup>Optional</sup> <a name="importsInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.importsInput"></a>

```java
public java.util.List<java.lang.String> getImportsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isSecureInput`<sup>Optional</sup> <a name="isSecureInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.isSecureInput"></a>

```java
public java.lang.Object getIsSecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.languageInput"></a>

```java
public java.lang.String getLanguageInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nullInputBehaviorInput`<sup>Optional</sup> <a name="nullInputBehaviorInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.nullInputBehaviorInput"></a>

```java
public java.lang.String getNullInputBehaviorInput();
```

- *Type:* java.lang.String

---

##### `packagesInput`<sup>Optional</sup> <a name="packagesInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.packagesInput"></a>

```java
public java.util.List<java.lang.String> getPackagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `returnBehaviorInput`<sup>Optional</sup> <a name="returnBehaviorInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.returnBehaviorInput"></a>

```java
public java.lang.String getReturnBehaviorInput();
```

- *Type:* java.lang.String

---

##### `returnTypeInput`<sup>Optional</sup> <a name="returnTypeInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.returnTypeInput"></a>

```java
public java.lang.String getReturnTypeInput();
```

- *Type:* java.lang.String

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.runtimeVersionInput"></a>

```java
public java.lang.String getRuntimeVersionInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.statementInput"></a>

```java
public java.lang.String getStatementInput();
```

- *Type:* java.lang.String

---

##### `targetPathInput`<sup>Optional</sup> <a name="targetPathInput" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.targetPathInput"></a>

```java
public java.lang.String getTargetPathInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.handler"></a>

```java
public java.lang.String getHandler();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imports`<sup>Required</sup> <a name="imports" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.imports"></a>

```java
public java.util.List<java.lang.String> getImports();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isSecure`<sup>Required</sup> <a name="isSecure" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.isSecure"></a>

```java
public java.lang.Object getIsSecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nullInputBehavior`<sup>Required</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.nullInputBehavior"></a>

```java
public java.lang.String getNullInputBehavior();
```

- *Type:* java.lang.String

---

##### `packages`<sup>Required</sup> <a name="packages" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.packages"></a>

```java
public java.util.List<java.lang.String> getPackages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `returnBehavior`<sup>Required</sup> <a name="returnBehavior" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.returnBehavior"></a>

```java
public java.lang.String getReturnBehavior();
```

- *Type:* java.lang.String

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.returnType"></a>

```java
public java.lang.String getReturnType();
```

- *Type:* java.lang.String

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.statement"></a>

```java
public java.lang.String getStatement();
```

- *Type:* java.lang.String

---

##### `targetPath`<sup>Required</sup> <a name="targetPath" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.targetPath"></a>

```java
public java.lang.String getTargetPath();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.functionResource.FunctionResource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionResourceArguments <a name="FunctionResourceArguments" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArguments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_resource.FunctionResourceArguments;

FunctionResourceArguments.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments.property.name">name</a></code> | <code>java.lang.String</code> | The argument name. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments.property.type">type</a></code> | <code>java.lang.String</code> | The argument type. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArguments.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The argument name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#name FunctionResource#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArguments.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The argument type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#type FunctionResource#type}

---

### FunctionResourceConfig <a name="FunctionResourceConfig" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_resource.FunctionResourceConfig;

FunctionResourceConfig.builder()
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
    .returnType(java.lang.String)
    .schema(java.lang.String)
    .statement(java.lang.String)
//  .arguments(IResolvable)
//  .arguments(java.util.List<FunctionResourceArguments>)
//  .comment(java.lang.String)
//  .handler(java.lang.String)
//  .id(java.lang.String)
//  .imports(java.util.List<java.lang.String>)
//  .isSecure(java.lang.Boolean)
//  .isSecure(IResolvable)
//  .language(java.lang.String)
//  .nullInputBehavior(java.lang.String)
//  .packages(java.util.List<java.lang.String>)
//  .returnBehavior(java.lang.String)
//  .runtimeVersion(java.lang.String)
//  .targetPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the function. Don't use the \| character. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the function; |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.returnType">returnType</a></code> | <code>java.lang.String</code> | The return type of the function. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the function. Don't use the \| character. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.statement">statement</a></code> | <code>java.lang.String</code> | Specifies the javascript / java / sql / python code used to create the function. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.arguments">arguments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>></code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the function. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.handler">handler</a></code> | <code>java.lang.String</code> | The handler method for Java / Python function. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#id FunctionResource#id}. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.imports">imports</a></code> | <code>java.util.List<java.lang.String></code> | Imports for Java / Python functions. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.isSecure">isSecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies that the function is secure. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.language">language</a></code> | <code>java.lang.String</code> | The language of the statement. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.nullInputBehavior">nullInputBehavior</a></code> | <code>java.lang.String</code> | Specifies the behavior of the function when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.packages">packages</a></code> | <code>java.util.List<java.lang.String></code> | List of package imports to use for Java / Python functions. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.returnBehavior">returnBehavior</a></code> | <code>java.lang.String</code> | Specifies the behavior of the function when returning results. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | Required for Python functions. Specifies Python runtime version. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.targetPath">targetPath</a></code> | <code>java.lang.String</code> | The target path for the Java / Python functions. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the function. Don't use the | character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#database FunctionResource#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the function;

does not have to be unique for the schema in which the function is created. Don't use the | character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#name FunctionResource#name}

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.returnType"></a>

```java
public java.lang.String getReturnType();
```

- *Type:* java.lang.String

The return type of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#return_type FunctionResource#return_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the function. Don't use the | character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#schema FunctionResource#schema}

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.statement"></a>

```java
public java.lang.String getStatement();
```

- *Type:* java.lang.String

Specifies the javascript / java / sql / python code used to create the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#statement FunctionResource#statement}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.arguments"></a>

```java
public java.lang.Object getArguments();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>>

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#arguments FunctionResource#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#comment FunctionResource#comment}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.handler"></a>

```java
public java.lang.String getHandler();
```

- *Type:* java.lang.String

The handler method for Java / Python function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#handler FunctionResource#handler}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#id FunctionResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.imports"></a>

```java
public java.util.List<java.lang.String> getImports();
```

- *Type:* java.util.List<java.lang.String>

Imports for Java / Python functions.

For Java this a list of jar files, for Python this is a list of Python files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#imports FunctionResource#imports}

---

##### `isSecure`<sup>Optional</sup> <a name="isSecure" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.isSecure"></a>

```java
public java.lang.Object getIsSecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies that the function is secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#is_secure FunctionResource#is_secure}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

The language of the statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#language FunctionResource#language}

---

##### `nullInputBehavior`<sup>Optional</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.nullInputBehavior"></a>

```java
public java.lang.String getNullInputBehavior();
```

- *Type:* java.lang.String

Specifies the behavior of the function when called with null inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#null_input_behavior FunctionResource#null_input_behavior}

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.packages"></a>

```java
public java.util.List<java.lang.String> getPackages();
```

- *Type:* java.util.List<java.lang.String>

List of package imports to use for Java / Python functions.

For Java, package imports should be of the form: package_name:version_number, where package_name is snowflake_domain:package. For Python use it should be: ('numpy','pandas','xgboost==1.5.0').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#packages FunctionResource#packages}

---

##### `returnBehavior`<sup>Optional</sup> <a name="returnBehavior" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.returnBehavior"></a>

```java
public java.lang.String getReturnBehavior();
```

- *Type:* java.lang.String

Specifies the behavior of the function when returning results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#return_behavior FunctionResource#return_behavior}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

Required for Python functions. Specifies Python runtime version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#runtime_version FunctionResource#runtime_version}

---

##### `targetPath`<sup>Optional</sup> <a name="targetPath" id="@cdktf/provider-snowflake.functionResource.FunctionResourceConfig.property.targetPath"></a>

```java
public java.lang.String getTargetPath();
```

- *Type:* java.lang.String

The target path for the Java / Python functions.

For Java, it is the path of compiled jar files and for the Python it is the path of the Python files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function#target_path FunctionResource#target_path}

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionResourceArgumentsList <a name="FunctionResourceArgumentsList" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_resource.FunctionResourceArgumentsList;

new FunctionResourceArgumentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.get"></a>

```java
public FunctionResourceArgumentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a>>

---


### FunctionResourceArgumentsOutputReference <a name="FunctionResourceArgumentsOutputReference" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_resource.FunctionResourceArgumentsOutputReference;

new FunctionResourceArgumentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionResource.FunctionResourceArgumentsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionResource.FunctionResourceArguments">FunctionResourceArguments</a> OR com.hashicorp.cdktf.IResolvable

---



