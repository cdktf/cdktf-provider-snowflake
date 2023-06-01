# `snowflake_saml_integration`

Refer to the Terraform Registory for docs: [`snowflake_saml_integration`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration).

# `samlIntegration` Submodule <a name="`samlIntegration` Submodule" id="@cdktf/provider-snowflake.samlIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlIntegration <a name="SamlIntegration" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration snowflake_saml_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer"></a>

```typescript
import { samlIntegration } from '@cdktf/provider-snowflake'

new samlIntegration.SamlIntegration(scope: Construct, id: string, config: SamlIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig">SamlIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig">SamlIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2EnableSpInitiated">resetSaml2EnableSpInitiated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2ForceAuthn">resetSaml2ForceAuthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2PostLogoutRedirectUrl">resetSaml2PostLogoutRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2RequestedNameidFormat">resetSaml2RequestedNameidFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SignRequest">resetSaml2SignRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeAcsUrl">resetSaml2SnowflakeAcsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeIssuerUrl">resetSaml2SnowflakeIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeX509Cert">resetSaml2SnowflakeX509Cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SpInitiatedLoginPageLabel">resetSaml2SpInitiatedLoginPageLabel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSaml2EnableSpInitiated` <a name="resetSaml2EnableSpInitiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2EnableSpInitiated"></a>

```typescript
public resetSaml2EnableSpInitiated(): void
```

##### `resetSaml2ForceAuthn` <a name="resetSaml2ForceAuthn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2ForceAuthn"></a>

```typescript
public resetSaml2ForceAuthn(): void
```

##### `resetSaml2PostLogoutRedirectUrl` <a name="resetSaml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2PostLogoutRedirectUrl"></a>

```typescript
public resetSaml2PostLogoutRedirectUrl(): void
```

##### `resetSaml2RequestedNameidFormat` <a name="resetSaml2RequestedNameidFormat" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2RequestedNameidFormat"></a>

```typescript
public resetSaml2RequestedNameidFormat(): void
```

##### `resetSaml2SignRequest` <a name="resetSaml2SignRequest" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SignRequest"></a>

```typescript
public resetSaml2SignRequest(): void
```

##### `resetSaml2SnowflakeAcsUrl` <a name="resetSaml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeAcsUrl"></a>

```typescript
public resetSaml2SnowflakeAcsUrl(): void
```

##### `resetSaml2SnowflakeIssuerUrl` <a name="resetSaml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeIssuerUrl"></a>

```typescript
public resetSaml2SnowflakeIssuerUrl(): void
```

##### `resetSaml2SnowflakeX509Cert` <a name="resetSaml2SnowflakeX509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeX509Cert"></a>

```typescript
public resetSaml2SnowflakeX509Cert(): void
```

##### `resetSaml2SpInitiatedLoginPageLabel` <a name="resetSaml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SpInitiatedLoginPageLabel"></a>

```typescript
public resetSaml2SpInitiatedLoginPageLabel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isConstruct"></a>

```typescript
import { samlIntegration } from '@cdktf/provider-snowflake'

samlIntegration.SamlIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformElement"></a>

```typescript
import { samlIntegration } from '@cdktf/provider-snowflake'

samlIntegration.SamlIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformResource"></a>

```typescript
import { samlIntegration } from '@cdktf/provider-snowflake'

samlIntegration.SamlIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2DigestMethodsUsed">saml2DigestMethodsUsed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignatureMethodsUsed">saml2SignatureMethodsUsed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeMetadata">saml2SnowflakeMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiatedInput">saml2EnableSpInitiatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthnInput">saml2ForceAuthnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2IssuerInput">saml2IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrlInput">saml2PostLogoutRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ProviderInput">saml2ProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormatInput">saml2RequestedNameidFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequestInput">saml2SignRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrlInput">saml2SnowflakeAcsUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrlInput">saml2SnowflakeIssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509CertInput">saml2SnowflakeX509CertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabelInput">saml2SpInitiatedLoginPageLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrlInput">saml2SsoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509CertInput">saml2X509CertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiated">saml2EnableSpInitiated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthn">saml2ForceAuthn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Issuer">saml2Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrl">saml2PostLogoutRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Provider">saml2Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormat">saml2RequestedNameidFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequest">saml2SignRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrl">saml2SnowflakeAcsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrl">saml2SnowflakeIssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509Cert">saml2SnowflakeX509Cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabel">saml2SpInitiatedLoginPageLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrl">saml2SsoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509Cert">saml2X509Cert</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `saml2DigestMethodsUsed`<sup>Required</sup> <a name="saml2DigestMethodsUsed" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2DigestMethodsUsed"></a>

