# `snowflake_api_integration`

Refer to the Terraform Registory for docs: [`snowflake_api_integration`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration).

# `apiIntegration` Submodule <a name="`apiIntegration` Submodule" id="@cdktf/provider-snowflake.apiIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegration <a name="ApiIntegration" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration snowflake_api_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer"></a>

```typescript
import { apiIntegration } from '@cdktf/provider-snowflake'

new apiIntegration.ApiIntegration(scope: Construct, id: string, config: ApiIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig">ApiIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig">ApiIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetApiAwsRoleArn` <a name="resetApiAwsRoleArn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiAwsRoleArn"></a>

```typescript
public resetApiAwsRoleArn(): void
```

##### `resetApiBlockedPrefixes` <a name="resetApiBlockedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiBlockedPrefixes"></a>

```typescript
public resetApiBlockedPrefixes(): void
```

##### `resetApiGcpServiceAccount` <a name="resetApiGcpServiceAccount" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiGcpServiceAccount"></a>

```typescript
public resetApiGcpServiceAccount(): void
```

##### `resetApiKey` <a name="resetApiKey" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetAzureAdApplicationId` <a name="resetAzureAdApplicationId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetAzureAdApplicationId"></a>

```typescript
public resetAzureAdApplicationId(): void
```

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetAzureTenantId"></a>

```typescript
public resetAzureTenantId(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetGoogleAudience` <a name="resetGoogleAudience" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetGoogleAudience"></a>

```typescript
public resetGoogleAudience(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isConstruct"></a>

```typescript
import { apiIntegration } from '@cdktf/provider-snowflake'

apiIntegration.ApiIntegration.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformElement"></a>

```typescript
import { apiIntegration } from '@cdktf/provider-snowflake'

apiIntegration.ApiIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformResource"></a>

```typescript
import { apiIntegration } from '@cdktf/provider-snowflake'

apiIntegration.ApiIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsExternalId">apiAwsExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsIamUserArn">apiAwsIamUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureConsentUrl">azureConsentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureMultiTenantAppName">azureMultiTenantAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAllowedPrefixesInput">apiAllowedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsRoleArnInput">apiAwsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiBlockedPrefixesInput">apiBlockedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiGcpServiceAccountInput">apiGcpServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiProviderInput">apiProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureAdApplicationIdInput">azureAdApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.googleAudienceInput">googleAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsRoleArn">apiAwsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiGcpServiceAccount">apiGcpServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiProvider">apiProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureAdApplicationId">azureAdApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.googleAudience">googleAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiAwsExternalId`<sup>Required</sup> <a name="apiAwsExternalId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsExternalId"></a>

```typescript
public readonly apiAwsExternalId: string;
```

- *Type:* string

---

##### `apiAwsIamUserArn`<sup>Required</sup> <a name="apiAwsIamUserArn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsIamUserArn"></a>

```typescript
public readonly apiAwsIamUserArn: string;
```

- *Type:* string

---

##### `azureConsentUrl`<sup>Required</sup> <a name="azureConsentUrl" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureConsentUrl"></a>

```typescript
public readonly azureConsentUrl: string;
```

- *Type:* string

---

##### `azureMultiTenantAppName`<sup>Required</sup> <a name="azureMultiTenantAppName" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureMultiTenantAppName"></a>

```typescript
public readonly azureMultiTenantAppName: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `apiAllowedPrefixesInput`<sup>Optional</sup> <a name="apiAllowedPrefixesInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAllowedPrefixesInput"></a>

```typescript
public readonly apiAllowedPrefixesInput: string[];
```

- *Type:* string[]

---

##### `apiAwsRoleArnInput`<sup>Optional</sup> <a name="apiAwsRoleArnInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsRoleArnInput"></a>

```typescript
public readonly apiAwsRoleArnInput: string;
```

- *Type:* string

---

##### `apiBlockedPrefixesInput`<sup>Optional</sup> <a name="apiBlockedPrefixesInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiBlockedPrefixesInput"></a>

```typescript
public readonly apiBlockedPrefixesInput: string[];
```

- *Type:* string[]

---

##### `apiGcpServiceAccountInput`<sup>Optional</sup> <a name="apiGcpServiceAccountInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiGcpServiceAccountInput"></a>

```typescript
public readonly apiGcpServiceAccountInput: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `apiProviderInput`<sup>Optional</sup> <a name="apiProviderInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiProviderInput"></a>

```typescript
public readonly apiProviderInput: string;
```

- *Type:* string

---

##### `azureAdApplicationIdInput`<sup>Optional</sup> <a name="azureAdApplicationIdInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureAdApplicationIdInput"></a>

```typescript
public readonly azureAdApplicationIdInput: string;
```

- *Type:* string

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureTenantIdInput"></a>

```typescript
public readonly azureTenantIdInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `googleAudienceInput`<sup>Optional</sup> <a name="googleAudienceInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.googleAudienceInput"></a>

