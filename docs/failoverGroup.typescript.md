# `failoverGroup` Submodule <a name="`failoverGroup` Submodule" id="@cdktf/provider-snowflake.failoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FailoverGroup <a name="FailoverGroup" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group snowflake_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer"></a>

```typescript
import { failoverGroup } from '@cdktf/provider-snowflake'

new failoverGroup.FailoverGroup(scope: Construct, id: string, config: FailoverGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig">FailoverGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig">FailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica">putFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putReplicationSchedule">putReplicationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedAccounts">resetAllowedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases">resetAllowedDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes">resetAllowedIntegrationTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares">resetAllowedShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetFromReplica">resetFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck">resetIgnoreEditionCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetObjectTypes">resetObjectTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule">resetReplicationSchedule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFromReplica` <a name="putFromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica"></a>

```typescript
public putFromReplica(value: FailoverGroupFromReplica): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

---

##### `putReplicationSchedule` <a name="putReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putReplicationSchedule"></a>

```typescript
public putReplicationSchedule(value: FailoverGroupReplicationSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putReplicationSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

---

##### `resetAllowedAccounts` <a name="resetAllowedAccounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedAccounts"></a>

```typescript
public resetAllowedAccounts(): void
```

##### `resetAllowedDatabases` <a name="resetAllowedDatabases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases"></a>

```typescript
public resetAllowedDatabases(): void
```

##### `resetAllowedIntegrationTypes` <a name="resetAllowedIntegrationTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes"></a>

```typescript
public resetAllowedIntegrationTypes(): void
```

##### `resetAllowedShares` <a name="resetAllowedShares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares"></a>

```typescript
public resetAllowedShares(): void
```

##### `resetFromReplica` <a name="resetFromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetFromReplica"></a>

```typescript
public resetFromReplica(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreEditionCheck` <a name="resetIgnoreEditionCheck" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck"></a>

```typescript
public resetIgnoreEditionCheck(): void
```

##### `resetObjectTypes` <a name="resetObjectTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetObjectTypes"></a>

```typescript
public resetObjectTypes(): void
```

##### `resetReplicationSchedule` <a name="resetReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule"></a>

```typescript
public resetReplicationSchedule(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FailoverGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isConstruct"></a>

```typescript
import { failoverGroup } from '@cdktf/provider-snowflake'

failoverGroup.FailoverGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement"></a>

```typescript
import { failoverGroup } from '@cdktf/provider-snowflake'

failoverGroup.FailoverGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource"></a>

```typescript
import { failoverGroup } from '@cdktf/provider-snowflake'

failoverGroup.FailoverGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport"></a>

```typescript
import { failoverGroup } from '@cdktf/provider-snowflake'

failoverGroup.FailoverGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FailoverGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FailoverGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplica">fromReplica</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference">FailoverGroupFromReplicaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule">replicationSchedule</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference">FailoverGroupReplicationScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput">allowedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput">allowedDatabasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput">allowedIntegrationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput">allowedSharesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplicaInput">fromReplicaInput</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput">ignoreEditionCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput">objectTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput">replicationScheduleInput</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts">allowedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases">allowedDatabases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes">allowedIntegrationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares">allowedShares</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes">objectTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fromReplica`<sup>Required</sup> <a name="fromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplica"></a>

```typescript
public readonly fromReplica: FailoverGroupFromReplicaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference">FailoverGroupFromReplicaOutputReference</a>

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule"></a>

```typescript
public readonly replicationSchedule: FailoverGroupReplicationScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference">FailoverGroupReplicationScheduleOutputReference</a>

---

##### `allowedAccountsInput`<sup>Optional</sup> <a name="allowedAccountsInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput"></a>

```typescript
public readonly allowedAccountsInput: string[];
```

- *Type:* string[]

---

##### `allowedDatabasesInput`<sup>Optional</sup> <a name="allowedDatabasesInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput"></a>

```typescript
public readonly allowedDatabasesInput: string[];
```

- *Type:* string[]

---

##### `allowedIntegrationTypesInput`<sup>Optional</sup> <a name="allowedIntegrationTypesInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput"></a>

```typescript
public readonly allowedIntegrationTypesInput: string[];
```

- *Type:* string[]

---

##### `allowedSharesInput`<sup>Optional</sup> <a name="allowedSharesInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput"></a>

```typescript
public readonly allowedSharesInput: string[];
```

- *Type:* string[]

---

##### `fromReplicaInput`<sup>Optional</sup> <a name="fromReplicaInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplicaInput"></a>

```typescript
public readonly fromReplicaInput: FailoverGroupFromReplica;
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreEditionCheckInput`<sup>Optional</sup> <a name="ignoreEditionCheckInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput"></a>

```typescript
public readonly ignoreEditionCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectTypesInput`<sup>Optional</sup> <a name="objectTypesInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput"></a>

```typescript
public readonly objectTypesInput: string[];
```

- *Type:* string[]

---

##### `replicationScheduleInput`<sup>Optional</sup> <a name="replicationScheduleInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput"></a>

```typescript
public readonly replicationScheduleInput: FailoverGroupReplicationSchedule;
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

---

##### `allowedAccounts`<sup>Required</sup> <a name="allowedAccounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts"></a>

```typescript
public readonly allowedAccounts: string[];
```

- *Type:* string[]

---

##### `allowedDatabases`<sup>Required</sup> <a name="allowedDatabases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases"></a>

```typescript
public readonly allowedDatabases: string[];
```

- *Type:* string[]

---

##### `allowedIntegrationTypes`<sup>Required</sup> <a name="allowedIntegrationTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes"></a>

```typescript
public readonly allowedIntegrationTypes: string[];
```

- *Type:* string[]

---

##### `allowedShares`<sup>Required</sup> <a name="allowedShares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares"></a>

```typescript
public readonly allowedShares: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreEditionCheck`<sup>Required</sup> <a name="ignoreEditionCheck" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck"></a>

```typescript
public readonly ignoreEditionCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectTypes`<sup>Required</sup> <a name="objectTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes"></a>

```typescript
public readonly objectTypes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FailoverGroupConfig <a name="FailoverGroupConfig" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.Initializer"></a>

```typescript
import { failoverGroup } from '@cdktf/provider-snowflake'

const failoverGroupConfig: failoverGroup.FailoverGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the failover group. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts">allowedAccounts</a></code> | <code>string[]</code> | Specifies the target account or list of target accounts to which replication and failover of specified objects from the source account is enabled. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases">allowedDatabases</a></code> | <code>string[]</code> | Specifies the database or list of databases for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes">allowedIntegrationTypes</a></code> | <code>string[]</code> | Type(s) of integrations for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares">allowedShares</a></code> | <code>string[]</code> | Specifies the share or list of shares for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.fromReplica">fromReplica</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | from_replica block. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#id FailoverGroup#id}. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows replicating objects to accounts on lower editions. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes">objectTypes</a></code> | <code>string[]</code> | Type(s) of objects for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule">replicationSchedule</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | replication_schedule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the failover group.

The identifier must start with an alphabetic character and cannot contain spaces or special characters unless the identifier string is enclosed in double quotes (e.g. "My object"). Identifiers enclosed in double quotes are also case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#name FailoverGroup#name}

---

##### `allowedAccounts`<sup>Optional</sup> <a name="allowedAccounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts"></a>

```typescript
public readonly allowedAccounts: string[];
```

- *Type:* string[]

Specifies the target account or list of target accounts to which replication and failover of specified objects from the source account is enabled.

Secondary failover groups in the target accounts in this list can be promoted to serve as the primary failover group in case of failover. Expected in the form <org_name>.<target_account_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#allowed_accounts FailoverGroup#allowed_accounts}

---

##### `allowedDatabases`<sup>Optional</sup> <a name="allowedDatabases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases"></a>

```typescript
public readonly allowedDatabases: string[];
```

- *Type:* string[]

Specifies the database or list of databases for which you are enabling replication and failover from the source account to the target account.

The OBJECT_TYPES list must include DATABASES to set this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#allowed_databases FailoverGroup#allowed_databases}

---

##### `allowedIntegrationTypes`<sup>Optional</sup> <a name="allowedIntegrationTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes"></a>

```typescript
public readonly allowedIntegrationTypes: string[];
```

- *Type:* string[]

Type(s) of integrations for which you are enabling replication and failover from the source account to the target account.

This property requires that the OBJECT_TYPES list include INTEGRATIONS to set this parameter. The following integration types are supported: "SECURITY INTEGRATIONS", "API INTEGRATIONS"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#allowed_integration_types FailoverGroup#allowed_integration_types}

---

##### `allowedShares`<sup>Optional</sup> <a name="allowedShares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares"></a>

```typescript
public readonly allowedShares: string[];
```

- *Type:* string[]

Specifies the share or list of shares for which you are enabling replication and failover from the source account to the target account.

The OBJECT_TYPES list must include SHARES to set this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#allowed_shares FailoverGroup#allowed_shares}

---

##### `fromReplica`<sup>Optional</sup> <a name="fromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.fromReplica"></a>

```typescript
public readonly fromReplica: FailoverGroupFromReplica;
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

from_replica block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#from_replica FailoverGroup#from_replica}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#id FailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreEditionCheck`<sup>Optional</sup> <a name="ignoreEditionCheck" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck"></a>

```typescript
public readonly ignoreEditionCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows replicating objects to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#ignore_edition_check FailoverGroup#ignore_edition_check}

---

##### `objectTypes`<sup>Optional</sup> <a name="objectTypes" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes"></a>

```typescript
public readonly objectTypes: string[];
```

- *Type:* string[]

Type(s) of objects for which you are enabling replication and failover from the source account to the target account.

The following object types are supported: "ACCOUNT PARAMETERS", "DATABASES", "INTEGRATIONS", "NETWORK POLICIES", "RESOURCE MONITORS", "ROLES", "SHARES", "USERS", "WAREHOUSES"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#object_types FailoverGroup#object_types}

---

##### `replicationSchedule`<sup>Optional</sup> <a name="replicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule"></a>

```typescript
public readonly replicationSchedule: FailoverGroupReplicationSchedule;
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

replication_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#replication_schedule FailoverGroup#replication_schedule}

---

### FailoverGroupFromReplica <a name="FailoverGroupFromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.Initializer"></a>

```typescript
import { failoverGroup } from '@cdktf/provider-snowflake'

const failoverGroupFromReplica: failoverGroup.FailoverGroupFromReplica = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.name">name</a></code> | <code>string</code> | Identifier for the primary failover group in the source account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.organizationName">organizationName</a></code> | <code>string</code> | Name of your Snowflake organization. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.sourceAccountName">sourceAccountName</a></code> | <code>string</code> | Source account from which you are enabling replication and failover of the specified objects. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Identifier for the primary failover group in the source account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#name FailoverGroup#name}

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

Name of your Snowflake organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#organization_name FailoverGroup#organization_name}

---

##### `sourceAccountName`<sup>Required</sup> <a name="sourceAccountName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.sourceAccountName"></a>

```typescript
public readonly sourceAccountName: string;
```

- *Type:* string

Source account from which you are enabling replication and failover of the specified objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#source_account_name FailoverGroup#source_account_name}

---

### FailoverGroupReplicationSchedule <a name="FailoverGroupReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.Initializer"></a>

```typescript
import { failoverGroup } from '@cdktf/provider-snowflake'

const failoverGroupReplicationSchedule: failoverGroup.FailoverGroupReplicationSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.cron">cron</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a></code> | cron block. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.interval">interval</a></code> | <code>number</code> | Specifies the interval in minutes for the replication schedule. |

---

##### `cron`<sup>Optional</sup> <a name="cron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.cron"></a>

```typescript
public readonly cron: FailoverGroupReplicationScheduleCron;
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

cron block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#cron FailoverGroup#cron}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Specifies the interval in minutes for the replication schedule.

The interval must be greater than 0 and less than 1440 (24 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#interval FailoverGroup#interval}

---

### FailoverGroupReplicationScheduleCron <a name="FailoverGroupReplicationScheduleCron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.Initializer"></a>

```typescript
import { failoverGroup } from '@cdktf/provider-snowflake'

const failoverGroupReplicationScheduleCron: failoverGroup.FailoverGroupReplicationScheduleCron = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.expression">expression</a></code> | <code>string</code> | Specifies the cron expression for the replication schedule. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.timeZone">timeZone</a></code> | <code>string</code> | Specifies the time zone for secondary group refresh. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Specifies the cron expression for the replication schedule.

The cron expression must be in the following format: "minute hour day-of-month month day-of-week". The following values are supported: minute: 0-59 hour: 0-23 day-of-month: 1-31 month: 1-12 day-of-week: 0-6 (0 is Sunday)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#expression FailoverGroup#expression}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Specifies the time zone for secondary group refresh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/failover_group#time_zone FailoverGroup#time_zone}

---

## Classes <a name="Classes" id="Classes"></a>

### FailoverGroupFromReplicaOutputReference <a name="FailoverGroupFromReplicaOutputReference" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer"></a>

```typescript
import { failoverGroup } from '@cdktf/provider-snowflake'

new failoverGroup.FailoverGroupFromReplicaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountNameInput">sourceAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountName">sourceAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationNameInput"></a>

```typescript
public readonly organizationNameInput: string;
```

- *Type:* string

---

##### `sourceAccountNameInput`<sup>Optional</sup> <a name="sourceAccountNameInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountNameInput"></a>

```typescript
public readonly sourceAccountNameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `sourceAccountName`<sup>Required</sup> <a name="sourceAccountName" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountName"></a>

```typescript
public readonly sourceAccountName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FailoverGroupFromReplica;
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

---


### FailoverGroupReplicationScheduleCronOutputReference <a name="FailoverGroupReplicationScheduleCronOutputReference" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer"></a>

```typescript
import { failoverGroup } from '@cdktf/provider-snowflake'

new failoverGroup.FailoverGroupReplicationScheduleCronOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FailoverGroupReplicationScheduleCron;
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

---


### FailoverGroupReplicationScheduleOutputReference <a name="FailoverGroupReplicationScheduleOutputReference" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer"></a>

```typescript
import { failoverGroup } from '@cdktf/provider-snowflake'

new failoverGroup.FailoverGroupReplicationScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.putCron">putCron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetCron">resetCron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetInterval">resetInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCron` <a name="putCron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.putCron"></a>

```typescript
public putCron(value: FailoverGroupReplicationScheduleCron): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.putCron.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

---

##### `resetCron` <a name="resetCron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetCron"></a>

```typescript
public resetCron(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cron">cron</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference">FailoverGroupReplicationScheduleCronOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cronInput">cronInput</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cron"></a>

```typescript
public readonly cron: FailoverGroupReplicationScheduleCronOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference">FailoverGroupReplicationScheduleCronOutputReference</a>

---

##### `cronInput`<sup>Optional</sup> <a name="cronInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cronInput"></a>

```typescript
public readonly cronInput: FailoverGroupReplicationScheduleCron;
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FailoverGroupReplicationSchedule;
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

---



