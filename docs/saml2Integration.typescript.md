# `saml2Integration` Submodule <a name="`saml2Integration` Submodule" id="@cdktf/provider-snowflake.saml2Integration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Saml2Integration <a name="Saml2Integration" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration snowflake_saml2_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2Integration(scope: Construct, id: string, config: Saml2IntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig">Saml2IntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig">Saml2IntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetAllowedEmailPatterns">resetAllowedEmailPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetAllowedUserDomains">resetAllowedUserDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2EnableSpInitiated">resetSaml2EnableSpInitiated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2ForceAuthn">resetSaml2ForceAuthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2PostLogoutRedirectUrl">resetSaml2PostLogoutRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2RequestedNameidFormat">resetSaml2RequestedNameidFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SignRequest">resetSaml2SignRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SnowflakeAcsUrl">resetSaml2SnowflakeAcsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SnowflakeIssuerUrl">resetSaml2SnowflakeIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SpInitiatedLoginPageLabel">resetSaml2SpInitiatedLoginPageLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.putTimeouts"></a>

```typescript
public putTimeouts(value: Saml2IntegrationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a>

---

##### `resetAllowedEmailPatterns` <a name="resetAllowedEmailPatterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetAllowedEmailPatterns"></a>

```typescript
public resetAllowedEmailPatterns(): void
```

##### `resetAllowedUserDomains` <a name="resetAllowedUserDomains" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetAllowedUserDomains"></a>

```typescript
public resetAllowedUserDomains(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSaml2EnableSpInitiated` <a name="resetSaml2EnableSpInitiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2EnableSpInitiated"></a>

```typescript
public resetSaml2EnableSpInitiated(): void
```

##### `resetSaml2ForceAuthn` <a name="resetSaml2ForceAuthn" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2ForceAuthn"></a>

```typescript
public resetSaml2ForceAuthn(): void
```

##### `resetSaml2PostLogoutRedirectUrl` <a name="resetSaml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2PostLogoutRedirectUrl"></a>

```typescript
public resetSaml2PostLogoutRedirectUrl(): void
```

##### `resetSaml2RequestedNameidFormat` <a name="resetSaml2RequestedNameidFormat" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2RequestedNameidFormat"></a>

```typescript
public resetSaml2RequestedNameidFormat(): void
```

##### `resetSaml2SignRequest` <a name="resetSaml2SignRequest" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SignRequest"></a>

```typescript
public resetSaml2SignRequest(): void
```

##### `resetSaml2SnowflakeAcsUrl` <a name="resetSaml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SnowflakeAcsUrl"></a>

```typescript
public resetSaml2SnowflakeAcsUrl(): void
```

##### `resetSaml2SnowflakeIssuerUrl` <a name="resetSaml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SnowflakeIssuerUrl"></a>

```typescript
public resetSaml2SnowflakeIssuerUrl(): void
```

##### `resetSaml2SpInitiatedLoginPageLabel` <a name="resetSaml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SpInitiatedLoginPageLabel"></a>

```typescript
public resetSaml2SpInitiatedLoginPageLabel(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Saml2Integration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isConstruct"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

saml2Integration.Saml2Integration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformElement"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

saml2Integration.Saml2Integration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformResource"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

saml2Integration.Saml2Integration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

saml2Integration.Saml2Integration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Saml2Integration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Saml2Integration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Saml2Integration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Saml2Integration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList">Saml2IntegrationDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList">Saml2IntegrationShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference">Saml2IntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedEmailPatternsInput">allowedEmailPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedUserDomainsInput">allowedUserDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.enabledInput">enabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2EnableSpInitiatedInput">saml2EnableSpInitiatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ForceAuthnInput">saml2ForceAuthnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2IssuerInput">saml2IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2PostLogoutRedirectUrlInput">saml2PostLogoutRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ProviderInput">saml2ProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2RequestedNameidFormatInput">saml2RequestedNameidFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SignRequestInput">saml2SignRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeAcsUrlInput">saml2SnowflakeAcsUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeIssuerUrlInput">saml2SnowflakeIssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SpInitiatedLoginPageLabelInput">saml2SpInitiatedLoginPageLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SsoUrlInput">saml2SsoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2X509CertInput">saml2X509CertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedEmailPatterns">allowedEmailPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedUserDomains">allowedUserDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.enabled">enabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2EnableSpInitiated">saml2EnableSpInitiated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ForceAuthn">saml2ForceAuthn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2Issuer">saml2Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2PostLogoutRedirectUrl">saml2PostLogoutRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2Provider">saml2Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2RequestedNameidFormat">saml2RequestedNameidFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SignRequest">saml2SignRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeAcsUrl">saml2SnowflakeAcsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeIssuerUrl">saml2SnowflakeIssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SpInitiatedLoginPageLabel">saml2SpInitiatedLoginPageLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SsoUrl">saml2SsoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2X509Cert">saml2X509Cert</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.describeOutput"></a>

```typescript
public readonly describeOutput: Saml2IntegrationDescribeOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList">Saml2IntegrationDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.showOutput"></a>

```typescript
public readonly showOutput: Saml2IntegrationShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList">Saml2IntegrationShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.timeouts"></a>

```typescript
public readonly timeouts: Saml2IntegrationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference">Saml2IntegrationTimeoutsOutputReference</a>

---

##### `allowedEmailPatternsInput`<sup>Optional</sup> <a name="allowedEmailPatternsInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedEmailPatternsInput"></a>

```typescript
public readonly allowedEmailPatternsInput: string[];
```

- *Type:* string[]

---

##### `allowedUserDomainsInput`<sup>Optional</sup> <a name="allowedUserDomainsInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedUserDomainsInput"></a>

```typescript
public readonly allowedUserDomainsInput: string[];
```

- *Type:* string[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.enabledInput"></a>

```typescript
public readonly enabledInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `saml2EnableSpInitiatedInput`<sup>Optional</sup> <a name="saml2EnableSpInitiatedInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2EnableSpInitiatedInput"></a>

```typescript
public readonly saml2EnableSpInitiatedInput: string;
```

- *Type:* string

---

##### `saml2ForceAuthnInput`<sup>Optional</sup> <a name="saml2ForceAuthnInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ForceAuthnInput"></a>

```typescript
public readonly saml2ForceAuthnInput: string;
```

- *Type:* string

---

##### `saml2IssuerInput`<sup>Optional</sup> <a name="saml2IssuerInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2IssuerInput"></a>

```typescript
public readonly saml2IssuerInput: string;
```

- *Type:* string

---

##### `saml2PostLogoutRedirectUrlInput`<sup>Optional</sup> <a name="saml2PostLogoutRedirectUrlInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2PostLogoutRedirectUrlInput"></a>

```typescript
public readonly saml2PostLogoutRedirectUrlInput: string;
```

- *Type:* string

---

##### `saml2ProviderInput`<sup>Optional</sup> <a name="saml2ProviderInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ProviderInput"></a>

```typescript
public readonly saml2ProviderInput: string;
```

- *Type:* string

---

##### `saml2RequestedNameidFormatInput`<sup>Optional</sup> <a name="saml2RequestedNameidFormatInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2RequestedNameidFormatInput"></a>

```typescript
public readonly saml2RequestedNameidFormatInput: string;
```

- *Type:* string

---

##### `saml2SignRequestInput`<sup>Optional</sup> <a name="saml2SignRequestInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SignRequestInput"></a>

```typescript
public readonly saml2SignRequestInput: string;
```

- *Type:* string

---

##### `saml2SnowflakeAcsUrlInput`<sup>Optional</sup> <a name="saml2SnowflakeAcsUrlInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeAcsUrlInput"></a>

```typescript
public readonly saml2SnowflakeAcsUrlInput: string;
```

- *Type:* string

---

##### `saml2SnowflakeIssuerUrlInput`<sup>Optional</sup> <a name="saml2SnowflakeIssuerUrlInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeIssuerUrlInput"></a>

```typescript
public readonly saml2SnowflakeIssuerUrlInput: string;
```

- *Type:* string

---

##### `saml2SpInitiatedLoginPageLabelInput`<sup>Optional</sup> <a name="saml2SpInitiatedLoginPageLabelInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SpInitiatedLoginPageLabelInput"></a>

```typescript
public readonly saml2SpInitiatedLoginPageLabelInput: string;
```

- *Type:* string

---

##### `saml2SsoUrlInput`<sup>Optional</sup> <a name="saml2SsoUrlInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SsoUrlInput"></a>

```typescript
public readonly saml2SsoUrlInput: string;
```

- *Type:* string

---

##### `saml2X509CertInput`<sup>Optional</sup> <a name="saml2X509CertInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2X509CertInput"></a>

```typescript
public readonly saml2X509CertInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Saml2IntegrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a>

---

##### `allowedEmailPatterns`<sup>Required</sup> <a name="allowedEmailPatterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedEmailPatterns"></a>

```typescript
public readonly allowedEmailPatterns: string[];
```

- *Type:* string[]

---

##### `allowedUserDomains`<sup>Required</sup> <a name="allowedUserDomains" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedUserDomains"></a>

```typescript
public readonly allowedUserDomains: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.enabled"></a>

```typescript
public readonly enabled: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `saml2EnableSpInitiated`<sup>Required</sup> <a name="saml2EnableSpInitiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2EnableSpInitiated"></a>

```typescript
public readonly saml2EnableSpInitiated: string;
```

- *Type:* string

---

##### `saml2ForceAuthn`<sup>Required</sup> <a name="saml2ForceAuthn" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ForceAuthn"></a>

```typescript
public readonly saml2ForceAuthn: string;
```

- *Type:* string

---

##### `saml2Issuer`<sup>Required</sup> <a name="saml2Issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2Issuer"></a>

```typescript
public readonly saml2Issuer: string;
```

- *Type:* string

---

##### `saml2PostLogoutRedirectUrl`<sup>Required</sup> <a name="saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2PostLogoutRedirectUrl"></a>

```typescript
public readonly saml2PostLogoutRedirectUrl: string;
```

- *Type:* string

---

##### `saml2Provider`<sup>Required</sup> <a name="saml2Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2Provider"></a>

```typescript
public readonly saml2Provider: string;
```

- *Type:* string

---

##### `saml2RequestedNameidFormat`<sup>Required</sup> <a name="saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2RequestedNameidFormat"></a>

```typescript
public readonly saml2RequestedNameidFormat: string;
```

- *Type:* string

---

##### `saml2SignRequest`<sup>Required</sup> <a name="saml2SignRequest" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SignRequest"></a>

```typescript
public readonly saml2SignRequest: string;
```

- *Type:* string

---

##### `saml2SnowflakeAcsUrl`<sup>Required</sup> <a name="saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeAcsUrl"></a>

```typescript
public readonly saml2SnowflakeAcsUrl: string;
```

- *Type:* string

---

##### `saml2SnowflakeIssuerUrl`<sup>Required</sup> <a name="saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeIssuerUrl"></a>

```typescript
public readonly saml2SnowflakeIssuerUrl: string;
```

- *Type:* string

---

##### `saml2SpInitiatedLoginPageLabel`<sup>Required</sup> <a name="saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SpInitiatedLoginPageLabel"></a>

```typescript
public readonly saml2SpInitiatedLoginPageLabel: string;
```

- *Type:* string

---

##### `saml2SsoUrl`<sup>Required</sup> <a name="saml2SsoUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SsoUrl"></a>

```typescript
public readonly saml2SsoUrl: string;
```

- *Type:* string

---

##### `saml2X509Cert`<sup>Required</sup> <a name="saml2X509Cert" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2X509Cert"></a>

```typescript
public readonly saml2X509Cert: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Saml2IntegrationConfig <a name="Saml2IntegrationConfig" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationConfig: saml2Integration.Saml2IntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the SAML2 integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2Issuer">saml2Issuer</a></code> | <code>string</code> | The string containing the IdP EntityID / Issuer. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2Provider">saml2Provider</a></code> | <code>string</code> | The string describing the IdP. Valid options are: `OKTA` \| `ADFS` \| `CUSTOM`. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SsoUrl">saml2SsoUrl</a></code> | <code>string</code> | The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2X509Cert">saml2X509Cert</a></code> | <code>string</code> | The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.allowedEmailPatterns">allowedEmailPatterns</a></code> | <code>string[]</code> | A list of regular expressions that email addresses are matched against to authenticate with a SAML2 security integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.allowedUserDomains">allowedUserDomains</a></code> | <code>string[]</code> | A list of email domains that can authenticate with a SAML2 security integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.enabled">enabled</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#id Saml2Integration#id}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2EnableSpInitiated">saml2EnableSpInitiated</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating if the Log In With button will be shown on the login page. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2ForceAuthn">saml2ForceAuthn</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2PostLogoutRedirectUrl">saml2PostLogoutRedirectUrl</a></code> | <code>string</code> | The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2RequestedNameidFormat">saml2RequestedNameidFormat</a></code> | <code>string</code> | The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. Valid options are: `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified` \| `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` \| `urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName` \| `urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName` \| `urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos` \| `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` \| `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SignRequest">saml2SignRequest</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether SAML requests are signed. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SnowflakeAcsUrl">saml2SnowflakeAcsUrl</a></code> | <code>string</code> | The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SnowflakeIssuerUrl">saml2SnowflakeIssuerUrl</a></code> | <code>string</code> | The string containing the EntityID / Issuer for the Snowflake service provider. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SpInitiatedLoginPageLabel">saml2SpInitiatedLoginPageLabel</a></code> | <code>string</code> | The string containing the label to display after the Log In With button on the login page. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the SAML2 integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#name Saml2Integration#name}

---

##### `saml2Issuer`<sup>Required</sup> <a name="saml2Issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2Issuer"></a>

```typescript
public readonly saml2Issuer: string;
```

- *Type:* string

The string containing the IdP EntityID / Issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#saml2_issuer Saml2Integration#saml2_issuer}

---

##### `saml2Provider`<sup>Required</sup> <a name="saml2Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2Provider"></a>

```typescript
public readonly saml2Provider: string;
```

- *Type:* string

The string describing the IdP. Valid options are: `OKTA` | `ADFS` | `CUSTOM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#saml2_provider Saml2Integration#saml2_provider}

---

##### `saml2SsoUrl`<sup>Required</sup> <a name="saml2SsoUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SsoUrl"></a>

```typescript
public readonly saml2SsoUrl: string;
```

- *Type:* string

The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#saml2_sso_url Saml2Integration#saml2_sso_url}

---

##### `saml2X509Cert`<sup>Required</sup> <a name="saml2X509Cert" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2X509Cert"></a>

```typescript
public readonly saml2X509Cert: string;
```

- *Type:* string

The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#saml2_x509_cert Saml2Integration#saml2_x509_cert}

---

##### `allowedEmailPatterns`<sup>Optional</sup> <a name="allowedEmailPatterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.allowedEmailPatterns"></a>

```typescript
public readonly allowedEmailPatterns: string[];
```

- *Type:* string[]

A list of regular expressions that email addresses are matched against to authenticate with a SAML2 security integration.

If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#allowed_email_patterns Saml2Integration#allowed_email_patterns}

---

##### `allowedUserDomains`<sup>Optional</sup> <a name="allowedUserDomains" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.allowedUserDomains"></a>

```typescript
public readonly allowedUserDomains: string[];
```

- *Type:* string[]

A list of email domains that can authenticate with a SAML2 security integration.

If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#allowed_user_domains Saml2Integration#allowed_user_domains}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#comment Saml2Integration#comment}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.enabled"></a>

```typescript
public readonly enabled: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this security integration is enabled or disabled.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#enabled Saml2Integration#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#id Saml2Integration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `saml2EnableSpInitiated`<sup>Optional</sup> <a name="saml2EnableSpInitiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2EnableSpInitiated"></a>

```typescript
public readonly saml2EnableSpInitiated: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating if the Log In With button will be shown on the login page.

TRUE: displays the Log in With button on the login page. FALSE: does not display the Log in With button on the login page. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#saml2_enable_sp_initiated Saml2Integration#saml2_enable_sp_initiated}

---

##### `saml2ForceAuthn`<sup>Optional</sup> <a name="saml2ForceAuthn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2ForceAuthn"></a>

```typescript
public readonly saml2ForceAuthn: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake.

When set to TRUE, Snowflake sets the ForceAuthn SAML parameter to TRUE in the outgoing request from Snowflake to the identity provider. TRUE: forces users to authenticate again to access Snowflake, even if a valid session with the identity provider exists. FALSE: does not force users to authenticate again to access Snowflake. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#saml2_force_authn Saml2Integration#saml2_force_authn}

---

##### `saml2PostLogoutRedirectUrl`<sup>Optional</sup> <a name="saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2PostLogoutRedirectUrl"></a>

```typescript
public readonly saml2PostLogoutRedirectUrl: string;
```

- *Type:* string

The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface.

Snowflake terminates the Snowflake session upon redirecting to the specified endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#saml2_post_logout_redirect_url Saml2Integration#saml2_post_logout_redirect_url}

---

##### `saml2RequestedNameidFormat`<sup>Optional</sup> <a name="saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2RequestedNameidFormat"></a>

```typescript
public readonly saml2RequestedNameidFormat: string;
```

- *Type:* string

The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. Valid options are: `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified` | `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` | `urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName` | `urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName` | `urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos` | `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` | `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#saml2_requested_nameid_format Saml2Integration#saml2_requested_nameid_format}

---

##### `saml2SignRequest`<sup>Optional</sup> <a name="saml2SignRequest" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SignRequest"></a>

```typescript
public readonly saml2SignRequest: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether SAML requests are signed.

TRUE: allows SAML requests to be signed. FALSE: does not allow SAML requests to be signed. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#saml2_sign_request Saml2Integration#saml2_sign_request}

---

##### `saml2SnowflakeAcsUrl`<sup>Optional</sup> <a name="saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SnowflakeAcsUrl"></a>

```typescript
public readonly saml2SnowflakeAcsUrl: string;
```

- *Type:* string

The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake.

This property will be set in the SAML authentication request generated by Snowflake when initiating a SAML SSO operation with the IdP. If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Because Okta does not support underscores in URLs, the underscore in the account name must be converted to a hyphen. See [docs](https://docs.snowflake.com/en/user-guide/organizations-connect#okta-urls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#saml2_snowflake_acs_url Saml2Integration#saml2_snowflake_acs_url}

---

##### `saml2SnowflakeIssuerUrl`<sup>Optional</sup> <a name="saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SnowflakeIssuerUrl"></a>

```typescript
public readonly saml2SnowflakeIssuerUrl: string;
```

- *Type:* string

The string containing the EntityID / Issuer for the Snowflake service provider.

If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Because Okta does not support underscores in URLs, the underscore in the account name must be converted to a hyphen. See [docs](https://docs.snowflake.com/en/user-guide/organizations-connect#okta-urls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#saml2_snowflake_issuer_url Saml2Integration#saml2_snowflake_issuer_url}

---

##### `saml2SpInitiatedLoginPageLabel`<sup>Optional</sup> <a name="saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SpInitiatedLoginPageLabel"></a>

```typescript
public readonly saml2SpInitiatedLoginPageLabel: string;
```

- *Type:* string

The string containing the label to display after the Log In With button on the login page.

If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#saml2_sp_initiated_login_page_label Saml2Integration#saml2_sp_initiated_login_page_label}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Saml2IntegrationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#timeouts Saml2Integration#timeouts}

---

### Saml2IntegrationDescribeOutput <a name="Saml2IntegrationDescribeOutput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutput.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutput: saml2Integration.Saml2IntegrationDescribeOutput = { ... }
```


### Saml2IntegrationDescribeOutputAllowedEmailPatterns <a name="Saml2IntegrationDescribeOutputAllowedEmailPatterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputAllowedEmailPatterns: saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns = { ... }
```


### Saml2IntegrationDescribeOutputAllowedUserDomains <a name="Saml2IntegrationDescribeOutputAllowedUserDomains" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputAllowedUserDomains: saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains = { ... }
```


### Saml2IntegrationDescribeOutputComment <a name="Saml2IntegrationDescribeOutputComment" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputComment.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputComment: saml2Integration.Saml2IntegrationDescribeOutputComment = { ... }
```


### Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed <a name="Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputSaml2DigestMethodsUsed: saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed = { ... }
```


### Saml2IntegrationDescribeOutputSaml2EnableSpInitiated <a name="Saml2IntegrationDescribeOutputSaml2EnableSpInitiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputSaml2EnableSpInitiated: saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated = { ... }
```


### Saml2IntegrationDescribeOutputSaml2ForceAuthn <a name="Saml2IntegrationDescribeOutputSaml2ForceAuthn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputSaml2ForceAuthn: saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn = { ... }
```


### Saml2IntegrationDescribeOutputSaml2Issuer <a name="Saml2IntegrationDescribeOutputSaml2Issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputSaml2Issuer: saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer = { ... }
```


### Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl <a name="Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl: saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl = { ... }
```


### Saml2IntegrationDescribeOutputSaml2Provider <a name="Saml2IntegrationDescribeOutputSaml2Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputSaml2Provider: saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider = { ... }
```


### Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat <a name="Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputSaml2RequestedNameidFormat: saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat = { ... }
```


### Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed <a name="Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed: saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed = { ... }
```


### Saml2IntegrationDescribeOutputSaml2SignRequest <a name="Saml2IntegrationDescribeOutputSaml2SignRequest" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputSaml2SignRequest: saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest = { ... }
```


### Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl: saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl = { ... }
```


### Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl: saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl = { ... }
```


### Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputSaml2SnowflakeMetadata: saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata = { ... }
```


### Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel <a name="Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel: saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel = { ... }
```


### Saml2IntegrationDescribeOutputSaml2SsoUrl <a name="Saml2IntegrationDescribeOutputSaml2SsoUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationDescribeOutputSaml2SsoUrl: saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl = { ... }
```


### Saml2IntegrationShowOutput <a name="Saml2IntegrationShowOutput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutput.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationShowOutput: saml2Integration.Saml2IntegrationShowOutput = { ... }
```


### Saml2IntegrationTimeouts <a name="Saml2IntegrationTimeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

const saml2IntegrationTimeouts: saml2Integration.Saml2IntegrationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#create Saml2Integration#create}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#delete Saml2Integration#delete}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#read Saml2Integration#read}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#update Saml2Integration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#create Saml2Integration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#delete Saml2Integration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#read Saml2Integration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/saml2_integration#update Saml2Integration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Saml2IntegrationDescribeOutputAllowedEmailPatternsList <a name="Saml2IntegrationDescribeOutputAllowedEmailPatternsList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference <a name="Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns">Saml2IntegrationDescribeOutputAllowedEmailPatterns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputAllowedEmailPatterns;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns">Saml2IntegrationDescribeOutputAllowedEmailPatterns</a>

---


### Saml2IntegrationDescribeOutputAllowedUserDomainsList <a name="Saml2IntegrationDescribeOutputAllowedUserDomainsList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference <a name="Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains">Saml2IntegrationDescribeOutputAllowedUserDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputAllowedUserDomains;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains">Saml2IntegrationDescribeOutputAllowedUserDomains</a>

---


### Saml2IntegrationDescribeOutputCommentList <a name="Saml2IntegrationDescribeOutputCommentList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputCommentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputCommentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputCommentOutputReference <a name="Saml2IntegrationDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputComment">Saml2IntegrationDescribeOutputComment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputComment;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputComment">Saml2IntegrationDescribeOutputComment</a>

---


### Saml2IntegrationDescribeOutputList <a name="Saml2IntegrationDescribeOutputList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputOutputReference <a name="Saml2IntegrationDescribeOutputOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.allowedEmailPatterns">allowedEmailPatterns</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList">Saml2IntegrationDescribeOutputAllowedEmailPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.allowedUserDomains">allowedUserDomains</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList">Saml2IntegrationDescribeOutputAllowedUserDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList">Saml2IntegrationDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2DigestMethodsUsed">saml2DigestMethodsUsed</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList">Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2EnableSpInitiated">saml2EnableSpInitiated</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList">Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2ForceAuthn">saml2ForceAuthn</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList">Saml2IntegrationDescribeOutputSaml2ForceAuthnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2Issuer">saml2Issuer</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList">Saml2IntegrationDescribeOutputSaml2IssuerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2PostLogoutRedirectUrl">saml2PostLogoutRedirectUrl</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList">Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2Provider">saml2Provider</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList">Saml2IntegrationDescribeOutputSaml2ProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2RequestedNameidFormat">saml2RequestedNameidFormat</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList">Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SignatureMethodsUsed">saml2SignatureMethodsUsed</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList">Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SignRequest">saml2SignRequest</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList">Saml2IntegrationDescribeOutputSaml2SignRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeAcsUrl">saml2SnowflakeAcsUrl</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList">Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeIssuerUrl">saml2SnowflakeIssuerUrl</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList">Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeMetadata">saml2SnowflakeMetadata</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList">Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SpInitiatedLoginPageLabel">saml2SpInitiatedLoginPageLabel</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList">Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SsoUrl">saml2SsoUrl</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList">Saml2IntegrationDescribeOutputSaml2SsoUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutput">Saml2IntegrationDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedEmailPatterns`<sup>Required</sup> <a name="allowedEmailPatterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.allowedEmailPatterns"></a>

```typescript
public readonly allowedEmailPatterns: Saml2IntegrationDescribeOutputAllowedEmailPatternsList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList">Saml2IntegrationDescribeOutputAllowedEmailPatternsList</a>

---

##### `allowedUserDomains`<sup>Required</sup> <a name="allowedUserDomains" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.allowedUserDomains"></a>

```typescript
public readonly allowedUserDomains: Saml2IntegrationDescribeOutputAllowedUserDomainsList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList">Saml2IntegrationDescribeOutputAllowedUserDomainsList</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: Saml2IntegrationDescribeOutputCommentList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList">Saml2IntegrationDescribeOutputCommentList</a>

---

##### `saml2DigestMethodsUsed`<sup>Required</sup> <a name="saml2DigestMethodsUsed" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2DigestMethodsUsed"></a>

```typescript
public readonly saml2DigestMethodsUsed: Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList">Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList</a>

---

##### `saml2EnableSpInitiated`<sup>Required</sup> <a name="saml2EnableSpInitiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2EnableSpInitiated"></a>

```typescript
public readonly saml2EnableSpInitiated: Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList">Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList</a>

---

##### `saml2ForceAuthn`<sup>Required</sup> <a name="saml2ForceAuthn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2ForceAuthn"></a>

```typescript
public readonly saml2ForceAuthn: Saml2IntegrationDescribeOutputSaml2ForceAuthnList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList">Saml2IntegrationDescribeOutputSaml2ForceAuthnList</a>

---

##### `saml2Issuer`<sup>Required</sup> <a name="saml2Issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2Issuer"></a>

```typescript
public readonly saml2Issuer: Saml2IntegrationDescribeOutputSaml2IssuerList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList">Saml2IntegrationDescribeOutputSaml2IssuerList</a>

---

##### `saml2PostLogoutRedirectUrl`<sup>Required</sup> <a name="saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2PostLogoutRedirectUrl"></a>

```typescript
public readonly saml2PostLogoutRedirectUrl: Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList">Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList</a>

---

##### `saml2Provider`<sup>Required</sup> <a name="saml2Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2Provider"></a>

```typescript
public readonly saml2Provider: Saml2IntegrationDescribeOutputSaml2ProviderList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList">Saml2IntegrationDescribeOutputSaml2ProviderList</a>

---

##### `saml2RequestedNameidFormat`<sup>Required</sup> <a name="saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2RequestedNameidFormat"></a>

```typescript
public readonly saml2RequestedNameidFormat: Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList">Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList</a>

---

##### `saml2SignatureMethodsUsed`<sup>Required</sup> <a name="saml2SignatureMethodsUsed" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SignatureMethodsUsed"></a>

```typescript
public readonly saml2SignatureMethodsUsed: Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList">Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList</a>

---

##### `saml2SignRequest`<sup>Required</sup> <a name="saml2SignRequest" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SignRequest"></a>

```typescript
public readonly saml2SignRequest: Saml2IntegrationDescribeOutputSaml2SignRequestList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList">Saml2IntegrationDescribeOutputSaml2SignRequestList</a>

---

##### `saml2SnowflakeAcsUrl`<sup>Required</sup> <a name="saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeAcsUrl"></a>

```typescript
public readonly saml2SnowflakeAcsUrl: Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList">Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList</a>

---

##### `saml2SnowflakeIssuerUrl`<sup>Required</sup> <a name="saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeIssuerUrl"></a>

```typescript
public readonly saml2SnowflakeIssuerUrl: Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList">Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList</a>

---

##### `saml2SnowflakeMetadata`<sup>Required</sup> <a name="saml2SnowflakeMetadata" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeMetadata"></a>

```typescript
public readonly saml2SnowflakeMetadata: Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList">Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList</a>

---

##### `saml2SpInitiatedLoginPageLabel`<sup>Required</sup> <a name="saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SpInitiatedLoginPageLabel"></a>

```typescript
public readonly saml2SpInitiatedLoginPageLabel: Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList">Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList</a>

---

##### `saml2SsoUrl`<sup>Required</sup> <a name="saml2SsoUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SsoUrl"></a>

```typescript
public readonly saml2SsoUrl: Saml2IntegrationDescribeOutputSaml2SsoUrlList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList">Saml2IntegrationDescribeOutputSaml2SsoUrlList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutput">Saml2IntegrationDescribeOutput</a>

---


### Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList <a name="Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference <a name="Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed">Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed">Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed</a>

---


### Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList <a name="Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference <a name="Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated">Saml2IntegrationDescribeOutputSaml2EnableSpInitiated</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputSaml2EnableSpInitiated;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated">Saml2IntegrationDescribeOutputSaml2EnableSpInitiated</a>

---


### Saml2IntegrationDescribeOutputSaml2ForceAuthnList <a name="Saml2IntegrationDescribeOutputSaml2ForceAuthnList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference <a name="Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn">Saml2IntegrationDescribeOutputSaml2ForceAuthn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputSaml2ForceAuthn;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn">Saml2IntegrationDescribeOutputSaml2ForceAuthn</a>

---


### Saml2IntegrationDescribeOutputSaml2IssuerList <a name="Saml2IntegrationDescribeOutputSaml2IssuerList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputSaml2IssuerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2IssuerOutputReference <a name="Saml2IntegrationDescribeOutputSaml2IssuerOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer">Saml2IntegrationDescribeOutputSaml2Issuer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputSaml2Issuer;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer">Saml2IntegrationDescribeOutputSaml2Issuer</a>

---


### Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList <a name="Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference <a name="Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl">Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl">Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl</a>

---


### Saml2IntegrationDescribeOutputSaml2ProviderList <a name="Saml2IntegrationDescribeOutputSaml2ProviderList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputSaml2ProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2ProviderOutputReference <a name="Saml2IntegrationDescribeOutputSaml2ProviderOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider">Saml2IntegrationDescribeOutputSaml2Provider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputSaml2Provider;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider">Saml2IntegrationDescribeOutputSaml2Provider</a>

---


### Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList <a name="Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference <a name="Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat">Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat">Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat</a>

---


### Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList <a name="Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed">Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed">Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed</a>

---


### Saml2IntegrationDescribeOutputSaml2SignRequestList <a name="Saml2IntegrationDescribeOutputSaml2SignRequestList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest">Saml2IntegrationDescribeOutputSaml2SignRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputSaml2SignRequest;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest">Saml2IntegrationDescribeOutputSaml2SignRequest</a>

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl">Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl">Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl</a>

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl">Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl">Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl</a>

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata">Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata">Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata</a>

---


### Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList <a name="Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel">Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel">Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel</a>

---


### Saml2IntegrationDescribeOutputSaml2SsoUrlList <a name="Saml2IntegrationDescribeOutputSaml2SsoUrlList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.get"></a>

```typescript
public get(index: number): Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl">Saml2IntegrationDescribeOutputSaml2SsoUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationDescribeOutputSaml2SsoUrl;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl">Saml2IntegrationDescribeOutputSaml2SsoUrl</a>

---


### Saml2IntegrationShowOutputList <a name="Saml2IntegrationShowOutputList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.get"></a>

```typescript
public get(index: number): Saml2IntegrationShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Saml2IntegrationShowOutputOutputReference <a name="Saml2IntegrationShowOutputOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.integrationType">integrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutput">Saml2IntegrationShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Saml2IntegrationShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutput">Saml2IntegrationShowOutput</a>

---


### Saml2IntegrationTimeoutsOutputReference <a name="Saml2IntegrationTimeoutsOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer"></a>

```typescript
import { saml2Integration } from '@cdktf/provider-snowflake'

new saml2Integration.Saml2IntegrationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Saml2IntegrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a>

---



