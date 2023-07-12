# `snowflake_warehouse`

Refer to the Terraform Registory for docs: [`snowflake_warehouse`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse).

# `warehouse` Submodule <a name="`warehouse` Submodule" id="@cdktf/provider-snowflake.warehouse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Warehouse <a name="Warehouse" id="@cdktf/provider-snowflake.warehouse.Warehouse"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse snowflake_warehouse}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.warehouse.Warehouse.Initializer"></a>

```typescript
import { warehouse } from '@cdktf/provider-snowflake'

new warehouse.Warehouse(scope: Construct, id: string, config: WarehouseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig">WarehouseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.warehouse.Warehouse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig">WarehouseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetAutoResume">resetAutoResume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetAutoSuspend">resetAutoSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetEnableQueryAcceleration">resetEnableQueryAcceleration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetInitiallySuspended">resetInitiallySuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetMaxClusterCount">resetMaxClusterCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetMaxConcurrencyLevel">resetMaxConcurrencyLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetMinClusterCount">resetMinClusterCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetQueryAccelerationMaxScaleFactor">resetQueryAccelerationMaxScaleFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetResourceMonitor">resetResourceMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetScalingPolicy">resetScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetStatementQueuedTimeoutInSeconds">resetStatementQueuedTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetStatementTimeoutInSeconds">resetStatementTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetWaitForProvisioning">resetWaitForProvisioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetWarehouseSize">resetWarehouseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.resetWarehouseType">resetWarehouseType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.warehouse.Warehouse.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.warehouse.Warehouse.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.warehouse.Warehouse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.warehouse.Warehouse.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.warehouse.Warehouse.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.warehouse.Warehouse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.warehouse.Warehouse.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.warehouse.Warehouse.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.warehouse.Warehouse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAutoResume` <a name="resetAutoResume" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetAutoResume"></a>

```typescript
public resetAutoResume(): void
```

##### `resetAutoSuspend` <a name="resetAutoSuspend" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetAutoSuspend"></a>

```typescript
public resetAutoSuspend(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetEnableQueryAcceleration` <a name="resetEnableQueryAcceleration" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetEnableQueryAcceleration"></a>

```typescript
public resetEnableQueryAcceleration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitiallySuspended` <a name="resetInitiallySuspended" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetInitiallySuspended"></a>

```typescript
public resetInitiallySuspended(): void
```

##### `resetMaxClusterCount` <a name="resetMaxClusterCount" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetMaxClusterCount"></a>

```typescript
public resetMaxClusterCount(): void
```

##### `resetMaxConcurrencyLevel` <a name="resetMaxConcurrencyLevel" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetMaxConcurrencyLevel"></a>

```typescript
public resetMaxConcurrencyLevel(): void
```

##### `resetMinClusterCount` <a name="resetMinClusterCount" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetMinClusterCount"></a>

```typescript
public resetMinClusterCount(): void
```

##### `resetQueryAccelerationMaxScaleFactor` <a name="resetQueryAccelerationMaxScaleFactor" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetQueryAccelerationMaxScaleFactor"></a>

```typescript
public resetQueryAccelerationMaxScaleFactor(): void
```

##### `resetResourceMonitor` <a name="resetResourceMonitor" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetResourceMonitor"></a>

```typescript
public resetResourceMonitor(): void
```

##### `resetScalingPolicy` <a name="resetScalingPolicy" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetScalingPolicy"></a>

```typescript
public resetScalingPolicy(): void
```

##### `resetStatementQueuedTimeoutInSeconds` <a name="resetStatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetStatementQueuedTimeoutInSeconds"></a>

```typescript
public resetStatementQueuedTimeoutInSeconds(): void
```

##### `resetStatementTimeoutInSeconds` <a name="resetStatementTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetStatementTimeoutInSeconds"></a>

```typescript
public resetStatementTimeoutInSeconds(): void
```

