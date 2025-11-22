# `apiAuthenticationIntegrationWithAuthorizationCodeGrant` Submodule <a name="`apiAuthenticationIntegrationWithAuthorizationCodeGrant` Submodule" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiAuthenticationIntegrationWithAuthorizationCodeGrant <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrant" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant snowflake_api_authentication_integration_with_authorization_code_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant(scope: Construct, id: string, config: ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig">ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig">ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthAccessTokenValidity">resetOauthAccessTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthAllowedScopes">resetOauthAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthAuthorizationEndpoint">resetOauthAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthClientAuthMethod">resetOauthClientAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthRefreshTokenValidity">resetOauthRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthTokenEndpoint">resetOauthTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts">ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOauthAccessTokenValidity` <a name="resetOauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthAccessTokenValidity"></a>

```typescript
public resetOauthAccessTokenValidity(): void
```

##### `resetOauthAllowedScopes` <a name="resetOauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthAllowedScopes"></a>

```typescript
public resetOauthAllowedScopes(): void
```

##### `resetOauthAuthorizationEndpoint` <a name="resetOauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthAuthorizationEndpoint"></a>

```typescript
public resetOauthAuthorizationEndpoint(): void
```

##### `resetOauthClientAuthMethod` <a name="resetOauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthClientAuthMethod"></a>

```typescript
public resetOauthClientAuthMethod(): void
```

##### `resetOauthRefreshTokenValidity` <a name="resetOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthRefreshTokenValidity"></a>

```typescript
public resetOauthRefreshTokenValidity(): void
```

##### `resetOauthTokenEndpoint` <a name="resetOauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetOauthTokenEndpoint"></a>

```typescript
public resetOauthTokenEndpoint(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiAuthenticationIntegrationWithAuthorizationCodeGrant resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isConstruct"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isTerraformElement"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isTerraformResource"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.generateConfigForImport"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiAuthenticationIntegrationWithAuthorizationCodeGrant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiAuthenticationIntegrationWithAuthorizationCodeGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiAuthenticationIntegrationWithAuthorizationCodeGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiAuthenticationIntegrationWithAuthorizationCodeGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference">ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAccessTokenValidityInput">oauthAccessTokenValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAllowedScopesInput">oauthAllowedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAuthorizationEndpointInput">oauthAuthorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientAuthMethodInput">oauthClientAuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientIdInput">oauthClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientSecretInput">oauthClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthRefreshTokenValidityInput">oauthRefreshTokenValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthTokenEndpointInput">oauthTokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts">ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAccessTokenValidity">oauthAccessTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAllowedScopes">oauthAllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientSecret">oauthClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.describeOutput"></a>

```typescript
public readonly describeOutput: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.showOutput"></a>

```typescript
public readonly showOutput: ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.timeouts"></a>

```typescript
public readonly timeouts: ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference">ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oauthAccessTokenValidityInput`<sup>Optional</sup> <a name="oauthAccessTokenValidityInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAccessTokenValidityInput"></a>

```typescript
public readonly oauthAccessTokenValidityInput: number;
```

- *Type:* number

---

##### `oauthAllowedScopesInput`<sup>Optional</sup> <a name="oauthAllowedScopesInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAllowedScopesInput"></a>

```typescript
public readonly oauthAllowedScopesInput: string[];
```

- *Type:* string[]

---

##### `oauthAuthorizationEndpointInput`<sup>Optional</sup> <a name="oauthAuthorizationEndpointInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAuthorizationEndpointInput"></a>

```typescript
public readonly oauthAuthorizationEndpointInput: string;
```

- *Type:* string

---

##### `oauthClientAuthMethodInput`<sup>Optional</sup> <a name="oauthClientAuthMethodInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientAuthMethodInput"></a>

```typescript
public readonly oauthClientAuthMethodInput: string;
```

- *Type:* string

---

##### `oauthClientIdInput`<sup>Optional</sup> <a name="oauthClientIdInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientIdInput"></a>

```typescript
public readonly oauthClientIdInput: string;
```

- *Type:* string

---

##### `oauthClientSecretInput`<sup>Optional</sup> <a name="oauthClientSecretInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientSecretInput"></a>

```typescript
public readonly oauthClientSecretInput: string;
```

- *Type:* string

---

