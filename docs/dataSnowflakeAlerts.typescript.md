# `dataSnowflakeAlerts` Submodule <a name="`dataSnowflakeAlerts` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeAlerts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeAlerts <a name="DataSnowflakeAlerts" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/data-sources/alerts snowflake_alerts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.Initializer"></a>

```typescript
import { dataSnowflakeAlerts } from '@cdktf/provider-snowflake'

new dataSnowflakeAlerts.DataSnowflakeAlerts(scope: Construct, id: string, config?: DataSnowflakeAlertsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig">DataSnowflakeAlertsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig">DataSnowflakeAlertsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.resetPattern"></a>

```typescript
public resetPattern(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.resetSchema"></a>

```typescript
public resetSchema(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeAlerts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.isConstruct"></a>

```typescript
import { dataSnowflakeAlerts } from '@cdktf/provider-snowflake'

dataSnowflakeAlerts.DataSnowflakeAlerts.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.isTerraformElement"></a>

```typescript
import { dataSnowflakeAlerts } from '@cdktf/provider-snowflake'

dataSnowflakeAlerts.DataSnowflakeAlerts.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeAlerts } from '@cdktf/provider-snowflake'

dataSnowflakeAlerts.DataSnowflakeAlerts.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.generateConfigForImport"></a>

```typescript
import { dataSnowflakeAlerts } from '@cdktf/provider-snowflake'

dataSnowflakeAlerts.DataSnowflakeAlerts.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSnowflakeAlerts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeAlerts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeAlerts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/data-sources/alerts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeAlerts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.alerts">alerts</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList">DataSnowflakeAlertsAlertsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.schema">schema</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `alerts`<sup>Required</sup> <a name="alerts" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.alerts"></a>

```typescript
public readonly alerts: DataSnowflakeAlertsAlertsList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList">DataSnowflakeAlertsAlertsList</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlerts.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeAlertsAlerts <a name="DataSnowflakeAlertsAlerts" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlerts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlerts.Initializer"></a>

```typescript
import { dataSnowflakeAlerts } from '@cdktf/provider-snowflake'

const dataSnowflakeAlertsAlerts: dataSnowflakeAlerts.DataSnowflakeAlertsAlerts = { ... }
```


### DataSnowflakeAlertsConfig <a name="DataSnowflakeAlertsConfig" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.Initializer"></a>

```typescript
import { dataSnowflakeAlerts } from '@cdktf/provider-snowflake'

const dataSnowflakeAlertsConfig: dataSnowflakeAlerts.DataSnowflakeAlertsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.database">database</a></code> | <code>string</code> | The database from which to return the alerts from. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/data-sources/alerts#id DataSnowflakeAlerts#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.pattern">pattern</a></code> | <code>string</code> | Filters the command output by object name. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.schema">schema</a></code> | <code>string</code> | The schema from which to return the alerts from. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database from which to return the alerts from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/data-sources/alerts#database DataSnowflakeAlerts#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/data-sources/alerts#id DataSnowflakeAlerts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Filters the command output by object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/data-sources/alerts#pattern DataSnowflakeAlerts#pattern}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema from which to return the alerts from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/data-sources/alerts#schema DataSnowflakeAlerts#schema}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeAlertsAlertsList <a name="DataSnowflakeAlertsAlertsList" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.Initializer"></a>

```typescript
import { dataSnowflakeAlerts } from '@cdktf/provider-snowflake'

new dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.get"></a>

```typescript
public get(index: number): DataSnowflakeAlertsAlertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeAlertsAlertsOutputReference <a name="DataSnowflakeAlertsAlertsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeAlerts } from '@cdktf/provider-snowflake'

new dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlerts">DataSnowflakeAlertsAlerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlertsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeAlertsAlerts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAlerts.DataSnowflakeAlertsAlerts">DataSnowflakeAlertsAlerts</a>

---



