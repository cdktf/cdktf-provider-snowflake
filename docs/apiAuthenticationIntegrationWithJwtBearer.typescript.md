# `apiAuthenticationIntegrationWithJwtBearer` Submodule <a name="`apiAuthenticationIntegrationWithJwtBearer` Submodule" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiAuthenticationIntegrationWithJwtBearer <a name="ApiAuthenticationIntegrationWithJwtBearer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_authentication_integration_with_jwt_bearer snowflake_api_authentication_integration_with_jwt_bearer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer(scope: Construct, id: string, config: ApiAuthenticationIntegrationWithJwtBearerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig">ApiAuthenticationIntegrationWithJwtBearerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig">ApiAuthenticationIntegrationWithJwtBearerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthAccessTokenValidity">resetOauthAccessTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthAuthorizationEndpoint">resetOauthAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthClientAuthMethod">resetOauthClientAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthRefreshTokenValidity">resetOauthRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthTokenEndpoint">resetOauthTokenEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOauthAccessTokenValidity` <a name="resetOauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthAccessTokenValidity"></a>

```typescript
public resetOauthAccessTokenValidity(): void
```

##### `resetOauthAuthorizationEndpoint` <a name="resetOauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthAuthorizationEndpoint"></a>

```typescript
public resetOauthAuthorizationEndpoint(): void
```

##### `resetOauthClientAuthMethod` <a name="resetOauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthClientAuthMethod"></a>

```typescript
public resetOauthClientAuthMethod(): void
```

##### `resetOauthRefreshTokenValidity` <a name="resetOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthRefreshTokenValidity"></a>

```typescript
public resetOauthRefreshTokenValidity(): void
```

##### `resetOauthTokenEndpoint` <a name="resetOauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthTokenEndpoint"></a>

```typescript
public resetOauthTokenEndpoint(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiAuthenticationIntegrationWithJwtBearer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isConstruct"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isTerraformElement"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isTerraformResource"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.generateConfigForImport"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiAuthenticationIntegrationWithJwtBearer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiAuthenticationIntegrationWithJwtBearer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiAuthenticationIntegrationWithJwtBearer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_authentication_integration_with_jwt_bearer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiAuthenticationIntegrationWithJwtBearer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList">ApiAuthenticationIntegrationWithJwtBearerShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAccessTokenValidityInput">oauthAccessTokenValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAssertionIssuerInput">oauthAssertionIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAuthorizationEndpointInput">oauthAuthorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientAuthMethodInput">oauthClientAuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientIdInput">oauthClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientSecretInput">oauthClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthRefreshTokenValidityInput">oauthRefreshTokenValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthTokenEndpointInput">oauthTokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAccessTokenValidity">oauthAccessTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAssertionIssuer">oauthAssertionIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientSecret">oauthClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.describeOutput"></a>

```typescript
public readonly describeOutput: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.showOutput"></a>

```typescript
public readonly showOutput: ApiAuthenticationIntegrationWithJwtBearerShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList">ApiAuthenticationIntegrationWithJwtBearerShowOutputList</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oauthAccessTokenValidityInput`<sup>Optional</sup> <a name="oauthAccessTokenValidityInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAccessTokenValidityInput"></a>

```typescript
public readonly oauthAccessTokenValidityInput: number;
```

- *Type:* number

---

##### `oauthAssertionIssuerInput`<sup>Optional</sup> <a name="oauthAssertionIssuerInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAssertionIssuerInput"></a>

```typescript
public readonly oauthAssertionIssuerInput: string;
```

- *Type:* string

---

##### `oauthAuthorizationEndpointInput`<sup>Optional</sup> <a name="oauthAuthorizationEndpointInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAuthorizationEndpointInput"></a>

```typescript
public readonly oauthAuthorizationEndpointInput: string;
```

- *Type:* string

---

##### `oauthClientAuthMethodInput`<sup>Optional</sup> <a name="oauthClientAuthMethodInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientAuthMethodInput"></a>

```typescript
public readonly oauthClientAuthMethodInput: string;
```

- *Type:* string

---

##### `oauthClientIdInput`<sup>Optional</sup> <a name="oauthClientIdInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientIdInput"></a>

```typescript
public readonly oauthClientIdInput: string;
```

- *Type:* string

---

##### `oauthClientSecretInput`<sup>Optional</sup> <a name="oauthClientSecretInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientSecretInput"></a>

```typescript
public readonly oauthClientSecretInput: string;
```

- *Type:* string

---

##### `oauthRefreshTokenValidityInput`<sup>Optional</sup> <a name="oauthRefreshTokenValidityInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthRefreshTokenValidityInput"></a>

