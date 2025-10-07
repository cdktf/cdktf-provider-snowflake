# `dataSnowflakeCortexSearchServices` Submodule <a name="`dataSnowflakeCortexSearchServices` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeCortexSearchServices <a name="DataSnowflakeCortexSearchServices" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/cortex_search_services snowflake_cortex_search_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.Initializer"></a>

```typescript
import { dataSnowflakeCortexSearchServices } from '@cdktf/provider-snowflake'

new dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices(scope: Construct, id: string, config?: DataSnowflakeCortexSearchServicesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig">DataSnowflakeCortexSearchServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig">DataSnowflakeCortexSearchServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.putIn">putIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.resetStartsWith">resetStartsWith</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIn` <a name="putIn" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.putIn"></a>

```typescript
public putIn(value: DataSnowflakeCortexSearchServicesIn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesIn">DataSnowflakeCortexSearchServicesIn</a>

---

##### `putLimit` <a name="putLimit" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.putLimit"></a>

```typescript
public putLimit(value: DataSnowflakeCortexSearchServicesLimit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimit">DataSnowflakeCortexSearchServicesLimit</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIn` <a name="resetIn" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.resetIn"></a>

```typescript
public resetIn(): void
```

##### `resetLike` <a name="resetLike" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.resetLike"></a>

```typescript
public resetLike(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeCortexSearchServices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.isConstruct"></a>

```typescript
import { dataSnowflakeCortexSearchServices } from '@cdktf/provider-snowflake'

dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.isTerraformElement"></a>

```typescript
import { dataSnowflakeCortexSearchServices } from '@cdktf/provider-snowflake'

dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeCortexSearchServices } from '@cdktf/provider-snowflake'

dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.generateConfigForImport"></a>

```typescript
import { dataSnowflakeCortexSearchServices } from '@cdktf/provider-snowflake'

dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSnowflakeCortexSearchServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeCortexSearchServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeCortexSearchServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/cortex_search_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeCortexSearchServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.cortexSearchServices">cortexSearchServices</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList">DataSnowflakeCortexSearchServicesCortexSearchServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference">DataSnowflakeCortexSearchServicesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference">DataSnowflakeCortexSearchServicesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.inInput">inInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesIn">DataSnowflakeCortexSearchServicesIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.likeInput">likeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.limitInput">limitInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimit">DataSnowflakeCortexSearchServicesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.startsWithInput">startsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.like">like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.startsWith">startsWith</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cortexSearchServices`<sup>Required</sup> <a name="cortexSearchServices" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.cortexSearchServices"></a>

```typescript
public readonly cortexSearchServices: DataSnowflakeCortexSearchServicesCortexSearchServicesList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList">DataSnowflakeCortexSearchServicesCortexSearchServicesList</a>

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.in"></a>

```typescript
public readonly in: DataSnowflakeCortexSearchServicesInOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference">DataSnowflakeCortexSearchServicesInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.limit"></a>

```typescript
public readonly limit: DataSnowflakeCortexSearchServicesLimitOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference">DataSnowflakeCortexSearchServicesLimitOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.inInput"></a>

```typescript
public readonly inInput: DataSnowflakeCortexSearchServicesIn;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesIn">DataSnowflakeCortexSearchServicesIn</a>

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.likeInput"></a>

```typescript
public readonly likeInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.limitInput"></a>

```typescript
public readonly limitInput: DataSnowflakeCortexSearchServicesLimit;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimit">DataSnowflakeCortexSearchServicesLimit</a>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServices.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeCortexSearchServicesConfig <a name="DataSnowflakeCortexSearchServicesConfig" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.Initializer"></a>

```typescript
import { dataSnowflakeCortexSearchServices } from '@cdktf/provider-snowflake'

const dataSnowflakeCortexSearchServicesConfig: dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/cortex_search_services#id DataSnowflakeCortexSearchServices#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesIn">DataSnowflakeCortexSearchServicesIn</a></code> | in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.like">like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimit">DataSnowflakeCortexSearchServicesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.startsWith">startsWith</a></code> | <code>string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/cortex_search_services#id DataSnowflakeCortexSearchServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.in"></a>

```typescript
public readonly in: DataSnowflakeCortexSearchServicesIn;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesIn">DataSnowflakeCortexSearchServicesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/cortex_search_services#in DataSnowflakeCortexSearchServices#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.like"></a>

```typescript
public readonly like: string;
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/cortex_search_services#like DataSnowflakeCortexSearchServices#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.limit"></a>

```typescript
public readonly limit: DataSnowflakeCortexSearchServicesLimit;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimit">DataSnowflakeCortexSearchServicesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/cortex_search_services#limit DataSnowflakeCortexSearchServices#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesConfig.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/cortex_search_services#starts_with DataSnowflakeCortexSearchServices#starts_with}

---

### DataSnowflakeCortexSearchServicesCortexSearchServices <a name="DataSnowflakeCortexSearchServicesCortexSearchServices" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServices.Initializer"></a>

```typescript
import { dataSnowflakeCortexSearchServices } from '@cdktf/provider-snowflake'

const dataSnowflakeCortexSearchServicesCortexSearchServices: dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServices = { ... }
```


### DataSnowflakeCortexSearchServicesIn <a name="DataSnowflakeCortexSearchServicesIn" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesIn.Initializer"></a>

```typescript
import { dataSnowflakeCortexSearchServices } from '@cdktf/provider-snowflake'

const dataSnowflakeCortexSearchServicesIn: dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesIn.property.account">account</a></code> | <code>boolean \| cdktf.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesIn.property.database">database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database (db_name). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesIn.property.schema">schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema (schema_name). |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesIn.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/cortex_search_services#account DataSnowflakeCortexSearchServices#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesIn.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Returns records for the current database in use or for a specified database (db_name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/cortex_search_services#database DataSnowflakeCortexSearchServices#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesIn.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Returns records for the current schema in use or a specified schema (schema_name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/cortex_search_services#schema DataSnowflakeCortexSearchServices#schema}

---

### DataSnowflakeCortexSearchServicesLimit <a name="DataSnowflakeCortexSearchServicesLimit" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimit.Initializer"></a>

```typescript
import { dataSnowflakeCortexSearchServices } from '@cdktf/provider-snowflake'

const dataSnowflakeCortexSearchServicesLimit: dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimit.property.rows">rows</a></code> | <code>number</code> | The maximum number of rows to return. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimit.property.from">from</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimit.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/cortex_search_services#rows DataSnowflakeCortexSearchServices#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimit.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/cortex_search_services#from DataSnowflakeCortexSearchServices#from}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeCortexSearchServicesCortexSearchServicesList <a name="DataSnowflakeCortexSearchServicesCortexSearchServicesList" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.Initializer"></a>

```typescript
import { dataSnowflakeCortexSearchServices } from '@cdktf/provider-snowflake'

new dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.get"></a>

```typescript
public get(index: number): DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference <a name="DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeCortexSearchServices } from '@cdktf/provider-snowflake'

new dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServices">DataSnowflakeCortexSearchServicesCortexSearchServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeCortexSearchServicesCortexSearchServices;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesCortexSearchServices">DataSnowflakeCortexSearchServicesCortexSearchServices</a>

---


### DataSnowflakeCortexSearchServicesInOutputReference <a name="DataSnowflakeCortexSearchServicesInOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeCortexSearchServices } from '@cdktf/provider-snowflake'

new dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.accountInput">accountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.account">account</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesIn">DataSnowflakeCortexSearchServicesIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.account"></a>

```typescript
public readonly account: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeCortexSearchServicesIn;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesIn">DataSnowflakeCortexSearchServicesIn</a>

---


### DataSnowflakeCortexSearchServicesLimitOutputReference <a name="DataSnowflakeCortexSearchServicesLimitOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeCortexSearchServices } from '@cdktf/provider-snowflake'

new dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.resetFrom">resetFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.property.rowsInput">rowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.property.rows">rows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimit">DataSnowflakeCortexSearchServicesLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.property.rowsInput"></a>

```typescript
public readonly rowsInput: number;
```

- *Type:* number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeCortexSearchServicesLimit;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeCortexSearchServices.DataSnowflakeCortexSearchServicesLimit">DataSnowflakeCortexSearchServicesLimit</a>

---