##### `resetWaitForProvisioning` <a name="resetWaitForProvisioning" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetWaitForProvisioning"></a>

```typescript
public resetWaitForProvisioning(): void
```

##### `resetWarehouseSize` <a name="resetWarehouseSize" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetWarehouseSize"></a>

```typescript
public resetWarehouseSize(): void
```

##### `resetWarehouseType` <a name="resetWarehouseType" id="@cdktf/provider-snowflake.warehouse.Warehouse.resetWarehouseType"></a>

```typescript
public resetWarehouseType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.warehouse.Warehouse.isConstruct"></a>

```typescript
import { warehouse } from '@cdktf/provider-snowflake'

warehouse.Warehouse.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.warehouse.Warehouse.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformElement"></a>

```typescript
import { warehouse } from '@cdktf/provider-snowflake'

warehouse.Warehouse.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformResource"></a>

```typescript
import { warehouse } from '@cdktf/provider-snowflake'

warehouse.Warehouse.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.warehouse.Warehouse.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.autoResumeInput">autoResumeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.autoSuspendInput">autoSuspendInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.enableQueryAccelerationInput">enableQueryAccelerationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.initiallySuspendedInput">initiallySuspendedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.maxClusterCountInput">maxClusterCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.maxConcurrencyLevelInput">maxConcurrencyLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.minClusterCountInput">minClusterCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.queryAccelerationMaxScaleFactorInput">queryAccelerationMaxScaleFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.resourceMonitorInput">resourceMonitorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.scalingPolicyInput">scalingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.statementQueuedTimeoutInSecondsInput">statementQueuedTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.statementTimeoutInSecondsInput">statementTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.waitForProvisioningInput">waitForProvisioningInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseSizeInput">warehouseSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseTypeInput">warehouseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.autoResume">autoResume</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.autoSuspend">autoSuspend</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.enableQueryAcceleration">enableQueryAcceleration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.initiallySuspended">initiallySuspended</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.maxClusterCount">maxClusterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.minClusterCount">minClusterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.queryAccelerationMaxScaleFactor">queryAccelerationMaxScaleFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.resourceMonitor">resourceMonitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.scalingPolicy">scalingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.waitForProvisioning">waitForProvisioning</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseSize">warehouseSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseType">warehouseType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoResumeInput`<sup>Optional</sup> <a name="autoResumeInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.autoResumeInput"></a>

```typescript
public readonly autoResumeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoSuspendInput`<sup>Optional</sup> <a name="autoSuspendInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.autoSuspendInput"></a>

```typescript
public readonly autoSuspendInput: number;
```

- *Type:* number

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enableQueryAccelerationInput`<sup>Optional</sup> <a name="enableQueryAccelerationInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.enableQueryAccelerationInput"></a>

```typescript
public readonly enableQueryAccelerationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initiallySuspendedInput`<sup>Optional</sup> <a name="initiallySuspendedInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.initiallySuspendedInput"></a>

```typescript
public readonly initiallySuspendedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxClusterCountInput`<sup>Optional</sup> <a name="maxClusterCountInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.maxClusterCountInput"></a>

```typescript
public readonly maxClusterCountInput: number;
```

- *Type:* number

---

##### `maxConcurrencyLevelInput`<sup>Optional</sup> <a name="maxConcurrencyLevelInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.maxConcurrencyLevelInput"></a>

```typescript
public readonly maxConcurrencyLevelInput: number;
```

- *Type:* number

---

##### `minClusterCountInput`<sup>Optional</sup> <a name="minClusterCountInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.minClusterCountInput"></a>

```typescript
public readonly minClusterCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryAccelerationMaxScaleFactorInput`<sup>Optional</sup> <a name="queryAccelerationMaxScaleFactorInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.queryAccelerationMaxScaleFactorInput"></a>

```typescript
public readonly queryAccelerationMaxScaleFactorInput: number;
```

- *Type:* number

---

##### `resourceMonitorInput`<sup>Optional</sup> <a name="resourceMonitorInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.resourceMonitorInput"></a>

```typescript
public readonly resourceMonitorInput: string;
```

- *Type:* string

---

##### `scalingPolicyInput`<sup>Optional</sup> <a name="scalingPolicyInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.scalingPolicyInput"></a>

```typescript
public readonly scalingPolicyInput: string;
```

- *Type:* string

---

##### `statementQueuedTimeoutInSecondsInput`<sup>Optional</sup> <a name="statementQueuedTimeoutInSecondsInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.statementQueuedTimeoutInSecondsInput"></a>

```typescript
public readonly statementQueuedTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `statementTimeoutInSecondsInput`<sup>Optional</sup> <a name="statementTimeoutInSecondsInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.statementTimeoutInSecondsInput"></a>

