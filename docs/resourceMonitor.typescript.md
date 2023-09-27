# `snowflake_resource_monitor`

Refer to the Terraform Registory for docs: [`snowflake_resource_monitor`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor).

# `resourceMonitor` Submodule <a name="`resourceMonitor` Submodule" id="@cdktf/provider-snowflake.resourceMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceMonitor <a name="ResourceMonitor" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor snowflake_resource_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer"></a>

```typescript
import { resourceMonitor } from '@cdktf/provider-snowflake'

new resourceMonitor.ResourceMonitor(scope: Construct, id: string, config: ResourceMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig">ResourceMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig">ResourceMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetCreditQuota">resetCreditQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetEndTimestamp">resetEndTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyTriggers">resetNotifyTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyUsers">resetNotifyUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSetForAccount">resetSetForAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetStartTimestamp">resetStartTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendImmediateTrigger">resetSuspendImmediateTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendImmediateTriggers">resetSuspendImmediateTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendTrigger">resetSuspendTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendTriggers">resetSuspendTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetWarehouses">resetWarehouses</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCreditQuota` <a name="resetCreditQuota" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetCreditQuota"></a>

```typescript
public resetCreditQuota(): void
```

##### `resetEndTimestamp` <a name="resetEndTimestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetEndTimestamp"></a>

```typescript
public resetEndTimestamp(): void
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotifyTriggers` <a name="resetNotifyTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyTriggers"></a>

```typescript
public resetNotifyTriggers(): void
```

##### `resetNotifyUsers` <a name="resetNotifyUsers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyUsers"></a>

```typescript
public resetNotifyUsers(): void
```

##### `resetSetForAccount` <a name="resetSetForAccount" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSetForAccount"></a>

```typescript
public resetSetForAccount(): void
```

##### `resetStartTimestamp` <a name="resetStartTimestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetStartTimestamp"></a>

```typescript
public resetStartTimestamp(): void
```

##### `resetSuspendImmediateTrigger` <a name="resetSuspendImmediateTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendImmediateTrigger"></a>

```typescript
public resetSuspendImmediateTrigger(): void
```

##### `resetSuspendImmediateTriggers` <a name="resetSuspendImmediateTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendImmediateTriggers"></a>

```typescript
public resetSuspendImmediateTriggers(): void
```

##### `resetSuspendTrigger` <a name="resetSuspendTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendTrigger"></a>

```typescript
public resetSuspendTrigger(): void
```

##### `resetSuspendTriggers` <a name="resetSuspendTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendTriggers"></a>

```typescript
public resetSuspendTriggers(): void
```

##### `resetWarehouses` <a name="resetWarehouses" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetWarehouses"></a>

```typescript
public resetWarehouses(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isConstruct"></a>

```typescript
import { resourceMonitor } from '@cdktf/provider-snowflake'

resourceMonitor.ResourceMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformElement"></a>

```typescript
import { resourceMonitor } from '@cdktf/provider-snowflake'

resourceMonitor.ResourceMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformResource"></a>

```typescript
import { resourceMonitor } from '@cdktf/provider-snowflake'

resourceMonitor.ResourceMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuotaInput">creditQuotaInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestampInput">endTimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggersInput">notifyTriggersInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsersInput">notifyUsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.setForAccountInput">setForAccountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestampInput">startTimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggerInput">suspendImmediateTriggerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggersInput">suspendImmediateTriggersInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggerInput">suspendTriggerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggersInput">suspendTriggersInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.warehousesInput">warehousesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuota">creditQuota</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestamp">endTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggers">notifyTriggers</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsers">notifyUsers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.setForAccount">setForAccount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestamp">startTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTrigger">suspendImmediateTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggers">suspendImmediateTriggers</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTrigger">suspendTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggers">suspendTriggers</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.warehouses">warehouses</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creditQuotaInput`<sup>Optional</sup> <a name="creditQuotaInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuotaInput"></a>

```typescript
public readonly creditQuotaInput: number;
```

- *Type:* number

---

##### `endTimestampInput`<sup>Optional</sup> <a name="endTimestampInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestampInput"></a>

```typescript
public readonly endTimestampInput: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notifyTriggersInput`<sup>Optional</sup> <a name="notifyTriggersInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggersInput"></a>

```typescript
public readonly notifyTriggersInput: number[];
```

- *Type:* number[]

---

##### `notifyUsersInput`<sup>Optional</sup> <a name="notifyUsersInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsersInput"></a>

```typescript
public readonly notifyUsersInput: string[];
```

- *Type:* string[]

---

##### `setForAccountInput`<sup>Optional</sup> <a name="setForAccountInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.setForAccountInput"></a>

```typescript
public readonly setForAccountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `startTimestampInput`<sup>Optional</sup> <a name="startTimestampInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestampInput"></a>

