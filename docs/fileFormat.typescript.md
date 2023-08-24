# `snowflake_file_format`

Refer to the Terraform Registory for docs: [`snowflake_file_format`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format).

# `fileFormat` Submodule <a name="`fileFormat` Submodule" id="@cdktf/provider-snowflake.fileFormat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileFormat <a name="FileFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format snowflake_file_format}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer"></a>

```typescript
import { fileFormat } from '@cdktf/provider-snowflake'

new fileFormat.FileFormat(scope: Construct, id: string, config: FileFormatConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig">FileFormatConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig">FileFormatConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetAllowDuplicate">resetAllowDuplicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetBinaryAsText">resetBinaryAsText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetBinaryFormat">resetBinaryFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetDateFormat">resetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetDisableAutoConvert">resetDisableAutoConvert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetDisableSnowflakeData">resetDisableSnowflakeData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetEmptyFieldAsNull">resetEmptyFieldAsNull</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetEnableOctal">resetEnableOctal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetErrorOnColumnCountMismatch">resetErrorOnColumnCountMismatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetEscape">resetEscape</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetEscapeUnenclosedField">resetEscapeUnenclosedField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetFieldOptionallyEnclosedBy">resetFieldOptionallyEnclosedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetFileExtension">resetFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetIgnoreUtf8Errors">resetIgnoreUtf8Errors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetNullIf">resetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetPreserveSpace">resetPreserveSpace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetRecordDelimiter">resetRecordDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipBlankLines">resetSkipBlankLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipByteOrderMark">resetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipHeader">resetSkipHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripNullValues">resetStripNullValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripOuterArray">resetStripOuterArray</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripOuterElement">resetStripOuterElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetTimeFormat">resetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetTrimSpace">resetTrimSpace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.fileFormat.FileFormat.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.fileFormat.FileFormat.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.fileFormat.FileFormat.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.fileFormat.FileFormat.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.fileFormat.FileFormat.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.fileFormat.FileFormat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.fileFormat.FileFormat.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.fileFormat.FileFormat.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAllowDuplicate` <a name="resetAllowDuplicate" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetAllowDuplicate"></a>

```typescript
public resetAllowDuplicate(): void
```

##### `resetBinaryAsText` <a name="resetBinaryAsText" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetBinaryAsText"></a>

```typescript
public resetBinaryAsText(): void
```

##### `resetBinaryFormat` <a name="resetBinaryFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetBinaryFormat"></a>

