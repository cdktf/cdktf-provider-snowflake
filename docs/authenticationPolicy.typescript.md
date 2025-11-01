# `authenticationPolicy` Submodule <a name="`authenticationPolicy` Submodule" id="@cdktf/provider-snowflake.authenticationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticationPolicy <a name="AuthenticationPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy snowflake_authentication_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

new authenticationPolicy.AuthenticationPolicy(scope: Construct, id: string, config: AuthenticationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig">AuthenticationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig">AuthenticationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putMfaPolicy">putMfaPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putPatPolicy">putPatPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putWorkloadIdentityPolicy">putWorkloadIdentityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetAuthenticationMethods">resetAuthenticationMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetClientTypes">resetClientTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaAuthenticationMethods">resetMfaAuthenticationMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaEnrollment">resetMfaEnrollment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaPolicy">resetMfaPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetPatPolicy">resetPatPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetSecurityIntegrations">resetSecurityIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetWorkloadIdentityPolicy">resetWorkloadIdentityPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMfaPolicy` <a name="putMfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putMfaPolicy"></a>

```typescript
public putMfaPolicy(value: AuthenticationPolicyMfaPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putMfaPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a>

---

##### `putPatPolicy` <a name="putPatPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putPatPolicy"></a>

```typescript
public putPatPolicy(value: AuthenticationPolicyPatPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putPatPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: AuthenticationPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a>

---

##### `putWorkloadIdentityPolicy` <a name="putWorkloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putWorkloadIdentityPolicy"></a>

```typescript
public putWorkloadIdentityPolicy(value: AuthenticationPolicyWorkloadIdentityPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putWorkloadIdentityPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a>

---

##### `resetAuthenticationMethods` <a name="resetAuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetAuthenticationMethods"></a>

```typescript
public resetAuthenticationMethods(): void
```

##### `resetClientTypes` <a name="resetClientTypes" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetClientTypes"></a>

```typescript
public resetClientTypes(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMfaAuthenticationMethods` <a name="resetMfaAuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaAuthenticationMethods"></a>

```typescript
public resetMfaAuthenticationMethods(): void
```

##### `resetMfaEnrollment` <a name="resetMfaEnrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaEnrollment"></a>

```typescript
public resetMfaEnrollment(): void
```

##### `resetMfaPolicy` <a name="resetMfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaPolicy"></a>

```typescript
public resetMfaPolicy(): void
```

##### `resetPatPolicy` <a name="resetPatPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetPatPolicy"></a>

```typescript
public resetPatPolicy(): void
```

##### `resetSecurityIntegrations` <a name="resetSecurityIntegrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetSecurityIntegrations"></a>

```typescript
public resetSecurityIntegrations(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkloadIdentityPolicy` <a name="resetWorkloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetWorkloadIdentityPolicy"></a>

```typescript
public resetWorkloadIdentityPolicy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AuthenticationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isConstruct"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

authenticationPolicy.AuthenticationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformElement"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

authenticationPolicy.AuthenticationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformResource"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

authenticationPolicy.AuthenticationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

authenticationPolicy.AuthenticationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AuthenticationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuthenticationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuthenticationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuthenticationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList">AuthenticationPolicyDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaPolicy">mfaPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference">AuthenticationPolicyMfaPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.patPolicy">patPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference">AuthenticationPolicyPatPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList">AuthenticationPolicyShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference">AuthenticationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.workloadIdentityPolicy">workloadIdentityPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference">AuthenticationPolicyWorkloadIdentityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethodsInput">authenticationMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypesInput">clientTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethodsInput">mfaAuthenticationMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollmentInput">mfaEnrollmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaPolicyInput">mfaPolicyInput</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.patPolicyInput">patPolicyInput</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrationsInput">securityIntegrationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.workloadIdentityPolicyInput">workloadIdentityPolicyInput</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethods">authenticationMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypes">clientTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethods">mfaAuthenticationMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollment">mfaEnrollment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrations">securityIntegrations</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.describeOutput"></a>

```typescript
public readonly describeOutput: AuthenticationPolicyDescribeOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList">AuthenticationPolicyDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `mfaPolicy`<sup>Required</sup> <a name="mfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaPolicy"></a>

```typescript
public readonly mfaPolicy: AuthenticationPolicyMfaPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference">AuthenticationPolicyMfaPolicyOutputReference</a>

---

##### `patPolicy`<sup>Required</sup> <a name="patPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.patPolicy"></a>

```typescript
public readonly patPolicy: AuthenticationPolicyPatPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference">AuthenticationPolicyPatPolicyOutputReference</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.showOutput"></a>

```typescript
public readonly showOutput: AuthenticationPolicyShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList">AuthenticationPolicyShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: AuthenticationPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference">AuthenticationPolicyTimeoutsOutputReference</a>

---

##### `workloadIdentityPolicy`<sup>Required</sup> <a name="workloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.workloadIdentityPolicy"></a>

```typescript
public readonly workloadIdentityPolicy: AuthenticationPolicyWorkloadIdentityPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference">AuthenticationPolicyWorkloadIdentityPolicyOutputReference</a>

---

##### `authenticationMethodsInput`<sup>Optional</sup> <a name="authenticationMethodsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethodsInput"></a>

```typescript
public readonly authenticationMethodsInput: string[];
```

- *Type:* string[]

---

##### `clientTypesInput`<sup>Optional</sup> <a name="clientTypesInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypesInput"></a>

```typescript
public readonly clientTypesInput: string[];
```

- *Type:* string[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mfaAuthenticationMethodsInput`<sup>Optional</sup> <a name="mfaAuthenticationMethodsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethodsInput"></a>

```typescript
public readonly mfaAuthenticationMethodsInput: string[];
```

- *Type:* string[]

---

##### `mfaEnrollmentInput`<sup>Optional</sup> <a name="mfaEnrollmentInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollmentInput"></a>

```typescript
public readonly mfaEnrollmentInput: string;
```

- *Type:* string

---

##### `mfaPolicyInput`<sup>Optional</sup> <a name="mfaPolicyInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaPolicyInput"></a>

```typescript
public readonly mfaPolicyInput: AuthenticationPolicyMfaPolicy;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `patPolicyInput`<sup>Optional</sup> <a name="patPolicyInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.patPolicyInput"></a>

```typescript
public readonly patPolicyInput: AuthenticationPolicyPatPolicy;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `securityIntegrationsInput`<sup>Optional</sup> <a name="securityIntegrationsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrationsInput"></a>

```typescript
public readonly securityIntegrationsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AuthenticationPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a>

---

##### `workloadIdentityPolicyInput`<sup>Optional</sup> <a name="workloadIdentityPolicyInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.workloadIdentityPolicyInput"></a>

```typescript
public readonly workloadIdentityPolicyInput: AuthenticationPolicyWorkloadIdentityPolicy;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a>

---

##### `authenticationMethods`<sup>Required</sup> <a name="authenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethods"></a>

```typescript
public readonly authenticationMethods: string[];
```

- *Type:* string[]

---

##### `clientTypes`<sup>Required</sup> <a name="clientTypes" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypes"></a>

```typescript
public readonly clientTypes: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mfaAuthenticationMethods`<sup>Required</sup> <a name="mfaAuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethods"></a>

```typescript
public readonly mfaAuthenticationMethods: string[];
```

- *Type:* string[]

---

##### `mfaEnrollment`<sup>Required</sup> <a name="mfaEnrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollment"></a>

```typescript
public readonly mfaEnrollment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `securityIntegrations`<sup>Required</sup> <a name="securityIntegrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrations"></a>

```typescript
public readonly securityIntegrations: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticationPolicyConfig <a name="AuthenticationPolicyConfig" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.Initializer"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

const authenticationPolicyConfig: authenticationPolicy.AuthenticationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.authenticationMethods">authenticationMethods</a></code> | <code>string[]</code> | A list of authentication methods that are allowed during login. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.clientTypes">clientTypes</a></code> | <code>string[]</code> | A list of clients that can authenticate with Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#id AuthenticationPolicy#id}. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaAuthenticationMethods">mfaAuthenticationMethods</a></code> | <code>string[]</code> | A list of authentication methods that enforce multi-factor authentication (MFA) during login. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaEnrollment">mfaEnrollment</a></code> | <code>string</code> | Determines whether a user must enroll in multi-factor authentication. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaPolicy">mfaPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a></code> | mfa_policy block. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.patPolicy">patPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a></code> | pat_policy block. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.securityIntegrations">securityIntegrations</a></code> | <code>string[]</code> | A list of security integrations the authentication policy is associated with. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.workloadIdentityPolicy">workloadIdentityPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a></code> | workload_identity_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#database AuthenticationPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#name AuthenticationPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#schema AuthenticationPolicy#schema}

---

##### `authenticationMethods`<sup>Optional</sup> <a name="authenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.authenticationMethods"></a>

```typescript
public readonly authenticationMethods: string[];
```

- *Type:* string[]

A list of authentication methods that are allowed during login.

Valid values are (case-insensitive): `ALL` | `SAML` | `PASSWORD` | `OAUTH` | `KEYPAIR` | `PROGRAMMATIC_ACCESS_TOKEN` | `WORKLOAD_IDENTITY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#authentication_methods AuthenticationPolicy#authentication_methods}

---

##### `clientTypes`<sup>Optional</sup> <a name="clientTypes" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.clientTypes"></a>

```typescript
public readonly clientTypes: string[];
```

- *Type:* string[]

A list of clients that can authenticate with Snowflake.

If a client tries to connect, and the client is not one of the valid `client_types`, then the login attempt fails. Valid values are (case-insensitive): `ALL` | `SNOWFLAKE_UI` | `DRIVERS` | `SNOWSQL` | `SNOWFLAKE_CLI`. The `client_types` property of an authentication policy is a best effort method to block user logins based on specific clients. It should not be used as the sole control to establish a security boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#client_types AuthenticationPolicy#client_types}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#comment AuthenticationPolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#id AuthenticationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mfaAuthenticationMethods`<sup>Optional</sup> <a name="mfaAuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaAuthenticationMethods"></a>

```typescript
public readonly mfaAuthenticationMethods: string[];
```

- *Type:* string[]

A list of authentication methods that enforce multi-factor authentication (MFA) during login.

Authentication methods not listed in this parameter do not prompt for multi-factor authentication. Allowed values are `ALL` | `SAML` | `PASSWORD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#mfa_authentication_methods AuthenticationPolicy#mfa_authentication_methods}

---

##### `mfaEnrollment`<sup>Optional</sup> <a name="mfaEnrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaEnrollment"></a>

```typescript
public readonly mfaEnrollment: string;
```

- *Type:* string

Determines whether a user must enroll in multi-factor authentication.

Valid values are (case-insensitive): `REQUIRED` | `REQUIRED_PASSWORD_ONLY` | `OPTIONAL`. When REQUIRED is specified, Enforces users to enroll in MFA. If this value is used, then the `client_types` parameter must include `snowflake_ui`, because Snowsight is the only place users can enroll in multi-factor authentication (MFA).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#mfa_enrollment AuthenticationPolicy#mfa_enrollment}

---

##### `mfaPolicy`<sup>Optional</sup> <a name="mfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaPolicy"></a>

```typescript
public readonly mfaPolicy: AuthenticationPolicyMfaPolicy;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a>

mfa_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#mfa_policy AuthenticationPolicy#mfa_policy}

---

##### `patPolicy`<sup>Optional</sup> <a name="patPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.patPolicy"></a>

```typescript
public readonly patPolicy: AuthenticationPolicyPatPolicy;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a>

pat_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#pat_policy AuthenticationPolicy#pat_policy}

---

##### `securityIntegrations`<sup>Optional</sup> <a name="securityIntegrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.securityIntegrations"></a>

```typescript
public readonly securityIntegrations: string[];
```

- *Type:* string[]

A list of security integrations the authentication policy is associated with.

This parameter has no effect when `saml` or `oauth` are not in the `authentication_methods` list. All values in the `security_integrations` list must be compatible with the values in the `authentication_methods` list. For example, if `security_integrations` contains a SAML security integration, and `authentication_methods` contains OAUTH, then you cannot create the authentication policy. To allow all security integrations use `ALL` as parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#security_integrations AuthenticationPolicy#security_integrations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AuthenticationPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#timeouts AuthenticationPolicy#timeouts}

---

##### `workloadIdentityPolicy`<sup>Optional</sup> <a name="workloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.workloadIdentityPolicy"></a>

```typescript
public readonly workloadIdentityPolicy: AuthenticationPolicyWorkloadIdentityPolicy;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a>

workload_identity_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#workload_identity_policy AuthenticationPolicy#workload_identity_policy}

---

### AuthenticationPolicyDescribeOutput <a name="AuthenticationPolicyDescribeOutput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput.Initializer"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

const authenticationPolicyDescribeOutput: authenticationPolicy.AuthenticationPolicyDescribeOutput = { ... }
```


### AuthenticationPolicyMfaPolicy <a name="AuthenticationPolicyMfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.Initializer"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

const authenticationPolicyMfaPolicy: authenticationPolicy.AuthenticationPolicyMfaPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Specifies the allowed methods for the MFA policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.property.enforceMfaOnExternalAuthentication">enforceMfaOnExternalAuthentication</a></code> | <code>string</code> | Determines whether multi-factor authentication (MFA) is enforced on external authentication. Valid values are (case-insensitive): `ALL` \| `NONE`. |

---

##### `allowedMethods`<sup>Optional</sup> <a name="allowedMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

Specifies the allowed methods for the MFA policy.

Valid values are: `ALL` | `PASSKEY` | `TOTP` | `DUO`. These values are case-sensitive due to Terraform limitations (it's a nested field). Prefer using uppercased values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#allowed_methods AuthenticationPolicy#allowed_methods}

---

##### `enforceMfaOnExternalAuthentication`<sup>Optional</sup> <a name="enforceMfaOnExternalAuthentication" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.property.enforceMfaOnExternalAuthentication"></a>

```typescript
public readonly enforceMfaOnExternalAuthentication: string;
```

- *Type:* string

Determines whether multi-factor authentication (MFA) is enforced on external authentication. Valid values are (case-insensitive): `ALL` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#enforce_mfa_on_external_authentication AuthenticationPolicy#enforce_mfa_on_external_authentication}

---

### AuthenticationPolicyPatPolicy <a name="AuthenticationPolicyPatPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.Initializer"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

const authenticationPolicyPatPolicy: authenticationPolicy.AuthenticationPolicyPatPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.defaultExpiryInDays">defaultExpiryInDays</a></code> | <code>number</code> | Specifies the default expiration time (in days) for a programmatic access token. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.maxExpiryInDays">maxExpiryInDays</a></code> | <code>number</code> | Specifies the maximum number of days that can be set for the expiration time for a programmatic access token. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.networkPolicyEvaluation">networkPolicyEvaluation</a></code> | <code>string</code> | Specifies the network policy evaluation for the PAT. |

---

##### `defaultExpiryInDays`<sup>Optional</sup> <a name="defaultExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.defaultExpiryInDays"></a>

```typescript
public readonly defaultExpiryInDays: number;
```

- *Type:* number

Specifies the default expiration time (in days) for a programmatic access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#default_expiry_in_days AuthenticationPolicy#default_expiry_in_days}

---

##### `maxExpiryInDays`<sup>Optional</sup> <a name="maxExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.maxExpiryInDays"></a>

```typescript
public readonly maxExpiryInDays: number;
```

- *Type:* number

Specifies the maximum number of days that can be set for the expiration time for a programmatic access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#max_expiry_in_days AuthenticationPolicy#max_expiry_in_days}

---

##### `networkPolicyEvaluation`<sup>Optional</sup> <a name="networkPolicyEvaluation" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.networkPolicyEvaluation"></a>

```typescript
public readonly networkPolicyEvaluation: string;
```

- *Type:* string

Specifies the network policy evaluation for the PAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#network_policy_evaluation AuthenticationPolicy#network_policy_evaluation}

---

### AuthenticationPolicyShowOutput <a name="AuthenticationPolicyShowOutput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput.Initializer"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

const authenticationPolicyShowOutput: authenticationPolicy.AuthenticationPolicyShowOutput = { ... }
```


### AuthenticationPolicyTimeouts <a name="AuthenticationPolicyTimeouts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.Initializer"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

const authenticationPolicyTimeouts: authenticationPolicy.AuthenticationPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#create AuthenticationPolicy#create}. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#delete AuthenticationPolicy#delete}. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#read AuthenticationPolicy#read}. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#update AuthenticationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#create AuthenticationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#delete AuthenticationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#read AuthenticationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#update AuthenticationPolicy#update}.

---

### AuthenticationPolicyWorkloadIdentityPolicy <a name="AuthenticationPolicyWorkloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.Initializer"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

const authenticationPolicyWorkloadIdentityPolicy: authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedAwsAccounts">allowedAwsAccounts</a></code> | <code>string[]</code> | Specifies the list of AWS account IDs allowed by the authentication policy during workload identity authentication of type `AWS`. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedAzureIssuers">allowedAzureIssuers</a></code> | <code>string[]</code> | Specifies the list of Azure Entra ID issuers allowed by the authentication policy during workload identity authentication of type `AZURE`. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedOidcIssuers">allowedOidcIssuers</a></code> | <code>string[]</code> | Specifies the list of OIDC issuers allowed by the authentication policy during workload identity authentication of type `OIDC`. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedProviders">allowedProviders</a></code> | <code>string[]</code> | Specifies the allowed providers for the workload identity policy. |

---

##### `allowedAwsAccounts`<sup>Optional</sup> <a name="allowedAwsAccounts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedAwsAccounts"></a>

```typescript
public readonly allowedAwsAccounts: string[];
```

- *Type:* string[]

Specifies the list of AWS account IDs allowed by the authentication policy during workload identity authentication of type `AWS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#allowed_aws_accounts AuthenticationPolicy#allowed_aws_accounts}

---

##### `allowedAzureIssuers`<sup>Optional</sup> <a name="allowedAzureIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedAzureIssuers"></a>

```typescript
public readonly allowedAzureIssuers: string[];
```

- *Type:* string[]

Specifies the list of Azure Entra ID issuers allowed by the authentication policy during workload identity authentication of type `AZURE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#allowed_azure_issuers AuthenticationPolicy#allowed_azure_issuers}

---

##### `allowedOidcIssuers`<sup>Optional</sup> <a name="allowedOidcIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedOidcIssuers"></a>

```typescript
public readonly allowedOidcIssuers: string[];
```

- *Type:* string[]

Specifies the list of OIDC issuers allowed by the authentication policy during workload identity authentication of type `OIDC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#allowed_oidc_issuers AuthenticationPolicy#allowed_oidc_issuers}

---

##### `allowedProviders`<sup>Optional</sup> <a name="allowedProviders" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedProviders"></a>

```typescript
public readonly allowedProviders: string[];
```

- *Type:* string[]

Specifies the allowed providers for the workload identity policy.

Valid values are: `ALL` | `AWS` | `AZURE` | `GCP` | `OIDC`. These values are case-sensitive due to Terraform limitations (it's a nested field). Prefer using uppercased values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/authentication_policy#allowed_providers AuthenticationPolicy#allowed_providers}

---

## Classes <a name="Classes" id="Classes"></a>

### AuthenticationPolicyDescribeOutputList <a name="AuthenticationPolicyDescribeOutputList" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

new authenticationPolicy.AuthenticationPolicyDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.get"></a>

```typescript
public get(index: number): AuthenticationPolicyDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AuthenticationPolicyDescribeOutputOutputReference <a name="AuthenticationPolicyDescribeOutputOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

new authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.authenticationMethods">authenticationMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.clientTypes">clientTypes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaAuthenticationMethods">mfaAuthenticationMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaEnrollment">mfaEnrollment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaPolicy">mfaPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.patPolicy">patPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.securityIntegrations">securityIntegrations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.workloadIdentityPolicy">workloadIdentityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput">AuthenticationPolicyDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationMethods`<sup>Required</sup> <a name="authenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.authenticationMethods"></a>

```typescript
public readonly authenticationMethods: string;
```

- *Type:* string

---

##### `clientTypes`<sup>Required</sup> <a name="clientTypes" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.clientTypes"></a>

```typescript
public readonly clientTypes: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `mfaAuthenticationMethods`<sup>Required</sup> <a name="mfaAuthenticationMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaAuthenticationMethods"></a>

```typescript
public readonly mfaAuthenticationMethods: string;
```

- *Type:* string

---

##### `mfaEnrollment`<sup>Required</sup> <a name="mfaEnrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaEnrollment"></a>

```typescript
public readonly mfaEnrollment: string;
```

- *Type:* string

---

##### `mfaPolicy`<sup>Required</sup> <a name="mfaPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaPolicy"></a>

```typescript
public readonly mfaPolicy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `patPolicy`<sup>Required</sup> <a name="patPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.patPolicy"></a>

```typescript
public readonly patPolicy: string;
```

- *Type:* string

---

##### `securityIntegrations`<sup>Required</sup> <a name="securityIntegrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.securityIntegrations"></a>

```typescript
public readonly securityIntegrations: string;
```

- *Type:* string

---

##### `workloadIdentityPolicy`<sup>Required</sup> <a name="workloadIdentityPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.workloadIdentityPolicy"></a>

```typescript
public readonly workloadIdentityPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AuthenticationPolicyDescribeOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput">AuthenticationPolicyDescribeOutput</a>

---


### AuthenticationPolicyMfaPolicyOutputReference <a name="AuthenticationPolicyMfaPolicyOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

new authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resetAllowedMethods">resetAllowedMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resetEnforceMfaOnExternalAuthentication">resetEnforceMfaOnExternalAuthentication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedMethods` <a name="resetAllowedMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resetAllowedMethods"></a>

```typescript
public resetAllowedMethods(): void
```

##### `resetEnforceMfaOnExternalAuthentication` <a name="resetEnforceMfaOnExternalAuthentication" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resetEnforceMfaOnExternalAuthentication"></a>

```typescript
public resetEnforceMfaOnExternalAuthentication(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.enforceMfaOnExternalAuthenticationInput">enforceMfaOnExternalAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.enforceMfaOnExternalAuthentication">enforceMfaOnExternalAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `enforceMfaOnExternalAuthenticationInput`<sup>Optional</sup> <a name="enforceMfaOnExternalAuthenticationInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.enforceMfaOnExternalAuthenticationInput"></a>

```typescript
public readonly enforceMfaOnExternalAuthenticationInput: string;
```

- *Type:* string

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `enforceMfaOnExternalAuthentication`<sup>Required</sup> <a name="enforceMfaOnExternalAuthentication" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.enforceMfaOnExternalAuthentication"></a>

```typescript
public readonly enforceMfaOnExternalAuthentication: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AuthenticationPolicyMfaPolicy;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a>

---


### AuthenticationPolicyPatPolicyOutputReference <a name="AuthenticationPolicyPatPolicyOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

new authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetDefaultExpiryInDays">resetDefaultExpiryInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetMaxExpiryInDays">resetMaxExpiryInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetNetworkPolicyEvaluation">resetNetworkPolicyEvaluation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultExpiryInDays` <a name="resetDefaultExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetDefaultExpiryInDays"></a>

```typescript
public resetDefaultExpiryInDays(): void
```

##### `resetMaxExpiryInDays` <a name="resetMaxExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetMaxExpiryInDays"></a>

```typescript
public resetMaxExpiryInDays(): void
```

##### `resetNetworkPolicyEvaluation` <a name="resetNetworkPolicyEvaluation" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetNetworkPolicyEvaluation"></a>

```typescript
public resetNetworkPolicyEvaluation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.defaultExpiryInDaysInput">defaultExpiryInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.maxExpiryInDaysInput">maxExpiryInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.networkPolicyEvaluationInput">networkPolicyEvaluationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.defaultExpiryInDays">defaultExpiryInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.maxExpiryInDays">maxExpiryInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.networkPolicyEvaluation">networkPolicyEvaluation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultExpiryInDaysInput`<sup>Optional</sup> <a name="defaultExpiryInDaysInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.defaultExpiryInDaysInput"></a>

```typescript
public readonly defaultExpiryInDaysInput: number;
```

- *Type:* number

---

##### `maxExpiryInDaysInput`<sup>Optional</sup> <a name="maxExpiryInDaysInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.maxExpiryInDaysInput"></a>

```typescript
public readonly maxExpiryInDaysInput: number;
```

- *Type:* number

---

##### `networkPolicyEvaluationInput`<sup>Optional</sup> <a name="networkPolicyEvaluationInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.networkPolicyEvaluationInput"></a>

```typescript
public readonly networkPolicyEvaluationInput: string;
```

- *Type:* string

---

##### `defaultExpiryInDays`<sup>Required</sup> <a name="defaultExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.defaultExpiryInDays"></a>

```typescript
public readonly defaultExpiryInDays: number;
```

- *Type:* number

---

##### `maxExpiryInDays`<sup>Required</sup> <a name="maxExpiryInDays" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.maxExpiryInDays"></a>

```typescript
public readonly maxExpiryInDays: number;
```

- *Type:* number

---

##### `networkPolicyEvaluation`<sup>Required</sup> <a name="networkPolicyEvaluation" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.networkPolicyEvaluation"></a>

```typescript
public readonly networkPolicyEvaluation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AuthenticationPolicyPatPolicy;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a>

---


### AuthenticationPolicyShowOutputList <a name="AuthenticationPolicyShowOutputList" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

new authenticationPolicy.AuthenticationPolicyShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.get"></a>

```typescript
public get(index: number): AuthenticationPolicyShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AuthenticationPolicyShowOutputOutputReference <a name="AuthenticationPolicyShowOutputOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

new authenticationPolicy.AuthenticationPolicyShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.options">options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput">AuthenticationPolicyShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.options"></a>

```typescript
public readonly options: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AuthenticationPolicyShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput">AuthenticationPolicyShowOutput</a>

---


### AuthenticationPolicyTimeoutsOutputReference <a name="AuthenticationPolicyTimeoutsOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

new authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuthenticationPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a>

---


### AuthenticationPolicyWorkloadIdentityPolicyOutputReference <a name="AuthenticationPolicyWorkloadIdentityPolicyOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer"></a>

```typescript
import { authenticationPolicy } from '@cdktf/provider-snowflake'

new authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedAwsAccounts">resetAllowedAwsAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedAzureIssuers">resetAllowedAzureIssuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedOidcIssuers">resetAllowedOidcIssuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedProviders">resetAllowedProviders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAwsAccounts` <a name="resetAllowedAwsAccounts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedAwsAccounts"></a>

```typescript
public resetAllowedAwsAccounts(): void
```

##### `resetAllowedAzureIssuers` <a name="resetAllowedAzureIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedAzureIssuers"></a>

```typescript
public resetAllowedAzureIssuers(): void
```

##### `resetAllowedOidcIssuers` <a name="resetAllowedOidcIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedOidcIssuers"></a>

```typescript
public resetAllowedOidcIssuers(): void
```

##### `resetAllowedProviders` <a name="resetAllowedProviders" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedProviders"></a>

```typescript
public resetAllowedProviders(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAwsAccountsInput">allowedAwsAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAzureIssuersInput">allowedAzureIssuersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedOidcIssuersInput">allowedOidcIssuersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedProvidersInput">allowedProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAwsAccounts">allowedAwsAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAzureIssuers">allowedAzureIssuers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedOidcIssuers">allowedOidcIssuers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedProviders">allowedProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAwsAccountsInput`<sup>Optional</sup> <a name="allowedAwsAccountsInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAwsAccountsInput"></a>

```typescript
public readonly allowedAwsAccountsInput: string[];
```

- *Type:* string[]

---

##### `allowedAzureIssuersInput`<sup>Optional</sup> <a name="allowedAzureIssuersInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAzureIssuersInput"></a>

```typescript
public readonly allowedAzureIssuersInput: string[];
```

- *Type:* string[]

---

##### `allowedOidcIssuersInput`<sup>Optional</sup> <a name="allowedOidcIssuersInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedOidcIssuersInput"></a>

```typescript
public readonly allowedOidcIssuersInput: string[];
```

- *Type:* string[]

---

##### `allowedProvidersInput`<sup>Optional</sup> <a name="allowedProvidersInput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedProvidersInput"></a>

```typescript
public readonly allowedProvidersInput: string[];
```

- *Type:* string[]

---

##### `allowedAwsAccounts`<sup>Required</sup> <a name="allowedAwsAccounts" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAwsAccounts"></a>

```typescript
public readonly allowedAwsAccounts: string[];
```

- *Type:* string[]

---

##### `allowedAzureIssuers`<sup>Required</sup> <a name="allowedAzureIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAzureIssuers"></a>

```typescript
public readonly allowedAzureIssuers: string[];
```

- *Type:* string[]

---

##### `allowedOidcIssuers`<sup>Required</sup> <a name="allowedOidcIssuers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedOidcIssuers"></a>

```typescript
public readonly allowedOidcIssuers: string[];
```

- *Type:* string[]

---

##### `allowedProviders`<sup>Required</sup> <a name="allowedProviders" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedProviders"></a>

```typescript
public readonly allowedProviders: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AuthenticationPolicyWorkloadIdentityPolicy;
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a>

---



