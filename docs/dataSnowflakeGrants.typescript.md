# `dataSnowflakeGrants` Submodule <a name="`dataSnowflakeGrants` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeGrants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeGrants <a name="DataSnowflakeGrants" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants snowflake_grants}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

new dataSnowflakeGrants.DataSnowflakeGrants(scope: Construct, id: string, config?: DataSnowflakeGrantsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig">DataSnowflakeGrantsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig">DataSnowflakeGrantsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsIn">putFutureGrantsIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsTo">putFutureGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOf">putGrantsOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOn">putGrantsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsTo">putGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetFutureGrantsIn">resetFutureGrantsIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetFutureGrantsTo">resetFutureGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsOf">resetGrantsOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsOn">resetGrantsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsTo">resetGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFutureGrantsIn` <a name="putFutureGrantsIn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsIn"></a>

```typescript
public putFutureGrantsIn(value: DataSnowflakeGrantsFutureGrantsIn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a>

---

##### `putFutureGrantsTo` <a name="putFutureGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsTo"></a>

```typescript
public putFutureGrantsTo(value: DataSnowflakeGrantsFutureGrantsTo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putFutureGrantsTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a>

---

##### `putGrantsOf` <a name="putGrantsOf" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOf"></a>

```typescript
public putGrantsOf(value: DataSnowflakeGrantsGrantsOf): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a>

---

##### `putGrantsOn` <a name="putGrantsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOn"></a>

```typescript
public putGrantsOn(value: DataSnowflakeGrantsGrantsOn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsOn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a>

---

##### `putGrantsTo` <a name="putGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsTo"></a>

```typescript
public putGrantsTo(value: DataSnowflakeGrantsGrantsTo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.putGrantsTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a>

---

##### `resetFutureGrantsIn` <a name="resetFutureGrantsIn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetFutureGrantsIn"></a>

```typescript
public resetFutureGrantsIn(): void
```

##### `resetFutureGrantsTo` <a name="resetFutureGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetFutureGrantsTo"></a>

```typescript
public resetFutureGrantsTo(): void
```

##### `resetGrantsOf` <a name="resetGrantsOf" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsOf"></a>

```typescript
public resetGrantsOf(): void
```

##### `resetGrantsOn` <a name="resetGrantsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsOn"></a>

```typescript
public resetGrantsOn(): void
```

##### `resetGrantsTo` <a name="resetGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetGrantsTo"></a>

```typescript
public resetGrantsTo(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeGrants resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isConstruct"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

dataSnowflakeGrants.DataSnowflakeGrants.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformElement"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

dataSnowflakeGrants.DataSnowflakeGrants.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

dataSnowflakeGrants.DataSnowflakeGrants.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.generateConfigForImport"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

dataSnowflakeGrants.DataSnowflakeGrants.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSnowflakeGrants resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeGrants to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeGrants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeGrants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsIn">futureGrantsIn</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference">DataSnowflakeGrantsFutureGrantsInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsTo">futureGrantsTo</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference">DataSnowflakeGrantsFutureGrantsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grants">grants</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList">DataSnowflakeGrantsGrantsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOf">grantsOf</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference">DataSnowflakeGrantsGrantsOfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOn">grantsOn</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference">DataSnowflakeGrantsGrantsOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsTo">grantsTo</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference">DataSnowflakeGrantsGrantsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsInInput">futureGrantsInInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsToInput">futureGrantsToInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOfInput">grantsOfInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOnInput">grantsOnInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsToInput">grantsToInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `futureGrantsIn`<sup>Required</sup> <a name="futureGrantsIn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsIn"></a>

```typescript
public readonly futureGrantsIn: DataSnowflakeGrantsFutureGrantsInOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference">DataSnowflakeGrantsFutureGrantsInOutputReference</a>

---

##### `futureGrantsTo`<sup>Required</sup> <a name="futureGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsTo"></a>

```typescript
public readonly futureGrantsTo: DataSnowflakeGrantsFutureGrantsToOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference">DataSnowflakeGrantsFutureGrantsToOutputReference</a>

---

##### `grants`<sup>Required</sup> <a name="grants" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grants"></a>

```typescript
public readonly grants: DataSnowflakeGrantsGrantsList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList">DataSnowflakeGrantsGrantsList</a>

---

##### `grantsOf`<sup>Required</sup> <a name="grantsOf" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOf"></a>

```typescript
public readonly grantsOf: DataSnowflakeGrantsGrantsOfOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference">DataSnowflakeGrantsGrantsOfOutputReference</a>

---

##### `grantsOn`<sup>Required</sup> <a name="grantsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOn"></a>

```typescript
public readonly grantsOn: DataSnowflakeGrantsGrantsOnOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference">DataSnowflakeGrantsGrantsOnOutputReference</a>

---

##### `grantsTo`<sup>Required</sup> <a name="grantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsTo"></a>

```typescript
public readonly grantsTo: DataSnowflakeGrantsGrantsToOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference">DataSnowflakeGrantsGrantsToOutputReference</a>

---

##### `futureGrantsInInput`<sup>Optional</sup> <a name="futureGrantsInInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsInInput"></a>

```typescript
public readonly futureGrantsInInput: DataSnowflakeGrantsFutureGrantsIn;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a>

---

##### `futureGrantsToInput`<sup>Optional</sup> <a name="futureGrantsToInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.futureGrantsToInput"></a>

```typescript
public readonly futureGrantsToInput: DataSnowflakeGrantsFutureGrantsTo;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a>

---

##### `grantsOfInput`<sup>Optional</sup> <a name="grantsOfInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOfInput"></a>

```typescript
public readonly grantsOfInput: DataSnowflakeGrantsGrantsOf;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a>

---

##### `grantsOnInput`<sup>Optional</sup> <a name="grantsOnInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsOnInput"></a>

```typescript
public readonly grantsOnInput: DataSnowflakeGrantsGrantsOn;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a>

---

##### `grantsToInput`<sup>Optional</sup> <a name="grantsToInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.grantsToInput"></a>

```typescript
public readonly grantsToInput: DataSnowflakeGrantsGrantsTo;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrants.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeGrantsConfig <a name="DataSnowflakeGrantsConfig" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

const dataSnowflakeGrantsConfig: dataSnowflakeGrants.DataSnowflakeGrantsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.futureGrantsIn">futureGrantsIn</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a></code> | future_grants_in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.futureGrantsTo">futureGrantsTo</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a></code> | future_grants_to block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsOf">grantsOf</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a></code> | grants_of block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsOn">grantsOn</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a></code> | grants_on block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsTo">grantsTo</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a></code> | grants_to block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#id DataSnowflakeGrants#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `futureGrantsIn`<sup>Optional</sup> <a name="futureGrantsIn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.futureGrantsIn"></a>

```typescript
public readonly futureGrantsIn: DataSnowflakeGrantsFutureGrantsIn;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a>

future_grants_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#future_grants_in DataSnowflakeGrants#future_grants_in}

---

##### `futureGrantsTo`<sup>Optional</sup> <a name="futureGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.futureGrantsTo"></a>

```typescript
public readonly futureGrantsTo: DataSnowflakeGrantsFutureGrantsTo;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a>

future_grants_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#future_grants_to DataSnowflakeGrants#future_grants_to}

---

##### `grantsOf`<sup>Optional</sup> <a name="grantsOf" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsOf"></a>

```typescript
public readonly grantsOf: DataSnowflakeGrantsGrantsOf;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a>

grants_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#grants_of DataSnowflakeGrants#grants_of}

---

##### `grantsOn`<sup>Optional</sup> <a name="grantsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsOn"></a>

```typescript
public readonly grantsOn: DataSnowflakeGrantsGrantsOn;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a>

grants_on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#grants_on DataSnowflakeGrants#grants_on}

---

##### `grantsTo`<sup>Optional</sup> <a name="grantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.grantsTo"></a>

```typescript
public readonly grantsTo: DataSnowflakeGrantsGrantsTo;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a>

grants_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#grants_to DataSnowflakeGrants#grants_to}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#id DataSnowflakeGrants#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataSnowflakeGrantsFutureGrantsIn <a name="DataSnowflakeGrantsFutureGrantsIn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

const dataSnowflakeGrantsFutureGrantsIn: dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn.property.database">database</a></code> | <code>string</code> | Lists all privileges on new (i.e. future) objects of a specified type in the database granted to a role. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn.property.schema">schema</a></code> | <code>string</code> | Lists all privileges on new (i.e. future) objects of a specified type in the schema granted to a role. Schema must be a fully qualified name ("&lt;db_name&gt;"."&lt;schema_name&gt;"). |

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Lists all privileges on new (i.e. future) objects of a specified type in the database granted to a role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#database DataSnowflakeGrants#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Lists all privileges on new (i.e. future) objects of a specified type in the schema granted to a role. Schema must be a fully qualified name ("&lt;db_name&gt;"."&lt;schema_name&gt;").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#schema DataSnowflakeGrants#schema}

---

### DataSnowflakeGrantsFutureGrantsTo <a name="DataSnowflakeGrantsFutureGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

const dataSnowflakeGrantsFutureGrantsTo: dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo.property.accountRole">accountRole</a></code> | <code>string</code> | Lists all privileges on new (i.e. future) objects of a specified type in a database or schema granted to the account role. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo.property.databaseRole">databaseRole</a></code> | <code>string</code> | Lists all privileges on new (i.e. future) objects granted to the database role. Must be a fully qualified name ("&lt;db_name&gt;"."&lt;database_role_name&gt;"). |

---

##### `accountRole`<sup>Optional</sup> <a name="accountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo.property.accountRole"></a>

```typescript
public readonly accountRole: string;
```

- *Type:* string

Lists all privileges on new (i.e. future) objects of a specified type in a database or schema granted to the account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#account_role DataSnowflakeGrants#account_role}

---

##### `databaseRole`<sup>Optional</sup> <a name="databaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo.property.databaseRole"></a>

```typescript
public readonly databaseRole: string;
```

- *Type:* string

Lists all privileges on new (i.e. future) objects granted to the database role. Must be a fully qualified name ("&lt;db_name&gt;"."&lt;database_role_name&gt;").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#database_role DataSnowflakeGrants#database_role}

---

### DataSnowflakeGrantsGrants <a name="DataSnowflakeGrantsGrants" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrants"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrants.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

const dataSnowflakeGrantsGrants: dataSnowflakeGrants.DataSnowflakeGrantsGrants = { ... }
```


### DataSnowflakeGrantsGrantsOf <a name="DataSnowflakeGrantsGrantsOf" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

const dataSnowflakeGrantsGrantsOf: dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.accountRole">accountRole</a></code> | <code>string</code> | Lists all users and roles to which the account role has been granted. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.applicationRole">applicationRole</a></code> | <code>string</code> | Lists all the users and roles to which the application role has been granted. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.databaseRole">databaseRole</a></code> | <code>string</code> | Lists all users and roles to which the database role has been granted. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.share">share</a></code> | <code>string</code> | Lists all the accounts for the share and indicates the accounts that are using the share. |

---

##### `accountRole`<sup>Optional</sup> <a name="accountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.accountRole"></a>

```typescript
public readonly accountRole: string;
```

- *Type:* string

Lists all users and roles to which the account role has been granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#account_role DataSnowflakeGrants#account_role}

---

##### `applicationRole`<sup>Optional</sup> <a name="applicationRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.applicationRole"></a>

```typescript
public readonly applicationRole: string;
```

- *Type:* string

Lists all the users and roles to which the application role has been granted.

Must be a fully qualified name ("&lt;db_name&gt;"."&lt;database_role_name&gt;").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#application_role DataSnowflakeGrants#application_role}

---

##### `databaseRole`<sup>Optional</sup> <a name="databaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.databaseRole"></a>

```typescript
public readonly databaseRole: string;
```

- *Type:* string

Lists all users and roles to which the database role has been granted.

Must be a fully qualified name ("&lt;db_name&gt;"."&lt;database_role_name&gt;").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#database_role DataSnowflakeGrants#database_role}

---

##### `share`<sup>Optional</sup> <a name="share" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf.property.share"></a>

```typescript
public readonly share: string;
```

- *Type:* string

Lists all the accounts for the share and indicates the accounts that are using the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#share DataSnowflakeGrants#share}

---

### DataSnowflakeGrantsGrantsOn <a name="DataSnowflakeGrantsGrantsOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

const dataSnowflakeGrantsGrantsOn: dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.account">account</a></code> | <code>boolean \| cdktf.IResolvable</code> | Object hierarchy to list privileges on. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.objectName">objectName</a></code> | <code>string</code> | Name of object to list privileges on. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.objectType">objectType</a></code> | <code>string</code> | Type of object to list privileges on. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Object hierarchy to list privileges on.

The only valid value is: ACCOUNT. Setting this attribute lists all the account-level (i.e. global) privileges that have been granted to roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#account DataSnowflakeGrants#account}

---

##### `objectName`<sup>Optional</sup> <a name="objectName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

Name of object to list privileges on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#object_name DataSnowflakeGrants#object_name}

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

Type of object to list privileges on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#object_type DataSnowflakeGrants#object_type}

---

### DataSnowflakeGrantsGrantsTo <a name="DataSnowflakeGrantsGrantsTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

const dataSnowflakeGrantsGrantsTo: dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.accountRole">accountRole</a></code> | <code>string</code> | Lists all privileges and roles granted to the role. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.application">application</a></code> | <code>string</code> | Lists all the privileges and roles granted to the application. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.applicationRole">applicationRole</a></code> | <code>string</code> | Lists all the privileges and roles granted to the application role. Must be a fully qualified name ("&lt;app_name&gt;"."&lt;app_role_name&gt;"). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.databaseRole">databaseRole</a></code> | <code>string</code> | Lists all privileges and roles granted to the database role. Must be a fully qualified name ("&lt;db_name&gt;"."&lt;database_role_name&gt;"). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.share">share</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare">DataSnowflakeGrantsGrantsToShare</a></code> | share block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.user">user</a></code> | <code>string</code> | Lists all the roles granted to the user. |

---

##### `accountRole`<sup>Optional</sup> <a name="accountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.accountRole"></a>

```typescript
public readonly accountRole: string;
```

- *Type:* string

Lists all privileges and roles granted to the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#account_role DataSnowflakeGrants#account_role}

---

##### `application`<sup>Optional</sup> <a name="application" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

Lists all the privileges and roles granted to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#application DataSnowflakeGrants#application}

---

##### `applicationRole`<sup>Optional</sup> <a name="applicationRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.applicationRole"></a>

```typescript
public readonly applicationRole: string;
```

- *Type:* string

Lists all the privileges and roles granted to the application role. Must be a fully qualified name ("&lt;app_name&gt;"."&lt;app_role_name&gt;").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#application_role DataSnowflakeGrants#application_role}

---

##### `databaseRole`<sup>Optional</sup> <a name="databaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.databaseRole"></a>

```typescript
public readonly databaseRole: string;
```

- *Type:* string

Lists all privileges and roles granted to the database role. Must be a fully qualified name ("&lt;db_name&gt;"."&lt;database_role_name&gt;").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#database_role DataSnowflakeGrants#database_role}

---

##### `share`<sup>Optional</sup> <a name="share" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.share"></a>

```typescript
public readonly share: DataSnowflakeGrantsGrantsToShare;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare">DataSnowflakeGrantsGrantsToShare</a>

share block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#share DataSnowflakeGrants#share}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Lists all the roles granted to the user.

Note that the PUBLIC role, which is automatically available to every user, is not listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#user DataSnowflakeGrants#user}

---

### DataSnowflakeGrantsGrantsToShare <a name="DataSnowflakeGrantsGrantsToShare" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

const dataSnowflakeGrantsGrantsToShare: dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare.property.shareName">shareName</a></code> | <code>string</code> | Lists all of the privileges and roles granted to the specified share. |

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Lists all of the privileges and roles granted to the specified share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.96.0/docs/data-sources/grants#share_name DataSnowflakeGrants#share_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeGrantsFutureGrantsInOutputReference <a name="DataSnowflakeGrantsFutureGrantsInOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

new dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeGrantsFutureGrantsIn;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsIn">DataSnowflakeGrantsFutureGrantsIn</a>

---


### DataSnowflakeGrantsFutureGrantsToOutputReference <a name="DataSnowflakeGrantsFutureGrantsToOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

new dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resetAccountRole">resetAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resetDatabaseRole">resetDatabaseRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountRole` <a name="resetAccountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resetAccountRole"></a>

```typescript
public resetAccountRole(): void
```

##### `resetDatabaseRole` <a name="resetDatabaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.resetDatabaseRole"></a>

```typescript
public resetDatabaseRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.accountRoleInput">accountRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.databaseRoleInput">databaseRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.accountRole">accountRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.databaseRole">databaseRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountRoleInput`<sup>Optional</sup> <a name="accountRoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.accountRoleInput"></a>

```typescript
public readonly accountRoleInput: string;
```

- *Type:* string

---

##### `databaseRoleInput`<sup>Optional</sup> <a name="databaseRoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.databaseRoleInput"></a>

```typescript
public readonly databaseRoleInput: string;
```

- *Type:* string

---

##### `accountRole`<sup>Required</sup> <a name="accountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.accountRole"></a>

```typescript
public readonly accountRole: string;
```

- *Type:* string

---

##### `databaseRole`<sup>Required</sup> <a name="databaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.databaseRole"></a>

```typescript
public readonly databaseRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsToOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeGrantsFutureGrantsTo;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsFutureGrantsTo">DataSnowflakeGrantsFutureGrantsTo</a>

---


### DataSnowflakeGrantsGrantsList <a name="DataSnowflakeGrantsGrantsList" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

new dataSnowflakeGrants.DataSnowflakeGrantsGrantsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.get"></a>

```typescript
public get(index: number): DataSnowflakeGrantsGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeGrantsGrantsOfOutputReference <a name="DataSnowflakeGrantsGrantsOfOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

new dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetAccountRole">resetAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetApplicationRole">resetApplicationRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetDatabaseRole">resetDatabaseRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetShare">resetShare</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountRole` <a name="resetAccountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetAccountRole"></a>

```typescript
public resetAccountRole(): void
```

##### `resetApplicationRole` <a name="resetApplicationRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetApplicationRole"></a>

```typescript
public resetApplicationRole(): void
```

##### `resetDatabaseRole` <a name="resetDatabaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetDatabaseRole"></a>

```typescript
public resetDatabaseRole(): void
```

##### `resetShare` <a name="resetShare" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.resetShare"></a>

```typescript
public resetShare(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.accountRoleInput">accountRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.applicationRoleInput">applicationRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.databaseRoleInput">databaseRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.shareInput">shareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.accountRole">accountRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.applicationRole">applicationRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.databaseRole">databaseRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.share">share</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountRoleInput`<sup>Optional</sup> <a name="accountRoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.accountRoleInput"></a>

```typescript
public readonly accountRoleInput: string;
```

- *Type:* string

---

##### `applicationRoleInput`<sup>Optional</sup> <a name="applicationRoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.applicationRoleInput"></a>

```typescript
public readonly applicationRoleInput: string;
```

- *Type:* string

---

##### `databaseRoleInput`<sup>Optional</sup> <a name="databaseRoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.databaseRoleInput"></a>

```typescript
public readonly databaseRoleInput: string;
```

- *Type:* string

---

##### `shareInput`<sup>Optional</sup> <a name="shareInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.shareInput"></a>

```typescript
public readonly shareInput: string;
```

- *Type:* string

---

##### `accountRole`<sup>Required</sup> <a name="accountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.accountRole"></a>

```typescript
public readonly accountRole: string;
```

- *Type:* string

---

##### `applicationRole`<sup>Required</sup> <a name="applicationRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.applicationRole"></a>

```typescript
public readonly applicationRole: string;
```

- *Type:* string

---

##### `databaseRole`<sup>Required</sup> <a name="databaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.databaseRole"></a>

```typescript
public readonly databaseRole: string;
```

- *Type:* string

---

##### `share`<sup>Required</sup> <a name="share" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.share"></a>

```typescript
public readonly share: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOfOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeGrantsGrantsOf;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOf">DataSnowflakeGrantsGrantsOf</a>

---


### DataSnowflakeGrantsGrantsOnOutputReference <a name="DataSnowflakeGrantsGrantsOnOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

new dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetObjectName">resetObjectName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetObjectType">resetObjectType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetObjectName` <a name="resetObjectName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetObjectName"></a>

```typescript
public resetObjectName(): void
```

##### `resetObjectType` <a name="resetObjectType" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.resetObjectType"></a>

```typescript
public resetObjectType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.accountInput">accountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectNameInput">objectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.account">account</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectName">objectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `objectNameInput`<sup>Optional</sup> <a name="objectNameInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectNameInput"></a>

```typescript
public readonly objectNameInput: string;
```

- *Type:* string

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeGrantsGrantsOn;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOn">DataSnowflakeGrantsGrantsOn</a>

---


### DataSnowflakeGrantsGrantsOutputReference <a name="DataSnowflakeGrantsGrantsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

new dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedBy">grantedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedOn">grantedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedTo">grantedTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.granteeName">granteeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantOption">grantOption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.privilege">privilege</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrants">DataSnowflakeGrantsGrants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `grantedBy`<sup>Required</sup> <a name="grantedBy" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedBy"></a>

```typescript
public readonly grantedBy: string;
```

- *Type:* string

---

##### `grantedOn`<sup>Required</sup> <a name="grantedOn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedOn"></a>

```typescript
public readonly grantedOn: string;
```

- *Type:* string

---

##### `grantedTo`<sup>Required</sup> <a name="grantedTo" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantedTo"></a>

```typescript
public readonly grantedTo: string;
```

- *Type:* string

---

##### `granteeName`<sup>Required</sup> <a name="granteeName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.granteeName"></a>

```typescript
public readonly granteeName: string;
```

- *Type:* string

---

##### `grantOption`<sup>Required</sup> <a name="grantOption" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.grantOption"></a>

```typescript
public readonly grantOption: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privilege`<sup>Required</sup> <a name="privilege" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.privilege"></a>

```typescript
public readonly privilege: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeGrantsGrants;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrants">DataSnowflakeGrantsGrants</a>

---


### DataSnowflakeGrantsGrantsToOutputReference <a name="DataSnowflakeGrantsGrantsToOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

new dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.putShare">putShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetAccountRole">resetAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetApplication">resetApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetApplicationRole">resetApplicationRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetDatabaseRole">resetDatabaseRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetShare">resetShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShare` <a name="putShare" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.putShare"></a>

```typescript
public putShare(value: DataSnowflakeGrantsGrantsToShare): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.putShare.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare">DataSnowflakeGrantsGrantsToShare</a>

---

##### `resetAccountRole` <a name="resetAccountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetAccountRole"></a>

```typescript
public resetAccountRole(): void
```

##### `resetApplication` <a name="resetApplication" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetApplication"></a>

```typescript
public resetApplication(): void
```

##### `resetApplicationRole` <a name="resetApplicationRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetApplicationRole"></a>

```typescript
public resetApplicationRole(): void
```

##### `resetDatabaseRole` <a name="resetDatabaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetDatabaseRole"></a>

```typescript
public resetDatabaseRole(): void
```

##### `resetShare` <a name="resetShare" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetShare"></a>

```typescript
public resetShare(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.share">share</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference">DataSnowflakeGrantsGrantsToShareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.accountRoleInput">accountRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.applicationInput">applicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.applicationRoleInput">applicationRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.databaseRoleInput">databaseRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.shareInput">shareInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare">DataSnowflakeGrantsGrantsToShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.accountRole">accountRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.application">application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.applicationRole">applicationRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.databaseRole">databaseRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `share`<sup>Required</sup> <a name="share" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.share"></a>

```typescript
public readonly share: DataSnowflakeGrantsGrantsToShareOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference">DataSnowflakeGrantsGrantsToShareOutputReference</a>

---

##### `accountRoleInput`<sup>Optional</sup> <a name="accountRoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.accountRoleInput"></a>

```typescript
public readonly accountRoleInput: string;
```

- *Type:* string

---

##### `applicationInput`<sup>Optional</sup> <a name="applicationInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.applicationInput"></a>

```typescript
public readonly applicationInput: string;
```

- *Type:* string

---

##### `applicationRoleInput`<sup>Optional</sup> <a name="applicationRoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.applicationRoleInput"></a>

```typescript
public readonly applicationRoleInput: string;
```

- *Type:* string

---

##### `databaseRoleInput`<sup>Optional</sup> <a name="databaseRoleInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.databaseRoleInput"></a>

```typescript
public readonly databaseRoleInput: string;
```

- *Type:* string

---

##### `shareInput`<sup>Optional</sup> <a name="shareInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.shareInput"></a>

```typescript
public readonly shareInput: DataSnowflakeGrantsGrantsToShare;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare">DataSnowflakeGrantsGrantsToShare</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `accountRole`<sup>Required</sup> <a name="accountRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.accountRole"></a>

```typescript
public readonly accountRole: string;
```

- *Type:* string

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

---

##### `applicationRole`<sup>Required</sup> <a name="applicationRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.applicationRole"></a>

```typescript
public readonly applicationRole: string;
```

- *Type:* string

---

##### `databaseRole`<sup>Required</sup> <a name="databaseRole" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.databaseRole"></a>

```typescript
public readonly databaseRole: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeGrantsGrantsTo;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsTo">DataSnowflakeGrantsGrantsTo</a>

---


### DataSnowflakeGrantsGrantsToShareOutputReference <a name="DataSnowflakeGrantsGrantsToShareOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeGrants } from '@cdktf/provider-snowflake'

new dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare">DataSnowflakeGrantsGrantsToShare</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShareOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeGrantsGrantsToShare;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGrants.DataSnowflakeGrantsGrantsToShare">DataSnowflakeGrantsGrantsToShare</a>

---



