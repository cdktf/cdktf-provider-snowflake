# `notificationIntegration` Submodule <a name="`notificationIntegration` Submodule" id="@cdktf/provider-snowflake.notificationIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationIntegration <a name="NotificationIntegration" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration snowflake_notification_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer"></a>

```typescript
import { notificationIntegration } from '@cdktf/provider-snowflake'

new notificationIntegration.NotificationIntegration(scope: Construct, id: string, config: NotificationIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig">NotificationIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig">NotificationIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSnsRoleArn">resetAwsSnsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSnsTopicArn">resetAwsSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSqsArn">resetAwsSqsArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSqsRoleArn">resetAwsSqsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAzureStorageQueuePrimaryUri">resetAzureStorageQueuePrimaryUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAzureTenantId">resetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetGcpPubsubSubscriptionName">resetGcpPubsubSubscriptionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetGcpPubsubTopicName">resetGcpPubsubTopicName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAwsSnsRoleArn` <a name="resetAwsSnsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSnsRoleArn"></a>

```typescript
public resetAwsSnsRoleArn(): void
```

##### `resetAwsSnsTopicArn` <a name="resetAwsSnsTopicArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSnsTopicArn"></a>

```typescript
public resetAwsSnsTopicArn(): void
```

##### `resetAwsSqsArn` <a name="resetAwsSqsArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSqsArn"></a>

```typescript
public resetAwsSqsArn(): void
```

##### `resetAwsSqsRoleArn` <a name="resetAwsSqsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSqsRoleArn"></a>

```typescript
public resetAwsSqsRoleArn(): void
```

##### `resetAzureStorageQueuePrimaryUri` <a name="resetAzureStorageQueuePrimaryUri" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAzureStorageQueuePrimaryUri"></a>

```typescript
public resetAzureStorageQueuePrimaryUri(): void
```

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAzureTenantId"></a>

```typescript
public resetAzureTenantId(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetGcpPubsubSubscriptionName` <a name="resetGcpPubsubSubscriptionName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetGcpPubsubSubscriptionName"></a>

```typescript
public resetGcpPubsubSubscriptionName(): void
```

##### `resetGcpPubsubTopicName` <a name="resetGcpPubsubTopicName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetGcpPubsubTopicName"></a>

```typescript
public resetGcpPubsubTopicName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isConstruct"></a>

```typescript
import { notificationIntegration } from '@cdktf/provider-snowflake'

notificationIntegration.NotificationIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformElement"></a>

```typescript
import { notificationIntegration } from '@cdktf/provider-snowflake'

notificationIntegration.NotificationIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformResource"></a>

```typescript
import { notificationIntegration } from '@cdktf/provider-snowflake'

notificationIntegration.NotificationIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport"></a>

```typescript
import { notificationIntegration } from '@cdktf/provider-snowflake'

notificationIntegration.NotificationIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NotificationIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotificationIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotificationIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsExternalId">awsSnsExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsIamUserArn">awsSnsIamUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsExternalId">awsSqsExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsIamUserArn">awsSqsIamUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubServiceAccount">gcpPubsubServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsRoleArnInput">awsSnsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsTopicArnInput">awsSnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsArnInput">awsSqsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsRoleArnInput">awsSqsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureStorageQueuePrimaryUriInput">azureStorageQueuePrimaryUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubSubscriptionNameInput">gcpPubsubSubscriptionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubTopicNameInput">gcpPubsubTopicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.notificationProviderInput">notificationProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsRoleArn">awsSnsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsTopicArn">awsSnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsArn">awsSqsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsRoleArn">awsSqsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureStorageQueuePrimaryUri">azureStorageQueuePrimaryUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubSubscriptionName">gcpPubsubSubscriptionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubTopicName">gcpPubsubTopicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.notificationProvider">notificationProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsSnsExternalId`<sup>Required</sup> <a name="awsSnsExternalId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsExternalId"></a>

```typescript
public readonly awsSnsExternalId: string;
```

- *Type:* string

---

##### `awsSnsIamUserArn`<sup>Required</sup> <a name="awsSnsIamUserArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsIamUserArn"></a>

```typescript
public readonly awsSnsIamUserArn: string;
```

- *Type:* string

---

##### `awsSqsExternalId`<sup>Required</sup> <a name="awsSqsExternalId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsExternalId"></a>

```typescript
public readonly awsSqsExternalId: string;
```

- *Type:* string

---

##### `awsSqsIamUserArn`<sup>Required</sup> <a name="awsSqsIamUserArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsIamUserArn"></a>

