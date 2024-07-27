# `apiIntegration` Submodule <a name="`apiIntegration` Submodule" id="@cdktf/provider-snowflake.apiIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegration <a name="ApiIntegration" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration snowflake_api_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_integration.ApiIntegration;

ApiIntegration.Builder.create(Construct scope, java.lang.String id)
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
    .apiAllowedPrefixes(java.util.List<java.lang.String>)
    .apiProvider(java.lang.String)
    .name(java.lang.String)
//  .apiAwsRoleArn(java.lang.String)
//  .apiBlockedPrefixes(java.util.List<java.lang.String>)
//  .apiGcpServiceAccount(java.lang.String)
//  .apiKey(java.lang.String)
//  .azureAdApplicationId(java.lang.String)
//  .azureTenantId(java.lang.String)
//  .comment(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .googleAudience(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service endpoints and resources within those proxies. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiProvider">apiProvider</a></code> | <code>java.lang.String</code> | Specifies the HTTPS proxy service type. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the API integration. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiAwsRoleArn">apiAwsRoleArn</a></code> | <code>java.lang.String</code> | ARN of a cloud platform role. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiGcpServiceAccount">apiGcpServiceAccount</a></code> | <code>java.lang.String</code> | The service account used for communication with the Google API Gateway. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiKey">apiKey</a></code> | <code>java.lang.String</code> | The API key (also called a “subscription key”). |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.azureAdApplicationId">azureAdApplicationId</a></code> | <code>java.lang.String</code> | The 'Application (client) id' of the Azure AD app for your remote service. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#comment ApiIntegration#comment}. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.googleAudience">googleAudience</a></code> | <code>java.lang.String</code> | The audience claim when generating the JWT (JSON Web Token) to authenticate to the Google API Gateway. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#id ApiIntegration#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiAllowedPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service endpoints and resources within those proxies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#api_allowed_prefixes ApiIntegration#api_allowed_prefixes}

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiProvider"></a>

- *Type:* java.lang.String

Specifies the HTTPS proxy service type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#api_provider ApiIntegration#api_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the name of the API integration.

This name follows the rules for Object Identifiers. The name should be unique among api integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#name ApiIntegration#name}

---

##### `apiAwsRoleArn`<sup>Optional</sup> <a name="apiAwsRoleArn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiAwsRoleArn"></a>

- *Type:* java.lang.String

ARN of a cloud platform role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#api_aws_role_arn ApiIntegration#api_aws_role_arn}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiBlockedPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#api_blocked_prefixes ApiIntegration#api_blocked_prefixes}

---

##### `apiGcpServiceAccount`<sup>Optional</sup> <a name="apiGcpServiceAccount" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiGcpServiceAccount"></a>

- *Type:* java.lang.String

The service account used for communication with the Google API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#api_gcp_service_account ApiIntegration#api_gcp_service_account}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiKey"></a>

- *Type:* java.lang.String

The API key (also called a “subscription key”).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#api_key ApiIntegration#api_key}

---

##### `azureAdApplicationId`<sup>Optional</sup> <a name="azureAdApplicationId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.azureAdApplicationId"></a>

- *Type:* java.lang.String

The 'Application (client) id' of the Azure AD app for your remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#azure_ad_application_id ApiIntegration#azure_ad_application_id}

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.azureTenantId"></a>

- *Type:* java.lang.String

Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#azure_tenant_id ApiIntegration#azure_tenant_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#comment ApiIntegration#comment}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether this API integration is enabled or disabled.

If the API integration is disabled, any external function that relies on it will not work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#enabled ApiIntegration#enabled}

---

##### `googleAudience`<sup>Optional</sup> <a name="googleAudience" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.googleAudience"></a>

- *Type:* java.lang.String

The audience claim when generating the JWT (JSON Web Token) to authenticate to the Google API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#google_audience ApiIntegration#google_audience}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#id ApiIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiAwsRoleArn">resetApiAwsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiBlockedPrefixes">resetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiGcpServiceAccount">resetApiGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetAzureAdApplicationId">resetAzureAdApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetAzureTenantId">resetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetGoogleAudience">resetGoogleAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetApiAwsRoleArn` <a name="resetApiAwsRoleArn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiAwsRoleArn"></a>

```java
public void resetApiAwsRoleArn()
```

##### `resetApiBlockedPrefixes` <a name="resetApiBlockedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiBlockedPrefixes"></a>

