# `sharedDatabase` Submodule <a name="`sharedDatabase` Submodule" id="@cdktf/provider-snowflake.sharedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedDatabase <a name="SharedDatabase" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database snowflake_shared_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.Initializer"></a>

```typescript
import { sharedDatabase } from '@cdktf/provider-snowflake'

new sharedDatabase.SharedDatabase(scope: Construct, id: string, config: SharedDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig">SharedDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig">SharedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetDefaultDdlCollation">resetDefaultDdlCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetEnableConsoleOutput">resetEnableConsoleOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetExternalVolume">resetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetQuotedIdentifiersIgnoreCase">resetQuotedIdentifiersIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetStorageSerializationPolicy">resetStorageSerializationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetSuspendTaskAfterNumFailures">resetSuspendTaskAfterNumFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetTaskAutoRetryAttempts">resetTaskAutoRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetTraceLevel">resetTraceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetUserTaskManagedInitialWarehouseSize">resetUserTaskManagedInitialWarehouseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetUserTaskMinimumTriggerIntervalInSeconds">resetUserTaskMinimumTriggerIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetUserTaskTimeoutMs">resetUserTaskTimeoutMs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDefaultDdlCollation` <a name="resetDefaultDdlCollation" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetDefaultDdlCollation"></a>

```typescript
public resetDefaultDdlCollation(): void
```

##### `resetEnableConsoleOutput` <a name="resetEnableConsoleOutput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetEnableConsoleOutput"></a>

```typescript
public resetEnableConsoleOutput(): void
```

##### `resetExternalVolume` <a name="resetExternalVolume" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetExternalVolume"></a>