```typescript
public readonly saml2DigestMethodsUsed: string;
```

- *Type:* string

---

##### `saml2SignatureMethodsUsed`<sup>Required</sup> <a name="saml2SignatureMethodsUsed" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignatureMethodsUsed"></a>

```typescript
public readonly saml2SignatureMethodsUsed: string;
```

- *Type:* string

---

##### `saml2SnowflakeMetadata`<sup>Required</sup> <a name="saml2SnowflakeMetadata" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeMetadata"></a>

```typescript
public readonly saml2SnowflakeMetadata: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `saml2EnableSpInitiatedInput`<sup>Optional</sup> <a name="saml2EnableSpInitiatedInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiatedInput"></a>

```typescript
public readonly saml2EnableSpInitiatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `saml2ForceAuthnInput`<sup>Optional</sup> <a name="saml2ForceAuthnInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthnInput"></a>

```typescript
public readonly saml2ForceAuthnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `saml2IssuerInput`<sup>Optional</sup> <a name="saml2IssuerInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2IssuerInput"></a>

```typescript
public readonly saml2IssuerInput: string;
```

- *Type:* string

---

##### `saml2PostLogoutRedirectUrlInput`<sup>Optional</sup> <a name="saml2PostLogoutRedirectUrlInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrlInput"></a>

```typescript
public readonly saml2PostLogoutRedirectUrlInput: string;
```

- *Type:* string

---

##### `saml2ProviderInput`<sup>Optional</sup> <a name="saml2ProviderInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ProviderInput"></a>

```typescript
public readonly saml2ProviderInput: string;
```

- *Type:* string

---

##### `saml2RequestedNameidFormatInput`<sup>Optional</sup> <a name="saml2RequestedNameidFormatInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormatInput"></a>

```typescript
public readonly saml2RequestedNameidFormatInput: string;
```

- *Type:* string

---

##### `saml2SignRequestInput`<sup>Optional</sup> <a name="saml2SignRequestInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequestInput"></a>

```typescript
public readonly saml2SignRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `saml2SnowflakeAcsUrlInput`<sup>Optional</sup> <a name="saml2SnowflakeAcsUrlInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrlInput"></a>

```typescript
public readonly saml2SnowflakeAcsUrlInput: string;
```

- *Type:* string

---

##### `saml2SnowflakeIssuerUrlInput`<sup>Optional</sup> <a name="saml2SnowflakeIssuerUrlInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrlInput"></a>

```typescript
public readonly saml2SnowflakeIssuerUrlInput: string;
```

- *Type:* string

---

##### `saml2SnowflakeX509CertInput`<sup>Optional</sup> <a name="saml2SnowflakeX509CertInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509CertInput"></a>

```typescript
public readonly saml2SnowflakeX509CertInput: string;
```

- *Type:* string

---

##### `saml2SpInitiatedLoginPageLabelInput`<sup>Optional</sup> <a name="saml2SpInitiatedLoginPageLabelInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabelInput"></a>

```typescript
public readonly saml2SpInitiatedLoginPageLabelInput: string;
```

- *Type:* string

---

##### `saml2SsoUrlInput`<sup>Optional</sup> <a name="saml2SsoUrlInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrlInput"></a>

```typescript
public readonly saml2SsoUrlInput: string;
```

- *Type:* string

---

##### `saml2X509CertInput`<sup>Optional</sup> <a name="saml2X509CertInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509CertInput"></a>

```typescript
public readonly saml2X509CertInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `saml2EnableSpInitiated`<sup>Required</sup> <a name="saml2EnableSpInitiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiated"></a>

```typescript
public readonly saml2EnableSpInitiated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `saml2ForceAuthn`<sup>Required</sup> <a name="saml2ForceAuthn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthn"></a>

```typescript
public readonly saml2ForceAuthn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `saml2Issuer`<sup>Required</sup> <a name="saml2Issuer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Issuer"></a>

```typescript
public readonly saml2Issuer: string;
```

- *Type:* string

---

##### `saml2PostLogoutRedirectUrl`<sup>Required</sup> <a name="saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrl"></a>

```typescript
public readonly saml2PostLogoutRedirectUrl: string;
```

- *Type:* string

---

##### `saml2Provider`<sup>Required</sup> <a name="saml2Provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Provider"></a>

```typescript
public readonly saml2Provider: string;
```

- *Type:* string

---

##### `saml2RequestedNameidFormat`<sup>Required</sup> <a name="saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormat"></a>

```typescript
public readonly saml2RequestedNameidFormat: string;
```

- *Type:* string

---

##### `saml2SignRequest`<sup>Required</sup> <a name="saml2SignRequest" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequest"></a>

```typescript
public readonly saml2SignRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `saml2SnowflakeAcsUrl`<sup>Required</sup> <a name="saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrl"></a>