```java
public void resetApiBlockedPrefixes()
```

##### `resetApiGcpServiceAccount` <a name="resetApiGcpServiceAccount" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiGcpServiceAccount"></a>

```java
public void resetApiGcpServiceAccount()
```

##### `resetApiKey` <a name="resetApiKey" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetAzureAdApplicationId` <a name="resetAzureAdApplicationId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetAzureAdApplicationId"></a>

```java
public void resetAzureAdApplicationId()
```

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetAzureTenantId"></a>

```java
public void resetAzureTenantId()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetComment"></a>

```java
public void resetComment()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetGoogleAudience` <a name="resetGoogleAudience" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetGoogleAudience"></a>

```java
public void resetGoogleAudience()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_integration.ApiIntegration;

ApiIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_integration.ApiIntegration;

ApiIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_integration.ApiIntegration;

ApiIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_integration.ApiIntegration;

ApiIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApiIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApiIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsExternalId">apiAwsExternalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsIamUserArn">apiAwsIamUserArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureConsentUrl">azureConsentUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureMultiTenantAppName">azureMultiTenantAppName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAllowedPrefixesInput">apiAllowedPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsRoleArnInput">apiAwsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiBlockedPrefixesInput">apiBlockedPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiGcpServiceAccountInput">apiGcpServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiProviderInput">apiProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureAdApplicationIdInput">azureAdApplicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.googleAudienceInput">googleAudienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsRoleArn">apiAwsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiGcpServiceAccount">apiGcpServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiProvider">apiProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureAdApplicationId">azureAdApplicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.googleAudience">googleAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiAwsExternalId`<sup>Required</sup> <a name="apiAwsExternalId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsExternalId"></a>

```java
public java.lang.String getApiAwsExternalId();
```

- *Type:* java.lang.String

---

##### `apiAwsIamUserArn`<sup>Required</sup> <a name="apiAwsIamUserArn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsIamUserArn"></a>

```java
public java.lang.String getApiAwsIamUserArn();
```

- *Type:* java.lang.String

---

##### `azureConsentUrl`<sup>Required</sup> <a name="azureConsentUrl" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureConsentUrl"></a>

```java
public java.lang.String getAzureConsentUrl();
```

- *Type:* java.lang.String

---

##### `azureMultiTenantAppName`<sup>Required</sup> <a name="azureMultiTenantAppName" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureMultiTenantAppName"></a>

```java
public java.lang.String getAzureMultiTenantAppName();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `apiAllowedPrefixesInput`<sup>Optional</sup> <a name="apiAllowedPrefixesInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAllowedPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getApiAllowedPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiAwsRoleArnInput`<sup>Optional</sup> <a name="apiAwsRoleArnInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsRoleArnInput"></a>

```java
public java.lang.String getApiAwsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `apiBlockedPrefixesInput`<sup>Optional</sup> <a name="apiBlockedPrefixesInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiBlockedPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getApiBlockedPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiGcpServiceAccountInput`<sup>Optional</sup> <a name="apiGcpServiceAccountInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiGcpServiceAccountInput"></a>

```java
public java.lang.String getApiGcpServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `apiProviderInput`<sup>Optional</sup> <a name="apiProviderInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiProviderInput"></a>

```java
public java.lang.String getApiProviderInput();
```

- *Type:* java.lang.String

---

##### `azureAdApplicationIdInput`<sup>Optional</sup> <a name="azureAdApplicationIdInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureAdApplicationIdInput"></a>

```java
public java.lang.String getAzureAdApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureTenantIdInput"></a>

```java
public java.lang.String getAzureTenantIdInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `googleAudienceInput`<sup>Optional</sup> <a name="googleAudienceInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.googleAudienceInput"></a>

```java
public java.lang.String getGoogleAudienceInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAllowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiAwsRoleArn`<sup>Required</sup> <a name="apiAwsRoleArn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsRoleArn"></a>

```java
public java.lang.String getApiAwsRoleArn();
```

- *Type:* java.lang.String

---

##### `apiBlockedPrefixes`<sup>Required</sup> <a name="apiBlockedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiBlockedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiBlockedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiGcpServiceAccount`<sup>Required</sup> <a name="apiGcpServiceAccount" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiGcpServiceAccount"></a>

