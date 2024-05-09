# `dataSnowflakeParameters` Submodule <a name="`dataSnowflakeParameters` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeParameters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeParameters <a name="DataSnowflakeParameters" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.90.0/docs/data-sources/parameters snowflake_parameters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer"></a>

```typescript
import { dataSnowflakeParameters } from '@cdktf/provider-snowflake'

new dataSnowflakeParameters.DataSnowflakeParameters(scope: Construct, id: string, config?: DataSnowflakeParametersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig">DataSnowflakeParametersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig">DataSnowflakeParametersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetObjectName">resetObjectName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetObjectType">resetObjectType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetParameterType">resetParameterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetId"></a>

```typescript
public resetId(): void
```

##### `resetObjectName` <a name="resetObjectName" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetObjectName"></a>

```typescript
public resetObjectName(): void
```

##### `resetObjectType` <a name="resetObjectType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetObjectType"></a>

```typescript
public resetObjectType(): void
```

##### `resetParameterType` <a name="resetParameterType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetParameterType"></a>

```typescript
public resetParameterType(): void
```

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetPattern"></a>

```typescript
public resetPattern(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.resetUser"></a>

```typescript
public resetUser(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSnowflakeParameters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isConstruct"></a>

```typescript
import { dataSnowflakeParameters } from '@cdktf/provider-snowflake'

dataSnowflakeParameters.DataSnowflakeParameters.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isTerraformElement"></a>

```typescript
import { dataSnowflakeParameters } from '@cdktf/provider-snowflake'

dataSnowflakeParameters.DataSnowflakeParameters.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isTerraformDataSource"></a>

```typescript
import { dataSnowflakeParameters } from '@cdktf/provider-snowflake'

dataSnowflakeParameters.DataSnowflakeParameters.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.generateConfigForImport"></a>

```typescript
import { dataSnowflakeParameters } from '@cdktf/provider-snowflake'

dataSnowflakeParameters.DataSnowflakeParameters.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSnowflakeParameters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeParameters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeParameters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.90.0/docs/data-sources/parameters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeParameters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList">DataSnowflakeParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.objectNameInput">objectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.parameterTypeInput">parameterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.objectName">objectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.parameterType">parameterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.parameters"></a>

```typescript
public readonly parameters: DataSnowflakeParametersParametersList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList">DataSnowflakeParametersParametersList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `objectNameInput`<sup>Optional</sup> <a name="objectNameInput" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.objectNameInput"></a>

```typescript
public readonly objectNameInput: string;
```

- *Type:* string

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `parameterTypeInput`<sup>Optional</sup> <a name="parameterTypeInput" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.parameterTypeInput"></a>

```typescript
public readonly parameterTypeInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `parameterType`<sup>Required</sup> <a name="parameterType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.parameterType"></a>

```typescript
public readonly parameterType: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParameters.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeParametersConfig <a name="DataSnowflakeParametersConfig" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.Initializer"></a>

```typescript
import { dataSnowflakeParameters } from '@cdktf/provider-snowflake'

const dataSnowflakeParametersConfig: dataSnowflakeParameters.DataSnowflakeParametersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.90.0/docs/data-sources/parameters#id DataSnowflakeParameters#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.objectName">objectName</a></code> | <code>string</code> | If parameter_type is set to "OBJECT" then object_name is the name of the object to display object parameters for. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.objectType">objectType</a></code> | <code>string</code> | If parameter_type is set to "OBJECT" then object_type is the type of object to display object parameters for. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.parameterType">parameterType</a></code> | <code>string</code> | The type of parameter to filter by. Valid values are: "ACCOUNT", "SESSION", "OBJECT". |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.pattern">pattern</a></code> | <code>string</code> | Allows limiting the list of parameters by name using LIKE clause. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.user">user</a></code> | <code>string</code> | If parameter_type is set to "SESSION" then user is the name of the user to display session parameters for. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.90.0/docs/data-sources/parameters#id DataSnowflakeParameters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectName`<sup>Optional</sup> <a name="objectName" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

If parameter_type is set to "OBJECT" then object_name is the name of the object to display object parameters for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.90.0/docs/data-sources/parameters#object_name DataSnowflakeParameters#object_name}

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

If parameter_type is set to "OBJECT" then object_type is the type of object to display object parameters for.

Valid values are any object supported by the IN clause of the [SHOW PARAMETERS](https://docs.snowflake.com/en/sql-reference/sql/show-parameters.html#parameters) statement, including: WAREHOUSE | DATABASE | SCHEMA | TASK | TABLE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.90.0/docs/data-sources/parameters#object_type DataSnowflakeParameters#object_type}

---

##### `parameterType`<sup>Optional</sup> <a name="parameterType" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.parameterType"></a>

```typescript
public readonly parameterType: string;
```

- *Type:* string

The type of parameter to filter by. Valid values are: "ACCOUNT", "SESSION", "OBJECT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.90.0/docs/data-sources/parameters#parameter_type DataSnowflakeParameters#parameter_type}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Allows limiting the list of parameters by name using LIKE clause.

Refer to [Limiting the List of Parameters by Name](https://docs.snowflake.com/en/sql-reference/parameters.html#limiting-the-list-of-parameters-by-name)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.90.0/docs/data-sources/parameters#pattern DataSnowflakeParameters#pattern}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

If parameter_type is set to "SESSION" then user is the name of the user to display session parameters for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.90.0/docs/data-sources/parameters#user DataSnowflakeParameters#user}

---

### DataSnowflakeParametersParameters <a name="DataSnowflakeParametersParameters" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParameters.Initializer"></a>

```typescript
import { dataSnowflakeParameters } from '@cdktf/provider-snowflake'

const dataSnowflakeParametersParameters: dataSnowflakeParameters.DataSnowflakeParametersParameters = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeParametersParametersList <a name="DataSnowflakeParametersParametersList" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.Initializer"></a>

```typescript
import { dataSnowflakeParameters } from '@cdktf/provider-snowflake'

new dataSnowflakeParameters.DataSnowflakeParametersParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.get"></a>

```typescript
public get(index: number): DataSnowflakeParametersParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSnowflakeParametersParametersOutputReference <a name="DataSnowflakeParametersParametersOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer"></a>

```typescript
import { dataSnowflakeParameters } from '@cdktf/provider-snowflake'

new dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParameters">DataSnowflakeParametersParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSnowflakeParametersParameters;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeParameters.DataSnowflakeParametersParameters">DataSnowflakeParametersParameters</a>

---