```typescript
public readonly saml2SnowflakeAcsUrl: string;
```

- *Type:* string

---

##### `saml2SnowflakeIssuerUrl`<sup>Required</sup> <a name="saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrl"></a>

```typescript
public readonly saml2SnowflakeIssuerUrl: string;
```

- *Type:* string

---

##### `saml2SnowflakeX509Cert`<sup>Required</sup> <a name="saml2SnowflakeX509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509Cert"></a>

```typescript
public readonly saml2SnowflakeX509Cert: string;
```

- *Type:* string

---

##### `saml2SpInitiatedLoginPageLabel`<sup>Required</sup> <a name="saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabel"></a>

```typescript
public readonly saml2SpInitiatedLoginPageLabel: string;
```

- *Type:* string

---

##### `saml2SsoUrl`<sup>Required</sup> <a name="saml2SsoUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrl"></a>

```typescript
public readonly saml2SsoUrl: string;
```

- *Type:* string

---

##### `saml2X509Cert`<sup>Required</sup> <a name="saml2X509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509Cert"></a>

```typescript
public readonly saml2X509Cert: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlIntegrationConfig <a name="SamlIntegrationConfig" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.Initializer"></a>

```typescript
import { samlIntegration } from '@cdktf/provider-snowflake'

const samlIntegrationConfig: samlIntegration.SamlIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the SAML2 integration. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Issuer">saml2Issuer</a></code> | <code>string</code> | The string containing the IdP EntityID / Issuer. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Provider">saml2Provider</a></code> | <code>string</code> | The string describing the IdP. One of the following: OKTA, ADFS, Custom. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SsoUrl">saml2SsoUrl</a></code> | <code>string</code> | The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2X509Cert">saml2X509Cert</a></code> | <code>string</code> | The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#id SamlIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2EnableSpInitiated">saml2EnableSpInitiated</a></code> | <code>boolean \| cdktf.IResolvable</code> | The Boolean indicating if the Log In With button will be shown on the login page. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2ForceAuthn">saml2ForceAuthn</a></code> | <code>boolean \| cdktf.IResolvable</code> | The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2PostLogoutRedirectUrl">saml2PostLogoutRedirectUrl</a></code> | <code>string</code> | The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2RequestedNameidFormat">saml2RequestedNameidFormat</a></code> | <code>string</code> | The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. If a value is not specified, Snowflake sends the urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress value in the authentication request to the IdP. NameID must be one of the following values: urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified, urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress, urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName, urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName, urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos, urn:oasis:names:tc:SAML:2.0:nameid-format:persistent, urn:oasis:names:tc:SAML:2.0:nameid-format:transient . |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SignRequest">saml2SignRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | The Boolean indicating whether SAML requests are signed. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeAcsUrl">saml2SnowflakeAcsUrl</a></code> | <code>string</code> | The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeIssuerUrl">saml2SnowflakeIssuerUrl</a></code> | <code>string</code> | The string containing the EntityID / Issuer for the Snowflake service provider. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeX509Cert">saml2SnowflakeX509Cert</a></code> | <code>string</code> | The Base64 encoded self-signed certificate generated by Snowflake for use with Encrypting SAML Assertions and Signed SAML Requests. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SpInitiatedLoginPageLabel">saml2SpInitiatedLoginPageLabel</a></code> | <code>string</code> | The string containing the label to display after the Log In With button on the login page. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the SAML2 integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#name SamlIntegration#name}

---

##### `saml2Issuer`<sup>Required</sup> <a name="saml2Issuer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Issuer"></a>

```typescript
public readonly saml2Issuer: string;
```

- *Type:* string

The string containing the IdP EntityID / Issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#saml2_issuer SamlIntegration#saml2_issuer}

---

##### `saml2Provider`<sup>Required</sup> <a name="saml2Provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Provider"></a>

```typescript
public readonly saml2Provider: string;
```

- *Type:* string

The string describing the IdP. One of the following: OKTA, ADFS, Custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#saml2_provider SamlIntegration#saml2_provider}

---

##### `saml2SsoUrl`<sup>Required</sup> <a name="saml2SsoUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SsoUrl"></a>

```typescript
public readonly saml2SsoUrl: string;
```

- *Type:* string

The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#saml2_sso_url SamlIntegration#saml2_sso_url}

---

##### `saml2X509Cert`<sup>Required</sup> <a name="saml2X509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2X509Cert"></a>

