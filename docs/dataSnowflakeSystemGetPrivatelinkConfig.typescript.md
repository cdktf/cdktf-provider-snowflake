# `dataSnowflakeSystemGetPrivatelinkConfig` Submodule <a name="`dataSnowflakeSystemGetPrivatelinkConfig` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeSystemGetPrivatelinkConfig <a name="DataSnowflakeSystemGetPrivatelinkConfig" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/data-sources/system_get_privatelink_config snowflake_system_get_privatelink_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer"></a>

```typescript
import { dataSnowflakeSystemGetPrivatelinkConfig } from '@cdktf/provider-snowflake'

new dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig(scope: Construct, id: string, config?: DataSnowflakeSystemGetPrivatelinkConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig">DataSnowflakeSystemGetPrivatelinkConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig">DataSnowflakeSystemGetPrivatelinkConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeSystemGetPrivatelinkConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isConstruct"></a>

```typescript
import { dataSnowflakeSystemGetPrivatelinkConfig } from '@cdktf/provider-snowflake'

dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformElement"></a>

```typescript
import { dataSnowflakeSystemGetPrivatelinkConfig } from '@cdktf/provider-snowflake'

dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeSystemGetPrivatelinkConfig } from '@cdktf/provider-snowflake'

dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport"></a>

```typescript
import { dataSnowflakeSystemGetPrivatelinkConfig } from '@cdktf/provider-snowflake'

dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSnowflakeSystemGetPrivatelinkConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeSystemGetPrivatelinkConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeSystemGetPrivatelinkConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/data-sources/system_get_privatelink_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeSystemGetPrivatelinkConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.accountUrl">accountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.awsVpceId">awsVpceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.azurePlsId">azurePlsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.internalStage">internalStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.ocspUrl">ocspUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.regionlessAccountUrl">regionlessAccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.regionlessSnowsightUrl">regionlessSnowsightUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.snowsightUrl">snowsightUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `accountUrl`<sup>Required</sup> <a name="accountUrl" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.accountUrl"></a>

```typescript
public readonly accountUrl: string;
```

- *Type:* string

---

##### `awsVpceId`<sup>Required</sup> <a name="awsVpceId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.awsVpceId"></a>

```typescript
public readonly awsVpceId: string;
```

- *Type:* string

---

##### `azurePlsId`<sup>Required</sup> <a name="azurePlsId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.azurePlsId"></a>

```typescript
public readonly azurePlsId: string;
```

- *Type:* string

---

##### `internalStage`<sup>Required</sup> <a name="internalStage" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.internalStage"></a>

```typescript
public readonly internalStage: string;
```

- *Type:* string

---

##### `ocspUrl`<sup>Required</sup> <a name="ocspUrl" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.ocspUrl"></a>

```typescript
public readonly ocspUrl: string;
```

- *Type:* string

---

##### `regionlessAccountUrl`<sup>Required</sup> <a name="regionlessAccountUrl" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.regionlessAccountUrl"></a>

```typescript
public readonly regionlessAccountUrl: string;
```

- *Type:* string

---

##### `regionlessSnowsightUrl`<sup>Required</sup> <a name="regionlessSnowsightUrl" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.regionlessSnowsightUrl"></a>

```typescript
public readonly regionlessSnowsightUrl: string;
```

- *Type:* string

---

##### `snowsightUrl`<sup>Required</sup> <a name="snowsightUrl" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.snowsightUrl"></a>

```typescript
public readonly snowsightUrl: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeSystemGetPrivatelinkConfigConfig <a name="DataSnowflakeSystemGetPrivatelinkConfigConfig" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.Initializer"></a>

```typescript
import { dataSnowflakeSystemGetPrivatelinkConfig } from '@cdktf/provider-snowflake'

const dataSnowflakeSystemGetPrivatelinkConfigConfig: dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/data-sources/system_get_privatelink_config#id DataSnowflakeSystemGetPrivatelinkConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGetPrivatelinkConfig.DataSnowflakeSystemGetPrivatelinkConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/data-sources/system_get_privatelink_config#id DataSnowflakeSystemGetPrivatelinkConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



