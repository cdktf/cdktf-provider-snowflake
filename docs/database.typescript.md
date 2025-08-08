# `database` Submodule <a name="`database` Submodule" id="@cdktf/provider-snowflake.database"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Database <a name="Database" id="@cdktf/provider-snowflake.database.Database"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database snowflake_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.Database.Initializer"></a>

```typescript
import { database } from '@cdktf/provider-snowflake'

new database.Database(scope: Construct, id: string, config: DatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig">DatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseConfig">DatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.database.Database.putReplication">putReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetDataRetentionTimeInDays">resetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetDefaultDdlCollation">resetDefaultDdlCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetDropPublicSchemaOnCreation">resetDropPublicSchemaOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetEnableConsoleOutput">resetEnableConsoleOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetExternalVolume">resetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetIsTransient">resetIsTransient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetMaxDataExtensionTimeInDays">resetMaxDataExtensionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetQuotedIdentifiersIgnoreCase">resetQuotedIdentifiersIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetReplication">resetReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetStorageSerializationPolicy">resetStorageSerializationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetSuspendTaskAfterNumFailures">resetSuspendTaskAfterNumFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetTaskAutoRetryAttempts">resetTaskAutoRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetTraceLevel">resetTraceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetUserTaskManagedInitialWarehouseSize">resetUserTaskManagedInitialWarehouseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetUserTaskMinimumTriggerIntervalInSeconds">resetUserTaskMinimumTriggerIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetUserTaskTimeoutMs">resetUserTaskTimeoutMs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.database.Database.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.database.Database.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.database.Database.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.Database.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.database.Database.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.database.Database.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.database.Database.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.database.Database.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.database.Database.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.database.Database.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.database.Database.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.database.Database.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.database.Database.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.database.Database.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.database.Database.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.database.Database.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.database.Database.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.database.Database.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.database.Database.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.database.Database.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.Database.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.database.Database.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.database.Database.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.database.Database.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.database.Database.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.database.Database.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.database.Database.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReplication` <a name="putReplication" id="@cdktf/provider-snowflake.database.Database.putReplication"></a>

```typescript
public putReplication(value: DatabaseReplication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.Database.putReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.database.Database.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.Database.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts">DatabaseTimeouts</a>

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktf/provider-snowflake.database.Database.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.database.Database.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDataRetentionTimeInDays` <a name="resetDataRetentionTimeInDays" id="@cdktf/provider-snowflake.database.Database.resetDataRetentionTimeInDays"></a>

```typescript
public resetDataRetentionTimeInDays(): void
```

##### `resetDefaultDdlCollation` <a name="resetDefaultDdlCollation" id="@cdktf/provider-snowflake.database.Database.resetDefaultDdlCollation"></a>

```typescript
public resetDefaultDdlCollation(): void
```

##### `resetDropPublicSchemaOnCreation` <a name="resetDropPublicSchemaOnCreation" id="@cdktf/provider-snowflake.database.Database.resetDropPublicSchemaOnCreation"></a>

```typescript
public resetDropPublicSchemaOnCreation(): void
```

##### `resetEnableConsoleOutput` <a name="resetEnableConsoleOutput" id="@cdktf/provider-snowflake.database.Database.resetEnableConsoleOutput"></a>

```typescript
public resetEnableConsoleOutput(): void
```

##### `resetExternalVolume` <a name="resetExternalVolume" id="@cdktf/provider-snowflake.database.Database.resetExternalVolume"></a>

```typescript
public resetExternalVolume(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.database.Database.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsTransient` <a name="resetIsTransient" id="@cdktf/provider-snowflake.database.Database.resetIsTransient"></a>