```typescript
public readonly saml2X509Cert: string;
```

- *Type:* string

The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#saml2_x509_cert SamlIntegration#saml2_x509_cert}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether this security integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#enabled SamlIntegration#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#id SamlIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `saml2EnableSpInitiated`<sup>Optional</sup> <a name="saml2EnableSpInitiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2EnableSpInitiated"></a>

```typescript
public readonly saml2EnableSpInitiated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The Boolean indicating if the Log In With button will be shown on the login page.

TRUE: displays the Log in WIth button on the login page.  FALSE: does not display the Log in With button on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#saml2_enable_sp_initiated SamlIntegration#saml2_enable_sp_initiated}

---

##### `saml2ForceAuthn`<sup>Optional</sup> <a name="saml2ForceAuthn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2ForceAuthn"></a>

```typescript
public readonly saml2ForceAuthn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake.

When set to TRUE, Snowflake sets the ForceAuthn SAML parameter to TRUE in the outgoing request from Snowflake to the identity provider. TRUE: forces users to authenticate again to access Snowflake, even if a valid session with the identity provider exists. FALSE: does not force users to authenticate again to access Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#saml2_force_authn SamlIntegration#saml2_force_authn}

---

##### `saml2PostLogoutRedirectUrl`<sup>Optional</sup> <a name="saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2PostLogoutRedirectUrl"></a>

```typescript
public readonly saml2PostLogoutRedirectUrl: string;
```

- *Type:* string

The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface.

Snowflake terminates the Snowflake session upon redirecting to the specified endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#saml2_post_logout_redirect_url SamlIntegration#saml2_post_logout_redirect_url}

---

##### `saml2RequestedNameidFormat`<sup>Optional</sup> <a name="saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2RequestedNameidFormat"></a>

```typescript
public readonly saml2RequestedNameidFormat: string;
```

- *Type:* string

The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. If a value is not specified, Snowflake sends the urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress value in the authentication request to the IdP. NameID must be one of the following values: urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified, urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress, urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName, urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName, urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos, urn:oasis:names:tc:SAML:2.0:nameid-format:persistent, urn:oasis:names:tc:SAML:2.0:nameid-format:transient .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#saml2_requested_nameid_format SamlIntegration#saml2_requested_nameid_format}

---

##### `saml2SignRequest`<sup>Optional</sup> <a name="saml2SignRequest" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SignRequest"></a>

```typescript
public readonly saml2SignRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The Boolean indicating whether SAML requests are signed.

TRUE: allows SAML requests to be signed. FALSE: does not allow SAML requests to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#saml2_sign_request SamlIntegration#saml2_sign_request}

---

##### `saml2SnowflakeAcsUrl`<sup>Optional</sup> <a name="saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeAcsUrl"></a>

```typescript
public readonly saml2SnowflakeAcsUrl: string;
```

- *Type:* string

The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake.

This property will be set in the SAML authentication request generated by Snowflake when initiating a SAML SSO operation with the IdP. If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Default: https://<account_locator>.<region>.snowflakecomputing.com/fed/login

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#saml2_snowflake_acs_url SamlIntegration#saml2_snowflake_acs_url}

---

##### `saml2SnowflakeIssuerUrl`<sup>Optional</sup> <a name="saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeIssuerUrl"></a>

```typescript
public readonly saml2SnowflakeIssuerUrl: string;
```

- *Type:* string

The string containing the EntityID / Issuer for the Snowflake service provider.

If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#saml2_snowflake_issuer_url SamlIntegration#saml2_snowflake_issuer_url}

---

##### `saml2SnowflakeX509Cert`<sup>Optional</sup> <a name="saml2SnowflakeX509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeX509Cert"></a>

```typescript
public readonly saml2SnowflakeX509Cert: string;
```

- *Type:* string

The Base64 encoded self-signed certificate generated by Snowflake for use with Encrypting SAML Assertions and Signed SAML Requests.

You must have at least one of these features (encrypted SAML assertions or signed SAML responses) enabled in your Snowflake account to access the certificate value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#saml2_snowflake_x509_cert SamlIntegration#saml2_snowflake_x509_cert}

---

##### `saml2SpInitiatedLoginPageLabel`<sup>Optional</sup> <a name="saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SpInitiatedLoginPageLabel"></a>

```typescript
public readonly saml2SpInitiatedLoginPageLabel: string;
```

- *Type:* string

The string containing the label to display after the Log In With button on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/saml_integration#saml2_sp_initiated_login_page_label SamlIntegration#saml2_sp_initiated_login_page_label}

---



