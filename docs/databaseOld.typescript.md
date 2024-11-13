# `databaseOld` Submodule <a name="`databaseOld` Submodule" id="@cdktf/provider-snowflake.databaseOld"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseOld <a name="DatabaseOld" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database_old snowflake_database_old}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer"></a>

```typescript
import { databaseOld } from '@cdktf/provider-snowflake'

new databaseOld.DatabaseOld(scope: Construct, id: string, config: DatabaseOldConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig">DatabaseOldConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig">DatabaseOldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.putReplicationConfiguration">putReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetDataRetentionTimeInDays">resetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromDatabase">resetFromDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromReplica">resetFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromShare">resetFromShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetIsTransient">resetIsTransient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetReplicationConfiguration">resetReplicationConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReplicationConfiguration` <a name="putReplicationConfiguration" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.putReplicationConfiguration"></a>

```typescript
public putReplicationConfiguration(value: DatabaseOldReplicationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDataRetentionTimeInDays` <a name="resetDataRetentionTimeInDays" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetDataRetentionTimeInDays"></a>

```typescript
public resetDataRetentionTimeInDays(): void
```

##### `resetFromDatabase` <a name="resetFromDatabase" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromDatabase"></a>

```typescript
public resetFromDatabase(): void
```

##### `resetFromReplica` <a name="resetFromReplica" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromReplica"></a>

```typescript
public resetFromReplica(): void
```

##### `resetFromShare` <a name="resetFromShare" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromShare"></a>

```typescript
public resetFromShare(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsTransient` <a name="resetIsTransient" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetIsTransient"></a>

```typescript
public resetIsTransient(): void
```

##### `resetReplicationConfiguration` <a name="resetReplicationConfiguration" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetReplicationConfiguration"></a>

```typescript
public resetReplicationConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseOld resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isConstruct"></a>

```typescript
import { databaseOld } from '@cdktf/provider-snowflake'

databaseOld.DatabaseOld.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformElement"></a>

```typescript
import { databaseOld } from '@cdktf/provider-snowflake'

databaseOld.DatabaseOld.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformResource"></a>

```typescript
import { databaseOld } from '@cdktf/provider-snowflake'

databaseOld.DatabaseOld.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport"></a>

```typescript
import { databaseOld } from '@cdktf/provider-snowflake'

databaseOld.DatabaseOld.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseOld resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseOld to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseOld that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database_old#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseOld to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference">DatabaseOldReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dataRetentionTimeInDaysInput">dataRetentionTimeInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromDatabaseInput">fromDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromReplicaInput">fromReplicaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromShareInput">fromShareInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.isTransientInput">isTransientInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.replicationConfigurationInput">replicationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromDatabase">fromDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromReplica">fromReplica</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromShare">fromShare</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.isTransient">isTransient</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: DatabaseOldReplicationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference">DatabaseOldReplicationConfigurationOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `dataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="dataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dataRetentionTimeInDaysInput"></a>

```typescript
public readonly dataRetentionTimeInDaysInput: number;
```

- *Type:* number

---

##### `fromDatabaseInput`<sup>Optional</sup> <a name="fromDatabaseInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromDatabaseInput"></a>

```typescript
public readonly fromDatabaseInput: string;
```

- *Type:* string

---

##### `fromReplicaInput`<sup>Optional</sup> <a name="fromReplicaInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromReplicaInput"></a>

```typescript
public readonly fromReplicaInput: string;
```

- *Type:* string

---

##### `fromShareInput`<sup>Optional</sup> <a name="fromShareInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromShareInput"></a>

```typescript
public readonly fromShareInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isTransientInput`<sup>Optional</sup> <a name="isTransientInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.isTransientInput"></a>

```typescript
public readonly isTransientInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `replicationConfigurationInput`<sup>Optional</sup> <a name="replicationConfigurationInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.replicationConfigurationInput"></a>

```typescript
public readonly replicationConfigurationInput: DatabaseOldReplicationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dataRetentionTimeInDays"></a>

```typescript
public readonly dataRetentionTimeInDays: number;
```

- *Type:* number

---

##### `fromDatabase`<sup>Required</sup> <a name="fromDatabase" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromDatabase"></a>

```typescript
public readonly fromDatabase: string;
```

- *Type:* string

---

##### `fromReplica`<sup>Required</sup> <a name="fromReplica" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromReplica"></a>

```typescript
public readonly fromReplica: string;
```

- *Type:* string

---

##### `fromShare`<sup>Required</sup> <a name="fromShare" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromShare"></a>

```typescript
public readonly fromShare: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isTransient`<sup>Required</sup> <a name="isTransient" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.isTransient"></a>