```typescript
public resetIsTransient(): void
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-snowflake.database.Database.resetLogLevel"></a>

```typescript
public resetLogLevel(): void
```

##### `resetMaxDataExtensionTimeInDays` <a name="resetMaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.database.Database.resetMaxDataExtensionTimeInDays"></a>

```typescript
public resetMaxDataExtensionTimeInDays(): void
```

##### `resetQuotedIdentifiersIgnoreCase` <a name="resetQuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.database.Database.resetQuotedIdentifiersIgnoreCase"></a>

```typescript
public resetQuotedIdentifiersIgnoreCase(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktf/provider-snowflake.database.Database.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetReplication` <a name="resetReplication" id="@cdktf/provider-snowflake.database.Database.resetReplication"></a>

```typescript
public resetReplication(): void
```

##### `resetStorageSerializationPolicy` <a name="resetStorageSerializationPolicy" id="@cdktf/provider-snowflake.database.Database.resetStorageSerializationPolicy"></a>

```typescript
public resetStorageSerializationPolicy(): void
```

##### `resetSuspendTaskAfterNumFailures` <a name="resetSuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.database.Database.resetSuspendTaskAfterNumFailures"></a>

```typescript
public resetSuspendTaskAfterNumFailures(): void
```

##### `resetTaskAutoRetryAttempts` <a name="resetTaskAutoRetryAttempts" id="@cdktf/provider-snowflake.database.Database.resetTaskAutoRetryAttempts"></a>

```typescript
public resetTaskAutoRetryAttempts(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.database.Database.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTraceLevel` <a name="resetTraceLevel" id="@cdktf/provider-snowflake.database.Database.resetTraceLevel"></a>

```typescript
public resetTraceLevel(): void
```

##### `resetUserTaskManagedInitialWarehouseSize` <a name="resetUserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.database.Database.resetUserTaskManagedInitialWarehouseSize"></a>

```typescript
public resetUserTaskManagedInitialWarehouseSize(): void
```

##### `resetUserTaskMinimumTriggerIntervalInSeconds` <a name="resetUserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.database.Database.resetUserTaskMinimumTriggerIntervalInSeconds"></a>

```typescript
public resetUserTaskMinimumTriggerIntervalInSeconds(): void
```

##### `resetUserTaskTimeoutMs` <a name="resetUserTaskTimeoutMs" id="@cdktf/provider-snowflake.database.Database.resetUserTaskTimeoutMs"></a>

```typescript
public resetUserTaskTimeoutMs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.database.Database.isConstruct"></a>

```typescript
import { database } from '@cdktf/provider-snowflake'

database.Database.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.database.Database.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.database.Database.isTerraformElement"></a>

```typescript
import { database } from '@cdktf/provider-snowflake'

database.Database.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.database.Database.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.database.Database.isTerraformResource"></a>

```typescript
import { database } from '@cdktf/provider-snowflake'

database.Database.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.database.Database.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport"></a>

```typescript
import { database } from '@cdktf/provider-snowflake'

database.Database.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Database to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Database that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Database to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replication">replication</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference">DatabaseReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference">DatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDaysInput">dataRetentionTimeInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.defaultDdlCollationInput">defaultDdlCollationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dropPublicSchemaOnCreationInput">dropPublicSchemaOnCreationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.enableConsoleOutputInput">enableConsoleOutputInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.externalVolumeInput">externalVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.isTransientInput">isTransientInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.logLevelInput">logLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.maxDataExtensionTimeInDaysInput">maxDataExtensionTimeInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.quotedIdentifiersIgnoreCaseInput">quotedIdentifiersIgnoreCaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replicationInput">replicationInput</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.storageSerializationPolicyInput">storageSerializationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.suspendTaskAfterNumFailuresInput">suspendTaskAfterNumFailuresInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.taskAutoRetryAttemptsInput">taskAutoRetryAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts">DatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.traceLevelInput">traceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskManagedInitialWarehouseSizeInput">userTaskManagedInitialWarehouseSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskMinimumTriggerIntervalInSecondsInput">userTaskMinimumTriggerIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskTimeoutMsInput">userTaskTimeoutMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.defaultDdlCollation">defaultDdlCollation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dropPublicSchemaOnCreation">dropPublicSchemaOnCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.enableConsoleOutput">enableConsoleOutput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.externalVolume">externalVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.isTransient">isTransient</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.quotedIdentifiersIgnoreCase">quotedIdentifiersIgnoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.taskAutoRetryAttempts">taskAutoRetryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.traceLevel">traceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskMinimumTriggerIntervalInSeconds">userTaskMinimumTriggerIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.database.Database.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.database.Database.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.Database.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.database.Database.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.database.Database.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.database.Database.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.database.Database.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.database.Database.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.database.Database.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.database.Database.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.database.Database.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.database.Database.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.Database.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.database.Database.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.database.Database.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-snowflake.database.Database.property.replication"></a>

```typescript
public readonly replication: DatabaseReplicationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference">DatabaseReplicationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.database.Database.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference">DatabaseTimeoutsOutputReference</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktf/provider-snowflake.database.Database.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.database.Database.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `dataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="dataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDaysInput"></a>

```typescript
public readonly dataRetentionTimeInDaysInput: number;
```

- *Type:* number

---

##### `defaultDdlCollationInput`<sup>Optional</sup> <a name="defaultDdlCollationInput" id="@cdktf/provider-snowflake.database.Database.property.defaultDdlCollationInput"></a>

```typescript
public readonly defaultDdlCollationInput: string;
```

- *Type:* string

---

##### `dropPublicSchemaOnCreationInput`<sup>Optional</sup> <a name="dropPublicSchemaOnCreationInput" id="@cdktf/provider-snowflake.database.Database.property.dropPublicSchemaOnCreationInput"></a>

```typescript
public readonly dropPublicSchemaOnCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableConsoleOutputInput`<sup>Optional</sup> <a name="enableConsoleOutputInput" id="@cdktf/provider-snowflake.database.Database.property.enableConsoleOutputInput"></a>

```typescript
public readonly enableConsoleOutputInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalVolumeInput`<sup>Optional</sup> <a name="externalVolumeInput" id="@cdktf/provider-snowflake.database.Database.property.externalVolumeInput"></a>

```typescript
public readonly externalVolumeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.database.Database.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isTransientInput`<sup>Optional</sup> <a name="isTransientInput" id="@cdktf/provider-snowflake.database.Database.property.isTransientInput"></a>

```typescript
public readonly isTransientInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-snowflake.database.Database.property.logLevelInput"></a>

```typescript
public readonly logLevelInput: string;
```

- *Type:* string

---

##### `maxDataExtensionTimeInDaysInput`<sup>Optional</sup> <a name="maxDataExtensionTimeInDaysInput" id="@cdktf/provider-snowflake.database.Database.property.maxDataExtensionTimeInDaysInput"></a>

```typescript
public readonly maxDataExtensionTimeInDaysInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.database.Database.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `quotedIdentifiersIgnoreCaseInput`<sup>Optional</sup> <a name="quotedIdentifiersIgnoreCaseInput" id="@cdktf/provider-snowflake.database.Database.property.quotedIdentifiersIgnoreCaseInput"></a>

```typescript
public readonly quotedIdentifiersIgnoreCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktf/provider-snowflake.database.Database.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replicationInput`<sup>Optional</sup> <a name="replicationInput" id="@cdktf/provider-snowflake.database.Database.property.replicationInput"></a>

```typescript
public readonly replicationInput: DatabaseReplication;
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

---

##### `storageSerializationPolicyInput`<sup>Optional</sup> <a name="storageSerializationPolicyInput" id="@cdktf/provider-snowflake.database.Database.property.storageSerializationPolicyInput"></a>

```typescript
public readonly storageSerializationPolicyInput: string;
```

- *Type:* string

---

##### `suspendTaskAfterNumFailuresInput`<sup>Optional</sup> <a name="suspendTaskAfterNumFailuresInput" id="@cdktf/provider-snowflake.database.Database.property.suspendTaskAfterNumFailuresInput"></a>

```typescript
public readonly suspendTaskAfterNumFailuresInput: number;
```

- *Type:* number

---

##### `taskAutoRetryAttemptsInput`<sup>Optional</sup> <a name="taskAutoRetryAttemptsInput" id="@cdktf/provider-snowflake.database.Database.property.taskAutoRetryAttemptsInput"></a>

```typescript
public readonly taskAutoRetryAttemptsInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.database.Database.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts">DatabaseTimeouts</a>

---

##### `traceLevelInput`<sup>Optional</sup> <a name="traceLevelInput" id="@cdktf/provider-snowflake.database.Database.property.traceLevelInput"></a>

```typescript
public readonly traceLevelInput: string;
```

- *Type:* string

---

##### `userTaskManagedInitialWarehouseSizeInput`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSizeInput" id="@cdktf/provider-snowflake.database.Database.property.userTaskManagedInitialWarehouseSizeInput"></a>

```typescript
public readonly userTaskManagedInitialWarehouseSizeInput: string;
```

- *Type:* string

---

##### `userTaskMinimumTriggerIntervalInSecondsInput`<sup>Optional</sup> <a name="userTaskMinimumTriggerIntervalInSecondsInput" id="@cdktf/provider-snowflake.database.Database.property.userTaskMinimumTriggerIntervalInSecondsInput"></a>

```typescript
public readonly userTaskMinimumTriggerIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `userTaskTimeoutMsInput`<sup>Optional</sup> <a name="userTaskTimeoutMsInput" id="@cdktf/provider-snowflake.database.Database.property.userTaskTimeoutMsInput"></a>

```typescript
public readonly userTaskTimeoutMsInput: number;
```

- *Type:* number

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-snowflake.database.Database.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.database.Database.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDays"></a>

```typescript
public readonly dataRetentionTimeInDays: number;
```

- *Type:* number

---

##### `defaultDdlCollation`<sup>Required</sup> <a name="defaultDdlCollation" id="@cdktf/provider-snowflake.database.Database.property.defaultDdlCollation"></a>

```typescript
public readonly defaultDdlCollation: string;
```

- *Type:* string

---

##### `dropPublicSchemaOnCreation`<sup>Required</sup> <a name="dropPublicSchemaOnCreation" id="@cdktf/provider-snowflake.database.Database.property.dropPublicSchemaOnCreation"></a>

```typescript
public readonly dropPublicSchemaOnCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableConsoleOutput`<sup>Required</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.database.Database.property.enableConsoleOutput"></a>

```typescript
public readonly enableConsoleOutput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktf/provider-snowflake.database.Database.property.externalVolume"></a>

```typescript
public readonly externalVolume: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isTransient`<sup>Required</sup> <a name="isTransient" id="@cdktf/provider-snowflake.database.Database.property.isTransient"></a>

```typescript
public readonly isTransient: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-snowflake.database.Database.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `maxDataExtensionTimeInDays`<sup>Required</sup> <a name="maxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.database.Database.property.maxDataExtensionTimeInDays"></a>

```typescript
public readonly maxDataExtensionTimeInDays: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.database.Database.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `quotedIdentifiersIgnoreCase`<sup>Required</sup> <a name="quotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.database.Database.property.quotedIdentifiersIgnoreCase"></a>

```typescript
public readonly quotedIdentifiersIgnoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.database.Database.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageSerializationPolicy`<sup>Required</sup> <a name="storageSerializationPolicy" id="@cdktf/provider-snowflake.database.Database.property.storageSerializationPolicy"></a>

```typescript
public readonly storageSerializationPolicy: string;
```

- *Type:* string

---

##### `suspendTaskAfterNumFailures`<sup>Required</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.database.Database.property.suspendTaskAfterNumFailures"></a>

```typescript
public readonly suspendTaskAfterNumFailures: number;
```

- *Type:* number

---

##### `taskAutoRetryAttempts`<sup>Required</sup> <a name="taskAutoRetryAttempts" id="@cdktf/provider-snowflake.database.Database.property.taskAutoRetryAttempts"></a>

```typescript
public readonly taskAutoRetryAttempts: number;
```

- *Type:* number

---

##### `traceLevel`<sup>Required</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.database.Database.property.traceLevel"></a>

```typescript
public readonly traceLevel: string;
```

- *Type:* string

---

##### `userTaskManagedInitialWarehouseSize`<sup>Required</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.database.Database.property.userTaskManagedInitialWarehouseSize"></a>

```typescript
public readonly userTaskManagedInitialWarehouseSize: string;
```

- *Type:* string

---

##### `userTaskMinimumTriggerIntervalInSeconds`<sup>Required</sup> <a name="userTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.database.Database.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```typescript
public readonly userTaskMinimumTriggerIntervalInSeconds: number;
```

- *Type:* number

---

##### `userTaskTimeoutMs`<sup>Required</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.database.Database.property.userTaskTimeoutMs"></a>

```typescript
public readonly userTaskTimeoutMs: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.database.Database.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseConfig <a name="DatabaseConfig" id="@cdktf/provider-snowflake.database.DatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseConfig.Initializer"></a>

```typescript
import { database } from '@cdktf/provider-snowflake'

const databaseConfig: database.DatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the database; |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.catalog">catalog</a></code> | <code>string</code> | The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog). |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the database. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>number</code> | Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.defaultDdlCollation">defaultDdlCollation</a></code> | <code>string</code> | Specifies a default collation specification for all schemas and tables added to the database. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.dropPublicSchemaOnCreation">dropPublicSchemaOnCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to drop public schema on creation or not. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.enableConsoleOutput">enableConsoleOutput</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, enables stdout/stderr fast path logging for anonymous stored procedures. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.externalVolume">externalVolume</a></code> | <code>string</code> | The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume). |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#id Database#id}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.isTransient">isTransient</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies the database as transient. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.logLevel">logLevel</a></code> | <code>string</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>number</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.quotedIdentifiersIgnoreCase">quotedIdentifiersIgnoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case). |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.replication">replication</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a></code> | replication block. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>string</code> | The storage serialization policy for Iceberg tables that use Snowflake as the catalog. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>number</code> | How many times a task must fail in a row before it is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.taskAutoRetryAttempts">taskAutoRetryAttempts</a></code> | <code>number</code> | Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts). |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts">DatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.traceLevel">traceLevel</a></code> | <code>string</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>string</code> | The initial size of warehouse to use for managed warehouses in the absence of history. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskMinimumTriggerIntervalInSeconds">userTaskMinimumTriggerIntervalInSeconds</a></code> | <code>number</code> | Minimum amount of time between Triggered Task executions in seconds. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>number</code> | User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the database;

must be unique for your account. As a best practice for [Database Replication and Failover](https://docs.snowflake.com/en/user-guide/db-replication-intro), it is recommended to give each secondary database the same name as its primary database. This practice supports referencing fully-qualified objects (i.e. '<db>.<schema>.<object>') by other objects in the same database, such as querying a fully-qualified table name in a view. If a secondary database has a different name from the primary database, then these object references would break in the secondary database. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#name Database#name}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#catalog Database#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#comment Database#comment}

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.dataRetentionTimeInDays"></a>

```typescript
public readonly dataRetentionTimeInDays: number;
```

- *Type:* number

Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database.

For more details, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#data_retention_time_in_days Database#data_retention_time_in_days}

---

##### `defaultDdlCollation`<sup>Optional</sup> <a name="defaultDdlCollation" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.defaultDdlCollation"></a>

```typescript
public readonly defaultDdlCollation: string;
```

- *Type:* string

Specifies a default collation specification for all schemas and tables added to the database.

It can be overridden on schema or table level. For more information, see [collation specification](https://docs.snowflake.com/en/sql-reference/collation#label-collation-specification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#default_ddl_collation Database#default_ddl_collation}

---

##### `dropPublicSchemaOnCreation`<sup>Optional</sup> <a name="dropPublicSchemaOnCreation" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.dropPublicSchemaOnCreation"></a>

```typescript
public readonly dropPublicSchemaOnCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to drop public schema on creation or not.

Modifying the parameter after database is already created won't have any effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#drop_public_schema_on_creation Database#drop_public_schema_on_creation}

---

##### `enableConsoleOutput`<sup>Optional</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.enableConsoleOutput"></a>

```typescript
public readonly enableConsoleOutput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, enables stdout/stderr fast path logging for anonymous stored procedures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#enable_console_output Database#enable_console_output}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.externalVolume"></a>

```typescript
public readonly externalVolume: string;
```

- *Type:* string

The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#external_volume Database#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTransient`<sup>Optional</sup> <a name="isTransient" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.isTransient"></a>

```typescript
public readonly isTransient: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies the database as transient.

Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#is_transient Database#is_transient}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

Specifies the severity level of messages that should be ingested and made available in the active event table.

Valid options are: [TRACE DEBUG INFO WARN ERROR FATAL OFF]. Messages at the specified level (and at more severe levels) are ingested. For more information, see [LOG_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#log_level Database#log_level}

---

##### `maxDataExtensionTimeInDays`<sup>Optional</sup> <a name="maxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.maxDataExtensionTimeInDays"></a>

```typescript
public readonly maxDataExtensionTimeInDays: number;
```

- *Type:* number

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale.

For a detailed description of this parameter, see [MAX_DATA_EXTENSION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters.html#label-max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#max_data_extension_time_in_days Database#max_data_extension_time_in_days}

---

##### `quotedIdentifiersIgnoreCase`<sup>Optional</sup> <a name="quotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.quotedIdentifiersIgnoreCase"></a>

```typescript
public readonly quotedIdentifiersIgnoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#quoted_identifiers_ignore_case Database#quoted_identifiers_ignore_case}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table.

You can only set this parameter for tables that use an external Iceberg catalog. For more information, see [REPLACE_INVALID_CHARACTERS](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#replace_invalid_characters Database#replace_invalid_characters}

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.replication"></a>

```typescript
public readonly replication: DatabaseReplication;
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#replication Database#replication}

---

##### `storageSerializationPolicy`<sup>Optional</sup> <a name="storageSerializationPolicy" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.storageSerializationPolicy"></a>

```typescript
public readonly storageSerializationPolicy: string;
```

- *Type:* string

The storage serialization policy for Iceberg tables that use Snowflake as the catalog.

Valid options are: [COMPATIBLE OPTIMIZED]. COMPATIBLE: Snowflake performs encoding and compression of data files that ensures interoperability with third-party compute engines. OPTIMIZED: Snowflake performs encoding and compression of data files that ensures the best table performance within Snowflake. For more information, see [STORAGE_SERIALIZATION_POLICY](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#storage_serialization_policy Database#storage_serialization_policy}

---

##### `suspendTaskAfterNumFailures`<sup>Optional</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.suspendTaskAfterNumFailures"></a>

```typescript
public readonly suspendTaskAfterNumFailures: number;
```

- *Type:* number

How many times a task must fail in a row before it is automatically suspended.

0 disables auto-suspending. For more information, see [SUSPEND_TASK_AFTER_NUM_FAILURES](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#suspend_task_after_num_failures Database#suspend_task_after_num_failures}

---

##### `taskAutoRetryAttempts`<sup>Optional</sup> <a name="taskAutoRetryAttempts" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.taskAutoRetryAttempts"></a>

```typescript
public readonly taskAutoRetryAttempts: number;
```

- *Type:* number

Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#task_auto_retry_attempts Database#task_auto_retry_attempts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts">DatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#timeouts Database#timeouts}

---

##### `traceLevel`<sup>Optional</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.traceLevel"></a>

```typescript
public readonly traceLevel: string;
```

- *Type:* string

Controls how trace events are ingested into the event table.

Valid options are: `ALWAYS` | `ON_EVENT` | `PROPAGATE` | `OFF`. For information about levels, see [TRACE_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#trace_level Database#trace_level}

---

##### `userTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskManagedInitialWarehouseSize"></a>

```typescript
public readonly userTaskManagedInitialWarehouseSize: string;
```

- *Type:* string

The initial size of warehouse to use for managed warehouses in the absence of history.

For more information, see [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#user_task_managed_initial_warehouse_size Database#user_task_managed_initial_warehouse_size}

---

##### `userTaskMinimumTriggerIntervalInSeconds`<sup>Optional</sup> <a name="userTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```typescript
public readonly userTaskMinimumTriggerIntervalInSeconds: number;
```

- *Type:* number

Minimum amount of time between Triggered Task executions in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#user_task_minimum_trigger_interval_in_seconds Database#user_task_minimum_trigger_interval_in_seconds}

---

##### `userTaskTimeoutMs`<sup>Optional</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskTimeoutMs"></a>

```typescript
public readonly userTaskTimeoutMs: number;
```

- *Type:* number

User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#user_task_timeout_ms Database#user_task_timeout_ms}

---

### DatabaseReplication <a name="DatabaseReplication" id="@cdktf/provider-snowflake.database.DatabaseReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseReplication.Initializer"></a>

```typescript
import { database } from '@cdktf/provider-snowflake'

const databaseReplication: database.DatabaseReplication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication.property.enableToAccount">enableToAccount</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>[]</code> | enable_to_account block. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows replicating data to accounts on lower editions in either of the following scenarios: 1. |

---

##### `enableToAccount`<sup>Required</sup> <a name="enableToAccount" id="@cdktf/provider-snowflake.database.DatabaseReplication.property.enableToAccount"></a>

```typescript
public readonly enableToAccount: IResolvable | DatabaseReplicationEnableToAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>[]

enable_to_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#enable_to_account Database#enable_to_account}

---

##### `ignoreEditionCheck`<sup>Optional</sup> <a name="ignoreEditionCheck" id="@cdktf/provider-snowflake.database.DatabaseReplication.property.ignoreEditionCheck"></a>

```typescript
public readonly ignoreEditionCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows replicating data to accounts on lower editions in either of the following scenarios: 1.

The primary database is in a Business Critical (or higher) account but one or more of the accounts approved for replication are on lower editions. Business Critical Edition is intended for Snowflake accounts with extremely sensitive data. 2. The primary database is in a Business Critical (or higher) account and a signed business associate agreement is in place to store PHI data in the account per HIPAA and HITRUST regulations, but no such agreement is in place for one or more of the accounts approved for replication, regardless if they are Business Critical (or higher) accounts. Both scenarios are prohibited by default in an effort to help prevent account administrators for Business Critical (or higher) accounts from inadvertently replicating sensitive data to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#ignore_edition_check Database#ignore_edition_check}

---

### DatabaseReplicationEnableToAccount <a name="DatabaseReplicationEnableToAccount" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.Initializer"></a>

```typescript
import { database } from '@cdktf/provider-snowflake'

const databaseReplicationEnableToAccount: database.DatabaseReplicationEnableToAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.property.accountIdentifier">accountIdentifier</a></code> | <code>string</code> | Specifies account identifier for which replication should be enabled. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.property.withFailover">withFailover</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if failover should be enabled for the specified account identifier. |

---

##### `accountIdentifier`<sup>Required</sup> <a name="accountIdentifier" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.property.accountIdentifier"></a>

```typescript
public readonly accountIdentifier: string;
```

- *Type:* string

Specifies account identifier for which replication should be enabled.

The account identifiers should be in the form of `"<organization_name>"."<account_name>"`. For more information about this resource, see [docs](./account).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#account_identifier Database#account_identifier}

---

##### `withFailover`<sup>Optional</sup> <a name="withFailover" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.property.withFailover"></a>

```typescript
public readonly withFailover: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if failover should be enabled for the specified account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#with_failover Database#with_failover}

---

### DatabaseTimeouts <a name="DatabaseTimeouts" id="@cdktf/provider-snowflake.database.DatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseTimeouts.Initializer"></a>

```typescript
import { database } from '@cdktf/provider-snowflake'

const databaseTimeouts: database.DatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#create Database#create}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#delete Database#delete}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#read Database#read}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#update Database#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.database.DatabaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#create Database#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.database.DatabaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#delete Database#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.database.DatabaseTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#read Database#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.database.DatabaseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/database#update Database#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseReplicationEnableToAccountList <a name="DatabaseReplicationEnableToAccountList" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer"></a>

```typescript
import { database } from '@cdktf/provider-snowflake'

new database.DatabaseReplicationEnableToAccountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.get"></a>

```typescript
public get(index: number): DatabaseReplicationEnableToAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseReplicationEnableToAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>[]

---


### DatabaseReplicationEnableToAccountOutputReference <a name="DatabaseReplicationEnableToAccountOutputReference" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer"></a>

```typescript
import { database } from '@cdktf/provider-snowflake'

new database.DatabaseReplicationEnableToAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resetWithFailover">resetWithFailover</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWithFailover` <a name="resetWithFailover" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resetWithFailover"></a>

```typescript
public resetWithFailover(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.accountIdentifierInput">accountIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.withFailoverInput">withFailoverInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.accountIdentifier">accountIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.withFailover">withFailover</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdentifierInput`<sup>Optional</sup> <a name="accountIdentifierInput" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.accountIdentifierInput"></a>

```typescript
public readonly accountIdentifierInput: string;
```

- *Type:* string

---

##### `withFailoverInput`<sup>Optional</sup> <a name="withFailoverInput" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.withFailoverInput"></a>

```typescript
public readonly withFailoverInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountIdentifier`<sup>Required</sup> <a name="accountIdentifier" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.accountIdentifier"></a>

```typescript
public readonly accountIdentifier: string;
```

- *Type:* string

---

##### `withFailover`<sup>Required</sup> <a name="withFailover" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.withFailover"></a>

```typescript
public readonly withFailover: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseReplicationEnableToAccount;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>

---


### DatabaseReplicationOutputReference <a name="DatabaseReplicationOutputReference" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer"></a>

```typescript
import { database } from '@cdktf/provider-snowflake'

new database.DatabaseReplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.putEnableToAccount">putEnableToAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resetIgnoreEditionCheck">resetIgnoreEditionCheck</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnableToAccount` <a name="putEnableToAccount" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.putEnableToAccount"></a>

```typescript
public putEnableToAccount(value: IResolvable | DatabaseReplicationEnableToAccount[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.putEnableToAccount.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>[]

---

##### `resetIgnoreEditionCheck` <a name="resetIgnoreEditionCheck" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resetIgnoreEditionCheck"></a>

```typescript
public resetIgnoreEditionCheck(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.enableToAccount">enableToAccount</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList">DatabaseReplicationEnableToAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.enableToAccountInput">enableToAccountInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.ignoreEditionCheckInput">ignoreEditionCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableToAccount`<sup>Required</sup> <a name="enableToAccount" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.enableToAccount"></a>

```typescript
public readonly enableToAccount: DatabaseReplicationEnableToAccountList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList">DatabaseReplicationEnableToAccountList</a>

---

##### `enableToAccountInput`<sup>Optional</sup> <a name="enableToAccountInput" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.enableToAccountInput"></a>

```typescript
public readonly enableToAccountInput: IResolvable | DatabaseReplicationEnableToAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>[]

---

##### `ignoreEditionCheckInput`<sup>Optional</sup> <a name="ignoreEditionCheckInput" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.ignoreEditionCheckInput"></a>

```typescript
public readonly ignoreEditionCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreEditionCheck`<sup>Required</sup> <a name="ignoreEditionCheck" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.ignoreEditionCheck"></a>

```typescript
public readonly ignoreEditionCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseReplication;
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

---


### DatabaseTimeoutsOutputReference <a name="DatabaseTimeoutsOutputReference" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { database } from '@cdktf/provider-snowflake'

new database.DatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts">DatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.database.DatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.database.DatabaseTimeouts">DatabaseTimeouts</a>

---