```typescript
public resetBinaryFormat(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCompression` <a name="resetCompression" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetDateFormat` <a name="resetDateFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetDateFormat"></a>

```typescript
public resetDateFormat(): void
```

##### `resetDisableAutoConvert` <a name="resetDisableAutoConvert" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetDisableAutoConvert"></a>

```typescript
public resetDisableAutoConvert(): void
```

##### `resetDisableSnowflakeData` <a name="resetDisableSnowflakeData" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetDisableSnowflakeData"></a>

```typescript
public resetDisableSnowflakeData(): void
```

##### `resetEmptyFieldAsNull` <a name="resetEmptyFieldAsNull" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEmptyFieldAsNull"></a>

```typescript
public resetEmptyFieldAsNull(): void
```

##### `resetEnableOctal` <a name="resetEnableOctal" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEnableOctal"></a>

```typescript
public resetEnableOctal(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetErrorOnColumnCountMismatch` <a name="resetErrorOnColumnCountMismatch" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetErrorOnColumnCountMismatch"></a>

```typescript
public resetErrorOnColumnCountMismatch(): void
```

##### `resetEscape` <a name="resetEscape" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEscape"></a>

```typescript
public resetEscape(): void
```

##### `resetEscapeUnenclosedField` <a name="resetEscapeUnenclosedField" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEscapeUnenclosedField"></a>

```typescript
public resetEscapeUnenclosedField(): void
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetFieldDelimiter"></a>

```typescript
public resetFieldDelimiter(): void
```

##### `resetFieldOptionallyEnclosedBy` <a name="resetFieldOptionallyEnclosedBy" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetFieldOptionallyEnclosedBy"></a>

```typescript
public resetFieldOptionallyEnclosedBy(): void
```

##### `resetFileExtension` <a name="resetFileExtension" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetFileExtension"></a>

```typescript
public resetFileExtension(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreUtf8Errors` <a name="resetIgnoreUtf8Errors" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetIgnoreUtf8Errors"></a>

```typescript
public resetIgnoreUtf8Errors(): void
```

##### `resetNullIf` <a name="resetNullIf" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetNullIf"></a>

```typescript
public resetNullIf(): void
```

##### `resetPreserveSpace` <a name="resetPreserveSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetPreserveSpace"></a>

```typescript
public resetPreserveSpace(): void
```

##### `resetRecordDelimiter` <a name="resetRecordDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetRecordDelimiter"></a>

```typescript
public resetRecordDelimiter(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetSkipBlankLines` <a name="resetSkipBlankLines" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipBlankLines"></a>

```typescript
public resetSkipBlankLines(): void
```

##### `resetSkipByteOrderMark` <a name="resetSkipByteOrderMark" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipByteOrderMark"></a>

```typescript
public resetSkipByteOrderMark(): void
```

##### `resetSkipHeader` <a name="resetSkipHeader" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipHeader"></a>

```typescript
public resetSkipHeader(): void
```

##### `resetStripNullValues` <a name="resetStripNullValues" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripNullValues"></a>

```typescript
public resetStripNullValues(): void
```

##### `resetStripOuterArray` <a name="resetStripOuterArray" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripOuterArray"></a>

```typescript
public resetStripOuterArray(): void
```

##### `resetStripOuterElement` <a name="resetStripOuterElement" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripOuterElement"></a>

```typescript
public resetStripOuterElement(): void
```

##### `resetTimeFormat` <a name="resetTimeFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetTimeFormat"></a>

```typescript
public resetTimeFormat(): void
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetTimestampFormat"></a>

```typescript
public resetTimestampFormat(): void
```

##### `resetTrimSpace` <a name="resetTrimSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetTrimSpace"></a>

```typescript
public resetTrimSpace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isConstruct"></a>

```typescript
import { fileFormat } from '@cdktf/provider-snowflake'

fileFormat.FileFormat.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformElement"></a>

```typescript
import { fileFormat } from '@cdktf/provider-snowflake'

fileFormat.FileFormat.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformResource"></a>

```typescript
import { fileFormat } from '@cdktf/provider-snowflake'

fileFormat.FileFormat.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.allowDuplicateInput">allowDuplicateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryAsTextInput">binaryAsTextInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryFormatInput">binaryFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.dateFormatInput">dateFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableAutoConvertInput">disableAutoConvertInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableSnowflakeDataInput">disableSnowflakeDataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.emptyFieldAsNullInput">emptyFieldAsNullInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.enableOctalInput">enableOctalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.errorOnColumnCountMismatchInput">errorOnColumnCountMismatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeInput">escapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeUnenclosedFieldInput">escapeUnenclosedFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldOptionallyEnclosedByInput">fieldOptionallyEnclosedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fileExtensionInput">fileExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.formatTypeInput">formatTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.ignoreUtf8ErrorsInput">ignoreUtf8ErrorsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.nullIfInput">nullIfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.preserveSpaceInput">preserveSpaceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.recordDelimiterInput">recordDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipBlankLinesInput">skipBlankLinesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipByteOrderMarkInput">skipByteOrderMarkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipHeaderInput">skipHeaderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripNullValuesInput">stripNullValuesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterArrayInput">stripOuterArrayInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterElementInput">stripOuterElementInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeFormatInput">timeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timestampFormatInput">timestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.trimSpaceInput">trimSpaceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.allowDuplicate">allowDuplicate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryAsText">binaryAsText</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableAutoConvert">disableAutoConvert</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableSnowflakeData">disableSnowflakeData</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.emptyFieldAsNull">emptyFieldAsNull</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.enableOctal">enableOctal</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.errorOnColumnCountMismatch">errorOnColumnCountMismatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.escape">escape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeUnenclosedField">escapeUnenclosedField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldOptionallyEnclosedBy">fieldOptionallyEnclosedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.formatType">formatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.preserveSpace">preserveSpace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.recordDelimiter">recordDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipBlankLines">skipBlankLines</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipHeader">skipHeader</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripNullValues">stripNullValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterArray">stripOuterArray</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterElement">stripOuterElement</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeFormat">timeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.trimSpace">trimSpace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowDuplicateInput`<sup>Optional</sup> <a name="allowDuplicateInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.allowDuplicateInput"></a>

```typescript
public readonly allowDuplicateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `binaryAsTextInput`<sup>Optional</sup> <a name="binaryAsTextInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryAsTextInput"></a>

```typescript
public readonly binaryAsTextInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `binaryFormatInput`<sup>Optional</sup> <a name="binaryFormatInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryFormatInput"></a>

```typescript
public readonly binaryFormatInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `dateFormatInput`<sup>Optional</sup> <a name="dateFormatInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.dateFormatInput"></a>

```typescript
public readonly dateFormatInput: string;
```

- *Type:* string

---

##### `disableAutoConvertInput`<sup>Optional</sup> <a name="disableAutoConvertInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableAutoConvertInput"></a>

```typescript
public readonly disableAutoConvertInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableSnowflakeDataInput`<sup>Optional</sup> <a name="disableSnowflakeDataInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableSnowflakeDataInput"></a>

```typescript
public readonly disableSnowflakeDataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emptyFieldAsNullInput`<sup>Optional</sup> <a name="emptyFieldAsNullInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.emptyFieldAsNullInput"></a>

```typescript
public readonly emptyFieldAsNullInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableOctalInput`<sup>Optional</sup> <a name="enableOctalInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.enableOctalInput"></a>

```typescript
public readonly enableOctalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `errorOnColumnCountMismatchInput`<sup>Optional</sup> <a name="errorOnColumnCountMismatchInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.errorOnColumnCountMismatchInput"></a>

```typescript
public readonly errorOnColumnCountMismatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `escapeInput`<sup>Optional</sup> <a name="escapeInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeInput"></a>

```typescript
public readonly escapeInput: string;
```

- *Type:* string

---

##### `escapeUnenclosedFieldInput`<sup>Optional</sup> <a name="escapeUnenclosedFieldInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeUnenclosedFieldInput"></a>

```typescript
public readonly escapeUnenclosedFieldInput: string;
```

- *Type:* string

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldDelimiterInput"></a>

```typescript
public readonly fieldDelimiterInput: string;
```

- *Type:* string

---

##### `fieldOptionallyEnclosedByInput`<sup>Optional</sup> <a name="fieldOptionallyEnclosedByInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldOptionallyEnclosedByInput"></a>

```typescript
public readonly fieldOptionallyEnclosedByInput: string;
```

- *Type:* string

---

##### `fileExtensionInput`<sup>Optional</sup> <a name="fileExtensionInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fileExtensionInput"></a>

```typescript
public readonly fileExtensionInput: string;
```

- *Type:* string

---

##### `formatTypeInput`<sup>Optional</sup> <a name="formatTypeInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.formatTypeInput"></a>

```typescript
public readonly formatTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreUtf8ErrorsInput`<sup>Optional</sup> <a name="ignoreUtf8ErrorsInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.ignoreUtf8ErrorsInput"></a>

```typescript
public readonly ignoreUtf8ErrorsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nullIfInput`<sup>Optional</sup> <a name="nullIfInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.nullIfInput"></a>

```typescript
public readonly nullIfInput: string[];
```

- *Type:* string[]

---

##### `preserveSpaceInput`<sup>Optional</sup> <a name="preserveSpaceInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.preserveSpaceInput"></a>

```typescript
public readonly preserveSpaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recordDelimiterInput`<sup>Optional</sup> <a name="recordDelimiterInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.recordDelimiterInput"></a>

```typescript
public readonly recordDelimiterInput: string;
```

- *Type:* string

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `skipBlankLinesInput`<sup>Optional</sup> <a name="skipBlankLinesInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipBlankLinesInput"></a>

```typescript
public readonly skipBlankLinesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipByteOrderMarkInput`<sup>Optional</sup> <a name="skipByteOrderMarkInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipByteOrderMarkInput"></a>

```typescript
public readonly skipByteOrderMarkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipHeaderInput`<sup>Optional</sup> <a name="skipHeaderInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipHeaderInput"></a>

```typescript
public readonly skipHeaderInput: number;
```

- *Type:* number

---

##### `stripNullValuesInput`<sup>Optional</sup> <a name="stripNullValuesInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripNullValuesInput"></a>

```typescript
public readonly stripNullValuesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stripOuterArrayInput`<sup>Optional</sup> <a name="stripOuterArrayInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterArrayInput"></a>

```typescript
public readonly stripOuterArrayInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stripOuterElementInput`<sup>Optional</sup> <a name="stripOuterElementInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterElementInput"></a>

```typescript
public readonly stripOuterElementInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeFormatInput`<sup>Optional</sup> <a name="timeFormatInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeFormatInput"></a>

```typescript
public readonly timeFormatInput: string;
```

- *Type:* string

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timestampFormatInput"></a>

```typescript
public readonly timestampFormatInput: string;
```

- *Type:* string

---

##### `trimSpaceInput`<sup>Optional</sup> <a name="trimSpaceInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.trimSpaceInput"></a>

```typescript
public readonly trimSpaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowDuplicate`<sup>Required</sup> <a name="allowDuplicate" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.allowDuplicate"></a>

```typescript
public readonly allowDuplicate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `binaryAsText`<sup>Required</sup> <a name="binaryAsText" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryAsText"></a>

```typescript
public readonly binaryAsText: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `binaryFormat`<sup>Required</sup> <a name="binaryFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `disableAutoConvert`<sup>Required</sup> <a name="disableAutoConvert" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableAutoConvert"></a>

```typescript
public readonly disableAutoConvert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableSnowflakeData`<sup>Required</sup> <a name="disableSnowflakeData" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableSnowflakeData"></a>

```typescript
public readonly disableSnowflakeData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emptyFieldAsNull`<sup>Required</sup> <a name="emptyFieldAsNull" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.emptyFieldAsNull"></a>

```typescript
public readonly emptyFieldAsNull: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableOctal`<sup>Required</sup> <a name="enableOctal" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.enableOctal"></a>

```typescript
public readonly enableOctal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `errorOnColumnCountMismatch`<sup>Required</sup> <a name="errorOnColumnCountMismatch" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.errorOnColumnCountMismatch"></a>

```typescript
public readonly errorOnColumnCountMismatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.escape"></a>

```typescript
public readonly escape: string;
```

- *Type:* string

---

##### `escapeUnenclosedField`<sup>Required</sup> <a name="escapeUnenclosedField" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeUnenclosedField"></a>

```typescript
public readonly escapeUnenclosedField: string;
```

- *Type:* string

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `fieldOptionallyEnclosedBy`<sup>Required</sup> <a name="fieldOptionallyEnclosedBy" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldOptionallyEnclosedBy"></a>

```typescript
public readonly fieldOptionallyEnclosedBy: string;
```

- *Type:* string

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.formatType"></a>

```typescript
public readonly formatType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="ignoreUtf8Errors" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `preserveSpace`<sup>Required</sup> <a name="preserveSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.preserveSpace"></a>

```typescript
public readonly preserveSpace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recordDelimiter`<sup>Required</sup> <a name="recordDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.recordDelimiter"></a>

```typescript
public readonly recordDelimiter: string;
```

- *Type:* string

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `skipBlankLines`<sup>Required</sup> <a name="skipBlankLines" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipBlankLines"></a>

```typescript
public readonly skipBlankLines: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipHeader`<sup>Required</sup> <a name="skipHeader" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipHeader"></a>

```typescript
public readonly skipHeader: number;
```

- *Type:* number

---

##### `stripNullValues`<sup>Required</sup> <a name="stripNullValues" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripNullValues"></a>

```typescript
public readonly stripNullValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stripOuterArray`<sup>Required</sup> <a name="stripOuterArray" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterArray"></a>

```typescript
public readonly stripOuterArray: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stripOuterElement`<sup>Required</sup> <a name="stripOuterElement" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterElement"></a>

```typescript
public readonly stripOuterElement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.trimSpace"></a>

```typescript
public readonly trimSpace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FileFormatConfig <a name="FileFormatConfig" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.Initializer"></a>

```typescript
import { fileFormat } from '@cdktf/provider-snowflake'

const fileFormatConfig: fileFormat.FileFormatConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.formatType">formatType</a></code> | <code>string</code> | Specifies the format of the input files (for data loading) or output files (for data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.allowDuplicate">allowDuplicate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean that specifies to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.binaryAsText">binaryAsText</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | Defines the encoding format for binary input or output. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.compression">compression</a></code> | <code>string</code> | Specifies the current compression algorithm for the data file. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.dateFormat">dateFormat</a></code> | <code>string</code> | Defines the format of date values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.disableAutoConvert">disableAutoConvert</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.disableSnowflakeData">disableSnowflakeData</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.emptyFieldAsNull">emptyFieldAsNull</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive delimiters. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.enableOctal">enableOctal</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.encoding">encoding</a></code> | <code>string</code> | String (constant) that specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.errorOnColumnCountMismatch">errorOnColumnCountMismatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.escape">escape</a></code> | <code>string</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.escapeUnenclosedField">escapeUnenclosedField</a></code> | <code>string</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or unloaded file (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fieldOptionallyEnclosedBy">fieldOptionallyEnclosedBy</a></code> | <code>string</code> | Character used to enclose strings. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fileExtension">fileExtension</a></code> | <code>string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#id FileFormat#id}. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.nullIf">nullIf</a></code> | <code>string[]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.preserveSpace">preserveSpace</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.recordDelimiter">recordDelimiter</a></code> | <code>string</code> | Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or unloaded file (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipBlankLines">skipBlankLines</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipHeader">skipHeader</a></code> | <code>number</code> | Number of lines at the start of the file to skip. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripNullValues">stripNullValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripOuterArray">stripOuterArray</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripOuterElement">stripOuterElement</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timeFormat">timeFormat</a></code> | <code>string</code> | Defines the format of time values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | Defines the format of timestamp values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.trimSpace">trimSpace</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean that specifies whether to remove white space from fields. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#database FileFormat#database}

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.formatType"></a>

```typescript
public readonly formatType: string;
```

- *Type:* string

Specifies the format of the input files (for data loading) or output files (for data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#format_type FileFormat#format_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#name FileFormat#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#schema FileFormat#schema}

---

##### `allowDuplicate`<sup>Optional</sup> <a name="allowDuplicate" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.allowDuplicate"></a>

```typescript
public readonly allowDuplicate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean that specifies to allow duplicate object field names (only the last one will be preserved).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#allow_duplicate FileFormat#allow_duplicate}

---

##### `binaryAsText`<sup>Optional</sup> <a name="binaryAsText" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.binaryAsText"></a>

```typescript
public readonly binaryAsText: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#binary_as_text FileFormat#binary_as_text}

---

##### `binaryFormat`<sup>Optional</sup> <a name="binaryFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

Defines the encoding format for binary input or output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#binary_format FileFormat#binary_format}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#comment FileFormat#comment}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Specifies the current compression algorithm for the data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#compression FileFormat#compression}

---

##### `dateFormat`<sup>Optional</sup> <a name="dateFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

Defines the format of date values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#date_format FileFormat#date_format}

---

##### `disableAutoConvert`<sup>Optional</sup> <a name="disableAutoConvert" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.disableAutoConvert"></a>

```typescript
public readonly disableAutoConvert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#disable_auto_convert FileFormat#disable_auto_convert}

---

##### `disableSnowflakeData`<sup>Optional</sup> <a name="disableSnowflakeData" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.disableSnowflakeData"></a>

```typescript
public readonly disableSnowflakeData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#disable_snowflake_data FileFormat#disable_snowflake_data}

---

##### `emptyFieldAsNull`<sup>Optional</sup> <a name="emptyFieldAsNull" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.emptyFieldAsNull"></a>

```typescript
public readonly emptyFieldAsNull: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#empty_field_as_null FileFormat#empty_field_as_null}

---

##### `enableOctal`<sup>Optional</sup> <a name="enableOctal" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.enableOctal"></a>

```typescript
public readonly enableOctal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean that enables parsing of octal numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#enable_octal FileFormat#enable_octal}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

String (constant) that specifies the character set of the source data when loading data into a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#encoding FileFormat#encoding}

---

##### `errorOnColumnCountMismatch`<sup>Optional</sup> <a name="errorOnColumnCountMismatch" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.errorOnColumnCountMismatch"></a>

```typescript
public readonly errorOnColumnCountMismatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input file does not match the number of columns in the corresponding table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#error_on_column_count_mismatch FileFormat#error_on_column_count_mismatch}

---

##### `escape`<sup>Optional</sup> <a name="escape" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.escape"></a>

```typescript
public readonly escape: string;
```

- *Type:* string

Single character string used as the escape character for field values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#escape FileFormat#escape}

---

##### `escapeUnenclosedField`<sup>Optional</sup> <a name="escapeUnenclosedField" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.escapeUnenclosedField"></a>

```typescript
public readonly escapeUnenclosedField: string;
```

- *Type:* string

Single character string used as the escape character for unenclosed field values only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#escape_unenclosed_field FileFormat#escape_unenclosed_field}

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or unloaded file (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#field_delimiter FileFormat#field_delimiter}

---

##### `fieldOptionallyEnclosedBy`<sup>Optional</sup> <a name="fieldOptionallyEnclosedBy" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fieldOptionallyEnclosedBy"></a>

```typescript
public readonly fieldOptionallyEnclosedBy: string;
```

- *Type:* string

Character used to enclose strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#field_optionally_enclosed_by FileFormat#field_optionally_enclosed_by}

---

##### `fileExtension`<sup>Optional</sup> <a name="fileExtension" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#file_extension FileFormat#file_extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#id FileFormat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreUtf8Errors`<sup>Optional</sup> <a name="ignoreUtf8Errors" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#ignore_utf8_errors FileFormat#ignore_utf8_errors}

---

##### `nullIf`<sup>Optional</sup> <a name="nullIf" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#null_if FileFormat#null_if}

---

##### `preserveSpace`<sup>Optional</sup> <a name="preserveSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.preserveSpace"></a>

```typescript
public readonly preserveSpace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#preserve_space FileFormat#preserve_space}

---

##### `recordDelimiter`<sup>Optional</sup> <a name="recordDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.recordDelimiter"></a>

```typescript
public readonly recordDelimiter: string;
```

- *Type:* string

Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or unloaded file (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#record_delimiter FileFormat#record_delimiter}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#replace_invalid_characters FileFormat#replace_invalid_characters}

---

##### `skipBlankLines`<sup>Optional</sup> <a name="skipBlankLines" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipBlankLines"></a>

```typescript
public readonly skipBlankLines: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean that specifies to skip any blank lines encountered in the data files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#skip_blank_lines FileFormat#skip_blank_lines}

---

##### `skipByteOrderMark`<sup>Optional</sup> <a name="skipByteOrderMark" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#skip_byte_order_mark FileFormat#skip_byte_order_mark}

---

##### `skipHeader`<sup>Optional</sup> <a name="skipHeader" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipHeader"></a>

```typescript
public readonly skipHeader: number;
```

- *Type:* number

Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#skip_header FileFormat#skip_header}

---

##### `stripNullValues`<sup>Optional</sup> <a name="stripNullValues" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripNullValues"></a>

```typescript
public readonly stripNullValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#strip_null_values FileFormat#strip_null_values}

---

##### `stripOuterArray`<sup>Optional</sup> <a name="stripOuterArray" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripOuterArray"></a>

```typescript
public readonly stripOuterArray: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean that instructs the JSON parser to remove outer brackets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#strip_outer_array FileFormat#strip_outer_array}

---

##### `stripOuterElement`<sup>Optional</sup> <a name="stripOuterElement" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripOuterElement"></a>

```typescript
public readonly stripOuterElement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#strip_outer_element FileFormat#strip_outer_element}

---

##### `timeFormat`<sup>Optional</sup> <a name="timeFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

Defines the format of time values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#time_format FileFormat#time_format}

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

Defines the format of timestamp values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#timestamp_format FileFormat#timestamp_format}

---

##### `trimSpace`<sup>Optional</sup> <a name="trimSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.trimSpace"></a>

```typescript
public readonly trimSpace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean that specifies whether to remove white space from fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/resources/file_format#trim_space FileFormat#trim_space}

---