##### `oauthRefreshTokenValidityInput`<sup>Optional</sup> <a name="oauthRefreshTokenValidityInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthRefreshTokenValidityInput"></a>

```typescript
public readonly oauthRefreshTokenValidityInput: number;
```

- *Type:* number

---

##### `oauthTokenEndpointInput`<sup>Optional</sup> <a name="oauthTokenEndpointInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthTokenEndpointInput"></a>

```typescript
public readonly oauthTokenEndpointInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts">ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthAccessTokenValidity`<sup>Required</sup> <a name="oauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAccessTokenValidity"></a>

```typescript
public readonly oauthAccessTokenValidity: number;
```

- *Type:* number

---

##### `oauthAllowedScopes`<sup>Required</sup> <a name="oauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAllowedScopes"></a>

```typescript
public readonly oauthAllowedScopes: string[];
```

- *Type:* string[]

---

##### `oauthAuthorizationEndpoint`<sup>Required</sup> <a name="oauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthAuthorizationEndpoint"></a>

```typescript
public readonly oauthAuthorizationEndpoint: string;
```

- *Type:* string

---

##### `oauthClientAuthMethod`<sup>Required</sup> <a name="oauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientAuthMethod"></a>

```typescript
public readonly oauthClientAuthMethod: string;
```

- *Type:* string

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

---

##### `oauthClientSecret`<sup>Required</sup> <a name="oauthClientSecret" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthClientSecret"></a>

```typescript
public readonly oauthClientSecret: string;
```

- *Type:* string

---

##### `oauthRefreshTokenValidity`<sup>Required</sup> <a name="oauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthRefreshTokenValidity"></a>

```typescript
public readonly oauthRefreshTokenValidity: number;
```

- *Type:* number

---

##### `oauthTokenEndpoint`<sup>Required</sup> <a name="oauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.oauthTokenEndpoint"></a>

```typescript
public readonly oauthTokenEndpoint: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithAuthorizationCodeGrantConfig: apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | Specifies the client ID for the OAuth application in the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthClientSecret">oauthClientSecret</a></code> | <code>string</code> | Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#id ApiAuthenticationIntegrationWithAuthorizationCodeGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthAccessTokenValidity">oauthAccessTokenValidity</a></code> | <code>number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthAllowedScopes">oauthAllowedScopes</a></code> | <code>string[]</code> | Specifies a list of scopes to use when making a request from the OAuth by a role with USAGE on the integration during the OAuth client credentials flow. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code>string</code> | Specifies the URL for authenticating to the external service. If removed from the config, the resource is recreated. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code>string</code> | Specifies that POST is used as the authentication method to the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>number</code> | Specifies the value to determine the validity of the refresh token obtained from the OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code>string</code> | Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts">ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether this security integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#enabled ApiAuthenticationIntegrationWithAuthorizationCodeGrant#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#name ApiAuthenticationIntegrationWithAuthorizationCodeGrant#name}

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

Specifies the client ID for the OAuth application in the external service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_client_id ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_client_id}

---

##### `oauthClientSecret`<sup>Required</sup> <a name="oauthClientSecret" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthClientSecret"></a>

```typescript
public readonly oauthClientSecret: string;
```

- *Type:* string

Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step.

The connector uses this to request an access token from the ServiceNow instance. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_client_secret ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_client_secret}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#comment ApiAuthenticationIntegrationWithAuthorizationCodeGrant#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#id ApiAuthenticationIntegrationWithAuthorizationCodeGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauthAccessTokenValidity`<sup>Optional</sup> <a name="oauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthAccessTokenValidity"></a>

```typescript
public readonly oauthAccessTokenValidity: number;
```

- *Type:* number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_access_token_validity ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_access_token_validity}

---

##### `oauthAllowedScopes`<sup>Optional</sup> <a name="oauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthAllowedScopes"></a>

```typescript
public readonly oauthAllowedScopes: string[];
```

- *Type:* string[]

Specifies a list of scopes to use when making a request from the OAuth by a role with USAGE on the integration during the OAuth client credentials flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_allowed_scopes ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_allowed_scopes}

---

##### `oauthAuthorizationEndpoint`<sup>Optional</sup> <a name="oauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthAuthorizationEndpoint"></a>

```typescript
public readonly oauthAuthorizationEndpoint: string;
```

- *Type:* string