```typescript
public readonly statementTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `waitForProvisioningInput`<sup>Optional</sup> <a name="waitForProvisioningInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.waitForProvisioningInput"></a>

```typescript
public readonly waitForProvisioningInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `warehouseSizeInput`<sup>Optional</sup> <a name="warehouseSizeInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseSizeInput"></a>

```typescript
public readonly warehouseSizeInput: string;
```

- *Type:* string

---

##### `warehouseTypeInput`<sup>Optional</sup> <a name="warehouseTypeInput" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseTypeInput"></a>

```typescript
public readonly warehouseTypeInput: string;
```

- *Type:* string

---

##### `autoResume`<sup>Required</sup> <a name="autoResume" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.autoResume"></a>

```typescript
public readonly autoResume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoSuspend`<sup>Required</sup> <a name="autoSuspend" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.autoSuspend"></a>

```typescript
public readonly autoSuspend: number;
```

- *Type:* number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enableQueryAcceleration`<sup>Required</sup> <a name="enableQueryAcceleration" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.enableQueryAcceleration"></a>

```typescript
public readonly enableQueryAcceleration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initiallySuspended`<sup>Required</sup> <a name="initiallySuspended" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.initiallySuspended"></a>

```typescript
public readonly initiallySuspended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxClusterCount`<sup>Required</sup> <a name="maxClusterCount" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.maxClusterCount"></a>

```typescript
public readonly maxClusterCount: number;
```

- *Type:* number

---

##### `maxConcurrencyLevel`<sup>Required</sup> <a name="maxConcurrencyLevel" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.maxConcurrencyLevel"></a>

```typescript
public readonly maxConcurrencyLevel: number;
```

- *Type:* number

---

##### `minClusterCount`<sup>Required</sup> <a name="minClusterCount" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.minClusterCount"></a>

```typescript
public readonly minClusterCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryAccelerationMaxScaleFactor`<sup>Required</sup> <a name="queryAccelerationMaxScaleFactor" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.queryAccelerationMaxScaleFactor"></a>

```typescript
public readonly queryAccelerationMaxScaleFactor: number;
```

- *Type:* number

---

##### `resourceMonitor`<sup>Required</sup> <a name="resourceMonitor" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.resourceMonitor"></a>

```typescript
public readonly resourceMonitor: string;
```

- *Type:* string

---

##### `scalingPolicy`<sup>Required</sup> <a name="scalingPolicy" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.scalingPolicy"></a>

```typescript
public readonly scalingPolicy: string;
```

- *Type:* string

---

##### `statementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.statementQueuedTimeoutInSeconds"></a>

```typescript
public readonly statementQueuedTimeoutInSeconds: number;
```

- *Type:* number

---

##### `statementTimeoutInSeconds`<sup>Required</sup> <a name="statementTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.statementTimeoutInSeconds"></a>

```typescript
public readonly statementTimeoutInSeconds: number;
```

- *Type:* number

---

##### `waitForProvisioning`<sup>Required</sup> <a name="waitForProvisioning" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.waitForProvisioning"></a>

