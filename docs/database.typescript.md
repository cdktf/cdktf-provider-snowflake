# `database` Submodule <a name="`database` Submodule" id="@cdktf/provider-snowflake.database"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Database <a name="Database" id="@cdktf/provider-snowflake.database.Database"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database snowflake_database}.

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
| <code><a href="#@cdktf/provider-snowflake.database.Database.putReplicationConfiguration">putReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetDataRetentionTimeInDays">resetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetFromDatabase">resetFromDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetFromReplica">resetFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetFromShare">resetFromShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetIsTransient">resetIsTransient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetReplicationConfiguration">resetReplicationConfiguration</a></code> | *No description.* |

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

##### `putReplicationConfiguration` <a name="putReplicationConfiguration" id="@cdktf/provider-snowflake.database.Database.putReplicationConfiguration"></a>

```typescript
public putReplicationConfiguration(value: DatabaseReplicationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.Database.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration">DatabaseReplicationConfiguration</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.database.Database.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDataRetentionTimeInDays` <a name="resetDataRetentionTimeInDays" id="@cdktf/provider-snowflake.database.Database.resetDataRetentionTimeInDays"></a>

```typescript
public resetDataRetentionTimeInDays(): void
```

##### `resetFromDatabase` <a name="resetFromDatabase" id="@cdktf/provider-snowflake.database.Database.resetFromDatabase"></a>

```typescript
public resetFromDatabase(): void
```

##### `resetFromReplica` <a name="resetFromReplica" id="@cdktf/provider-snowflake.database.Database.resetFromReplica"></a>

```typescript
public resetFromReplica(): void
```

##### `resetFromShare` <a name="resetFromShare" id="@cdktf/provider-snowflake.database.Database.resetFromShare"></a>

```typescript
public resetFromShare(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.database.Database.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsTransient` <a name="resetIsTransient" id="@cdktf/provider-snowflake.database.Database.resetIsTransient"></a>

```typescript
public resetIsTransient(): void
```

##### `resetReplicationConfiguration` <a name="resetReplicationConfiguration" id="@cdktf/provider-snowflake.database.Database.resetReplicationConfiguration"></a>

```typescript
public resetReplicationConfiguration(): void
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

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference">DatabaseReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDaysInput">dataRetentionTimeInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fromDatabaseInput">fromDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fromReplicaInput">fromReplicaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fromShareInput">fromShareInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.isTransientInput">isTransientInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replicationConfigurationInput">replicationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration">DatabaseReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fromDatabase">fromDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fromReplica">fromReplica</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fromShare">fromShare</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.isTransient">isTransient</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.name">name</a></code> | <code>string</code> | *No description.* |

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

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@cdktf/provider-snowflake.database.Database.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: DatabaseReplicationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference">DatabaseReplicationConfigurationOutputReference</a>

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

##### `fromDatabaseInput`<sup>Optional</sup> <a name="fromDatabaseInput" id="@cdktf/provider-snowflake.database.Database.property.fromDatabaseInput"></a>

```typescript
public readonly fromDatabaseInput: string;
```

- *Type:* string

---

##### `fromReplicaInput`<sup>Optional</sup> <a name="fromReplicaInput" id="@cdktf/provider-snowflake.database.Database.property.fromReplicaInput"></a>

```typescript
public readonly fromReplicaInput: string;
```

- *Type:* string

---

##### `fromShareInput`<sup>Optional</sup> <a name="fromShareInput" id="@cdktf/provider-snowflake.database.Database.property.fromShareInput"></a>

```typescript
public readonly fromShareInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

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

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.database.Database.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `replicationConfigurationInput`<sup>Optional</sup> <a name="replicationConfigurationInput" id="@cdktf/provider-snowflake.database.Database.property.replicationConfigurationInput"></a>