```typescript
public readonly startTimestampInput: string;
```

- *Type:* string

---

##### `suspendImmediateTriggerInput`<sup>Optional</sup> <a name="suspendImmediateTriggerInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggerInput"></a>

```typescript
public readonly suspendImmediateTriggerInput: number;
```

- *Type:* number

---

##### `suspendImmediateTriggersInput`<sup>Optional</sup> <a name="suspendImmediateTriggersInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggersInput"></a>

```typescript
public readonly suspendImmediateTriggersInput: number[];
```

- *Type:* number[]

---

##### `suspendTriggerInput`<sup>Optional</sup> <a name="suspendTriggerInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggerInput"></a>

```typescript
public readonly suspendTriggerInput: number;
```

- *Type:* number

---

##### `suspendTriggersInput`<sup>Optional</sup> <a name="suspendTriggersInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggersInput"></a>

```typescript
public readonly suspendTriggersInput: number[];
```

- *Type:* number[]

---

##### `warehousesInput`<sup>Optional</sup> <a name="warehousesInput" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.warehousesInput"></a>

```typescript
public readonly warehousesInput: string[];
```

- *Type:* string[]

---

##### `creditQuota`<sup>Required</sup> <a name="creditQuota" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuota"></a>

```typescript
public readonly creditQuota: number;
```

- *Type:* number

---

##### `endTimestamp`<sup>Required</sup> <a name="endTimestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestamp"></a>

```typescript
public readonly endTimestamp: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notifyTriggers`<sup>Required</sup> <a name="notifyTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggers"></a>

```typescript
public readonly notifyTriggers: number[];
```

- *Type:* number[]

---

##### `notifyUsers`<sup>Required</sup> <a name="notifyUsers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsers"></a>

```typescript
public readonly notifyUsers: string[];
```

- *Type:* string[]

---

##### `setForAccount`<sup>Required</sup> <a name="setForAccount" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.setForAccount"></a>

```typescript
public readonly setForAccount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `startTimestamp`<sup>Required</sup> <a name="startTimestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestamp"></a>

```typescript
public readonly startTimestamp: string;
```

- *Type:* string

---

##### `suspendImmediateTrigger`<sup>Required</sup> <a name="suspendImmediateTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTrigger"></a>

```typescript
public readonly suspendImmediateTrigger: number;
```

- *Type:* number

---

##### `suspendImmediateTriggers`<sup>Required</sup> <a name="suspendImmediateTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggers"></a>

```typescript
public readonly suspendImmediateTriggers: number[];
```

- *Type:* number[]

---

##### `suspendTrigger`<sup>Required</sup> <a name="suspendTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTrigger"></a>

```typescript
public readonly suspendTrigger: number;
```

- *Type:* number

---

##### `suspendTriggers`<sup>Required</sup> <a name="suspendTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggers"></a>

```typescript
public readonly suspendTriggers: number[];
```

- *Type:* number[]

---

##### `warehouses`<sup>Required</sup> <a name="warehouses" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.warehouses"></a>

```typescript
public readonly warehouses: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceMonitorConfig <a name="ResourceMonitorConfig" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.Initializer"></a>