```java
public java.lang.String getApiGcpServiceAccount();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiProvider"></a>

```java
public java.lang.String getApiProvider();
```

- *Type:* java.lang.String

---

##### `azureAdApplicationId`<sup>Required</sup> <a name="azureAdApplicationId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureAdApplicationId"></a>

```java
public java.lang.String getAzureAdApplicationId();
```

- *Type:* java.lang.String

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `googleAudience`<sup>Required</sup> <a name="googleAudience" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.googleAudience"></a>

```java
public java.lang.String getGoogleAudience();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationConfig <a name="ApiIntegrationConfig" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_integration.ApiIntegrationConfig;

ApiIntegrationConfig.builder()
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
    .apiAllowedPrefixes(java.util.List<java.lang.String>)
    .apiProvider(java.lang.String)
    .name(java.lang.String)
//  .apiAwsRoleArn(java.lang.String)
//  .apiBlockedPrefixes(java.util.List<java.lang.String>)
//  .apiGcpServiceAccount(java.lang.String)
//  .apiKey(java.lang.String)
//  .azureAdApplicationId(java.lang.String)
//  .azureTenantId(java.lang.String)
//  .comment(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .googleAudience(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service endpoints and resources within those proxies. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiProvider">apiProvider</a></code> | <code>java.lang.String</code> | Specifies the HTTPS proxy service type. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the API integration. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiAwsRoleArn">apiAwsRoleArn</a></code> | <code>java.lang.String</code> | ARN of a cloud platform role. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiGcpServiceAccount">apiGcpServiceAccount</a></code> | <code>java.lang.String</code> | The service account used for communication with the Google API Gateway. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | The API key (also called a “subscription key”). |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.azureAdApplicationId">azureAdApplicationId</a></code> | <code>java.lang.String</code> | The 'Application (client) id' of the Azure AD app for your remote service. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#comment ApiIntegration#comment}. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.googleAudience">googleAudience</a></code> | <code>java.lang.String</code> | The audience claim when generating the JWT (JSON Web Token) to authenticate to the Google API Gateway. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#id ApiIntegration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiAllowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service endpoints and resources within those proxies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#api_allowed_prefixes ApiIntegration#api_allowed_prefixes}

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiProvider"></a>

```java
public java.lang.String getApiProvider();
```

- *Type:* java.lang.String

Specifies the HTTPS proxy service type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#api_provider ApiIntegration#api_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the API integration.

This name follows the rules for Object Identifiers. The name should be unique among api integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#name ApiIntegration#name}

---

##### `apiAwsRoleArn`<sup>Optional</sup> <a name="apiAwsRoleArn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiAwsRoleArn"></a>

```java
public java.lang.String getApiAwsRoleArn();
```

- *Type:* java.lang.String

ARN of a cloud platform role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#api_aws_role_arn ApiIntegration#api_aws_role_arn}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiBlockedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiBlockedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#api_blocked_prefixes ApiIntegration#api_blocked_prefixes}

---

##### `apiGcpServiceAccount`<sup>Optional</sup> <a name="apiGcpServiceAccount" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiGcpServiceAccount"></a>

```java
public java.lang.String getApiGcpServiceAccount();
```

- *Type:* java.lang.String

The service account used for communication with the Google API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#api_gcp_service_account ApiIntegration#api_gcp_service_account}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

The API key (also called a “subscription key”).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#api_key ApiIntegration#api_key}

---

##### `azureAdApplicationId`<sup>Optional</sup> <a name="azureAdApplicationId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.azureAdApplicationId"></a>

```java
public java.lang.String getAzureAdApplicationId();
```

- *Type:* java.lang.String

The 'Application (client) id' of the Azure AD app for your remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#azure_ad_application_id ApiIntegration#azure_ad_application_id}

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#azure_tenant_id ApiIntegration#azure_tenant_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#comment ApiIntegration#comment}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether this API integration is enabled or disabled.

If the API integration is disabled, any external function that relies on it will not work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#enabled ApiIntegration#enabled}

---

##### `googleAudience`<sup>Optional</sup> <a name="googleAudience" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.googleAudience"></a>

```java
public java.lang.String getGoogleAudience();
```

- *Type:* java.lang.String

The audience claim when generating the JWT (JSON Web Token) to authenticate to the Google API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#google_audience ApiIntegration#google_audience}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/api_integration#id ApiIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