```typescript
public readonly awsSqsIamUserArn: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `gcpPubsubServiceAccount`<sup>Required</sup> <a name="gcpPubsubServiceAccount" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubServiceAccount"></a>

```typescript
public readonly gcpPubsubServiceAccount: string;
```

- *Type:* string

---

##### `awsSnsRoleArnInput`<sup>Optional</sup> <a name="awsSnsRoleArnInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsRoleArnInput"></a>

```typescript
public readonly awsSnsRoleArnInput: string;
```

- *Type:* string

---

##### `awsSnsTopicArnInput`<sup>Optional</sup> <a name="awsSnsTopicArnInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsTopicArnInput"></a>

```typescript
public readonly awsSnsTopicArnInput: string;
```

- *Type:* string

---

##### `awsSqsArnInput`<sup>Optional</sup> <a name="awsSqsArnInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsArnInput"></a>

```typescript
public readonly awsSqsArnInput: string;
```

- *Type:* string

---

##### `awsSqsRoleArnInput`<sup>Optional</sup> <a name="awsSqsRoleArnInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsRoleArnInput"></a>

```typescript
public readonly awsSqsRoleArnInput: string;
```

- *Type:* string

---

##### `azureStorageQueuePrimaryUriInput`<sup>Optional</sup> <a name="azureStorageQueuePrimaryUriInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureStorageQueuePrimaryUriInput"></a>

```typescript
public readonly azureStorageQueuePrimaryUriInput: string;
```

- *Type:* string

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureTenantIdInput"></a>

```typescript
public readonly azureTenantIdInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gcpPubsubSubscriptionNameInput`<sup>Optional</sup> <a name="gcpPubsubSubscriptionNameInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubSubscriptionNameInput"></a>

```typescript
public readonly gcpPubsubSubscriptionNameInput: string;
```

- *Type:* string

---

##### `gcpPubsubTopicNameInput`<sup>Optional</sup> <a name="gcpPubsubTopicNameInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubTopicNameInput"></a>

```typescript
public readonly gcpPubsubTopicNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationProviderInput`<sup>Optional</sup> <a name="notificationProviderInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.notificationProviderInput"></a>

```typescript
public readonly notificationProviderInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `awsSnsRoleArn`<sup>Required</sup> <a name="awsSnsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsRoleArn"></a>

```typescript
public readonly awsSnsRoleArn: string;
```

- *Type:* string

---

##### `awsSnsTopicArn`<sup>Required</sup> <a name="awsSnsTopicArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsTopicArn"></a>

```typescript
public readonly awsSnsTopicArn: string;
```

- *Type:* string

---

##### `awsSqsArn`<sup>Required</sup> <a name="awsSqsArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsArn"></a>

```typescript
public readonly awsSqsArn: string;
```

- *Type:* string

---

##### `awsSqsRoleArn`<sup>Required</sup> <a name="awsSqsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsRoleArn"></a>

```typescript
public readonly awsSqsRoleArn: string;
```

- *Type:* string

---

##### `azureStorageQueuePrimaryUri`<sup>Required</sup> <a name="azureStorageQueuePrimaryUri" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureStorageQueuePrimaryUri"></a>

```typescript
public readonly azureStorageQueuePrimaryUri: string;
```

- *Type:* string

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gcpPubsubSubscriptionName`<sup>Required</sup> <a name="gcpPubsubSubscriptionName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubSubscriptionName"></a>

```typescript
public readonly gcpPubsubSubscriptionName: string;
```

- *Type:* string

---

##### `gcpPubsubTopicName`<sup>Required</sup> <a name="gcpPubsubTopicName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubTopicName"></a>

```typescript
public readonly gcpPubsubTopicName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationProvider`<sup>Required</sup> <a name="notificationProvider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.notificationProvider"></a>

```typescript
public readonly notificationProvider: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationIntegrationConfig <a name="NotificationIntegrationConfig" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.Initializer"></a>

