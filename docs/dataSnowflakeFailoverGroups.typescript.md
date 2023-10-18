# `data_snowflake_failover_groups`

Refer to the Terraform Registory for docs: [`data_snowflake_failover_groups`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/data-sources/failover_groups).

# `dataSnowflakeFailoverGroups` Submodule <a name="`dataSnowflakeFailoverGroups` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeFailoverGroups <a name="DataSnowflakeFailoverGroups" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/data-sources/failover_groups snowflake_failover_groups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer"></a>

```typescript
import { dataSnowflakeFailoverGroups } from '@cdktf/provider-snowflake'

new dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups(scope: Construct, id: string, config?: DataSnowflakeFailoverGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig">DataSnowflakeFailoverGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig">DataSnowflakeFailoverGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetInAccount">resetInAccount</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInAccount` <a name="resetInAccount" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetInAccount"></a>

```typescript
public resetInAccount(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeFailoverGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isConstruct"></a>

```typescript
import { dataSnowflakeFailoverGroups } from '@cdktf/provider-snowflake'

dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformElement"></a>

```typescript
import { dataSnowflakeFailoverGroups } from '@cdktf/provider-snowflake'

dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeFailoverGroups } from '@cdktf/provider-snowflake'

dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport"></a>

```typescript
import { dataSnowflakeFailoverGroups } from '@cdktf/provider-snowflake'

dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSnowflakeFailoverGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeFailoverGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeFailoverGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/data-sources/failover_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeFailoverGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.failoverGroups">failoverGroups</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList">DataSnowflakeFailoverGroupsFailoverGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.inAccountInput">inAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.inAccount">inAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `failoverGroups`<sup>Required</sup> <a name="failoverGroups" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.failoverGroups"></a>

```typescript
public readonly failoverGroups: DataSnowflakeFailoverGroupsFailoverGroupsList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList">DataSnowflakeFailoverGroupsFailoverGroupsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inAccountInput`<sup>Optional</sup> <a name="inAccountInput" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.inAccountInput"></a>

```typescript
public readonly inAccountInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inAccount`<sup>Required</sup> <a name="inAccount" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.inAccount"></a>

```typescript
public readonly inAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeFailoverGroupsConfig <a name="DataSnowflakeFailoverGroupsConfig" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.Initializer"></a>

```typescript
import { dataSnowflakeFailoverGroups } from '@cdktf/provider-snowflake'

const dataSnowflakeFailoverGroupsConfig: dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/data-sources/failover_groups#id DataSnowflakeFailoverGroups#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.inAccount">inAccount</a></code> | <code>string</code> | Specifies the identifier for the account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/data-sources/failover_groups#id DataSnowflakeFailoverGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inAccount`<sup>Optional</sup> <a name="inAccount" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.inAccount"></a>

```typescript
public readonly inAccount: string;
```

- *Type:* string

Specifies the identifier for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/data-sources/failover_groups#in_account DataSnowflakeFailoverGroups#in_account}

---

### DataSnowflakeFailoverGroupsFailoverGroups <a name="DataSnowflakeFailoverGroupsFailoverGroups" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroups.Initializer"></a>

```typescript
import { dataSnowflakeFailoverGroups } from '@cdktf/provider-snowflake'

const dataSnowflakeFailoverGroupsFailoverGroups: dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroups = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeFailoverGroupsFailoverGroupsList <a name="DataSnowflakeFailoverGroupsFailoverGroupsList" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer"></a>

```typescript
import { dataSnowflakeFailoverGroups } from '@cdktf/provider-snowflake'

new dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.get"></a>

```typescript
public get(index: number): DataSnowflakeFailoverGroupsFailoverGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeFailoverGroupsFailoverGroupsOutputReference <a name="DataSnowflakeFailoverGroupsFailoverGroupsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeFailoverGroups } from '@cdktf/provider-snowflake'

new dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.accountLocator">accountLocator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.allowedAccounts">allowedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.allowedIntegrationTypes">allowedIntegrationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.isPrimary">isPrimary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.nextScheduledRefresh">nextScheduledRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.objectTypes">objectTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.primary">primary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.regionGroup">regionGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.replicationSchedule">replicationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.secondaryState">secondaryState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.snowflakeRegion">snowflakeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroups">DataSnowflakeFailoverGroupsFailoverGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountLocator`<sup>Required</sup> <a name="accountLocator" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.accountLocator"></a>

```typescript
public readonly accountLocator: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `allowedAccounts`<sup>Required</sup> <a name="allowedAccounts" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.allowedAccounts"></a>

```typescript
public readonly allowedAccounts: string[];
```

- *Type:* string[]

---

##### `allowedIntegrationTypes`<sup>Required</sup> <a name="allowedIntegrationTypes" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.allowedIntegrationTypes"></a>

```typescript
public readonly allowedIntegrationTypes: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.isPrimary"></a>

```typescript
public readonly isPrimary: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nextScheduledRefresh`<sup>Required</sup> <a name="nextScheduledRefresh" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.nextScheduledRefresh"></a>

```typescript
public readonly nextScheduledRefresh: string;
```

- *Type:* string

---

##### `objectTypes`<sup>Required</sup> <a name="objectTypes" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.objectTypes"></a>

```typescript
public readonly objectTypes: string[];
```

- *Type:* string[]

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.primary"></a>

```typescript
public readonly primary: string;
```

- *Type:* string

---

##### `regionGroup`<sup>Required</sup> <a name="regionGroup" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.regionGroup"></a>

```typescript
public readonly regionGroup: string;
```

- *Type:* string

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.replicationSchedule"></a>

```typescript
public readonly replicationSchedule: string;
```

- *Type:* string

---

##### `secondaryState`<sup>Required</sup> <a name="secondaryState" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.secondaryState"></a>

```typescript
public readonly secondaryState: string;
```

- *Type:* string

---

##### `snowflakeRegion`<sup>Required</sup> <a name="snowflakeRegion" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.snowflakeRegion"></a>

```typescript
public readonly snowflakeRegion: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeFailoverGroupsFailoverGroups;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroups">DataSnowflakeFailoverGroupsFailoverGroups</a>

---



