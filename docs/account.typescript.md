# `account` Submodule <a name="`account` Submodule" id="@cdktf/provider-snowflake.account"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Account <a name="Account" id="@cdktf/provider-snowflake.account.Account"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account snowflake_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.account.Account.Initializer"></a>

```typescript
import { account } from '@cdktf/provider-snowflake'

new account.Account(scope: Construct, id: string, config: AccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.account.AccountConfig">AccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.account.AccountConfig">AccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.account.Account.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetAdminRsaPublicKey">resetAdminRsaPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetAdminUserType">resetAdminUserType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetConsumptionBillingEntity">resetConsumptionBillingEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetIsOrgAdmin">resetIsOrgAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetMustChangePassword">resetMustChangePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetRegionGroup">resetRegionGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.account.Account.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.account.Account.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.account.Account.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.account.Account.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.account.Account.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.account.Account.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.account.Account.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.account.Account.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.account.Account.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.account.Account.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.account.Account.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.account.Account.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.account.Account.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.account.Account.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.account.Account.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.account.Account.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.account.Account.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.account.Account.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.account.Account.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.account.Account.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.account.Account.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.account.Account.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.account.Account.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.account.Account.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.account.Account.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.account.Account.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.account.Account.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.account.Account.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.account.Account.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.account.Account.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.account.Account.putTimeouts"></a>

```typescript
public putTimeouts(value: AccountTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.account.Account.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.account.AccountTimeouts">AccountTimeouts</a>

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktf/provider-snowflake.account.Account.resetAdminPassword"></a>

```typescript
public resetAdminPassword(): void
```

##### `resetAdminRsaPublicKey` <a name="resetAdminRsaPublicKey" id="@cdktf/provider-snowflake.account.Account.resetAdminRsaPublicKey"></a>

```typescript
public resetAdminRsaPublicKey(): void
```

##### `resetAdminUserType` <a name="resetAdminUserType" id="@cdktf/provider-snowflake.account.Account.resetAdminUserType"></a>

```typescript
public resetAdminUserType(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.account.Account.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetConsumptionBillingEntity` <a name="resetConsumptionBillingEntity" id="@cdktf/provider-snowflake.account.Account.resetConsumptionBillingEntity"></a>

```typescript
public resetConsumptionBillingEntity(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-snowflake.account.Account.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.account.Account.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsOrgAdmin` <a name="resetIsOrgAdmin" id="@cdktf/provider-snowflake.account.Account.resetIsOrgAdmin"></a>

```typescript
public resetIsOrgAdmin(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-snowflake.account.Account.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetMustChangePassword` <a name="resetMustChangePassword" id="@cdktf/provider-snowflake.account.Account.resetMustChangePassword"></a>

```typescript
public resetMustChangePassword(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-snowflake.account.Account.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRegionGroup` <a name="resetRegionGroup" id="@cdktf/provider-snowflake.account.Account.resetRegionGroup"></a>

```typescript
public resetRegionGroup(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.account.Account.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Account resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.account.Account.isConstruct"></a>

```typescript
import { account } from '@cdktf/provider-snowflake'

account.Account.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.account.Account.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.account.Account.isTerraformElement"></a>

```typescript
import { account } from '@cdktf/provider-snowflake'

account.Account.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.account.Account.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.account.Account.isTerraformResource"></a>

```typescript
import { account } from '@cdktf/provider-snowflake'

account.Account.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.account.Account.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.account.Account.generateConfigForImport"></a>

```typescript
import { account } from '@cdktf/provider-snowflake'

account.Account.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Account resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.account.Account.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.account.Account.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Account to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.account.Account.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Account that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.account.Account.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Account to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList">AccountShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference">AccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminNameInput">adminNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminPasswordInput">adminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminRsaPublicKeyInput">adminRsaPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminUserTypeInput">adminUserTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.consumptionBillingEntityInput">consumptionBillingEntityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.editionInput">editionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.gracePeriodInDaysInput">gracePeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.isOrgAdminInput">isOrgAdminInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.mustChangePasswordInput">mustChangePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.regionGroupInput">regionGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-snowflake.account.AccountTimeouts">AccountTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminName">adminName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminRsaPublicKey">adminRsaPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminUserType">adminUserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.consumptionBillingEntity">consumptionBillingEntity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.gracePeriodInDays">gracePeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.isOrgAdmin">isOrgAdmin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.mustChangePassword">mustChangePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.regionGroup">regionGroup</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.account.Account.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.account.Account.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.account.Account.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.account.Account.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.account.Account.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.account.Account.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.account.Account.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.account.Account.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.account.Account.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.account.Account.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.account.Account.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.account.Account.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.account.Account.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.account.Account.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.account.Account.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.account.Account.property.showOutput"></a>

```typescript
public readonly showOutput: AccountShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.account.AccountShowOutputList">AccountShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.account.Account.property.timeouts"></a>

```typescript
public readonly timeouts: AccountTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference">AccountTimeoutsOutputReference</a>

---

##### `adminNameInput`<sup>Optional</sup> <a name="adminNameInput" id="@cdktf/provider-snowflake.account.Account.property.adminNameInput"></a>

```typescript
public readonly adminNameInput: string;
```

- *Type:* string

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-snowflake.account.Account.property.adminPasswordInput"></a>

```typescript
public readonly adminPasswordInput: string;
```

- *Type:* string

---

##### `adminRsaPublicKeyInput`<sup>Optional</sup> <a name="adminRsaPublicKeyInput" id="@cdktf/provider-snowflake.account.Account.property.adminRsaPublicKeyInput"></a>

```typescript
public readonly adminRsaPublicKeyInput: string;
```

- *Type:* string

---

##### `adminUserTypeInput`<sup>Optional</sup> <a name="adminUserTypeInput" id="@cdktf/provider-snowflake.account.Account.property.adminUserTypeInput"></a>

```typescript
public readonly adminUserTypeInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.account.Account.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `consumptionBillingEntityInput`<sup>Optional</sup> <a name="consumptionBillingEntityInput" id="@cdktf/provider-snowflake.account.Account.property.consumptionBillingEntityInput"></a>

```typescript
public readonly consumptionBillingEntityInput: string;
```

- *Type:* string

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-snowflake.account.Account.property.editionInput"></a>

```typescript
public readonly editionInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-snowflake.account.Account.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-snowflake.account.Account.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `gracePeriodInDaysInput`<sup>Optional</sup> <a name="gracePeriodInDaysInput" id="@cdktf/provider-snowflake.account.Account.property.gracePeriodInDaysInput"></a>

```typescript
public readonly gracePeriodInDaysInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.account.Account.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isOrgAdminInput`<sup>Optional</sup> <a name="isOrgAdminInput" id="@cdktf/provider-snowflake.account.Account.property.isOrgAdminInput"></a>

```typescript
public readonly isOrgAdminInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-snowflake.account.Account.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `mustChangePasswordInput`<sup>Optional</sup> <a name="mustChangePasswordInput" id="@cdktf/provider-snowflake.account.Account.property.mustChangePasswordInput"></a>

```typescript
public readonly mustChangePasswordInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.account.Account.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionGroupInput`<sup>Optional</sup> <a name="regionGroupInput" id="@cdktf/provider-snowflake.account.Account.property.regionGroupInput"></a>

```typescript
public readonly regionGroupInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-snowflake.account.Account.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.account.Account.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: AccountTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-snowflake.account.AccountTimeouts">AccountTimeouts</a> | cdktf.IResolvable

---

##### `adminName`<sup>Required</sup> <a name="adminName" id="@cdktf/provider-snowflake.account.Account.property.adminName"></a>

```typescript
public readonly adminName: string;
```

- *Type:* string

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-snowflake.account.Account.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `adminRsaPublicKey`<sup>Required</sup> <a name="adminRsaPublicKey" id="@cdktf/provider-snowflake.account.Account.property.adminRsaPublicKey"></a>

```typescript
public readonly adminRsaPublicKey: string;
```

- *Type:* string

---

##### `adminUserType`<sup>Required</sup> <a name="adminUserType" id="@cdktf/provider-snowflake.account.Account.property.adminUserType"></a>

```typescript
public readonly adminUserType: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.account.Account.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `consumptionBillingEntity`<sup>Required</sup> <a name="consumptionBillingEntity" id="@cdktf/provider-snowflake.account.Account.property.consumptionBillingEntity"></a>

```typescript
public readonly consumptionBillingEntity: string;
```

- *Type:* string

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-snowflake.account.Account.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-snowflake.account.Account.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-snowflake.account.Account.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `gracePeriodInDays`<sup>Required</sup> <a name="gracePeriodInDays" id="@cdktf/provider-snowflake.account.Account.property.gracePeriodInDays"></a>

```typescript
public readonly gracePeriodInDays: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isOrgAdmin`<sup>Required</sup> <a name="isOrgAdmin" id="@cdktf/provider-snowflake.account.Account.property.isOrgAdmin"></a>

```typescript
public readonly isOrgAdmin: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-snowflake.account.Account.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `mustChangePassword`<sup>Required</sup> <a name="mustChangePassword" id="@cdktf/provider-snowflake.account.Account.property.mustChangePassword"></a>

```typescript
public readonly mustChangePassword: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.account.Account.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-snowflake.account.Account.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `regionGroup`<sup>Required</sup> <a name="regionGroup" id="@cdktf/provider-snowflake.account.Account.property.regionGroup"></a>

```typescript
public readonly regionGroup: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.account.Account.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountConfig <a name="AccountConfig" id="@cdktf/provider-snowflake.account.AccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.account.AccountConfig.Initializer"></a>

```typescript
import { account } from '@cdktf/provider-snowflake'

const accountConfig: account.AccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.adminName">adminName</a></code> | <code>string</code> | Login name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.edition">edition</a></code> | <code>string</code> | Snowflake Edition of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.email">email</a></code> | <code>string</code> | Email address of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.gracePeriodInDays">gracePeriodInDays</a></code> | <code>number</code> | Specifies the number of days during which the account can be restored (“undropped”). |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the account. It must be unique within an organization, regardless of which Snowflake Region the account is in and must start with an alphabetic character and cannot contain spaces or special characters except for underscores (_). Note that if the account name includes underscores, features that do not accept account names with underscores (e.g. Okta SSO or SCIM) can reference a version of the account name that substitutes hyphens (-) for the underscores. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.adminPassword">adminPassword</a></code> | <code>string</code> | Password for the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.adminRsaPublicKey">adminRsaPublicKey</a></code> | <code>string</code> | Assigns a public key to the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.adminUserType">adminUserType</a></code> | <code>string</code> | Used for setting the type of the first user that is assigned the ACCOUNTADMIN role during account creation. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.consumptionBillingEntity">consumptionBillingEntity</a></code> | <code>string</code> | Determines which billing entity is responsible for the account's consumption-based billing. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.firstName">firstName</a></code> | <code>string</code> | First name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#id Account#id}. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.isOrgAdmin">isOrgAdmin</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Sets an account property that determines whether the ORGADMIN role is enabled in the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.lastName">lastName</a></code> | <code>string</code> | Last name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.mustChangePassword">mustChangePassword</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the new user created to administer the account is forced to change their password upon first login into the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.region">region</a></code> | <code>string</code> | [Snowflake Region ID](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-snowflake-region-ids) of the region where the account is created. If no value is provided, Snowflake creates the account in the same Snowflake Region as the current account (i.e. the account in which the CREATE ACCOUNT statement is executed.). |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.regionGroup">regionGroup</a></code> | <code>string</code> | ID of the region group where the account is created. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.account.AccountTimeouts">AccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.account.AccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.account.AccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.account.AccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.account.AccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.account.AccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.account.AccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.account.AccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminName`<sup>Required</sup> <a name="adminName" id="@cdktf/provider-snowflake.account.AccountConfig.property.adminName"></a>

```typescript
public readonly adminName: string;
```

- *Type:* string

Login name of the initial administrative user of the account.

A new user is created in the new account with this name and password and granted the ACCOUNTADMIN role in the account. A login name can be any string consisting of letters, numbers, and underscores. Login names are always case-insensitive. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#admin_name Account#admin_name}

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-snowflake.account.AccountConfig.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

Snowflake Edition of the account.

See more about Snowflake Editions in the [official documentation](https://docs.snowflake.com/en/user-guide/intro-editions). Valid options are: `STANDARD` | `ENTERPRISE` | `BUSINESS_CRITICAL`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#edition Account#edition}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-snowflake.account.AccountConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Email address of the initial administrative user of the account.

This email address is used to send any notifications about the account. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#email Account#email}

---

##### `gracePeriodInDays`<sup>Required</sup> <a name="gracePeriodInDays" id="@cdktf/provider-snowflake.account.AccountConfig.property.gracePeriodInDays"></a>

```typescript
public readonly gracePeriodInDays: number;
```

- *Type:* number

Specifies the number of days during which the account can be restored (“undropped”).

The minimum is 3 days and the maximum is 90 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#grace_period_in_days Account#grace_period_in_days}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.account.AccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier (i.e. name) for the account. It must be unique within an organization, regardless of which Snowflake Region the account is in and must start with an alphabetic character and cannot contain spaces or special characters except for underscores (_). Note that if the account name includes underscores, features that do not accept account names with underscores (e.g. Okta SSO or SCIM) can reference a version of the account name that substitutes hyphens (-) for the underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#name Account#name}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-snowflake.account.AccountConfig.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

Password for the initial administrative user of the account.

Either admin_password or admin_rsa_public_key has to be specified. This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#admin_password Account#admin_password}

---

##### `adminRsaPublicKey`<sup>Optional</sup> <a name="adminRsaPublicKey" id="@cdktf/provider-snowflake.account.AccountConfig.property.adminRsaPublicKey"></a>

```typescript
public readonly adminRsaPublicKey: string;
```

- *Type:* string

Assigns a public key to the initial administrative user of the account.

Either admin_password or admin_rsa_public_key has to be specified. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#admin_rsa_public_key Account#admin_rsa_public_key}

---

##### `adminUserType`<sup>Optional</sup> <a name="adminUserType" id="@cdktf/provider-snowflake.account.AccountConfig.property.adminUserType"></a>

```typescript
public readonly adminUserType: string;
```

- *Type:* string

Used for setting the type of the first user that is assigned the ACCOUNTADMIN role during account creation.

Valid options are: `PERSON` | `SERVICE` | `LEGACY_SERVICE` External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#admin_user_type Account#admin_user_type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.account.AccountConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#comment Account#comment}

---

##### `consumptionBillingEntity`<sup>Optional</sup> <a name="consumptionBillingEntity" id="@cdktf/provider-snowflake.account.AccountConfig.property.consumptionBillingEntity"></a>

```typescript
public readonly consumptionBillingEntity: string;
```

- *Type:* string

Determines which billing entity is responsible for the account's consumption-based billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#consumption_billing_entity Account#consumption_billing_entity}

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-snowflake.account.AccountConfig.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

First name of the initial administrative user of the account.

This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#first_name Account#first_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.account.AccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#id Account#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOrgAdmin`<sup>Optional</sup> <a name="isOrgAdmin" id="@cdktf/provider-snowflake.account.AccountConfig.property.isOrgAdmin"></a>

```typescript
public readonly isOrgAdmin: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Sets an account property that determines whether the ORGADMIN role is enabled in the account.

Only an organization administrator (i.e. user with the ORGADMIN role) can set the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#is_org_admin Account#is_org_admin}

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-snowflake.account.AccountConfig.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Last name of the initial administrative user of the account.

This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#last_name Account#last_name}

---

##### `mustChangePassword`<sup>Optional</sup> <a name="mustChangePassword" id="@cdktf/provider-snowflake.account.AccountConfig.property.mustChangePassword"></a>

```typescript
public readonly mustChangePassword: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the new user created to administer the account is forced to change their password upon first login into the account.

This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#must_change_password Account#must_change_password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-snowflake.account.AccountConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

[Snowflake Region ID](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-snowflake-region-ids) of the region where the account is created. If no value is provided, Snowflake creates the account in the same Snowflake Region as the current account (i.e. the account in which the CREATE ACCOUNT statement is executed.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#region Account#region}

---

##### `regionGroup`<sup>Optional</sup> <a name="regionGroup" id="@cdktf/provider-snowflake.account.AccountConfig.property.regionGroup"></a>

```typescript
public readonly regionGroup: string;
```

- *Type:* string

ID of the region group where the account is created.

To retrieve the region group ID for existing accounts in your organization, execute the [SHOW REGIONS](https://docs.snowflake.com/en/sql-reference/sql/show-regions) command. For information about when you might need to specify region group, see [Region groups](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-region-groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#region_group Account#region_group}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.account.AccountConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AccountTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.account.AccountTimeouts">AccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#timeouts Account#timeouts}

---

### AccountShowOutput <a name="AccountShowOutput" id="@cdktf/provider-snowflake.account.AccountShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.account.AccountShowOutput.Initializer"></a>

```typescript
import { account } from '@cdktf/provider-snowflake'

const accountShowOutput: account.AccountShowOutput = { ... }
```


### AccountTimeouts <a name="AccountTimeouts" id="@cdktf/provider-snowflake.account.AccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.account.AccountTimeouts.Initializer"></a>

```typescript
import { account } from '@cdktf/provider-snowflake'

const accountTimeouts: account.AccountTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#create Account#create}. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#delete Account#delete}. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#read Account#read}. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#update Account#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.account.AccountTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#create Account#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.account.AccountTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#delete Account#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.account.AccountTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#read Account#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.account.AccountTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/account#update Account#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountShowOutputList <a name="AccountShowOutputList" id="@cdktf/provider-snowflake.account.AccountShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer"></a>

```typescript
import { account } from '@cdktf/provider-snowflake'

new account.AccountShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.account.AccountShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.account.AccountShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.account.AccountShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.account.AccountShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.account.AccountShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.account.AccountShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.account.AccountShowOutputList.get"></a>

```typescript
public get(index: number): AccountShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.account.AccountShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.account.AccountShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.account.AccountShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AccountShowOutputOutputReference <a name="AccountShowOutputOutputReference" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer"></a>

```typescript
import { account } from '@cdktf/provider-snowflake'

new account.AccountShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountLocator">accountLocator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountLocatorUrl">accountLocatorUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountOldUrlLastUsed">accountOldUrlLastUsed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountOldUrlSavedOn">accountOldUrlSavedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountUrl">accountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.consumptionBillingEntityName">consumptionBillingEntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.droppedOn">droppedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isEventsAccount">isEventsAccount</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isOrgAdmin">isOrgAdmin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isOrganizationAccount">isOrganizationAccount</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.managedAccounts">managedAccounts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.marketplaceConsumerBillingEntityName">marketplaceConsumerBillingEntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.marketplaceProviderBillingEntityName">marketplaceProviderBillingEntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.movedOn">movedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.movedToOrganization">movedToOrganization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.oldAccountUrl">oldAccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrl">organizationOldUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrlLastUsed">organizationOldUrlLastUsed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrlSavedOn">organizationOldUrlSavedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationUrlExpirationOn">organizationUrlExpirationOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.regionGroup">regionGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.restoredOn">restoredOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.scheduledDeletionTime">scheduledDeletionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.snowflakeRegion">snowflakeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutput">AccountShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountLocator`<sup>Required</sup> <a name="accountLocator" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountLocator"></a>

```typescript
public readonly accountLocator: string;
```

- *Type:* string

---

##### `accountLocatorUrl`<sup>Required</sup> <a name="accountLocatorUrl" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountLocatorUrl"></a>

```typescript
public readonly accountLocatorUrl: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `accountOldUrlLastUsed`<sup>Required</sup> <a name="accountOldUrlLastUsed" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountOldUrlLastUsed"></a>

```typescript
public readonly accountOldUrlLastUsed: string;
```

- *Type:* string

---

##### `accountOldUrlSavedOn`<sup>Required</sup> <a name="accountOldUrlSavedOn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountOldUrlSavedOn"></a>

```typescript
public readonly accountOldUrlSavedOn: string;
```

- *Type:* string

---

##### `accountUrl`<sup>Required</sup> <a name="accountUrl" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountUrl"></a>

```typescript
public readonly accountUrl: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `consumptionBillingEntityName`<sup>Required</sup> <a name="consumptionBillingEntityName" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.consumptionBillingEntityName"></a>

```typescript
public readonly consumptionBillingEntityName: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `droppedOn`<sup>Required</sup> <a name="droppedOn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.droppedOn"></a>

```typescript
public readonly droppedOn: string;
```

- *Type:* string

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `isEventsAccount`<sup>Required</sup> <a name="isEventsAccount" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isEventsAccount"></a>

```typescript
public readonly isEventsAccount: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOrgAdmin`<sup>Required</sup> <a name="isOrgAdmin" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isOrgAdmin"></a>

```typescript
public readonly isOrgAdmin: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOrganizationAccount`<sup>Required</sup> <a name="isOrganizationAccount" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isOrganizationAccount"></a>

```typescript
public readonly isOrganizationAccount: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `managedAccounts`<sup>Required</sup> <a name="managedAccounts" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.managedAccounts"></a>

```typescript
public readonly managedAccounts: number;
```

- *Type:* number

---

##### `marketplaceConsumerBillingEntityName`<sup>Required</sup> <a name="marketplaceConsumerBillingEntityName" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.marketplaceConsumerBillingEntityName"></a>

```typescript
public readonly marketplaceConsumerBillingEntityName: string;
```

- *Type:* string

---

##### `marketplaceProviderBillingEntityName`<sup>Required</sup> <a name="marketplaceProviderBillingEntityName" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.marketplaceProviderBillingEntityName"></a>

```typescript
public readonly marketplaceProviderBillingEntityName: string;
```

- *Type:* string

---

##### `movedOn`<sup>Required</sup> <a name="movedOn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.movedOn"></a>

```typescript
public readonly movedOn: string;
```

- *Type:* string

---

##### `movedToOrganization`<sup>Required</sup> <a name="movedToOrganization" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.movedToOrganization"></a>

```typescript
public readonly movedToOrganization: string;
```

- *Type:* string

---

##### `oldAccountUrl`<sup>Required</sup> <a name="oldAccountUrl" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.oldAccountUrl"></a>

```typescript
public readonly oldAccountUrl: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `organizationOldUrl`<sup>Required</sup> <a name="organizationOldUrl" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrl"></a>

```typescript
public readonly organizationOldUrl: string;
```

- *Type:* string

---

##### `organizationOldUrlLastUsed`<sup>Required</sup> <a name="organizationOldUrlLastUsed" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrlLastUsed"></a>

```typescript
public readonly organizationOldUrlLastUsed: string;
```

- *Type:* string

---

##### `organizationOldUrlSavedOn`<sup>Required</sup> <a name="organizationOldUrlSavedOn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrlSavedOn"></a>

```typescript
public readonly organizationOldUrlSavedOn: string;
```

- *Type:* string

---

##### `organizationUrlExpirationOn`<sup>Required</sup> <a name="organizationUrlExpirationOn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationUrlExpirationOn"></a>

```typescript
public readonly organizationUrlExpirationOn: string;
```

- *Type:* string

---

##### `regionGroup`<sup>Required</sup> <a name="regionGroup" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.regionGroup"></a>

```typescript
public readonly regionGroup: string;
```

- *Type:* string

---

##### `restoredOn`<sup>Required</sup> <a name="restoredOn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.restoredOn"></a>

```typescript
public readonly restoredOn: string;
```

- *Type:* string

---

##### `scheduledDeletionTime`<sup>Required</sup> <a name="scheduledDeletionTime" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.scheduledDeletionTime"></a>

```typescript
public readonly scheduledDeletionTime: string;
```

- *Type:* string

---

##### `snowflakeRegion`<sup>Required</sup> <a name="snowflakeRegion" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.snowflakeRegion"></a>

```typescript
public readonly snowflakeRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccountShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.account.AccountShowOutput">AccountShowOutput</a>

---


### AccountTimeoutsOutputReference <a name="AccountTimeoutsOutputReference" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.Initializer"></a>

```typescript
import { account } from '@cdktf/provider-snowflake'

new account.AccountTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.account.AccountTimeouts">AccountTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AccountTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-snowflake.account.AccountTimeouts">AccountTimeouts</a> | cdktf.IResolvable

---