```typescript
public resetExternalVolume(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetLogLevel"></a>

```typescript
public resetLogLevel(): void
```

##### `resetQuotedIdentifiersIgnoreCase` <a name="resetQuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetQuotedIdentifiersIgnoreCase"></a>

```typescript
public resetQuotedIdentifiersIgnoreCase(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetStorageSerializationPolicy` <a name="resetStorageSerializationPolicy" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetStorageSerializationPolicy"></a>

```typescript
public resetStorageSerializationPolicy(): void
```

##### `resetSuspendTaskAfterNumFailures` <a name="resetSuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetSuspendTaskAfterNumFailures"></a>

```typescript
public resetSuspendTaskAfterNumFailures(): void
```

##### `resetTaskAutoRetryAttempts` <a name="resetTaskAutoRetryAttempts" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetTaskAutoRetryAttempts"></a>

```typescript
public resetTaskAutoRetryAttempts(): void
```

##### `resetTraceLevel` <a name="resetTraceLevel" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetTraceLevel"></a>

```typescript
public resetTraceLevel(): void
```

##### `resetUserTaskManagedInitialWarehouseSize` <a name="resetUserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetUserTaskManagedInitialWarehouseSize"></a>

```typescript
public resetUserTaskManagedInitialWarehouseSize(): void
```

##### `resetUserTaskMinimumTriggerIntervalInSeconds` <a name="resetUserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetUserTaskMinimumTriggerIntervalInSeconds"></a>

```typescript
public resetUserTaskMinimumTriggerIntervalInSeconds(): void
```

##### `resetUserTaskTimeoutMs` <a name="resetUserTaskTimeoutMs" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.resetUserTaskTimeoutMs"></a>

```typescript
public resetUserTaskTimeoutMs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SharedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isConstruct"></a>

```typescript
import { sharedDatabase } from '@cdktf/provider-snowflake'

sharedDatabase.SharedDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isTerraformElement"></a>

```typescript
import { sharedDatabase } from '@cdktf/provider-snowflake'

sharedDatabase.SharedDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isTerraformResource"></a>

```typescript
import { sharedDatabase } from '@cdktf/provider-snowflake'

sharedDatabase.SharedDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.generateConfigForImport"></a>

```typescript
import { sharedDatabase } from '@cdktf/provider-snowflake'

sharedDatabase.SharedDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SharedDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SharedDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SharedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SharedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.defaultDdlCollationInput">defaultDdlCollationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.enableConsoleOutputInput">enableConsoleOutputInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.externalVolumeInput">externalVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.fromShareInput">fromShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.logLevelInput">logLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.quotedIdentifiersIgnoreCaseInput">quotedIdentifiersIgnoreCaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.storageSerializationPolicyInput">storageSerializationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.suspendTaskAfterNumFailuresInput">suspendTaskAfterNumFailuresInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.taskAutoRetryAttemptsInput">taskAutoRetryAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.traceLevelInput">traceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskManagedInitialWarehouseSizeInput">userTaskManagedInitialWarehouseSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskMinimumTriggerIntervalInSecondsInput">userTaskMinimumTriggerIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskTimeoutMsInput">userTaskTimeoutMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.defaultDdlCollation">defaultDdlCollation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.enableConsoleOutput">enableConsoleOutput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.externalVolume">externalVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.fromShare">fromShare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.quotedIdentifiersIgnoreCase">quotedIdentifiersIgnoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.taskAutoRetryAttempts">taskAutoRetryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.traceLevel">traceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskMinimumTriggerIntervalInSeconds">userTaskMinimumTriggerIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `defaultDdlCollationInput`<sup>Optional</sup> <a name="defaultDdlCollationInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.defaultDdlCollationInput"></a>

```typescript
public readonly defaultDdlCollationInput: string;
```

- *Type:* string

---

##### `enableConsoleOutputInput`<sup>Optional</sup> <a name="enableConsoleOutputInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.enableConsoleOutputInput"></a>

```typescript
public readonly enableConsoleOutputInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalVolumeInput`<sup>Optional</sup> <a name="externalVolumeInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.externalVolumeInput"></a>

```typescript
public readonly externalVolumeInput: string;
```

- *Type:* string

---

##### `fromShareInput`<sup>Optional</sup> <a name="fromShareInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.fromShareInput"></a>

```typescript
public readonly fromShareInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.logLevelInput"></a>

```typescript
public readonly logLevelInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `quotedIdentifiersIgnoreCaseInput`<sup>Optional</sup> <a name="quotedIdentifiersIgnoreCaseInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.quotedIdentifiersIgnoreCaseInput"></a>

```typescript
public readonly quotedIdentifiersIgnoreCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageSerializationPolicyInput`<sup>Optional</sup> <a name="storageSerializationPolicyInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.storageSerializationPolicyInput"></a>

```typescript
public readonly storageSerializationPolicyInput: string;
```

- *Type:* string

---

##### `suspendTaskAfterNumFailuresInput`<sup>Optional</sup> <a name="suspendTaskAfterNumFailuresInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.suspendTaskAfterNumFailuresInput"></a>

```typescript
public readonly suspendTaskAfterNumFailuresInput: number;
```

- *Type:* number

---

##### `taskAutoRetryAttemptsInput`<sup>Optional</sup> <a name="taskAutoRetryAttemptsInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.taskAutoRetryAttemptsInput"></a>

```typescript
public readonly taskAutoRetryAttemptsInput: number;
```

- *Type:* number

---

##### `traceLevelInput`<sup>Optional</sup> <a name="traceLevelInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.traceLevelInput"></a>

```typescript
public readonly traceLevelInput: string;
```

- *Type:* string

---

##### `userTaskManagedInitialWarehouseSizeInput`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSizeInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskManagedInitialWarehouseSizeInput"></a>

```typescript
public readonly userTaskManagedInitialWarehouseSizeInput: string;
```

- *Type:* string

---

##### `userTaskMinimumTriggerIntervalInSecondsInput`<sup>Optional</sup> <a name="userTaskMinimumTriggerIntervalInSecondsInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskMinimumTriggerIntervalInSecondsInput"></a>

```typescript
public readonly userTaskMinimumTriggerIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `userTaskTimeoutMsInput`<sup>Optional</sup> <a name="userTaskTimeoutMsInput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskTimeoutMsInput"></a>

```typescript
public readonly userTaskTimeoutMsInput: number;
```

- *Type:* number

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `defaultDdlCollation`<sup>Required</sup> <a name="defaultDdlCollation" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.defaultDdlCollation"></a>

```typescript
public readonly defaultDdlCollation: string;
```

- *Type:* string

---

##### `enableConsoleOutput`<sup>Required</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.enableConsoleOutput"></a>

```typescript
public readonly enableConsoleOutput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.externalVolume"></a>

```typescript
public readonly externalVolume: string;
```

- *Type:* string

---

##### `fromShare`<sup>Required</sup> <a name="fromShare" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.fromShare"></a>

```typescript
public readonly fromShare: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `quotedIdentifiersIgnoreCase`<sup>Required</sup> <a name="quotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.quotedIdentifiersIgnoreCase"></a>

```typescript
public readonly quotedIdentifiersIgnoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageSerializationPolicy`<sup>Required</sup> <a name="storageSerializationPolicy" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.storageSerializationPolicy"></a>

```typescript
public readonly storageSerializationPolicy: string;
```

- *Type:* string

---

##### `suspendTaskAfterNumFailures`<sup>Required</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.suspendTaskAfterNumFailures"></a>

```typescript
public readonly suspendTaskAfterNumFailures: number;
```

- *Type:* number

---

##### `taskAutoRetryAttempts`<sup>Required</sup> <a name="taskAutoRetryAttempts" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.taskAutoRetryAttempts"></a>

```typescript
public readonly taskAutoRetryAttempts: number;
```

- *Type:* number

---

##### `traceLevel`<sup>Required</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.traceLevel"></a>

```typescript
public readonly traceLevel: string;
```

- *Type:* string

---

##### `userTaskManagedInitialWarehouseSize`<sup>Required</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskManagedInitialWarehouseSize"></a>

```typescript
public readonly userTaskManagedInitialWarehouseSize: string;
```

- *Type:* string

---

##### `userTaskMinimumTriggerIntervalInSeconds`<sup>Required</sup> <a name="userTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```typescript
public readonly userTaskMinimumTriggerIntervalInSeconds: number;
```

- *Type:* number

---

##### `userTaskTimeoutMs`<sup>Required</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.userTaskTimeoutMs"></a>

```typescript
public readonly userTaskTimeoutMs: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SharedDatabaseConfig <a name="SharedDatabaseConfig" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.Initializer"></a>

```typescript
import { sharedDatabase } from '@cdktf/provider-snowflake'

const sharedDatabaseConfig: sharedDatabase.SharedDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.fromShare">fromShare</a></code> | <code>string</code> | A fully qualified path to a share from which the database will be created. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the database; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.catalog">catalog</a></code> | <code>string</code> | The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog). |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the database. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.defaultDdlCollation">defaultDdlCollation</a></code> | <code>string</code> | Specifies a default collation specification for all schemas and tables added to the database. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.enableConsoleOutput">enableConsoleOutput</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, enables stdout/stderr fast path logging for anonymous stored procedures. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.externalVolume">externalVolume</a></code> | <code>string</code> | The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume). |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#id SharedDatabase#id}. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.logLevel">logLevel</a></code> | <code>string</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.quotedIdentifiersIgnoreCase">quotedIdentifiersIgnoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case). |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>string</code> | The storage serialization policy for Iceberg tables that use Snowflake as the catalog. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>number</code> | How many times a task must fail in a row before it is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.taskAutoRetryAttempts">taskAutoRetryAttempts</a></code> | <code>number</code> | Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts). |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.traceLevel">traceLevel</a></code> | <code>string</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>string</code> | The initial size of warehouse to use for managed warehouses in the absence of history. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.userTaskMinimumTriggerIntervalInSeconds">userTaskMinimumTriggerIntervalInSeconds</a></code> | <code>number</code> | Minimum amount of time between Triggered Task executions in seconds. |
| <code><a href="#@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>number</code> | User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fromShare`<sup>Required</sup> <a name="fromShare" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.fromShare"></a>

```typescript
public readonly fromShare: string;
```

- *Type:* string

A fully qualified path to a share from which the database will be created.

A fully qualified path follows the format of `"<organization_name>"."<account_name>"."<share_name>"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#from_share SharedDatabase#from_share}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the database; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#name SharedDatabase#name}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#catalog SharedDatabase#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#comment SharedDatabase#comment}

---

##### `defaultDdlCollation`<sup>Optional</sup> <a name="defaultDdlCollation" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.defaultDdlCollation"></a>

```typescript
public readonly defaultDdlCollation: string;
```

- *Type:* string

Specifies a default collation specification for all schemas and tables added to the database.

It can be overridden on schema or table level. For more information, see [collation specification](https://docs.snowflake.com/en/sql-reference/collation#label-collation-specification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#default_ddl_collation SharedDatabase#default_ddl_collation}

---

##### `enableConsoleOutput`<sup>Optional</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.enableConsoleOutput"></a>

```typescript
public readonly enableConsoleOutput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, enables stdout/stderr fast path logging for anonymous stored procedures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#enable_console_output SharedDatabase#enable_console_output}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.externalVolume"></a>

```typescript
public readonly externalVolume: string;
```

- *Type:* string

The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#external_volume SharedDatabase#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#id SharedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

Specifies the severity level of messages that should be ingested and made available in the active event table.

Valid options are: [TRACE DEBUG INFO WARN ERROR FATAL OFF]. Messages at the specified level (and at more severe levels) are ingested. For more information, see [LOG_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#log_level SharedDatabase#log_level}

---

##### `quotedIdentifiersIgnoreCase`<sup>Optional</sup> <a name="quotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.quotedIdentifiersIgnoreCase"></a>

```typescript
public readonly quotedIdentifiersIgnoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#quoted_identifiers_ignore_case SharedDatabase#quoted_identifiers_ignore_case}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table.

You can only set this parameter for tables that use an external Iceberg catalog. For more information, see [REPLACE_INVALID_CHARACTERS](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#replace_invalid_characters SharedDatabase#replace_invalid_characters}

---

##### `storageSerializationPolicy`<sup>Optional</sup> <a name="storageSerializationPolicy" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.storageSerializationPolicy"></a>

```typescript
public readonly storageSerializationPolicy: string;
```

- *Type:* string

The storage serialization policy for Iceberg tables that use Snowflake as the catalog.

Valid options are: [COMPATIBLE OPTIMIZED]. COMPATIBLE: Snowflake performs encoding and compression of data files that ensures interoperability with third-party compute engines. OPTIMIZED: Snowflake performs encoding and compression of data files that ensures the best table performance within Snowflake. For more information, see [STORAGE_SERIALIZATION_POLICY](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#storage_serialization_policy SharedDatabase#storage_serialization_policy}

---

##### `suspendTaskAfterNumFailures`<sup>Optional</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.suspendTaskAfterNumFailures"></a>

```typescript
public readonly suspendTaskAfterNumFailures: number;
```

- *Type:* number

How many times a task must fail in a row before it is automatically suspended.

0 disables auto-suspending. For more information, see [SUSPEND_TASK_AFTER_NUM_FAILURES](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#suspend_task_after_num_failures SharedDatabase#suspend_task_after_num_failures}

---

##### `taskAutoRetryAttempts`<sup>Optional</sup> <a name="taskAutoRetryAttempts" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.taskAutoRetryAttempts"></a>

```typescript
public readonly taskAutoRetryAttempts: number;
```

- *Type:* number

Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#task_auto_retry_attempts SharedDatabase#task_auto_retry_attempts}

---

##### `traceLevel`<sup>Optional</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.traceLevel"></a>

```typescript
public readonly traceLevel: string;
```

- *Type:* string

Controls how trace events are ingested into the event table.

Valid options are: [ALWAYS ON_EVENT OFF]. For information about levels, see [TRACE_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#trace_level SharedDatabase#trace_level}

---

##### `userTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.userTaskManagedInitialWarehouseSize"></a>

```typescript
public readonly userTaskManagedInitialWarehouseSize: string;
```

- *Type:* string

The initial size of warehouse to use for managed warehouses in the absence of history.

For more information, see [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#user_task_managed_initial_warehouse_size SharedDatabase#user_task_managed_initial_warehouse_size}

---

##### `userTaskMinimumTriggerIntervalInSeconds`<sup>Optional</sup> <a name="userTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```typescript
public readonly userTaskMinimumTriggerIntervalInSeconds: number;
```

- *Type:* number

Minimum amount of time between Triggered Task executions in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#user_task_minimum_trigger_interval_in_seconds SharedDatabase#user_task_minimum_trigger_interval_in_seconds}

---

##### `userTaskTimeoutMs`<sup>Optional</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.sharedDatabase.SharedDatabaseConfig.property.userTaskTimeoutMs"></a>

```typescript
public readonly userTaskTimeoutMs: number;
```

- *Type:* number

User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/shared_database#user_task_timeout_ms SharedDatabase#user_task_timeout_ms}

---



