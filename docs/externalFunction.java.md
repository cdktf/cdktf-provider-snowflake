# `externalFunction` Submodule <a name="`externalFunction` Submodule" id="@cdktf/provider-snowflake.externalFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalFunction <a name="ExternalFunction" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function snowflake_external_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_function.ExternalFunction;

ExternalFunction.Builder.create(Construct scope, java.lang.String id)
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
    .apiIntegration(java.lang.String)
    .database(java.lang.String)
    .name(java.lang.String)
    .returnBehavior(java.lang.String)
    .returnType(java.lang.String)
    .schema(java.lang.String)
    .urlOfProxyAndResource(java.lang.String)
//  .arg(IResolvable)
//  .arg(java.util.List<ExternalFunctionArg>)
//  .comment(java.lang.String)
//  .compression(java.lang.String)
//  .contextHeaders(java.util.List<java.lang.String>)
//  .header(IResolvable)
//  .header(java.util.List<ExternalFunctionHeader>)
//  .id(java.lang.String)
//  .maxBatchRows(java.lang.Number)
//  .nullInputBehavior(java.lang.String)
//  .requestTranslator(java.lang.String)
//  .responseTranslator(java.lang.String)
//  .returnNullAllowed(java.lang.Boolean)
//  .returnNullAllowed(IResolvable)
//  .timeouts(ExternalFunctionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.apiIntegration">apiIntegration</a></code> | <code>java.lang.String</code> | The name of the API integration object that should be used to authenticate the call to the proxy service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.returnBehavior">returnBehavior</a></code> | <code>java.lang.String</code> | Specifies the behavior of the function when returning results. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.returnType">returnType</a></code> | <code>java.lang.String</code> | Specifies the data type returned by the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.urlOfProxyAndResource">urlOfProxyAndResource</a></code> | <code>java.lang.String</code> | This is the invocation URL of the proxy service and resource through which Snowflake calls the remote service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.arg">arg</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>></code> | arg block. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | (Default: `user-defined function`) A description of the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.compression">compression</a></code> | <code>java.lang.String</code> | (Default: `AUTO`) If specified, the JSON payload is compressed when sent from Snowflake to the proxy service, and when sent back from the proxy service to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.contextHeaders">contextHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Binds Snowflake context function results to HTTP headers. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#id ExternalFunction#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.maxBatchRows">maxBatchRows</a></code> | <code>java.lang.Number</code> | This specifies the maximum number of rows in each batch sent to the proxy service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.nullInputBehavior">nullInputBehavior</a></code> | <code>java.lang.String</code> | (Default: `CALLED ON NULL INPUT`) Specifies the behavior of the external function when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.requestTranslator">requestTranslator</a></code> | <code>java.lang.String</code> | This specifies the name of the request translator function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.responseTranslator">responseTranslator</a></code> | <code>java.lang.String</code> | This specifies the name of the response translator function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.returnNullAllowed">returnNullAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | (Default: `true`) Indicates whether the function can return NULL values (true) or must return only NON-NULL values (false). |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts">ExternalFunctionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiIntegration`<sup>Required</sup> <a name="apiIntegration" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.apiIntegration"></a>

- *Type:* java.lang.String

The name of the API integration object that should be used to authenticate the call to the proxy service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#api_integration ExternalFunction#api_integration}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#database ExternalFunction#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the external function.

The identifier can contain the schema name and database name, as well as the function name. The function's signature (name and argument data types) must be unique within the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `returnBehavior`<sup>Required</sup> <a name="returnBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.returnBehavior"></a>

- *Type:* java.lang.String

Specifies the behavior of the function when returning results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#return_behavior ExternalFunction#return_behavior}

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.returnType"></a>

- *Type:* java.lang.String

Specifies the data type returned by the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#return_type ExternalFunction#return_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#schema ExternalFunction#schema}

---

##### `urlOfProxyAndResource`<sup>Required</sup> <a name="urlOfProxyAndResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.urlOfProxyAndResource"></a>

- *Type:* java.lang.String

This is the invocation URL of the proxy service and resource through which Snowflake calls the remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#url_of_proxy_and_resource ExternalFunction#url_of_proxy_and_resource}

---

##### `arg`<sup>Optional</sup> <a name="arg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.arg"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>>

arg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#arg ExternalFunction#arg}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

(Default: `user-defined function`) A description of the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#comment ExternalFunction#comment}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.compression"></a>

- *Type:* java.lang.String

