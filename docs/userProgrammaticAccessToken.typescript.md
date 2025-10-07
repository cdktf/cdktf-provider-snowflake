# `userProgrammaticAccessToken` Submodule <a name="`userProgrammaticAccessToken` Submodule" id="@cdktf/provider-snowflake.userProgrammaticAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserProgrammaticAccessToken <a name="UserProgrammaticAccessToken" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token snowflake_user_programmatic_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer"></a>

```typescript
import { userProgrammaticAccessToken } from '@cdktf/provider-snowflake'

new userProgrammaticAccessToken.UserProgrammaticAccessToken(scope: Construct, id: string, config: UserProgrammaticAccessTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig">UserProgrammaticAccessTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig">UserProgrammaticAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetDaysToExpiry">resetDaysToExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetExpireRotatedTokenAfterHours">resetExpireRotatedTokenAfterHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetKeeper">resetKeeper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetMinsToBypassNetworkPolicyRequirement">resetMinsToBypassNetworkPolicyRequirement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetRoleRestriction">resetRoleRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.putTimeouts"></a>

```typescript
public putTimeouts(value: UserProgrammaticAccessTokenTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDaysToExpiry` <a name="resetDaysToExpiry" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetDaysToExpiry"></a>

```typescript
public resetDaysToExpiry(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetExpireRotatedTokenAfterHours` <a name="resetExpireRotatedTokenAfterHours" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetExpireRotatedTokenAfterHours"></a>

```typescript
public resetExpireRotatedTokenAfterHours(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeeper` <a name="resetKeeper" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetKeeper"></a>

```typescript
public resetKeeper(): void
```

##### `resetMinsToBypassNetworkPolicyRequirement` <a name="resetMinsToBypassNetworkPolicyRequirement" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetMinsToBypassNetworkPolicyRequirement"></a>

```typescript
public resetMinsToBypassNetworkPolicyRequirement(): void
```

##### `resetRoleRestriction` <a name="resetRoleRestriction" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetRoleRestriction"></a>

```typescript
public resetRoleRestriction(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a UserProgrammaticAccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isConstruct"></a>

```typescript
import { userProgrammaticAccessToken } from '@cdktf/provider-snowflake'

userProgrammaticAccessToken.UserProgrammaticAccessToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformElement"></a>

```typescript
import { userProgrammaticAccessToken } from '@cdktf/provider-snowflake'

userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformResource"></a>

```typescript
import { userProgrammaticAccessToken } from '@cdktf/provider-snowflake'

userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport"></a>

```typescript
import { userProgrammaticAccessToken } from '@cdktf/provider-snowflake'

userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a UserProgrammaticAccessToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UserProgrammaticAccessToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UserProgrammaticAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UserProgrammaticAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.rotatedTokenName">rotatedTokenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList">UserProgrammaticAccessTokenShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference">UserProgrammaticAccessTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.daysToExpiryInput">daysToExpiryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.disabledInput">disabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.expireRotatedTokenAfterHoursInput">expireRotatedTokenAfterHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.keeperInput">keeperInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.minsToBypassNetworkPolicyRequirementInput">minsToBypassNetworkPolicyRequirementInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.roleRestrictionInput">roleRestrictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.daysToExpiry">daysToExpiry</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.disabled">disabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.expireRotatedTokenAfterHours">expireRotatedTokenAfterHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.keeper">keeper</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.minsToBypassNetworkPolicyRequirement">minsToBypassNetworkPolicyRequirement</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.roleRestriction">roleRestriction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `rotatedTokenName`<sup>Required</sup> <a name="rotatedTokenName" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.rotatedTokenName"></a>

```typescript
public readonly rotatedTokenName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.showOutput"></a>

```typescript
public readonly showOutput: UserProgrammaticAccessTokenShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList">UserProgrammaticAccessTokenShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.timeouts"></a>

```typescript
public readonly timeouts: UserProgrammaticAccessTokenTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference">UserProgrammaticAccessTokenTimeoutsOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `daysToExpiryInput`<sup>Optional</sup> <a name="daysToExpiryInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.daysToExpiryInput"></a>

```typescript
public readonly daysToExpiryInput: number;
```

- *Type:* number

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.disabledInput"></a>

```typescript
public readonly disabledInput: string;
```

- *Type:* string

---

##### `expireRotatedTokenAfterHoursInput`<sup>Optional</sup> <a name="expireRotatedTokenAfterHoursInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.expireRotatedTokenAfterHoursInput"></a>

```typescript
public readonly expireRotatedTokenAfterHoursInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keeperInput`<sup>Optional</sup> <a name="keeperInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.keeperInput"></a>

```typescript
public readonly keeperInput: string;
```

- *Type:* string

---

##### `minsToBypassNetworkPolicyRequirementInput`<sup>Optional</sup> <a name="minsToBypassNetworkPolicyRequirementInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.minsToBypassNetworkPolicyRequirementInput"></a>

```typescript
public readonly minsToBypassNetworkPolicyRequirementInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleRestrictionInput`<sup>Optional</sup> <a name="roleRestrictionInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.roleRestrictionInput"></a>

```typescript
public readonly roleRestrictionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | UserProgrammaticAccessTokenTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `daysToExpiry`<sup>Required</sup> <a name="daysToExpiry" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.daysToExpiry"></a>

```typescript
public readonly daysToExpiry: number;
```

- *Type:* number

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.disabled"></a>

```typescript
public readonly disabled: string;
```

- *Type:* string

---

##### `expireRotatedTokenAfterHours`<sup>Required</sup> <a name="expireRotatedTokenAfterHours" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.expireRotatedTokenAfterHours"></a>

```typescript
public readonly expireRotatedTokenAfterHours: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keeper`<sup>Required</sup> <a name="keeper" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.keeper"></a>

```typescript
public readonly keeper: string;
```

- *Type:* string

---

##### `minsToBypassNetworkPolicyRequirement`<sup>Required</sup> <a name="minsToBypassNetworkPolicyRequirement" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.minsToBypassNetworkPolicyRequirement"></a>

```typescript
public readonly minsToBypassNetworkPolicyRequirement: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleRestriction`<sup>Required</sup> <a name="roleRestriction" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.roleRestriction"></a>

```typescript
public readonly roleRestriction: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserProgrammaticAccessTokenConfig <a name="UserProgrammaticAccessTokenConfig" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.Initializer"></a>

```typescript
import { userProgrammaticAccessToken } from '@cdktf/provider-snowflake'

const userProgrammaticAccessTokenConfig: userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.name">name</a></code> | <code>string</code> | Specifies the name for the programmatic access token; |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.user">user</a></code> | <code>string</code> | The name of the user that the token is associated with. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.comment">comment</a></code> | <code>string</code> | Descriptive comment about the programmatic access token. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.daysToExpiry">daysToExpiry</a></code> | <code>number</code> | The number of days that the programmatic access token can be used for authentication. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.disabled">disabled</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Disables or enables the programmatic access token. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.expireRotatedTokenAfterHours">expireRotatedTokenAfterHours</a></code> | <code>number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) This field is only used when the token is rotated by changing the `keeper` field. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#id UserProgrammaticAccessToken#id}. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.keeper">keeper</a></code> | <code>string</code> | Arbitrary string that, if and only if, changed from a non-empty to a different non-empty value (or known after apply), will trigger a key to be rotated. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.minsToBypassNetworkPolicyRequirement">minsToBypassNetworkPolicyRequirement</a></code> | <code>number</code> | The number of minutes during which a user can use this token to access Snowflake without being subject to an active network policy. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.roleRestriction">roleRestriction</a></code> | <code>string</code> | The name of the role used for privilege evaluation and object creation. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name for the programmatic access token;

must be unique for the user. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#name UserProgrammaticAccessToken#name}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

The name of the user that the token is associated with.

A user cannot use another user's programmatic access token to authenticate. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#user UserProgrammaticAccessToken#user}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Descriptive comment about the programmatic access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#comment UserProgrammaticAccessToken#comment}

---

##### `daysToExpiry`<sup>Optional</sup> <a name="daysToExpiry" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.daysToExpiry"></a>

```typescript
public readonly daysToExpiry: number;
```

- *Type:* number

The number of days that the programmatic access token can be used for authentication.

This field cannot be altered after the token is created. Instead, you must rotate the token with the `keeper` field. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#days_to_expiry UserProgrammaticAccessToken#days_to_expiry}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.disabled"></a>

```typescript
public readonly disabled: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Disables or enables the programmatic access token.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#disabled UserProgrammaticAccessToken#disabled}

---

##### `expireRotatedTokenAfterHours`<sup>Optional</sup> <a name="expireRotatedTokenAfterHours" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.expireRotatedTokenAfterHours"></a>

```typescript
public readonly expireRotatedTokenAfterHours: number;
```

- *Type:* number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) This field is only used when the token is rotated by changing the `keeper` field.

Sets the expiration time of the existing token secret to expire after the specified number of hours. You can set this to a value of 0 to expire the current token secret immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#expire_rotated_token_after_hours UserProgrammaticAccessToken#expire_rotated_token_after_hours}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#id UserProgrammaticAccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keeper`<sup>Optional</sup> <a name="keeper" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.keeper"></a>

```typescript
public readonly keeper: string;
```

- *Type:* string

Arbitrary string that, if and only if, changed from a non-empty to a different non-empty value (or known after apply), will trigger a key to be rotated.

When you add this field to the configuration, or remove it from the configuration, the rotation is not triggered. When the token is rotated, the `token` and `rotated_token_name` fields are marked as computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#keeper UserProgrammaticAccessToken#keeper}

---

##### `minsToBypassNetworkPolicyRequirement`<sup>Optional</sup> <a name="minsToBypassNetworkPolicyRequirement" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.minsToBypassNetworkPolicyRequirement"></a>

```typescript
public readonly minsToBypassNetworkPolicyRequirement: number;
```

- *Type:* number

The number of minutes during which a user can use this token to access Snowflake without being subject to an active network policy.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#mins_to_bypass_network_policy_requirement UserProgrammaticAccessToken#mins_to_bypass_network_policy_requirement}

---

##### `roleRestriction`<sup>Optional</sup> <a name="roleRestriction" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.roleRestriction"></a>

```typescript
public readonly roleRestriction: string;
```

- *Type:* string

The name of the role used for privilege evaluation and object creation.

This must be one of the roles that has already been granted to the user. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#role_restriction UserProgrammaticAccessToken#role_restriction}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.timeouts"></a>

```typescript
public readonly timeouts: UserProgrammaticAccessTokenTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#timeouts UserProgrammaticAccessToken#timeouts}

---

### UserProgrammaticAccessTokenShowOutput <a name="UserProgrammaticAccessTokenShowOutput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutput.Initializer"></a>

```typescript
import { userProgrammaticAccessToken } from '@cdktf/provider-snowflake'

const userProgrammaticAccessTokenShowOutput: userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutput = { ... }
```


### UserProgrammaticAccessTokenTimeouts <a name="UserProgrammaticAccessTokenTimeouts" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.Initializer"></a>

```typescript
import { userProgrammaticAccessToken } from '@cdktf/provider-snowflake'

const userProgrammaticAccessTokenTimeouts: userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#create UserProgrammaticAccessToken#create}. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#delete UserProgrammaticAccessToken#delete}. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#read UserProgrammaticAccessToken#read}. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#update UserProgrammaticAccessToken#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#create UserProgrammaticAccessToken#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#delete UserProgrammaticAccessToken#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#read UserProgrammaticAccessToken#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/user_programmatic_access_token#update UserProgrammaticAccessToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### UserProgrammaticAccessTokenShowOutputList <a name="UserProgrammaticAccessTokenShowOutputList" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer"></a>

```typescript
import { userProgrammaticAccessToken } from '@cdktf/provider-snowflake'

new userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.get"></a>

```typescript
public get(index: number): UserProgrammaticAccessTokenShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### UserProgrammaticAccessTokenShowOutputOutputReference <a name="UserProgrammaticAccessTokenShowOutputOutputReference" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer"></a>

```typescript
import { userProgrammaticAccessToken } from '@cdktf/provider-snowflake'

new userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.minsToBypassNetworkPolicyRequirement">minsToBypassNetworkPolicyRequirement</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.roleRestriction">roleRestriction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.rotatedTo">rotatedTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutput">UserProgrammaticAccessTokenShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `minsToBypassNetworkPolicyRequirement`<sup>Required</sup> <a name="minsToBypassNetworkPolicyRequirement" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.minsToBypassNetworkPolicyRequirement"></a>

```typescript
public readonly minsToBypassNetworkPolicyRequirement: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleRestriction`<sup>Required</sup> <a name="roleRestriction" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.roleRestriction"></a>

```typescript
public readonly roleRestriction: string;
```

- *Type:* string

---

##### `rotatedTo`<sup>Required</sup> <a name="rotatedTo" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.rotatedTo"></a>

```typescript
public readonly rotatedTo: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: UserProgrammaticAccessTokenShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutput">UserProgrammaticAccessTokenShowOutput</a>

---


### UserProgrammaticAccessTokenTimeoutsOutputReference <a name="UserProgrammaticAccessTokenTimeoutsOutputReference" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.Initializer"></a>

```typescript
import { userProgrammaticAccessToken } from '@cdktf/provider-snowflake'

new userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserProgrammaticAccessTokenTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a>

---