```typescript
import { notificationIntegration } from '@cdktf/provider-snowflake'

const notificationIntegrationConfig: notificationIntegration.NotificationIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#name NotificationIntegration#name}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.notificationProvider">notificationProvider</a></code> | <code>string</code> | The third-party cloud message queuing service (supported values: AZURE_STORAGE_QUEUE, AWS_SNS, GCP_PUBSUB; |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSnsRoleArn">awsSnsRoleArn</a></code> | <code>string</code> | AWS IAM role ARN for notification integration to assume. Required for AWS_SNS provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSnsTopicArn">awsSnsTopicArn</a></code> | <code>string</code> | AWS SNS Topic ARN for notification integration to connect to. Required for AWS_SNS provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSqsArn">awsSqsArn</a></code> | <code>string</code> | AWS SQS queue ARN for notification integration to connect to. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSqsRoleArn">awsSqsRoleArn</a></code> | <code>string</code> | AWS IAM role ARN for notification integration to assume. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.azureStorageQueuePrimaryUri">azureStorageQueuePrimaryUri</a></code> | <code>string</code> | The queue ID for the Azure Queue Storage queue created for Event Grid notifications. Required for AZURE_STORAGE_QUEUE provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | The ID of the Azure Active Directory tenant used for identity management. Required for AZURE_STORAGE_QUEUE provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.comment">comment</a></code> | <code>string</code> | A comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.direction">direction</a></code> | <code>string</code> | Direction of the cloud messaging with respect to Snowflake (required only for error notifications). |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#enabled NotificationIntegration#enabled}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.gcpPubsubSubscriptionName">gcpPubsubSubscriptionName</a></code> | <code>string</code> | The subscription id that Snowflake will listen to when using the GCP_PUBSUB provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.gcpPubsubTopicName">gcpPubsubTopicName</a></code> | <code>string</code> | The topic id that Snowflake will use to push notifications. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#id NotificationIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.type">type</a></code> | <code>string</code> | A type of integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#name NotificationIntegration#name}.

---

##### `notificationProvider`<sup>Required</sup> <a name="notificationProvider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.notificationProvider"></a>

```typescript
public readonly notificationProvider: string;
```

- *Type:* string

The third-party cloud message queuing service (supported values: AZURE_STORAGE_QUEUE, AWS_SNS, GCP_PUBSUB;

AWS_SQS is deprecated and will be removed in the future provider versions)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#notification_provider NotificationIntegration#notification_provider}

---

##### `awsSnsRoleArn`<sup>Optional</sup> <a name="awsSnsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSnsRoleArn"></a>

```typescript
public readonly awsSnsRoleArn: string;
```

- *Type:* string

AWS IAM role ARN for notification integration to assume. Required for AWS_SNS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#aws_sns_role_arn NotificationIntegration#aws_sns_role_arn}

---

##### `awsSnsTopicArn`<sup>Optional</sup> <a name="awsSnsTopicArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSnsTopicArn"></a>

```typescript
public readonly awsSnsTopicArn: string;
```

- *Type:* string

AWS SNS Topic ARN for notification integration to connect to. Required for AWS_SNS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#aws_sns_topic_arn NotificationIntegration#aws_sns_topic_arn}

---

##### `awsSqsArn`<sup>Optional</sup> <a name="awsSqsArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSqsArn"></a>

```typescript
public readonly awsSqsArn: string;
```

- *Type:* string

AWS SQS queue ARN for notification integration to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#aws_sqs_arn NotificationIntegration#aws_sqs_arn}

---

##### `awsSqsRoleArn`<sup>Optional</sup> <a name="awsSqsRoleArn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSqsRoleArn"></a>

```typescript
public readonly awsSqsRoleArn: string;
```

- *Type:* string

AWS IAM role ARN for notification integration to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#aws_sqs_role_arn NotificationIntegration#aws_sqs_role_arn}

---

##### `azureStorageQueuePrimaryUri`<sup>Optional</sup> <a name="azureStorageQueuePrimaryUri" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.azureStorageQueuePrimaryUri"></a>

```typescript
public readonly azureStorageQueuePrimaryUri: string;
```

- *Type:* string

The queue ID for the Azure Queue Storage queue created for Event Grid notifications. Required for AZURE_STORAGE_QUEUE provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#azure_storage_queue_primary_uri NotificationIntegration#azure_storage_queue_primary_uri}

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

The ID of the Azure Active Directory tenant used for identity management. Required for AZURE_STORAGE_QUEUE provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#azure_tenant_id NotificationIntegration#azure_tenant_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

A comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#comment NotificationIntegration#comment}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Direction of the cloud messaging with respect to Snowflake (required only for error notifications).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#direction NotificationIntegration#direction}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#enabled NotificationIntegration#enabled}.

---

##### `gcpPubsubSubscriptionName`<sup>Optional</sup> <a name="gcpPubsubSubscriptionName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.gcpPubsubSubscriptionName"></a>

```typescript
public readonly gcpPubsubSubscriptionName: string;
```

- *Type:* string

The subscription id that Snowflake will listen to when using the GCP_PUBSUB provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#gcp_pubsub_subscription_name NotificationIntegration#gcp_pubsub_subscription_name}

---

##### `gcpPubsubTopicName`<sup>Optional</sup> <a name="gcpPubsubTopicName" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.gcpPubsubTopicName"></a>

```typescript
public readonly gcpPubsubTopicName: string;
```

- *Type:* string

The topic id that Snowflake will use to push notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#gcp_pubsub_topic_name NotificationIntegration#gcp_pubsub_topic_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#id NotificationIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

A type of integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/notification_integration#type NotificationIntegration#type}

---