(Default: `AUTO`) If specified, the JSON payload is compressed when sent from Snowflake to the proxy service, and when sent back from the proxy service to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#compression ExternalFunction#compression}

---

##### `contextHeaders`<sup>Optional</sup> <a name="contextHeaders" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.contextHeaders"></a>

- *Type:* java.util.List<java.lang.String>

Binds Snowflake context function results to HTTP headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#context_headers ExternalFunction#context_headers}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.header"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#header ExternalFunction#header}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#id ExternalFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxBatchRows`<sup>Optional</sup> <a name="maxBatchRows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.maxBatchRows"></a>

- *Type:* java.lang.Number

This specifies the maximum number of rows in each batch sent to the proxy service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#max_batch_rows ExternalFunction#max_batch_rows}

---

##### `nullInputBehavior`<sup>Optional</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.nullInputBehavior"></a>

- *Type:* java.lang.String

(Default: `CALLED ON NULL INPUT`) Specifies the behavior of the external function when called with null inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#null_input_behavior ExternalFunction#null_input_behavior}

---

##### `requestTranslator`<sup>Optional</sup> <a name="requestTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.requestTranslator"></a>

- *Type:* java.lang.String

This specifies the name of the request translator function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#request_translator ExternalFunction#request_translator}

---

##### `responseTranslator`<sup>Optional</sup> <a name="responseTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.responseTranslator"></a>

- *Type:* java.lang.String

This specifies the name of the response translator function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#response_translator ExternalFunction#response_translator}

---

##### `returnNullAllowed`<sup>Optional</sup> <a name="returnNullAllowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.returnNullAllowed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