```typescript
public readonly waitForProvisioning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `warehouseSize`<sup>Required</sup> <a name="warehouseSize" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseSize"></a>

```typescript
public readonly warehouseSize: string;
```

- *Type:* string

---

##### `warehouseType`<sup>Required</sup> <a name="warehouseType" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.warehouseType"></a>

```typescript
public readonly warehouseType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.Warehouse.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.warehouse.Warehouse.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WarehouseConfig <a name="WarehouseConfig" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.Initializer"></a>

```typescript
import { warehouse } from '@cdktf/provider-snowflake'

const warehouseConfig: warehouse.WarehouseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.name">name</a></code> | <code>string</code> | Identifier for the virtual warehouse; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.autoResume">autoResume</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to automatically resume a warehouse when a SQL statement (e.g. query) is submitted to it. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.autoSuspend">autoSuspend</a></code> | <code>number</code> | Specifies the number of seconds of inactivity after which a warehouse is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#comment Warehouse#comment}. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.enableQueryAcceleration">enableQueryAcceleration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to enable the query acceleration service for queries that rely on this warehouse for compute resources. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#id Warehouse#id}. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.initiallySuspended">initiallySuspended</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the warehouse is created initially in the ‘Suspended’ state. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.maxClusterCount">maxClusterCount</a></code> | <code>number</code> | Specifies the maximum number of server clusters for the warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code>number</code> | Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by a warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.minClusterCount">minClusterCount</a></code> | <code>number</code> | Specifies the minimum number of server clusters for the warehouse (only applies to multi-cluster warehouses). |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.queryAccelerationMaxScaleFactor">queryAccelerationMaxScaleFactor</a></code> | <code>number</code> | Specifies the maximum scale factor for leasing compute resources for query acceleration. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.resourceMonitor">resourceMonitor</a></code> | <code>string</code> | Specifies the name of a resource monitor that is explicitly assigned to the warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.scalingPolicy">scalingPolicy</a></code> | <code>string</code> | Specifies the policy for automatically starting and shutting down clusters in a multi-cluster warehouse running in Auto-scale mode. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>number</code> | Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>number</code> | Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.waitForProvisioning">waitForProvisioning</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the warehouse, after being resized, waits for all the servers to provision before executing any queued or new queries. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.warehouseSize">warehouseSize</a></code> | <code>string</code> | Specifies the size of the virtual warehouse. |
| <code><a href="#@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.warehouseType">warehouseType</a></code> | <code>string</code> | Specifies a STANDARD or SNOWPARK-OPTIMIZED warehouse. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Identifier for the virtual warehouse; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#name Warehouse#name}

---

##### `autoResume`<sup>Optional</sup> <a name="autoResume" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.autoResume"></a>

```typescript
public readonly autoResume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to automatically resume a warehouse when a SQL statement (e.g. query) is submitted to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#auto_resume Warehouse#auto_resume}

---

##### `autoSuspend`<sup>Optional</sup> <a name="autoSuspend" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.autoSuspend"></a>

```typescript
public readonly autoSuspend: number;
```

- *Type:* number

Specifies the number of seconds of inactivity after which a warehouse is automatically suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#auto_suspend Warehouse#auto_suspend}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#comment Warehouse#comment}.

---

##### `enableQueryAcceleration`<sup>Optional</sup> <a name="enableQueryAcceleration" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.enableQueryAcceleration"></a>

```typescript
public readonly enableQueryAcceleration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to enable the query acceleration service for queries that rely on this warehouse for compute resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#enable_query_acceleration Warehouse#enable_query_acceleration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#id Warehouse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initiallySuspended`<sup>Optional</sup> <a name="initiallySuspended" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.initiallySuspended"></a>