```typescript
public readonly replicationConfigurationInput: DatabaseReplicationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration">DatabaseReplicationConfiguration</a>

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

##### `fromDatabase`<sup>Required</sup> <a name="fromDatabase" id="@cdktf/provider-snowflake.database.Database.property.fromDatabase"></a>

```typescript
public readonly fromDatabase: string;
```

- *Type:* string

---

##### `fromReplica`<sup>Required</sup> <a name="fromReplica" id="@cdktf/provider-snowflake.database.Database.property.fromReplica"></a>

```typescript
public readonly fromReplica: string;
```

- *Type:* string

---

##### `fromShare`<sup>Required</sup> <a name="fromShare" id="@cdktf/provider-snowflake.database.Database.property.fromShare"></a>

```typescript
public readonly fromShare: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

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

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.database.Database.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

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
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#name Database#name}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#comment Database#comment}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>number</code> | Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.fromDatabase">fromDatabase</a></code> | <code>string</code> | Specify a database to create a clone from. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.fromReplica">fromReplica</a></code> | <code>string</code> | Specify a fully-qualified path to a database to create a replica from. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.fromShare">fromShare</a></code> | <code>{[ key: string ]: string}</code> | Specify a provider and a share in this map to create a database from a share. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#id Database#id}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.isTransient">isTransient</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies a database as transient. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration">DatabaseReplicationConfiguration</a></code> | replication_configuration block. |

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#name Database#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#comment Database#comment}.

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.dataRetentionTimeInDays"></a>

```typescript
public readonly dataRetentionTimeInDays: number;
```

- *Type:* number

Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object.

A value of 0 effectively disables Time Travel for the specified database. Default value for this field is set to -1, which is a fallback to use Snowflake default. For more information, see Understanding & Using Time Travel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#data_retention_time_in_days Database#data_retention_time_in_days}

---

##### `fromDatabase`<sup>Optional</sup> <a name="fromDatabase" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.fromDatabase"></a>

```typescript
public readonly fromDatabase: string;
```

- *Type:* string

Specify a database to create a clone from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#from_database Database#from_database}

---

##### `fromReplica`<sup>Optional</sup> <a name="fromReplica" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.fromReplica"></a>

```typescript
public readonly fromReplica: string;
```

- *Type:* string

Specify a fully-qualified path to a database to create a replica from.

A fully qualified path follows the format of "<organization_name>"."<account_name>"."<db_name>". An example would be: "myorg1"."account1"."db1"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#from_replica Database#from_replica}

---

##### `fromShare`<sup>Optional</sup> <a name="fromShare" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.fromShare"></a>

```typescript
public readonly fromShare: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specify a provider and a share in this map to create a database from a share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#from_share Database#from_share}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTransient`<sup>Optional</sup> <a name="isTransient" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.isTransient"></a>

```typescript
public readonly isTransient: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies a database as transient.

Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#is_transient Database#is_transient}

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: DatabaseReplicationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration">DatabaseReplicationConfiguration</a>

replication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#replication_configuration Database#replication_configuration}

---

### DatabaseReplicationConfiguration <a name="DatabaseReplicationConfiguration" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration.Initializer"></a>

```typescript
import { database } from '@cdktf/provider-snowflake'

const databaseReplicationConfiguration: database.DatabaseReplicationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration.property.accounts">accounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#accounts Database#accounts}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#ignore_edition_check Database#ignore_edition_check}. |

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#accounts Database#accounts}.

---

##### `ignoreEditionCheck`<sup>Optional</sup> <a name="ignoreEditionCheck" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration.property.ignoreEditionCheck"></a>

```typescript
public readonly ignoreEditionCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/database#ignore_edition_check Database#ignore_edition_check}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseReplicationConfigurationOutputReference <a name="DatabaseReplicationConfigurationOutputReference" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.Initializer"></a>

```typescript
import { database } from '@cdktf/provider-snowflake'

new database.DatabaseReplicationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.resetIgnoreEditionCheck">resetIgnoreEditionCheck</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreEditionCheck` <a name="resetIgnoreEditionCheck" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.resetIgnoreEditionCheck"></a>

```typescript
public resetIgnoreEditionCheck(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.accountsInput">accountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.ignoreEditionCheckInput">ignoreEditionCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.accounts">accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration">DatabaseReplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountsInput`<sup>Optional</sup> <a name="accountsInput" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.accountsInput"></a>

```typescript
public readonly accountsInput: string[];
```

- *Type:* string[]

---

##### `ignoreEditionCheckInput`<sup>Optional</sup> <a name="ignoreEditionCheckInput" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.ignoreEditionCheckInput"></a>

```typescript
public readonly ignoreEditionCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

---

##### `ignoreEditionCheck`<sup>Required</sup> <a name="ignoreEditionCheck" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.ignoreEditionCheck"></a>

```typescript
public readonly ignoreEditionCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.database.DatabaseReplicationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseReplicationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationConfiguration">DatabaseReplicationConfiguration</a>

---