```typescript
public readonly googleAudienceInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAllowedPrefixes"></a>

```typescript
public readonly apiAllowedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiAwsRoleArn`<sup>Required</sup> <a name="apiAwsRoleArn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsRoleArn"></a>

```typescript
public readonly apiAwsRoleArn: string;
```

- *Type:* string

---

##### `apiBlockedPrefixes`<sup>Required</sup> <a name="apiBlockedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiBlockedPrefixes"></a>

```typescript
public readonly apiBlockedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiGcpServiceAccount`<sup>Required</sup> <a name="apiGcpServiceAccount" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiGcpServiceAccount"></a>

```typescript
public readonly apiGcpServiceAccount: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiProvider"></a>

```typescript
public readonly apiProvider: string;
```

- *Type:* string

---

##### `azureAdApplicationId`<sup>Required</sup> <a name="azureAdApplicationId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureAdApplicationId"></a>

```typescript
public readonly azureAdApplicationId: string;
```

- *Type:* string

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `googleAudience`<sup>Required</sup> <a name="googleAudience" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.googleAudience"></a>

```typescript
public readonly googleAudience: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationConfig <a name="ApiIntegrationConfig" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.Initializer"></a>

```typescript
import { apiIntegration } from '@cdktf/provider-snowflake'

const apiIntegrationConfig: apiIntegration.ApiIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>string[]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service endpoints and resources within those proxies. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiProvider">apiProvider</a></code> | <code>string</code> | Specifies the HTTPS proxy service type. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the API integration. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiAwsRoleArn">apiAwsRoleArn</a></code> | <code>string</code> | ARN of a cloud platform role. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>string[]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiGcpServiceAccount">apiGcpServiceAccount</a></code> | <code>string</code> | The service account used for communication with the Google API Gateway. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiKey">apiKey</a></code> | <code>string</code> | The API key (also called a “subscription key”). |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.azureAdApplicationId">azureAdApplicationId</a></code> | <code>string</code> | The 'Application (client) id' of the Azure AD app for your remote service. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration#comment ApiIntegration#comment}. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.googleAudience">googleAudience</a></code> | <code>string</code> | The audience claim when generating the JWT (JSON Web Token) to authenticate to the Google API Gateway. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration#id ApiIntegration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiAllowedPrefixes"></a>

```typescript
public readonly apiAllowedPrefixes: string[];
```

- *Type:* string[]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service endpoints and resources within those proxies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration#api_allowed_prefixes ApiIntegration#api_allowed_prefixes}

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiProvider"></a>

```typescript
public readonly apiProvider: string;
```

- *Type:* string

Specifies the HTTPS proxy service type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration#api_provider ApiIntegration#api_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the API integration.

This name follows the rules for Object Identifiers. The name should be unique among api integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration#name ApiIntegration#name}

---

##### `apiAwsRoleArn`<sup>Optional</sup> <a name="apiAwsRoleArn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiAwsRoleArn"></a>

```typescript
public readonly apiAwsRoleArn: string;
```

- *Type:* string

ARN of a cloud platform role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration#api_aws_role_arn ApiIntegration#api_aws_role_arn}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiBlockedPrefixes"></a>

```typescript
public readonly apiBlockedPrefixes: string[];
```

- *Type:* string[]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration#api_blocked_prefixes ApiIntegration#api_blocked_prefixes}

---

##### `apiGcpServiceAccount`<sup>Optional</sup> <a name="apiGcpServiceAccount" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiGcpServiceAccount"></a>

```typescript
public readonly apiGcpServiceAccount: string;
```

- *Type:* string

The service account used for communication with the Google API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration#api_gcp_service_account ApiIntegration#api_gcp_service_account}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

The API key (also called a “subscription key”).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration#api_key ApiIntegration#api_key}

---

##### `azureAdApplicationId`<sup>Optional</sup> <a name="azureAdApplicationId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.azureAdApplicationId"></a>

```typescript
public readonly azureAdApplicationId: string;
```

- *Type:* string

The 'Application (client) id' of the Azure AD app for your remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration#azure_ad_application_id ApiIntegration#azure_ad_application_id}

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration#azure_tenant_id ApiIntegration#azure_tenant_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration#comment ApiIntegration#comment}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether this API integration is enabled or disabled.

If the API integration is disabled, any external function that relies on it will not work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration#enabled ApiIntegration#enabled}

---

##### `googleAudience`<sup>Optional</sup> <a name="googleAudience" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.googleAudience"></a>

```typescript
public readonly googleAudience: string;
```

- *Type:* string

The audience claim when generating the JWT (JSON Web Token) to authenticate to the Google API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration#google_audience ApiIntegration#google_audience}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/api_integration#id ApiIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