```typescript
public readonly initiallySuspended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the warehouse is created initially in the ‘Suspended’ state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#initially_suspended Warehouse#initially_suspended}

---

##### `maxClusterCount`<sup>Optional</sup> <a name="maxClusterCount" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.maxClusterCount"></a>

```typescript
public readonly maxClusterCount: number;
```

- *Type:* number

Specifies the maximum number of server clusters for the warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#max_cluster_count Warehouse#max_cluster_count}

---

##### `maxConcurrencyLevel`<sup>Optional</sup> <a name="maxConcurrencyLevel" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.maxConcurrencyLevel"></a>

```typescript
public readonly maxConcurrencyLevel: number;
```

- *Type:* number

Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by a warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#max_concurrency_level Warehouse#max_concurrency_level}

---

##### `minClusterCount`<sup>Optional</sup> <a name="minClusterCount" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.minClusterCount"></a>

```typescript
public readonly minClusterCount: number;
```

- *Type:* number

Specifies the minimum number of server clusters for the warehouse (only applies to multi-cluster warehouses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#min_cluster_count Warehouse#min_cluster_count}

---

##### `queryAccelerationMaxScaleFactor`<sup>Optional</sup> <a name="queryAccelerationMaxScaleFactor" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.queryAccelerationMaxScaleFactor"></a>

```typescript
public readonly queryAccelerationMaxScaleFactor: number;
```

- *Type:* number

Specifies the maximum scale factor for leasing compute resources for query acceleration.

The scale factor is used as a multiplier based on warehouse size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#query_acceleration_max_scale_factor Warehouse#query_acceleration_max_scale_factor}

---

##### `resourceMonitor`<sup>Optional</sup> <a name="resourceMonitor" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.resourceMonitor"></a>

```typescript
public readonly resourceMonitor: string;
```

- *Type:* string

Specifies the name of a resource monitor that is explicitly assigned to the warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#resource_monitor Warehouse#resource_monitor}

---

##### `scalingPolicy`<sup>Optional</sup> <a name="scalingPolicy" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.scalingPolicy"></a>

```typescript
public readonly scalingPolicy: string;
```

- *Type:* string

Specifies the policy for automatically starting and shutting down clusters in a multi-cluster warehouse running in Auto-scale mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#scaling_policy Warehouse#scaling_policy}

---

##### `statementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.statementQueuedTimeoutInSeconds"></a>

```typescript
public readonly statementQueuedTimeoutInSeconds: number;
```

- *Type:* number

Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#statement_queued_timeout_in_seconds Warehouse#statement_queued_timeout_in_seconds}

---

##### `statementTimeoutInSeconds`<sup>Optional</sup> <a name="statementTimeoutInSeconds" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.statementTimeoutInSeconds"></a>

```typescript
public readonly statementTimeoutInSeconds: number;
```

- *Type:* number

Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#statement_timeout_in_seconds Warehouse#statement_timeout_in_seconds}

---

##### `waitForProvisioning`<sup>Optional</sup> <a name="waitForProvisioning" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.waitForProvisioning"></a>

```typescript
public readonly waitForProvisioning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the warehouse, after being resized, waits for all the servers to provision before executing any queued or new queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#wait_for_provisioning Warehouse#wait_for_provisioning}

---

##### `warehouseSize`<sup>Optional</sup> <a name="warehouseSize" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.warehouseSize"></a>

```typescript
public readonly warehouseSize: string;
```

- *Type:* string

Specifies the size of the virtual warehouse.

Larger warehouse sizes 5X-Large and 6X-Large are currently in preview and only available on Amazon Web Services (AWS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#warehouse_size Warehouse#warehouse_size}

---

##### `warehouseType`<sup>Optional</sup> <a name="warehouseType" id="@cdktf/provider-snowflake.warehouse.WarehouseConfig.property.warehouseType"></a>

```typescript
public readonly warehouseType: string;
```

- *Type:* string

Specifies a STANDARD or SNOWPARK-OPTIMIZED warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/warehouse#warehouse_type Warehouse#warehouse_type}

---



