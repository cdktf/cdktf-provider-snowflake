# `dataSnowflakeSystemGetSnowflakePlatformInfo` Submodule <a name="`dataSnowflakeSystemGetSnowflakePlatformInfo` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeSystemGetSnowflakePlatformInfo <a name="DataSnowflakeSystemGetSnowflakePlatformInfo" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/data-sources/system_get_snowflake_platform_info snowflake_system_get_snowflake_platform_info}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer"></a>

```typescript
import { dataSnowflakeSystemGetSnowflakePlatformInfo } from '@cdktf/provider-snowflake'

new dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo(scope: Construct, id: string, config?: DataSnowflakeSystemGetSnowflakePlatformInfoConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig">DataSnowflakeSystemGetSnowflakePlatformInfoConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig">DataSnowflakeSystemGetSnowflakePlatformInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeSystemGetSnowflakePlatformInfo resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isConstruct"></a>

```typescript
import { dataSnowflakeSystemGetSnowflakePlatformInfo } from '@cdktf/provider-snowflake'

dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformElement"></a>

```typescript
import { dataSnowflakeSystemGetSnowflakePlatformInfo } from '@cdktf/provider-snowflake'

dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeSystemGetSnowflakePlatformInfo } from '@cdktf/provider-snowflake'

dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport"></a>

```typescript
import { dataSnowflakeSystemGetSnowflakePlatformInfo } from '@cdktf/provider-snowflake'

dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSnowflakeSystemGetSnowflakePlatformInfo resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeSystemGetSnowflakePlatformInfo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeSystemGetSnowflakePlatformInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/data-sources/system_get_snowflake_platform_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeSystemGetSnowflakePlatformInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.awsVpcIds">awsVpcIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.azureVnetSubnetIds">azureVnetSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `awsVpcIds`<sup>Required</sup> <a name="awsVpcIds" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.awsVpcIds"></a>

```typescript
public readonly awsVpcIds: string[];
```

- *Type:* string[]

---

##### `azureVnetSubnetIds`<sup>Required</sup> <a name="azureVnetSubnetIds" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.azureVnetSubnetIds"></a>

```typescript
public readonly azureVnetSubnetIds: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfo.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeSystemGetSnowflakePlatformInfoConfig <a name="DataSnowflakeSystemGetSnowflakePlatformInfoConfig" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.Initializer"></a>

```typescript
import { dataSnowflakeSystemGetSnowflakePlatformInfo } from '@cdktf/provider-snowflake'

const dataSnowflakeSystemGetSnowflakePlatformInfoConfig: dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/data-sources/system_get_snowflake_platform_info#id DataSnowflakeSystemGetSnowflakePlatformInfo#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetSnowflakePlatformInfo.DataSnowflakeSystemGetSnowflakePlatformInfoConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/data-sources/system_get_snowflake_platform_info#id DataSnowflakeSystemGetSnowflakePlatformInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