```typescript
public readonly isTransient: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseOldConfig <a name="DatabaseOldConfig" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.Initializer"></a>

```typescript
import { databaseOld } from '@cdktf/provider-snowflake'

const databaseOldConfig: databaseOld.DatabaseOldConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the database; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the database. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>number</code> | Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromDatabase">fromDatabase</a></code> | <code>string</code> | Specify a database to create a clone from. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromReplica">fromReplica</a></code> | <code>string</code> | Specify a fully-qualified path to a database to create a replica from. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromShare">fromShare</a></code> | <code>{[ key: string ]: string}</code> | Specify a provider and a share in this map to create a database from a share. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database_old#id DatabaseOld#id}. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.isTransient">isTransient</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies a database as transient. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a></code> | replication_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the database; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database_old#name DatabaseOld#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database_old#comment DatabaseOld#comment}

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.dataRetentionTimeInDays"></a>

```typescript
public readonly dataRetentionTimeInDays: number;
```

- *Type:* number

Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object.

A value of 0 effectively disables Time Travel for the specified database. Default value for this field is set to -1, which is a fallback to use Snowflake default. For more information, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database_old#data_retention_time_in_days DatabaseOld#data_retention_time_in_days}

---

##### `fromDatabase`<sup>Optional</sup> <a name="fromDatabase" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromDatabase"></a>

```typescript
public readonly fromDatabase: string;
```

- *Type:* string

Specify a database to create a clone from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database_old#from_database DatabaseOld#from_database}

---

##### `fromReplica`<sup>Optional</sup> <a name="fromReplica" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromReplica"></a>

```typescript
public readonly fromReplica: string;
```

- *Type:* string

Specify a fully-qualified path to a database to create a replica from.

A fully qualified path follows the format of `"<organization_name>"."<account_name>"."<db_name>"`. An example would be: `"myorg1"."account1"."db1"`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database_old#from_replica DatabaseOld#from_replica}

---

##### `fromShare`<sup>Optional</sup> <a name="fromShare" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromShare"></a>

```typescript
public readonly fromShare: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specify a provider and a share in this map to create a database from a share.

As of version 0.87.0, the provider field is the account locator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database_old#from_share DatabaseOld#from_share}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database_old#id DatabaseOld#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTransient`<sup>Optional</sup> <a name="isTransient" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.isTransient"></a>

```typescript
public readonly isTransient: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies a database as transient.

Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database_old#is_transient DatabaseOld#is_transient}

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: DatabaseOldReplicationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a>

replication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database_old#replication_configuration DatabaseOld#replication_configuration}

---

### DatabaseOldReplicationConfiguration <a name="DatabaseOldReplicationConfiguration" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration.Initializer"></a>

```typescript
import { databaseOld } from '@cdktf/provider-snowflake'

const databaseOldReplicationConfiguration: databaseOld.DatabaseOldReplicationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration.property.accounts">accounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database_old#accounts DatabaseOld#accounts}. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database_old#ignore_edition_check DatabaseOld#ignore_edition_check}. |

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database_old#accounts DatabaseOld#accounts}.

---

##### `ignoreEditionCheck`<sup>Optional</sup> <a name="ignoreEditionCheck" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration.property.ignoreEditionCheck"></a>

```typescript
public readonly ignoreEditionCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database_old#ignore_edition_check DatabaseOld#ignore_edition_check}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseOldReplicationConfigurationOutputReference <a name="DatabaseOldReplicationConfigurationOutputReference" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.Initializer"></a>

```typescript
import { databaseOld } from '@cdktf/provider-snowflake'

new databaseOld.DatabaseOldReplicationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.resetIgnoreEditionCheck">resetIgnoreEditionCheck</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreEditionCheck` <a name="resetIgnoreEditionCheck" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.resetIgnoreEditionCheck"></a>

```typescript
public resetIgnoreEditionCheck(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.accountsInput">accountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.ignoreEditionCheckInput">ignoreEditionCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.accounts">accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountsInput`<sup>Optional</sup> <a name="accountsInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.accountsInput"></a>

```typescript
public readonly accountsInput: string[];
```

- *Type:* string[]

---

##### `ignoreEditionCheckInput`<sup>Optional</sup> <a name="ignoreEditionCheckInput" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.ignoreEditionCheckInput"></a>

```typescript
public readonly ignoreEditionCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

---

##### `ignoreEditionCheck`<sup>Required</sup> <a name="ignoreEditionCheck" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.ignoreEditionCheck"></a>

```typescript
public readonly ignoreEditionCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseOldReplicationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a>

---