Specifies the URL for authenticating to the external service. If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_authorization_endpoint ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_authorization_endpoint}

---

##### `oauthClientAuthMethod`<sup>Optional</sup> <a name="oauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthClientAuthMethod"></a>

```typescript
public readonly oauthClientAuthMethod: string;
```

- *Type:* string

Specifies that POST is used as the authentication method to the external service.

If removed from the config, the resource is recreated. Valid values are (case-insensitive): `CLIENT_SECRET_POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_client_auth_method ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_client_auth_method}

---

##### `oauthRefreshTokenValidity`<sup>Optional</sup> <a name="oauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthRefreshTokenValidity"></a>

```typescript
public readonly oauthRefreshTokenValidity: number;
```

- *Type:* number

Specifies the value to determine the validity of the refresh token obtained from the OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_refresh_token_validity ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_refresh_token_validity}

---

##### `oauthTokenEndpoint`<sup>Optional</sup> <a name="oauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.oauthTokenEndpoint"></a>

```typescript
public readonly oauthTokenEndpoint: string;
```

- *Type:* string

Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token.

The token endpoint is used with every authorization grant except for the implicit grant type (since an access token is issued directly). If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_token_endpoint ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_token_endpoint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts">ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#timeouts ApiAuthenticationIntegrationWithAuthorizationCodeGrant#timeouts}

---

### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput: apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput = { ... }
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType: apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType = { ... }
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment: apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment = { ... }
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled: apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled = { ... }
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity: apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity = { ... }
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes: apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes = { ... }
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint: apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint = { ... }
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod: apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod = { ... }
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant: apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant = { ... }
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity: apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity = { ... }
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint: apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint = { ... }
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration: apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration = { ... }
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput: apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput = { ... }
```


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts: apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#create ApiAuthenticationIntegrationWithAuthorizationCodeGrant#create}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#delete ApiAuthenticationIntegrationWithAuthorizationCodeGrant#delete}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#read ApiAuthenticationIntegrationWithAuthorizationCodeGrant#read}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#update ApiAuthenticationIntegrationWithAuthorizationCodeGrant#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#create ApiAuthenticationIntegrationWithAuthorizationCodeGrant#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#delete ApiAuthenticationIntegrationWithAuthorizationCodeGrant#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#read ApiAuthenticationIntegrationWithAuthorizationCodeGrant#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/api_authentication_integration_with_authorization_code_grant#update ApiAuthenticationIntegrationWithAuthorizationCodeGrant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.authType">authType</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAccessTokenValidity">oauthAccessTokenValidity</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAllowedScopes">oauthAllowedScopes</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthGrant">oauthGrant</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.parentIntegration">parentIntegration</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.authType"></a>

```typescript
public readonly authType: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList</a>

---

##### `oauthAccessTokenValidity`<sup>Required</sup> <a name="oauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAccessTokenValidity"></a>

```typescript
public readonly oauthAccessTokenValidity: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList</a>

---

##### `oauthAllowedScopes`<sup>Required</sup> <a name="oauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAllowedScopes"></a>

```typescript
public readonly oauthAllowedScopes: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList</a>

---

##### `oauthAuthorizationEndpoint`<sup>Required</sup> <a name="oauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```typescript
public readonly oauthAuthorizationEndpoint: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList</a>

---

##### `oauthClientAuthMethod`<sup>Required</sup> <a name="oauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthClientAuthMethod"></a>

```typescript
public readonly oauthClientAuthMethod: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList</a>

---

##### `oauthGrant`<sup>Required</sup> <a name="oauthGrant" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthGrant"></a>

```typescript
public readonly oauthGrant: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList</a>

---

##### `oauthRefreshTokenValidity`<sup>Required</sup> <a name="oauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```typescript
public readonly oauthRefreshTokenValidity: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList</a>

---

##### `oauthTokenEndpoint`<sup>Required</sup> <a name="oauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```typescript
public readonly oauthTokenEndpoint: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList</a>

---

##### `parentIntegration`<sup>Required</sup> <a name="parentIntegration" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.parentIntegration"></a>

```typescript
public readonly parentIntegration: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration">ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.integrationType">integrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput">ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput">ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput</a>

---


### ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference <a name="ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithAuthorizationCodeGrant } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts">ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithAuthorizationCodeGrant.ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts">ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts</a>

---