(Default: `true`) Indicates whether the function can return NULL values (true) or must return only NON-NULL values (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#return_null_allowed ExternalFunction#return_null_allowed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts">ExternalFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#timeouts ExternalFunction#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.putArg">putArg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetArg">resetArg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetContextHeaders">resetContextHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetMaxBatchRows">resetMaxBatchRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetNullInputBehavior">resetNullInputBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetRequestTranslator">resetRequestTranslator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetResponseTranslator">resetResponseTranslator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetReturnNullAllowed">resetReturnNullAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArg` <a name="putArg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putArg"></a>

```java
public void putArg(IResolvable OR java.util.List<ExternalFunctionArg> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putArg.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>>

---

##### `putHeader` <a name="putHeader" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putHeader"></a>

```java
public void putHeader(IResolvable OR java.util.List<ExternalFunctionHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putTimeouts"></a>

```java
public void putTimeouts(ExternalFunctionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts">ExternalFunctionTimeouts</a>

---

##### `resetArg` <a name="resetArg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetArg"></a>

```java
public void resetArg()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetComment"></a>

```java
public void resetComment()
```

##### `resetCompression` <a name="resetCompression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetCompression"></a>

```java
public void resetCompression()
```

##### `resetContextHeaders` <a name="resetContextHeaders" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetContextHeaders"></a>

```java
public void resetContextHeaders()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetId"></a>

```java
public void resetId()
```

##### `resetMaxBatchRows` <a name="resetMaxBatchRows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetMaxBatchRows"></a>

```java
public void resetMaxBatchRows()
```

##### `resetNullInputBehavior` <a name="resetNullInputBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetNullInputBehavior"></a>

```java
public void resetNullInputBehavior()
```

##### `resetRequestTranslator` <a name="resetRequestTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetRequestTranslator"></a>

```java
public void resetRequestTranslator()
```

##### `resetResponseTranslator` <a name="resetResponseTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetResponseTranslator"></a>

```java
public void resetResponseTranslator()
```

##### `resetReturnNullAllowed` <a name="resetReturnNullAllowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetReturnNullAllowed"></a>

```java
public void resetReturnNullAllowed()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ExternalFunction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_function.ExternalFunction;

ExternalFunction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_function.ExternalFunction;

ExternalFunction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_function.ExternalFunction;

ExternalFunction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_function.ExternalFunction;

ExternalFunction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ExternalFunction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ExternalFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ExternalFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ExternalFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ExternalFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.arg">arg</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList">ExternalFunctionArgList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.header">header</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList">ExternalFunctionHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference">ExternalFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegrationInput">apiIntegrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.argInput">argInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compressionInput">compressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeadersInput">contextHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRowsInput">maxBatchRowsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehaviorInput">nullInputBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslatorInput">requestTranslatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslatorInput">responseTranslatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehaviorInput">returnBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowedInput">returnNullAllowedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnTypeInput">returnTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts">ExternalFunctionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResourceInput">urlOfProxyAndResourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegration">apiIntegration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compression">compression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeaders">contextHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRows">maxBatchRows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehavior">nullInputBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslator">requestTranslator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslator">responseTranslator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehavior">returnBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowed">returnNullAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnType">returnType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResource">urlOfProxyAndResource</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arg`<sup>Required</sup> <a name="arg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.arg"></a>

```java
public ExternalFunctionArgList getArg();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList">ExternalFunctionArgList</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.header"></a>

```java
public ExternalFunctionHeaderList getHeader();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList">ExternalFunctionHeaderList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.timeouts"></a>

```java
public ExternalFunctionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference">ExternalFunctionTimeoutsOutputReference</a>

---

##### `apiIntegrationInput`<sup>Optional</sup> <a name="apiIntegrationInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegrationInput"></a>

```java
public java.lang.String getApiIntegrationInput();
```

- *Type:* java.lang.String

---

##### `argInput`<sup>Optional</sup> <a name="argInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.argInput"></a>

```java
public java.lang.Object getArgInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compressionInput"></a>

```java
public java.lang.String getCompressionInput();
```

- *Type:* java.lang.String

---

##### `contextHeadersInput`<sup>Optional</sup> <a name="contextHeadersInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeadersInput"></a>

```java
public java.util.List<java.lang.String> getContextHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxBatchRowsInput`<sup>Optional</sup> <a name="maxBatchRowsInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRowsInput"></a>

```java
public java.lang.Number getMaxBatchRowsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nullInputBehaviorInput`<sup>Optional</sup> <a name="nullInputBehaviorInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehaviorInput"></a>

```java
public java.lang.String getNullInputBehaviorInput();
```

- *Type:* java.lang.String

---

##### `requestTranslatorInput`<sup>Optional</sup> <a name="requestTranslatorInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslatorInput"></a>

```java
public java.lang.String getRequestTranslatorInput();
```

- *Type:* java.lang.String

---

##### `responseTranslatorInput`<sup>Optional</sup> <a name="responseTranslatorInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslatorInput"></a>

```java
public java.lang.String getResponseTranslatorInput();
```

- *Type:* java.lang.String

---

##### `returnBehaviorInput`<sup>Optional</sup> <a name="returnBehaviorInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehaviorInput"></a>

```java
public java.lang.String getReturnBehaviorInput();
```

- *Type:* java.lang.String

---

##### `returnNullAllowedInput`<sup>Optional</sup> <a name="returnNullAllowedInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowedInput"></a>

```java
public java.lang.Object getReturnNullAllowedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `returnTypeInput`<sup>Optional</sup> <a name="returnTypeInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnTypeInput"></a>

```java
public java.lang.String getReturnTypeInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts">ExternalFunctionTimeouts</a>

---

##### `urlOfProxyAndResourceInput`<sup>Optional</sup> <a name="urlOfProxyAndResourceInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResourceInput"></a>

```java
public java.lang.String getUrlOfProxyAndResourceInput();
```

- *Type:* java.lang.String

---

##### `apiIntegration`<sup>Required</sup> <a name="apiIntegration" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegration"></a>

```java
public java.lang.String getApiIntegration();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

---

##### `contextHeaders`<sup>Required</sup> <a name="contextHeaders" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeaders"></a>

```java
public java.util.List<java.lang.String> getContextHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxBatchRows`<sup>Required</sup> <a name="maxBatchRows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRows"></a>

```java
public java.lang.Number getMaxBatchRows();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nullInputBehavior`<sup>Required</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehavior"></a>

```java
public java.lang.String getNullInputBehavior();
```

- *Type:* java.lang.String

---

##### `requestTranslator`<sup>Required</sup> <a name="requestTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslator"></a>

```java
public java.lang.String getRequestTranslator();
```

- *Type:* java.lang.String

---

##### `responseTranslator`<sup>Required</sup> <a name="responseTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslator"></a>

```java
public java.lang.String getResponseTranslator();
```

- *Type:* java.lang.String

---

##### `returnBehavior`<sup>Required</sup> <a name="returnBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehavior"></a>

```java
public java.lang.String getReturnBehavior();
```

- *Type:* java.lang.String

---

##### `returnNullAllowed`<sup>Required</sup> <a name="returnNullAllowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowed"></a>

```java
public java.lang.Object getReturnNullAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnType"></a>

```java
public java.lang.String getReturnType();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `urlOfProxyAndResource`<sup>Required</sup> <a name="urlOfProxyAndResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResource"></a>

```java
public java.lang.String getUrlOfProxyAndResource();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalFunctionArg <a name="ExternalFunctionArg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_function.ExternalFunctionArg;

ExternalFunctionArg.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.name">name</a></code> | <code>java.lang.String</code> | Argument name. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.type">type</a></code> | <code>java.lang.String</code> | Argument type, e.g. VARCHAR. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Argument name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Argument type, e.g. VARCHAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#type ExternalFunction#type}

---

### ExternalFunctionConfig <a name="ExternalFunctionConfig" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_function.ExternalFunctionConfig;

ExternalFunctionConfig.builder()
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
    .apiIntegration(java.lang.String)
    .database(java.lang.String)
    .name(java.lang.String)
    .returnBehavior(java.lang.String)
    .returnType(java.lang.String)
    .schema(java.lang.String)
    .urlOfProxyAndResource(java.lang.String)
//  .arg(IResolvable)
//  .arg(java.util.List<ExternalFunctionArg>)
//  .comment(java.lang.String)
//  .compression(java.lang.String)
//  .contextHeaders(java.util.List<java.lang.String>)
//  .header(IResolvable)
//  .header(java.util.List<ExternalFunctionHeader>)
//  .id(java.lang.String)
//  .maxBatchRows(java.lang.Number)
//  .nullInputBehavior(java.lang.String)
//  .requestTranslator(java.lang.String)
//  .responseTranslator(java.lang.String)
//  .returnNullAllowed(java.lang.Boolean)
//  .returnNullAllowed(IResolvable)
//  .timeouts(ExternalFunctionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.apiIntegration">apiIntegration</a></code> | <code>java.lang.String</code> | The name of the API integration object that should be used to authenticate the call to the proxy service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnBehavior">returnBehavior</a></code> | <code>java.lang.String</code> | Specifies the behavior of the function when returning results. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnType">returnType</a></code> | <code>java.lang.String</code> | Specifies the data type returned by the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.urlOfProxyAndResource">urlOfProxyAndResource</a></code> | <code>java.lang.String</code> | This is the invocation URL of the proxy service and resource through which Snowflake calls the remote service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.arg">arg</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>></code> | arg block. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | (Default: `user-defined function`) A description of the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.compression">compression</a></code> | <code>java.lang.String</code> | (Default: `AUTO`) If specified, the JSON payload is compressed when sent from Snowflake to the proxy service, and when sent back from the proxy service to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.contextHeaders">contextHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Binds Snowflake context function results to HTTP headers. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#id ExternalFunction#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.maxBatchRows">maxBatchRows</a></code> | <code>java.lang.Number</code> | This specifies the maximum number of rows in each batch sent to the proxy service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.nullInputBehavior">nullInputBehavior</a></code> | <code>java.lang.String</code> | (Default: `CALLED ON NULL INPUT`) Specifies the behavior of the external function when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.requestTranslator">requestTranslator</a></code> | <code>java.lang.String</code> | This specifies the name of the request translator function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.responseTranslator">responseTranslator</a></code> | <code>java.lang.String</code> | This specifies the name of the response translator function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnNullAllowed">returnNullAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | (Default: `true`) Indicates whether the function can return NULL values (true) or must return only NON-NULL values (false). |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts">ExternalFunctionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiIntegration`<sup>Required</sup> <a name="apiIntegration" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.apiIntegration"></a>

```java
public java.lang.String getApiIntegration();
```

- *Type:* java.lang.String

The name of the API integration object that should be used to authenticate the call to the proxy service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#api_integration ExternalFunction#api_integration}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#database ExternalFunction#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the external function.

The identifier can contain the schema name and database name, as well as the function name. The function's signature (name and argument data types) must be unique within the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `returnBehavior`<sup>Required</sup> <a name="returnBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnBehavior"></a>

```java
public java.lang.String getReturnBehavior();
```

- *Type:* java.lang.String

Specifies the behavior of the function when returning results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#return_behavior ExternalFunction#return_behavior}

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnType"></a>

```java
public java.lang.String getReturnType();
```

- *Type:* java.lang.String

Specifies the data type returned by the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#return_type ExternalFunction#return_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#schema ExternalFunction#schema}

---

##### `urlOfProxyAndResource`<sup>Required</sup> <a name="urlOfProxyAndResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.urlOfProxyAndResource"></a>

```java
public java.lang.String getUrlOfProxyAndResource();
```

- *Type:* java.lang.String

This is the invocation URL of the proxy service and resource through which Snowflake calls the remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#url_of_proxy_and_resource ExternalFunction#url_of_proxy_and_resource}

---

##### `arg`<sup>Optional</sup> <a name="arg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.arg"></a>

```java
public java.lang.Object getArg();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>>

arg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#arg ExternalFunction#arg}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

(Default: `user-defined function`) A description of the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#comment ExternalFunction#comment}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

(Default: `AUTO`) If specified, the JSON payload is compressed when sent from Snowflake to the proxy service, and when sent back from the proxy service to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#compression ExternalFunction#compression}

---

##### `contextHeaders`<sup>Optional</sup> <a name="contextHeaders" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.contextHeaders"></a>

```java
public java.util.List<java.lang.String> getContextHeaders();
```

- *Type:* java.util.List<java.lang.String>

Binds Snowflake context function results to HTTP headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#context_headers ExternalFunction#context_headers}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#header ExternalFunction#header}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#id ExternalFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxBatchRows`<sup>Optional</sup> <a name="maxBatchRows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.maxBatchRows"></a>

```java
public java.lang.Number getMaxBatchRows();
```

- *Type:* java.lang.Number

This specifies the maximum number of rows in each batch sent to the proxy service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#max_batch_rows ExternalFunction#max_batch_rows}

---

##### `nullInputBehavior`<sup>Optional</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.nullInputBehavior"></a>

```java
public java.lang.String getNullInputBehavior();
```

- *Type:* java.lang.String

(Default: `CALLED ON NULL INPUT`) Specifies the behavior of the external function when called with null inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#null_input_behavior ExternalFunction#null_input_behavior}

---

##### `requestTranslator`<sup>Optional</sup> <a name="requestTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.requestTranslator"></a>

```java
public java.lang.String getRequestTranslator();
```

- *Type:* java.lang.String

This specifies the name of the request translator function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#request_translator ExternalFunction#request_translator}

---

##### `responseTranslator`<sup>Optional</sup> <a name="responseTranslator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.responseTranslator"></a>

```java
public java.lang.String getResponseTranslator();
```

- *Type:* java.lang.String

This specifies the name of the response translator function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#response_translator ExternalFunction#response_translator}

---

##### `returnNullAllowed`<sup>Optional</sup> <a name="returnNullAllowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnNullAllowed"></a>

```java
public java.lang.Object getReturnNullAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

(Default: `true`) Indicates whether the function can return NULL values (true) or must return only NON-NULL values (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#return_null_allowed ExternalFunction#return_null_allowed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.timeouts"></a>

```java
public ExternalFunctionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts">ExternalFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#timeouts ExternalFunction#timeouts}

---

### ExternalFunctionHeader <a name="ExternalFunctionHeader" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_function.ExternalFunctionHeader;

ExternalFunctionHeader.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.name">name</a></code> | <code>java.lang.String</code> | Header name. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.value">value</a></code> | <code>java.lang.String</code> | Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#value ExternalFunction#value}

---

### ExternalFunctionTimeouts <a name="ExternalFunctionTimeouts" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_function.ExternalFunctionTimeouts;

ExternalFunctionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#create ExternalFunction#create}. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#delete ExternalFunction#delete}. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#read ExternalFunction#read}. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#update ExternalFunction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#create ExternalFunction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#delete ExternalFunction#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#read ExternalFunction#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/external_function#update ExternalFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalFunctionArgList <a name="ExternalFunctionArgList" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_function.ExternalFunctionArgList;

new ExternalFunctionArgList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.get"></a>

```java
public ExternalFunctionArgOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>>

---


### ExternalFunctionArgOutputReference <a name="ExternalFunctionArgOutputReference" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_function.ExternalFunctionArgOutputReference;

new ExternalFunctionArgOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>

---


### ExternalFunctionHeaderList <a name="ExternalFunctionHeaderList" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_function.ExternalFunctionHeaderList;

new ExternalFunctionHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.get"></a>

```java
public ExternalFunctionHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>>

---


### ExternalFunctionHeaderOutputReference <a name="ExternalFunctionHeaderOutputReference" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_function.ExternalFunctionHeaderOutputReference;

new ExternalFunctionHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>

---


### ExternalFunctionTimeoutsOutputReference <a name="ExternalFunctionTimeoutsOutputReference" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_function.ExternalFunctionTimeoutsOutputReference;

new ExternalFunctionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts">ExternalFunctionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionTimeouts">ExternalFunctionTimeouts</a>

---