```typescript
import { resourceMonitor } from '@cdktf/provider-snowflake'

const resourceMonitorConfig: resourceMonitor.ResourceMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.name">name</a></code> | <code>string</code> | Identifier for the resource monitor; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.creditQuota">creditQuota</a></code> | <code>number</code> | The number of credits allocated monthly to the resource monitor. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.endTimestamp">endTimestamp</a></code> | <code>string</code> | The date and time when the resource monitor suspends the assigned warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.frequency">frequency</a></code> | <code>string</code> | The frequency interval at which the credit usage resets to 0. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor#id ResourceMonitor#id}. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyTriggers">notifyTriggers</a></code> | <code>number[]</code> | A list of percentage thresholds at which to send an alert to subscribed users. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyUsers">notifyUsers</a></code> | <code>string[]</code> | Specifies the list of users to receive email notifications on resource monitors. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.setForAccount">setForAccount</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the resource monitor should be applied globally to your Snowflake account (defaults to false). |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.startTimestamp">startTimestamp</a></code> | <code>string</code> | The date and time when the resource monitor starts monitoring credit usage for the assigned warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendImmediateTrigger">suspendImmediateTrigger</a></code> | <code>number</code> | The number that represents the percentage threshold at which to immediately suspend all warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendImmediateTriggers">suspendImmediateTriggers</a></code> | <code>number[]</code> | A list of percentage thresholds at which to suspend all warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendTrigger">suspendTrigger</a></code> | <code>number</code> | The number that represents the percentage threshold at which to suspend all warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendTriggers">suspendTriggers</a></code> | <code>number[]</code> | A list of percentage thresholds at which to suspend all warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.warehouses">warehouses</a></code> | <code>string[]</code> | A list of warehouses to apply the resource monitor to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Identifier for the resource monitor; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor#name ResourceMonitor#name}

---

##### `creditQuota`<sup>Optional</sup> <a name="creditQuota" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.creditQuota"></a>

```typescript
public readonly creditQuota: number;
```

- *Type:* number

The number of credits allocated monthly to the resource monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor#credit_quota ResourceMonitor#credit_quota}

---

##### `endTimestamp`<sup>Optional</sup> <a name="endTimestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.endTimestamp"></a>

```typescript
public readonly endTimestamp: string;
```

- *Type:* string

The date and time when the resource monitor suspends the assigned warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor#end_timestamp ResourceMonitor#end_timestamp}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

The frequency interval at which the credit usage resets to 0.

If you set a frequency for a resource monitor, you must also set START_TIMESTAMP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor#frequency ResourceMonitor#frequency}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor#id ResourceMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notifyTriggers`<sup>Optional</sup> <a name="notifyTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyTriggers"></a>

```typescript
public readonly notifyTriggers: number[];
```

- *Type:* number[]

A list of percentage thresholds at which to send an alert to subscribed users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor#notify_triggers ResourceMonitor#notify_triggers}

---

##### `notifyUsers`<sup>Optional</sup> <a name="notifyUsers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyUsers"></a>

```typescript
public readonly notifyUsers: string[];
```

- *Type:* string[]

Specifies the list of users to receive email notifications on resource monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor#notify_users ResourceMonitor#notify_users}

---

##### `setForAccount`<sup>Optional</sup> <a name="setForAccount" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.setForAccount"></a>

```typescript
public readonly setForAccount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the resource monitor should be applied globally to your Snowflake account (defaults to false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor#set_for_account ResourceMonitor#set_for_account}

---

##### `startTimestamp`<sup>Optional</sup> <a name="startTimestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.startTimestamp"></a>

```typescript
public readonly startTimestamp: string;
```

- *Type:* string

The date and time when the resource monitor starts monitoring credit usage for the assigned warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor#start_timestamp ResourceMonitor#start_timestamp}

---

##### `suspendImmediateTrigger`<sup>Optional</sup> <a name="suspendImmediateTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendImmediateTrigger"></a>

```typescript
public readonly suspendImmediateTrigger: number;
```

- *Type:* number

The number that represents the percentage threshold at which to immediately suspend all warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor#suspend_immediate_trigger ResourceMonitor#suspend_immediate_trigger}

---

##### `suspendImmediateTriggers`<sup>Optional</sup> <a name="suspendImmediateTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendImmediateTriggers"></a>

```typescript
public readonly suspendImmediateTriggers: number[];
```

- *Type:* number[]

A list of percentage thresholds at which to suspend all warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor#suspend_immediate_triggers ResourceMonitor#suspend_immediate_triggers}

---

##### `suspendTrigger`<sup>Optional</sup> <a name="suspendTrigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendTrigger"></a>

```typescript
public readonly suspendTrigger: number;
```

- *Type:* number

The number that represents the percentage threshold at which to suspend all warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor#suspend_trigger ResourceMonitor#suspend_trigger}

---

##### `suspendTriggers`<sup>Optional</sup> <a name="suspendTriggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendTriggers"></a>

```typescript
public readonly suspendTriggers: number[];
```

- *Type:* number[]

A list of percentage thresholds at which to suspend all warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor#suspend_triggers ResourceMonitor#suspend_triggers}

---

##### `warehouses`<sup>Optional</sup> <a name="warehouses" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.warehouses"></a>

```typescript
public readonly warehouses: string[];
```

- *Type:* string[]

A list of warehouses to apply the resource monitor to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor#warehouses ResourceMonitor#warehouses}

---



