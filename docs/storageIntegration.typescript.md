# `snowflake_storage_integration`

Refer to the Terraform Registory for docs: [`snowflake_storage_integration`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration).

# `storageIntegration` Submodule <a name="`storageIntegration` Submodule" id="@cdktf/provider-snowflake.storageIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageIntegration <a name="StorageIntegration" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration snowflake_storage_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer"></a>

```typescript
import { storageIntegration } from '@cdktf/provider-snowflake'

new storageIntegration.StorageIntegration(scope: Construct, id: string, config: StorageIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig">StorageIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig">StorageIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetAzureTenantId">resetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsObjectAcl">resetStorageAwsObjectAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsRoleArn">resetStorageAwsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageBlockedLocations">resetStorageBlockedLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetAzureTenantId"></a>

```typescript
public resetAzureTenantId(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStorageAwsObjectAcl` <a name="resetStorageAwsObjectAcl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsObjectAcl"></a>

```typescript
public resetStorageAwsObjectAcl(): void
```

##### `resetStorageAwsRoleArn` <a name="resetStorageAwsRoleArn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageAwsRoleArn"></a>

```typescript
public resetStorageAwsRoleArn(): void
```

##### `resetStorageBlockedLocations` <a name="resetStorageBlockedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetStorageBlockedLocations"></a>

```typescript
public resetStorageBlockedLocations(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isConstruct"></a>

```typescript
import { storageIntegration } from '@cdktf/provider-snowflake'

storageIntegration.StorageIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformElement"></a>

```typescript
import { storageIntegration } from '@cdktf/provider-snowflake'

storageIntegration.StorageIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformResource"></a>

```typescript
import { storageIntegration } from '@cdktf/provider-snowflake'

storageIntegration.StorageIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureConsentUrl">azureConsentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureMultiTenantAppName">azureMultiTenantAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsExternalId">storageAwsExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsIamUserArn">storageAwsIamUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageGcpServiceAccount">storageGcpServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAllowedLocationsInput">storageAllowedLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsObjectAclInput">storageAwsObjectAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsRoleArnInput">storageAwsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageBlockedLocationsInput">storageBlockedLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageProviderInput">storageProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAllowedLocations">storageAllowedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsObjectAcl">storageAwsObjectAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsRoleArn">storageAwsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageBlockedLocations">storageBlockedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageProvider">storageProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `azureConsentUrl`<sup>Required</sup> <a name="azureConsentUrl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureConsentUrl"></a>

```typescript
public readonly azureConsentUrl: string;
```

- *Type:* string

---

##### `azureMultiTenantAppName`<sup>Required</sup> <a name="azureMultiTenantAppName" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureMultiTenantAppName"></a>

```typescript
public readonly azureMultiTenantAppName: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `storageAwsExternalId`<sup>Required</sup> <a name="storageAwsExternalId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsExternalId"></a>

```typescript
public readonly storageAwsExternalId: string;
```

- *Type:* string

---

##### `storageAwsIamUserArn`<sup>Required</sup> <a name="storageAwsIamUserArn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsIamUserArn"></a>

```typescript
public readonly storageAwsIamUserArn: string;
```

- *Type:* string

---

##### `storageGcpServiceAccount`<sup>Required</sup> <a name="storageGcpServiceAccount" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageGcpServiceAccount"></a>

```typescript
public readonly storageGcpServiceAccount: string;
```

- *Type:* string

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureTenantIdInput"></a>

```typescript
public readonly azureTenantIdInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `storageAllowedLocationsInput`<sup>Optional</sup> <a name="storageAllowedLocationsInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAllowedLocationsInput"></a>

```typescript
public readonly storageAllowedLocationsInput: string[];
```

- *Type:* string[]

---

##### `storageAwsObjectAclInput`<sup>Optional</sup> <a name="storageAwsObjectAclInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsObjectAclInput"></a>

```typescript
public readonly storageAwsObjectAclInput: string;
```

- *Type:* string

---

##### `storageAwsRoleArnInput`<sup>Optional</sup> <a name="storageAwsRoleArnInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsRoleArnInput"></a>

```typescript
public readonly storageAwsRoleArnInput: string;
```

- *Type:* string

---

##### `storageBlockedLocationsInput`<sup>Optional</sup> <a name="storageBlockedLocationsInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageBlockedLocationsInput"></a>

```typescript
public readonly storageBlockedLocationsInput: string[];
```

- *Type:* string[]

---

##### `storageProviderInput`<sup>Optional</sup> <a name="storageProviderInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageProviderInput"></a>

```typescript
public readonly storageProviderInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageAllowedLocations`<sup>Required</sup> <a name="storageAllowedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAllowedLocations"></a>

```typescript
public readonly storageAllowedLocations: string[];
```

- *Type:* string[]

---

##### `storageAwsObjectAcl`<sup>Required</sup> <a name="storageAwsObjectAcl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsObjectAcl"></a>

```typescript
public readonly storageAwsObjectAcl: string;
```

- *Type:* string

---

##### `storageAwsRoleArn`<sup>Required</sup> <a name="storageAwsRoleArn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageAwsRoleArn"></a>

```typescript
public readonly storageAwsRoleArn: string;
```

- *Type:* string

---

##### `storageBlockedLocations`<sup>Required</sup> <a name="storageBlockedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageBlockedLocations"></a>

```typescript
public readonly storageBlockedLocations: string[];
```

- *Type:* string[]

---

##### `storageProvider`<sup>Required</sup> <a name="storageProvider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.storageProvider"></a>

```typescript
public readonly storageProvider: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageIntegrationConfig <a name="StorageIntegrationConfig" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.Initializer"></a>

```typescript
import { storageIntegration } from '@cdktf/provider-snowflake'

const storageIntegrationConfig: storageIntegration.StorageIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#name StorageIntegration#name}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAllowedLocations">storageAllowedLocations</a></code> | <code>string[]</code> | Explicitly limits external stages that use the integration to reference one or more storage locations. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageProvider">storageProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#storage_provider StorageIntegration#storage_provider}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#azure_tenant_id StorageIntegration#azure_tenant_id}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#comment StorageIntegration#comment}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#enabled StorageIntegration#enabled}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#id StorageIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsObjectAcl">storageAwsObjectAcl</a></code> | <code>string</code> | "bucket-owner-full-control" Enables support for AWS access control lists (ACLs) to grant the bucket owner full control. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsRoleArn">storageAwsRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#storage_aws_role_arn StorageIntegration#storage_aws_role_arn}. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageBlockedLocations">storageBlockedLocations</a></code> | <code>string[]</code> | Explicitly prohibits external stages that use the integration from referencing one or more storage locations. |
| <code><a href="#@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#type StorageIntegration#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#name StorageIntegration#name}.

---

##### `storageAllowedLocations`<sup>Required</sup> <a name="storageAllowedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAllowedLocations"></a>

```typescript
public readonly storageAllowedLocations: string[];
```

- *Type:* string[]

Explicitly limits external stages that use the integration to reference one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#storage_allowed_locations StorageIntegration#storage_allowed_locations}

---

##### `storageProvider`<sup>Required</sup> <a name="storageProvider" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageProvider"></a>

```typescript
public readonly storageProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#storage_provider StorageIntegration#storage_provider}.

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#azure_tenant_id StorageIntegration#azure_tenant_id}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#comment StorageIntegration#comment}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#enabled StorageIntegration#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#id StorageIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storageAwsObjectAcl`<sup>Optional</sup> <a name="storageAwsObjectAcl" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsObjectAcl"></a>

```typescript
public readonly storageAwsObjectAcl: string;
```

- *Type:* string

"bucket-owner-full-control" Enables support for AWS access control lists (ACLs) to grant the bucket owner full control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#storage_aws_object_acl StorageIntegration#storage_aws_object_acl}

---

##### `storageAwsRoleArn`<sup>Optional</sup> <a name="storageAwsRoleArn" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageAwsRoleArn"></a>

```typescript
public readonly storageAwsRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#storage_aws_role_arn StorageIntegration#storage_aws_role_arn}.

---

##### `storageBlockedLocations`<sup>Optional</sup> <a name="storageBlockedLocations" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.storageBlockedLocations"></a>

```typescript
public readonly storageBlockedLocations: string[];
```

- *Type:* string[]

Explicitly prohibits external stages that use the integration from referencing one or more storage locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#storage_blocked_locations StorageIntegration#storage_blocked_locations}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-snowflake.storageIntegration.StorageIntegrationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/storage_integration#type StorageIntegration#type}.

---



