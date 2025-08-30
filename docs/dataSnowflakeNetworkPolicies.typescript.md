# `dataSnowflakeNetworkPolicies` Submodule <a name="`dataSnowflakeNetworkPolicies` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeNetworkPolicies <a name="DataSnowflakeNetworkPolicies" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/network_policies snowflake_network_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.Initializer"></a>

```typescript
import { dataSnowflakeNetworkPolicies } from '@cdktf/provider-snowflake'

new dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies(scope: Construct, id: string, config?: DataSnowflakeNetworkPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig">DataSnowflakeNetworkPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig">DataSnowflakeNetworkPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLike` <a name="resetLike" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.resetLike"></a>

```typescript
public resetLike(): void
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.resetWithDescribe"></a>

```typescript
public resetWithDescribe(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeNetworkPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.isConstruct"></a>

```typescript
import { dataSnowflakeNetworkPolicies } from '@cdktf/provider-snowflake'

dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.isTerraformElement"></a>

```typescript
import { dataSnowflakeNetworkPolicies } from '@cdktf/provider-snowflake'

dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeNetworkPolicies } from '@cdktf/provider-snowflake'

dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.generateConfigForImport"></a>

```typescript
import { dataSnowflakeNetworkPolicies } from '@cdktf/provider-snowflake'

dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSnowflakeNetworkPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeNetworkPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeNetworkPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/network_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeNetworkPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.networkPolicies">networkPolicies</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList">DataSnowflakeNetworkPoliciesNetworkPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.withDescribeInput">withDescribeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.like">like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `networkPolicies`<sup>Required</sup> <a name="networkPolicies" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.networkPolicies"></a>

```typescript
public readonly networkPolicies: DataSnowflakeNetworkPoliciesNetworkPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList">DataSnowflakeNetworkPoliciesNetworkPoliciesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.withDescribeInput"></a>

```typescript
public readonly withDescribeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeNetworkPoliciesConfig <a name="DataSnowflakeNetworkPoliciesConfig" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.Initializer"></a>

```typescript
import { dataSnowflakeNetworkPolicies } from '@cdktf/provider-snowflake'

const dataSnowflakeNetworkPoliciesConfig: dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/network_policies#id DataSnowflakeNetworkPolicies#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.withDescribe">withDescribe</a></code> | <code>boolean \| cdktf.IResolvable</code> | (Default: `true`) Runs DESC NETWORK POLICY for each network policy returned by SHOW NETWORK POLICIES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/network_policies#id DataSnowflakeNetworkPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/network_policies#like DataSnowflakeNetworkPolicies#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesConfig.property.withDescribe"></a>

```typescript
public readonly withDescribe: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(Default: `true`) Runs DESC NETWORK POLICY for each network policy returned by SHOW NETWORK POLICIES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/network_policies#with_describe DataSnowflakeNetworkPolicies#with_describe}

---

### DataSnowflakeNetworkPoliciesNetworkPolicies <a name="DataSnowflakeNetworkPoliciesNetworkPolicies" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPolicies.Initializer"></a>

```typescript
import { dataSnowflakeNetworkPolicies } from '@cdktf/provider-snowflake'

const dataSnowflakeNetworkPoliciesNetworkPolicies: dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPolicies = { ... }
```


### DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutput <a name="DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutput" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutput.Initializer"></a>

```typescript
import { dataSnowflakeNetworkPolicies } from '@cdktf/provider-snowflake'

const dataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutput: dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutput = { ... }
```


### DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutput <a name="DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutput.Initializer"></a>

```typescript
import { dataSnowflakeNetworkPolicies } from '@cdktf/provider-snowflake'

const dataSnowflakeNetworkPoliciesNetworkPoliciesShowOutput: dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList <a name="DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.Initializer"></a>

```typescript
import { dataSnowflakeNetworkPolicies } from '@cdktf/provider-snowflake'

new dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference <a name="DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeNetworkPolicies } from '@cdktf/provider-snowflake'

new dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.property.allowedIpList">allowedIpList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.property.allowedNetworkRuleList">allowedNetworkRuleList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.property.blockedIpList">blockedIpList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.property.blockedNetworkRuleList">blockedNetworkRuleList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutput">DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedIpList`<sup>Required</sup> <a name="allowedIpList" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.property.allowedIpList"></a>

```typescript
public readonly allowedIpList: string;
```

- *Type:* string

---

##### `allowedNetworkRuleList`<sup>Required</sup> <a name="allowedNetworkRuleList" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.property.allowedNetworkRuleList"></a>

```typescript
public readonly allowedNetworkRuleList: string;
```

- *Type:* string

---

##### `blockedIpList`<sup>Required</sup> <a name="blockedIpList" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.property.blockedIpList"></a>

```typescript
public readonly blockedIpList: string;
```

- *Type:* string

---

##### `blockedNetworkRuleList`<sup>Required</sup> <a name="blockedNetworkRuleList" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.property.blockedNetworkRuleList"></a>

```typescript
public readonly blockedNetworkRuleList: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutput">DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutput</a>

---


### DataSnowflakeNetworkPoliciesNetworkPoliciesList <a name="DataSnowflakeNetworkPoliciesNetworkPoliciesList" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.Initializer"></a>

```typescript
import { dataSnowflakeNetworkPolicies } from '@cdktf/provider-snowflake'

new dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.get"></a>

```typescript
public get(index: number): DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference <a name="DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeNetworkPolicies } from '@cdktf/provider-snowflake'

new dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList">DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList">DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPolicies">DataSnowflakeNetworkPoliciesNetworkPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.property.describeOutput"></a>

```typescript
public readonly describeOutput: DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList">DataSnowflakeNetworkPoliciesNetworkPoliciesDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.property.showOutput"></a>

```typescript
public readonly showOutput: DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList">DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeNetworkPoliciesNetworkPolicies;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPolicies">DataSnowflakeNetworkPoliciesNetworkPolicies</a>

---


### DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList <a name="DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.Initializer"></a>

```typescript
import { dataSnowflakeNetworkPolicies } from '@cdktf/provider-snowflake'

new dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.get"></a>

```typescript
public get(index: number): DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference <a name="DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeNetworkPolicies } from '@cdktf/provider-snowflake'

new dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.entriesInAllowedIpList">entriesInAllowedIpList</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.entriesInAllowedNetworkRules">entriesInAllowedNetworkRules</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.entriesInBlockedIpList">entriesInBlockedIpList</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.entriesInBlockedNetworkRules">entriesInBlockedNetworkRules</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutput">DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `entriesInAllowedIpList`<sup>Required</sup> <a name="entriesInAllowedIpList" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.entriesInAllowedIpList"></a>

```typescript
public readonly entriesInAllowedIpList: number;
```

- *Type:* number

---

##### `entriesInAllowedNetworkRules`<sup>Required</sup> <a name="entriesInAllowedNetworkRules" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.entriesInAllowedNetworkRules"></a>

```typescript
public readonly entriesInAllowedNetworkRules: number;
```

- *Type:* number

---

##### `entriesInBlockedIpList`<sup>Required</sup> <a name="entriesInBlockedIpList" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.entriesInBlockedIpList"></a>

```typescript
public readonly entriesInBlockedIpList: number;
```

- *Type:* number

---

##### `entriesInBlockedNetworkRules`<sup>Required</sup> <a name="entriesInBlockedNetworkRules" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.entriesInBlockedNetworkRules"></a>

```typescript
public readonly entriesInBlockedNetworkRules: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeNetworkPolicies.DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutput">DataSnowflakeNetworkPoliciesNetworkPoliciesShowOutput</a>

---