```typescript
public readonly oauthRefreshTokenValidityInput: number;
```

- *Type:* number

---

##### `oauthTokenEndpointInput`<sup>Optional</sup> <a name="oauthTokenEndpointInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthTokenEndpointInput"></a>

```typescript
public readonly oauthTokenEndpointInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthAccessTokenValidity`<sup>Required</sup> <a name="oauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAccessTokenValidity"></a>

```typescript
public readonly oauthAccessTokenValidity: number;
```

- *Type:* number

---

##### `oauthAssertionIssuer`<sup>Required</sup> <a name="oauthAssertionIssuer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAssertionIssuer"></a>

```typescript
public readonly oauthAssertionIssuer: string;
```

- *Type:* string

---

##### `oauthAuthorizationEndpoint`<sup>Required</sup> <a name="oauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAuthorizationEndpoint"></a>

```typescript
public readonly oauthAuthorizationEndpoint: string;
```

- *Type:* string

---

##### `oauthClientAuthMethod`<sup>Required</sup> <a name="oauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientAuthMethod"></a>

```typescript
public readonly oauthClientAuthMethod: string;
```

- *Type:* string

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

---

##### `oauthClientSecret`<sup>Required</sup> <a name="oauthClientSecret" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientSecret"></a>

```typescript
public readonly oauthClientSecret: string;
```

- *Type:* string

---

##### `oauthRefreshTokenValidity`<sup>Required</sup> <a name="oauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthRefreshTokenValidity"></a>

```typescript
public readonly oauthRefreshTokenValidity: number;
```

- *Type:* number

---

##### `oauthTokenEndpoint`<sup>Required</sup> <a name="oauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthTokenEndpoint"></a>

```typescript
public readonly oauthTokenEndpoint: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiAuthenticationIntegrationWithJwtBearerConfig <a name="ApiAuthenticationIntegrationWithJwtBearerConfig" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithJwtBearerConfig: apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `(`, `)`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthAssertionIssuer">oauthAssertionIssuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_assertion_issuer ApiAuthenticationIntegrationWithJwtBearer#oauth_assertion_issuer}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | Specifies the client ID for the OAuth application in the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthClientSecret">oauthClientSecret</a></code> | <code>string</code> | Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_authentication_integration_with_jwt_bearer#id ApiAuthenticationIntegrationWithJwtBearer#id}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthAccessTokenValidity">oauthAccessTokenValidity</a></code> | <code>number</code> | Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code>string</code> | Specifies the URL for authenticating to the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code>string</code> | Specifies that POST is used as the authentication method to the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>number</code> | Specifies the value to determine the validity of the refresh token obtained from the OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code>string</code> | Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether this security integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_authentication_integration_with_jwt_bearer#enabled ApiAuthenticationIntegrationWithJwtBearer#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_authentication_integration_with_jwt_bearer#name ApiAuthenticationIntegrationWithJwtBearer#name}

---

##### `oauthAssertionIssuer`<sup>Required</sup> <a name="oauthAssertionIssuer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthAssertionIssuer"></a>

```typescript
public readonly oauthAssertionIssuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_assertion_issuer ApiAuthenticationIntegrationWithJwtBearer#oauth_assertion_issuer}.

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

Specifies the client ID for the OAuth application in the external service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_client_id ApiAuthenticationIntegrationWithJwtBearer#oauth_client_id}

---

##### `oauthClientSecret`<sup>Required</sup> <a name="oauthClientSecret" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthClientSecret"></a>

```typescript
public readonly oauthClientSecret: string;
```

- *Type:* string

Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step.

The connector uses this to request an access token from the ServiceNow instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_client_secret ApiAuthenticationIntegrationWithJwtBearer#oauth_client_secret}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_authentication_integration_with_jwt_bearer#comment ApiAuthenticationIntegrationWithJwtBearer#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_authentication_integration_with_jwt_bearer#id ApiAuthenticationIntegrationWithJwtBearer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauthAccessTokenValidity`<sup>Optional</sup> <a name="oauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthAccessTokenValidity"></a>

```typescript
public readonly oauthAccessTokenValidity: number;
```

- *Type:* number

Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_access_token_validity ApiAuthenticationIntegrationWithJwtBearer#oauth_access_token_validity}

---

##### `oauthAuthorizationEndpoint`<sup>Optional</sup> <a name="oauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthAuthorizationEndpoint"></a>

```typescript
public readonly oauthAuthorizationEndpoint: string;
```

- *Type:* string

Specifies the URL for authenticating to the external service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_authorization_endpoint ApiAuthenticationIntegrationWithJwtBearer#oauth_authorization_endpoint}

