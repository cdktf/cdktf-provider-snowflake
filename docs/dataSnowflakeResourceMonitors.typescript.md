# `dataSnowflakeResourceMonitors` Submodule <a name="`dataSnowflakeResourceMonitors` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeResourceMonitors <a name="DataSnowflakeResourceMonitors" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/resource_monitors snowflake_resource_monitors}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer"></a>

```typescript
import { dataSnowflakeResourceMonitors } from '@cdktf/provider-snowflake'

new dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors(scope: Construct, id: string, config?: DataSnowflakeResourceMonitorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig">DataSnowflakeResourceMonitorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig">DataSnowflakeResourceMonitorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetLike">resetLike</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLike` <a name="resetLike" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetLike"></a>

```typescript
public resetLike(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeResourceMonitors resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isConstruct"></a>

```typescript
import { dataSnowflakeResourceMonitors } from '@cdktf/provider-snowflake'

dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformElement"></a>

```typescript
import { dataSnowflakeResourceMonitors } from '@cdktf/provider-snowflake'

dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeResourceMonitors } from '@cdktf/provider-snowflake'

dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport"></a>

```typescript
import { dataSnowflakeResourceMonitors } from '@cdktf/provider-snowflake'

dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSnowflakeResourceMonitors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeResourceMonitors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeResourceMonitors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/resource_monitors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeResourceMonitors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.resourceMonitors">resourceMonitors</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList">DataSnowflakeResourceMonitorsResourceMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.like">like</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `resourceMonitors`<sup>Required</sup> <a name="resourceMonitors" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.resourceMonitors"></a>

```typescript
public readonly resourceMonitors: DataSnowflakeResourceMonitorsResourceMonitorsList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList">DataSnowflakeResourceMonitorsResourceMonitorsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeResourceMonitorsConfig <a name="DataSnowflakeResourceMonitorsConfig" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.Initializer"></a>

```typescript
import { dataSnowflakeResourceMonitors } from '@cdktf/provider-snowflake'

const dataSnowflakeResourceMonitorsConfig: dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/resource_monitors#id DataSnowflakeResourceMonitors#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/resource_monitors#id DataSnowflakeResourceMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/data-sources/resource_monitors#like DataSnowflakeResourceMonitors#like}

---

### DataSnowflakeResourceMonitorsResourceMonitors <a name="DataSnowflakeResourceMonitorsResourceMonitors" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitors.Initializer"></a>

```typescript
import { dataSnowflakeResourceMonitors } from '@cdktf/provider-snowflake'

const dataSnowflakeResourceMonitorsResourceMonitors: dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitors = { ... }
```


### DataSnowflakeResourceMonitorsResourceMonitorsShowOutput <a name="DataSnowflakeResourceMonitorsResourceMonitorsShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutput.Initializer"></a>

```typescript
import { dataSnowflakeResourceMonitors } from '@cdktf/provider-snowflake'

const dataSnowflakeResourceMonitorsResourceMonitorsShowOutput: dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeResourceMonitorsResourceMonitorsList <a name="DataSnowflakeResourceMonitorsResourceMonitorsList" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer"></a>

```typescript
import { dataSnowflakeResourceMonitors } from '@cdktf/provider-snowflake'

new dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.get"></a>

```typescript
public get(index: number): DataSnowflakeResourceMonitorsResourceMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeResourceMonitorsResourceMonitorsOutputReference <a name="DataSnowflakeResourceMonitorsResourceMonitorsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeResourceMonitors } from '@cdktf/provider-snowflake'

new dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList">DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitors">DataSnowflakeResourceMonitorsResourceMonitors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList">DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeResourceMonitorsResourceMonitors;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitors">DataSnowflakeResourceMonitorsResourceMonitors</a>

---


### DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList <a name="DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakeResourceMonitors } from '@cdktf/provider-snowflake'

new dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference <a name="DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeResourceMonitors } from '@cdktf/provider-snowflake'

new dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.creditQuota">creditQuota</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.remainingCredits">remainingCredits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.suspendAt">suspendAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.suspendImmediateAt">suspendImmediateAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.usedCredits">usedCredits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutput">DataSnowflakeResourceMonitorsResourceMonitorsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `creditQuota`<sup>Required</sup> <a name="creditQuota" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.creditQuota"></a>

```typescript
public readonly creditQuota: number;
```

- *Type:* number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `remainingCredits`<sup>Required</sup> <a name="remainingCredits" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.remainingCredits"></a>

```typescript
public readonly remainingCredits: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `suspendAt`<sup>Required</sup> <a name="suspendAt" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.suspendAt"></a>

```typescript
public readonly suspendAt: number;
```

- *Type:* number

---

##### `suspendImmediateAt`<sup>Required</sup> <a name="suspendImmediateAt" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.suspendImmediateAt"></a>

```typescript
public readonly suspendImmediateAt: number;
```

- *Type:* number

---

##### `usedCredits`<sup>Required</sup> <a name="usedCredits" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.usedCredits"></a>

```typescript
public readonly usedCredits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeResourceMonitorsResourceMonitorsShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutput">DataSnowflakeResourceMonitorsResourceMonitorsShowOutput</a>

---



