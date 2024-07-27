# `dataSnowflakeSystemGenerateScimAccessToken` Submodule <a name="`dataSnowflakeSystemGenerateScimAccessToken` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeSystemGenerateScimAccessToken <a name="DataSnowflakeSystemGenerateScimAccessToken" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/data-sources/system_generate_scim_access_token snowflake_system_generate_scim_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer"></a>

```typescript
import { dataSnowflakeSystemGenerateScimAccessToken } from '@cdktf/provider-snowflake'

new dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken(scope: Construct, id: string, config: DataSnowflakeSystemGenerateScimAccessTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig">DataSnowflakeSystemGenerateScimAccessTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig">DataSnowflakeSystemGenerateScimAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeSystemGenerateScimAccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isConstruct"></a>

```typescript
import { dataSnowflakeSystemGenerateScimAccessToken } from '@cdktf/provider-snowflake'

dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isTerraformElement"></a>

```typescript
import { dataSnowflakeSystemGenerateScimAccessToken } from '@cdktf/provider-snowflake'

dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeSystemGenerateScimAccessToken } from '@cdktf/provider-snowflake'

dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.generateConfigForImport"></a>

```typescript
import { dataSnowflakeSystemGenerateScimAccessToken } from '@cdktf/provider-snowflake'

dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSnowflakeSystemGenerateScimAccessToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeSystemGenerateScimAccessToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeSystemGenerateScimAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/data-sources/system_generate_scim_access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeSystemGenerateScimAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.integrationNameInput">integrationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.integrationName">integrationName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationNameInput`<sup>Optional</sup> <a name="integrationNameInput" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.integrationNameInput"></a>

```typescript
public readonly integrationNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.integrationName"></a>

```typescript
public readonly integrationName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeSystemGenerateScimAccessTokenConfig <a name="DataSnowflakeSystemGenerateScimAccessTokenConfig" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.Initializer"></a>

```typescript
import { dataSnowflakeSystemGenerateScimAccessToken } from '@cdktf/provider-snowflake'

const dataSnowflakeSystemGenerateScimAccessTokenConfig: dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.integrationName">integrationName</a></code> | <code>string</code> | SCIM Integration Name. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/data-sources/system_generate_scim_access_token#id DataSnowflakeSystemGenerateScimAccessToken#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.integrationName"></a>

```typescript
public readonly integrationName: string;
```

- *Type:* string

SCIM Integration Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/data-sources/system_generate_scim_access_token#integration_name DataSnowflakeSystemGenerateScimAccessToken#integration_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/data-sources/system_generate_scim_access_token#id DataSnowflakeSystemGenerateScimAccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