---

##### `oauthClientAuthMethod`<sup>Optional</sup> <a name="oauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthClientAuthMethod"></a>

```typescript
public readonly oauthClientAuthMethod: string;
```

- *Type:* string

Specifies that POST is used as the authentication method to the external service.

If removed from the config, the resource is recreated. Valid values are (case-insensitive): `CLIENT_SECRET_POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_client_auth_method ApiAuthenticationIntegrationWithJwtBearer#oauth_client_auth_method}

---

##### `oauthRefreshTokenValidity`<sup>Optional</sup> <a name="oauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthRefreshTokenValidity"></a>

```typescript
public readonly oauthRefreshTokenValidity: number;
```

- *Type:* number

Specifies the value to determine the validity of the refresh token obtained from the OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_refresh_token_validity ApiAuthenticationIntegrationWithJwtBearer#oauth_refresh_token_validity}

---

##### `oauthTokenEndpoint`<sup>Optional</sup> <a name="oauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthTokenEndpoint"></a>

```typescript
public readonly oauthTokenEndpoint: string;
```

- *Type:* string

Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token.

The token endpoint is used with every authorization grant except for the implicit grant type (since an access token is issued directly). If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_token_endpoint ApiAuthenticationIntegrationWithJwtBearer#oauth_token_endpoint}

---

### ApiAuthenticationIntegrationWithJwtBearerDescribeOutput <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutput.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithJwtBearerDescribeOutput: apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutput = { ... }
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType: apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType = { ... }
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithJwtBearerDescribeOutputComment: apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment = { ... }
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled: apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled = { ... }
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity: apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity = { ... }
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes: apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes = { ... }
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint: apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint = { ... }
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod: apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod = { ... }
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId: apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId = { ... }
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant: apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant = { ... }
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity: apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity = { ... }
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint: apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint = { ... }
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration: apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration = { ... }
```


### ApiAuthenticationIntegrationWithJwtBearerShowOutput <a name="ApiAuthenticationIntegrationWithJwtBearerShowOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutput.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

const apiAuthenticationIntegrationWithJwtBearerShowOutput: apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.authType">authType</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthAccessTokenValidity">oauthAccessTokenValidity</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthAllowedScopes">oauthAllowedScopes</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthClientId">oauthClientId</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthGrant">oauthGrant</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.parentIntegration">parentIntegration</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutput">ApiAuthenticationIntegrationWithJwtBearerDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.authType"></a>

```typescript
public readonly authType: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList</a>

---

##### `oauthAccessTokenValidity`<sup>Required</sup> <a name="oauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthAccessTokenValidity"></a>

```typescript
public readonly oauthAccessTokenValidity: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList</a>

---

##### `oauthAllowedScopes`<sup>Required</sup> <a name="oauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthAllowedScopes"></a>

```typescript
public readonly oauthAllowedScopes: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList</a>

---

##### `oauthAuthorizationEndpoint`<sup>Required</sup> <a name="oauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```typescript
public readonly oauthAuthorizationEndpoint: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList</a>

---

##### `oauthClientAuthMethod`<sup>Required</sup> <a name="oauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthClientAuthMethod"></a>

```typescript
public readonly oauthClientAuthMethod: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList</a>

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList</a>

---

##### `oauthGrant`<sup>Required</sup> <a name="oauthGrant" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthGrant"></a>

```typescript
public readonly oauthGrant: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList</a>

---

##### `oauthRefreshTokenValidity`<sup>Required</sup> <a name="oauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```typescript
public readonly oauthRefreshTokenValidity: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList</a>

---

##### `oauthTokenEndpoint`<sup>Required</sup> <a name="oauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```typescript
public readonly oauthTokenEndpoint: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList</a>

---

##### `parentIntegration`<sup>Required</sup> <a name="parentIntegration" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.parentIntegration"></a>

```typescript
public readonly parentIntegration: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithJwtBearerDescribeOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutput">ApiAuthenticationIntegrationWithJwtBearerDescribeOutput</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration</a>

---


### ApiAuthenticationIntegrationWithJwtBearerShowOutputList <a name="ApiAuthenticationIntegrationWithJwtBearerShowOutputList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.get"></a>

```typescript
public get(index: number): ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer"></a>

```typescript
import { apiAuthenticationIntegrationWithJwtBearer } from '@cdktf/provider-snowflake'

new apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.integrationType">integrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutput">ApiAuthenticationIntegrationWithJwtBearerShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiAuthenticationIntegrationWithJwtBearerShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutput">ApiAuthenticationIntegrationWithJwtBearerShowOutput</a>

---



