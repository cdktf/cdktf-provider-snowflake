# `snowflake_file_format`

Refer to the Terraform Registory for docs: [`snowflake_file_format`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format).

# `fileFormat` Submodule <a name="`fileFormat` Submodule" id="@cdktf/provider-snowflake.fileFormat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileFormat <a name="FileFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format snowflake_file_format}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7/fileformat"

fileformat.NewFileFormat(scope Construct, id *string, config FileFormatConfig) FileFormat
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig">FileFormatConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig">FileFormatConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetAllowDuplicate">ResetAllowDuplicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetBinaryAsText">ResetBinaryAsText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetBinaryFormat">ResetBinaryFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetDateFormat">ResetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetDisableAutoConvert">ResetDisableAutoConvert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetDisableSnowflakeData">ResetDisableSnowflakeData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetEmptyFieldAsNull">ResetEmptyFieldAsNull</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetEnableOctal">ResetEnableOctal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetErrorOnColumnCountMismatch">ResetErrorOnColumnCountMismatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetEscape">ResetEscape</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetEscapeUnenclosedField">ResetEscapeUnenclosedField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetFieldOptionallyEnclosedBy">ResetFieldOptionallyEnclosedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetFileExtension">ResetFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetIgnoreUtf8Errors">ResetIgnoreUtf8Errors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetNullIf">ResetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetPreserveSpace">ResetPreserveSpace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetRecordDelimiter">ResetRecordDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipBlankLines">ResetSkipBlankLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipByteOrderMark">ResetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipHeader">ResetSkipHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripNullValues">ResetStripNullValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripOuterArray">ResetStripOuterArray</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripOuterElement">ResetStripOuterElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetTimeFormat">ResetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetTrimSpace">ResetTrimSpace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.fileFormat.FileFormat.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.fileFormat.FileFormat.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.fileFormat.FileFormat.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.fileFormat.FileFormat.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.fileFormat.FileFormat.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.fileFormat.FileFormat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.fileFormat.FileFormat.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.fileFormat.FileFormat.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAllowDuplicate` <a name="ResetAllowDuplicate" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetAllowDuplicate"></a>

```go
func ResetAllowDuplicate()
```

##### `ResetBinaryAsText` <a name="ResetBinaryAsText" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetBinaryAsText"></a>

```go
func ResetBinaryAsText()
```

##### `ResetBinaryFormat` <a name="ResetBinaryFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetBinaryFormat"></a>

```go
func ResetBinaryFormat()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetComment"></a>

```go
func ResetComment()
```

##### `ResetCompression` <a name="ResetCompression" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetCompression"></a>

```go
func ResetCompression()
```

##### `ResetDateFormat` <a name="ResetDateFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetDateFormat"></a>

```go
func ResetDateFormat()
```

##### `ResetDisableAutoConvert` <a name="ResetDisableAutoConvert" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetDisableAutoConvert"></a>

```go
func ResetDisableAutoConvert()
```

##### `ResetDisableSnowflakeData` <a name="ResetDisableSnowflakeData" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetDisableSnowflakeData"></a>

```go
func ResetDisableSnowflakeData()
```

##### `ResetEmptyFieldAsNull` <a name="ResetEmptyFieldAsNull" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEmptyFieldAsNull"></a>

```go
func ResetEmptyFieldAsNull()
```

##### `ResetEnableOctal` <a name="ResetEnableOctal" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEnableOctal"></a>

```go
func ResetEnableOctal()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetErrorOnColumnCountMismatch` <a name="ResetErrorOnColumnCountMismatch" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetErrorOnColumnCountMismatch"></a>

```go
func ResetErrorOnColumnCountMismatch()
```

##### `ResetEscape` <a name="ResetEscape" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEscape"></a>

```go
func ResetEscape()
```

##### `ResetEscapeUnenclosedField` <a name="ResetEscapeUnenclosedField" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEscapeUnenclosedField"></a>

```go
func ResetEscapeUnenclosedField()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetFieldDelimiter"></a>

```go
func ResetFieldDelimiter()
```

##### `ResetFieldOptionallyEnclosedBy` <a name="ResetFieldOptionallyEnclosedBy" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetFieldOptionallyEnclosedBy"></a>

```go
func ResetFieldOptionallyEnclosedBy()
```

##### `ResetFileExtension` <a name="ResetFileExtension" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetFileExtension"></a>

```go
func ResetFileExtension()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreUtf8Errors` <a name="ResetIgnoreUtf8Errors" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetIgnoreUtf8Errors"></a>

```go
func ResetIgnoreUtf8Errors()
```

##### `ResetNullIf` <a name="ResetNullIf" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetNullIf"></a>

```go
func ResetNullIf()
```

##### `ResetPreserveSpace` <a name="ResetPreserveSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetPreserveSpace"></a>

```go
func ResetPreserveSpace()
```

##### `ResetRecordDelimiter` <a name="ResetRecordDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetRecordDelimiter"></a>

```go
func ResetRecordDelimiter()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetSkipBlankLines` <a name="ResetSkipBlankLines" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipBlankLines"></a>

```go
func ResetSkipBlankLines()
```

##### `ResetSkipByteOrderMark` <a name="ResetSkipByteOrderMark" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipByteOrderMark"></a>

```go
func ResetSkipByteOrderMark()
```

##### `ResetSkipHeader` <a name="ResetSkipHeader" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipHeader"></a>

```go
func ResetSkipHeader()
```

##### `ResetStripNullValues` <a name="ResetStripNullValues" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripNullValues"></a>

```go
func ResetStripNullValues()
```

##### `ResetStripOuterArray` <a name="ResetStripOuterArray" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripOuterArray"></a>

```go
func ResetStripOuterArray()
```

##### `ResetStripOuterElement` <a name="ResetStripOuterElement" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripOuterElement"></a>

```go
func ResetStripOuterElement()
```

##### `ResetTimeFormat` <a name="ResetTimeFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetTimeFormat"></a>

```go
func ResetTimeFormat()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetTimestampFormat"></a>

```go
func ResetTimestampFormat()
```

##### `ResetTrimSpace` <a name="ResetTrimSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetTrimSpace"></a>

```go
func ResetTrimSpace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7/fileformat"

fileformat.FileFormat_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7/fileformat"

fileformat.FileFormat_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7/fileformat"

fileformat.FileFormat_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.allowDuplicateInput">AllowDuplicateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryAsTextInput">BinaryAsTextInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryFormatInput">BinaryFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.dateFormatInput">DateFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableAutoConvertInput">DisableAutoConvertInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableSnowflakeDataInput">DisableSnowflakeDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.emptyFieldAsNullInput">EmptyFieldAsNullInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.enableOctalInput">EnableOctalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.errorOnColumnCountMismatchInput">ErrorOnColumnCountMismatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeInput">EscapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeUnenclosedFieldInput">EscapeUnenclosedFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldOptionallyEnclosedByInput">FieldOptionallyEnclosedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fileExtensionInput">FileExtensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.formatTypeInput">FormatTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.ignoreUtf8ErrorsInput">IgnoreUtf8ErrorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.nullIfInput">NullIfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.preserveSpaceInput">PreserveSpaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.recordDelimiterInput">RecordDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipBlankLinesInput">SkipBlankLinesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipByteOrderMarkInput">SkipByteOrderMarkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipHeaderInput">SkipHeaderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripNullValuesInput">StripNullValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterArrayInput">StripOuterArrayInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterElementInput">StripOuterElementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeFormatInput">TimeFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.trimSpaceInput">TrimSpaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.allowDuplicate">AllowDuplicate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryAsText">BinaryAsText</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableAutoConvert">DisableAutoConvert</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableSnowflakeData">DisableSnowflakeData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.enableOctal">EnableOctal</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.escape">Escape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.formatType">FormatType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.preserveSpace">PreserveSpace</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipBlankLines">SkipBlankLines</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipHeader">SkipHeader</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripNullValues">StripNullValues</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterArray">StripOuterArray</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterElement">StripOuterElement</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.trimSpace">TrimSpace</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowDuplicateInput`<sup>Optional</sup> <a name="AllowDuplicateInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.allowDuplicateInput"></a>

```go
func AllowDuplicateInput() interface{}
```

- *Type:* interface{}

---

##### `BinaryAsTextInput`<sup>Optional</sup> <a name="BinaryAsTextInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryAsTextInput"></a>

```go
func BinaryAsTextInput() interface{}
```

- *Type:* interface{}

---

##### `BinaryFormatInput`<sup>Optional</sup> <a name="BinaryFormatInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryFormatInput"></a>

```go
func BinaryFormatInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.dateFormatInput"></a>

```go
func DateFormatInput() *string
```

- *Type:* *string

---

##### `DisableAutoConvertInput`<sup>Optional</sup> <a name="DisableAutoConvertInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableAutoConvertInput"></a>

```go
func DisableAutoConvertInput() interface{}
```

- *Type:* interface{}

---

##### `DisableSnowflakeDataInput`<sup>Optional</sup> <a name="DisableSnowflakeDataInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableSnowflakeDataInput"></a>

```go
func DisableSnowflakeDataInput() interface{}
```

- *Type:* interface{}

---

##### `EmptyFieldAsNullInput`<sup>Optional</sup> <a name="EmptyFieldAsNullInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.emptyFieldAsNullInput"></a>

```go
func EmptyFieldAsNullInput() interface{}
```

- *Type:* interface{}

---

##### `EnableOctalInput`<sup>Optional</sup> <a name="EnableOctalInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.enableOctalInput"></a>

```go
func EnableOctalInput() interface{}
```

- *Type:* interface{}

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `ErrorOnColumnCountMismatchInput`<sup>Optional</sup> <a name="ErrorOnColumnCountMismatchInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.errorOnColumnCountMismatchInput"></a>

```go
func ErrorOnColumnCountMismatchInput() interface{}
```

- *Type:* interface{}

---

##### `EscapeInput`<sup>Optional</sup> <a name="EscapeInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeInput"></a>

```go
func EscapeInput() *string
```

- *Type:* *string

---

##### `EscapeUnenclosedFieldInput`<sup>Optional</sup> <a name="EscapeUnenclosedFieldInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeUnenclosedFieldInput"></a>

```go
func EscapeUnenclosedFieldInput() *string
```

- *Type:* *string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldDelimiterInput"></a>

```go
func FieldDelimiterInput() *string
```

- *Type:* *string

---

##### `FieldOptionallyEnclosedByInput`<sup>Optional</sup> <a name="FieldOptionallyEnclosedByInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldOptionallyEnclosedByInput"></a>

```go
func FieldOptionallyEnclosedByInput() *string
```

- *Type:* *string

---

##### `FileExtensionInput`<sup>Optional</sup> <a name="FileExtensionInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fileExtensionInput"></a>

```go
func FileExtensionInput() *string
```

- *Type:* *string

---

##### `FormatTypeInput`<sup>Optional</sup> <a name="FormatTypeInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.formatTypeInput"></a>

```go
func FormatTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreUtf8ErrorsInput`<sup>Optional</sup> <a name="IgnoreUtf8ErrorsInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.ignoreUtf8ErrorsInput"></a>

```go
func IgnoreUtf8ErrorsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NullIfInput`<sup>Optional</sup> <a name="NullIfInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.nullIfInput"></a>

```go
func NullIfInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreserveSpaceInput`<sup>Optional</sup> <a name="PreserveSpaceInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.preserveSpaceInput"></a>

```go
func PreserveSpaceInput() interface{}
```

- *Type:* interface{}

---

##### `RecordDelimiterInput`<sup>Optional</sup> <a name="RecordDelimiterInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.recordDelimiterInput"></a>

```go
func RecordDelimiterInput() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `SkipBlankLinesInput`<sup>Optional</sup> <a name="SkipBlankLinesInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipBlankLinesInput"></a>

```go
func SkipBlankLinesInput() interface{}
```

- *Type:* interface{}

---

##### `SkipByteOrderMarkInput`<sup>Optional</sup> <a name="SkipByteOrderMarkInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipByteOrderMarkInput"></a>

```go
func SkipByteOrderMarkInput() interface{}
```

- *Type:* interface{}

---

##### `SkipHeaderInput`<sup>Optional</sup> <a name="SkipHeaderInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipHeaderInput"></a>

```go
func SkipHeaderInput() *f64
```

- *Type:* *f64

---

##### `StripNullValuesInput`<sup>Optional</sup> <a name="StripNullValuesInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripNullValuesInput"></a>

```go
func StripNullValuesInput() interface{}
```

- *Type:* interface{}

---

##### `StripOuterArrayInput`<sup>Optional</sup> <a name="StripOuterArrayInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterArrayInput"></a>

```go
func StripOuterArrayInput() interface{}
```

- *Type:* interface{}

---

##### `StripOuterElementInput`<sup>Optional</sup> <a name="StripOuterElementInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterElementInput"></a>

```go
func StripOuterElementInput() interface{}
```

- *Type:* interface{}

---

##### `TimeFormatInput`<sup>Optional</sup> <a name="TimeFormatInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeFormatInput"></a>

```go
func TimeFormatInput() *string
```

- *Type:* *string

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timestampFormatInput"></a>

```go
func TimestampFormatInput() *string
```

- *Type:* *string

---

##### `TrimSpaceInput`<sup>Optional</sup> <a name="TrimSpaceInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.trimSpaceInput"></a>

```go
func TrimSpaceInput() interface{}
```

- *Type:* interface{}

---

##### `AllowDuplicate`<sup>Required</sup> <a name="AllowDuplicate" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.allowDuplicate"></a>

```go
func AllowDuplicate() interface{}
```

- *Type:* interface{}

---

##### `BinaryAsText`<sup>Required</sup> <a name="BinaryAsText" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryAsText"></a>

```go
func BinaryAsText() interface{}
```

- *Type:* interface{}

---

##### `BinaryFormat`<sup>Required</sup> <a name="BinaryFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryFormat"></a>

```go
func BinaryFormat() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `DisableAutoConvert`<sup>Required</sup> <a name="DisableAutoConvert" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableAutoConvert"></a>

```go
func DisableAutoConvert() interface{}
```

- *Type:* interface{}

---

##### `DisableSnowflakeData`<sup>Required</sup> <a name="DisableSnowflakeData" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableSnowflakeData"></a>

```go
func DisableSnowflakeData() interface{}
```

- *Type:* interface{}

---

##### `EmptyFieldAsNull`<sup>Required</sup> <a name="EmptyFieldAsNull" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.emptyFieldAsNull"></a>

```go
func EmptyFieldAsNull() interface{}
```

- *Type:* interface{}

---

##### `EnableOctal`<sup>Required</sup> <a name="EnableOctal" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.enableOctal"></a>

```go
func EnableOctal() interface{}
```

- *Type:* interface{}

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `ErrorOnColumnCountMismatch`<sup>Required</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.errorOnColumnCountMismatch"></a>

```go
func ErrorOnColumnCountMismatch() interface{}
```

- *Type:* interface{}

---

##### `Escape`<sup>Required</sup> <a name="Escape" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.escape"></a>

```go
func Escape() *string
```

- *Type:* *string

---

##### `EscapeUnenclosedField`<sup>Required</sup> <a name="EscapeUnenclosedField" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeUnenclosedField"></a>

```go
func EscapeUnenclosedField() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `FieldOptionallyEnclosedBy`<sup>Required</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldOptionallyEnclosedBy"></a>

```go
func FieldOptionallyEnclosedBy() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `FormatType`<sup>Required</sup> <a name="FormatType" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.formatType"></a>

```go
func FormatType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreUtf8Errors`<sup>Required</sup> <a name="IgnoreUtf8Errors" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.ignoreUtf8Errors"></a>

```go
func IgnoreUtf8Errors() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NullIf`<sup>Required</sup> <a name="NullIf" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.nullIf"></a>

```go
func NullIf() *[]*string
```

- *Type:* *[]*string

---

##### `PreserveSpace`<sup>Required</sup> <a name="PreserveSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.preserveSpace"></a>

```go
func PreserveSpace() interface{}
```

- *Type:* interface{}

---

##### `RecordDelimiter`<sup>Required</sup> <a name="RecordDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.recordDelimiter"></a>

```go
func RecordDelimiter() *string
```

- *Type:* *string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() interface{}
```

- *Type:* interface{}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `SkipBlankLines`<sup>Required</sup> <a name="SkipBlankLines" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipBlankLines"></a>

```go
func SkipBlankLines() interface{}
```

- *Type:* interface{}

---

##### `SkipByteOrderMark`<sup>Required</sup> <a name="SkipByteOrderMark" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipByteOrderMark"></a>

```go
func SkipByteOrderMark() interface{}
```

- *Type:* interface{}

---

##### `SkipHeader`<sup>Required</sup> <a name="SkipHeader" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipHeader"></a>

```go
func SkipHeader() *f64
```

- *Type:* *f64

---

##### `StripNullValues`<sup>Required</sup> <a name="StripNullValues" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripNullValues"></a>

```go
func StripNullValues() interface{}
```

- *Type:* interface{}

---

##### `StripOuterArray`<sup>Required</sup> <a name="StripOuterArray" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterArray"></a>

```go
func StripOuterArray() interface{}
```

- *Type:* interface{}

---

##### `StripOuterElement`<sup>Required</sup> <a name="StripOuterElement" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterElement"></a>

```go
func StripOuterElement() interface{}
```

- *Type:* interface{}

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `TrimSpace`<sup>Required</sup> <a name="TrimSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.trimSpace"></a>

```go
func TrimSpace() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FileFormatConfig <a name="FileFormatConfig" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v7/fileformat"

&fileformat.FileFormatConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Database: *string,
	FormatType: *string,
	Name: *string,
	Schema: *string,
	AllowDuplicate: interface{},
	BinaryAsText: interface{},
	BinaryFormat: *string,
	Comment: *string,
	Compression: *string,
	DateFormat: *string,
	DisableAutoConvert: interface{},
	DisableSnowflakeData: interface{},
	EmptyFieldAsNull: interface{},
	EnableOctal: interface{},
	Encoding: *string,
	ErrorOnColumnCountMismatch: interface{},
	Escape: *string,
	EscapeUnenclosedField: *string,
	FieldDelimiter: *string,
	FieldOptionallyEnclosedBy: *string,
	FileExtension: *string,
	Id: *string,
	IgnoreUtf8Errors: interface{},
	NullIf: *[]*string,
	PreserveSpace: interface{},
	RecordDelimiter: *string,
	ReplaceInvalidCharacters: interface{},
	SkipBlankLines: interface{},
	SkipByteOrderMark: interface{},
	SkipHeader: *f64,
	StripNullValues: interface{},
	StripOuterArray: interface{},
	StripOuterElement: interface{},
	TimeFormat: *string,
	TimestampFormat: *string,
	TrimSpace: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.formatType">FormatType</a></code> | <code>*string</code> | Specifies the format of the input files (for data loading) or output files (for data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.allowDuplicate">AllowDuplicate</a></code> | <code>interface{}</code> | Boolean that specifies to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.binaryAsText">BinaryAsText</a></code> | <code>interface{}</code> | Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.binaryFormat">BinaryFormat</a></code> | <code>*string</code> | Defines the encoding format for binary input or output. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.compression">Compression</a></code> | <code>*string</code> | Specifies the current compression algorithm for the data file. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.dateFormat">DateFormat</a></code> | <code>*string</code> | Defines the format of date values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.disableAutoConvert">DisableAutoConvert</a></code> | <code>interface{}</code> | Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.disableSnowflakeData">DisableSnowflakeData</a></code> | <code>interface{}</code> | Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.emptyFieldAsNull">EmptyFieldAsNull</a></code> | <code>interface{}</code> | Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive delimiters. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.enableOctal">EnableOctal</a></code> | <code>interface{}</code> | Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.encoding">Encoding</a></code> | <code>*string</code> | String (constant) that specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.errorOnColumnCountMismatch">ErrorOnColumnCountMismatch</a></code> | <code>interface{}</code> | Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.escape">Escape</a></code> | <code>*string</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.escapeUnenclosedField">EscapeUnenclosedField</a></code> | <code>*string</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or unloaded file (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fieldOptionallyEnclosedBy">FieldOptionallyEnclosedBy</a></code> | <code>*string</code> | Character used to enclose strings. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fileExtension">FileExtension</a></code> | <code>*string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#id FileFormat#id}. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.ignoreUtf8Errors">IgnoreUtf8Errors</a></code> | <code>interface{}</code> | Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.nullIf">NullIf</a></code> | <code>*[]*string</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.preserveSpace">PreserveSpace</a></code> | <code>interface{}</code> | Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.recordDelimiter">RecordDelimiter</a></code> | <code>*string</code> | Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or unloaded file (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>interface{}</code> | Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipBlankLines">SkipBlankLines</a></code> | <code>interface{}</code> | Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipByteOrderMark">SkipByteOrderMark</a></code> | <code>interface{}</code> | Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipHeader">SkipHeader</a></code> | <code>*f64</code> | Number of lines at the start of the file to skip. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripNullValues">StripNullValues</a></code> | <code>interface{}</code> | Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripOuterArray">StripOuterArray</a></code> | <code>interface{}</code> | Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripOuterElement">StripOuterElement</a></code> | <code>interface{}</code> | Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | Defines the format of time values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | Defines the format of timestamp values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.trimSpace">TrimSpace</a></code> | <code>interface{}</code> | Boolean that specifies whether to remove white space from fields. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#database FileFormat#database}

---

##### `FormatType`<sup>Required</sup> <a name="FormatType" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.formatType"></a>

```go
FormatType *string
```

- *Type:* *string

Specifies the format of the input files (for data loading) or output files (for data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#format_type FileFormat#format_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#name FileFormat#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#schema FileFormat#schema}

---

##### `AllowDuplicate`<sup>Optional</sup> <a name="AllowDuplicate" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.allowDuplicate"></a>

```go
AllowDuplicate interface{}
```

- *Type:* interface{}

Boolean that specifies to allow duplicate object field names (only the last one will be preserved).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#allow_duplicate FileFormat#allow_duplicate}

---

##### `BinaryAsText`<sup>Optional</sup> <a name="BinaryAsText" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.binaryAsText"></a>

```go
BinaryAsText interface{}
```

- *Type:* interface{}

Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#binary_as_text FileFormat#binary_as_text}

---

##### `BinaryFormat`<sup>Optional</sup> <a name="BinaryFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.binaryFormat"></a>

```go
BinaryFormat *string
```

- *Type:* *string

Defines the encoding format for binary input or output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#binary_format FileFormat#binary_format}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#comment FileFormat#comment}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Specifies the current compression algorithm for the data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#compression FileFormat#compression}

---

##### `DateFormat`<sup>Optional</sup> <a name="DateFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.dateFormat"></a>

```go
DateFormat *string
```

- *Type:* *string

Defines the format of date values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#date_format FileFormat#date_format}

---

##### `DisableAutoConvert`<sup>Optional</sup> <a name="DisableAutoConvert" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.disableAutoConvert"></a>

```go
DisableAutoConvert interface{}
```

- *Type:* interface{}

Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#disable_auto_convert FileFormat#disable_auto_convert}

---

##### `DisableSnowflakeData`<sup>Optional</sup> <a name="DisableSnowflakeData" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.disableSnowflakeData"></a>

```go
DisableSnowflakeData interface{}
```

- *Type:* interface{}

Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#disable_snowflake_data FileFormat#disable_snowflake_data}

---

##### `EmptyFieldAsNull`<sup>Optional</sup> <a name="EmptyFieldAsNull" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.emptyFieldAsNull"></a>

```go
EmptyFieldAsNull interface{}
```

- *Type:* interface{}

Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#empty_field_as_null FileFormat#empty_field_as_null}

---

##### `EnableOctal`<sup>Optional</sup> <a name="EnableOctal" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.enableOctal"></a>

```go
EnableOctal interface{}
```

- *Type:* interface{}

Boolean that enables parsing of octal numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#enable_octal FileFormat#enable_octal}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

String (constant) that specifies the character set of the source data when loading data into a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#encoding FileFormat#encoding}

---

##### `ErrorOnColumnCountMismatch`<sup>Optional</sup> <a name="ErrorOnColumnCountMismatch" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.errorOnColumnCountMismatch"></a>

```go
ErrorOnColumnCountMismatch interface{}
```

- *Type:* interface{}

Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input file does not match the number of columns in the corresponding table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#error_on_column_count_mismatch FileFormat#error_on_column_count_mismatch}

---

##### `Escape`<sup>Optional</sup> <a name="Escape" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.escape"></a>

```go
Escape *string
```

- *Type:* *string

Single character string used as the escape character for field values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#escape FileFormat#escape}

---

##### `EscapeUnenclosedField`<sup>Optional</sup> <a name="EscapeUnenclosedField" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.escapeUnenclosedField"></a>

```go
EscapeUnenclosedField *string
```

- *Type:* *string

Single character string used as the escape character for unenclosed field values only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#escape_unenclosed_field FileFormat#escape_unenclosed_field}

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fieldDelimiter"></a>

```go
FieldDelimiter *string
```

- *Type:* *string

Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or unloaded file (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#field_delimiter FileFormat#field_delimiter}

---

##### `FieldOptionallyEnclosedBy`<sup>Optional</sup> <a name="FieldOptionallyEnclosedBy" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fieldOptionallyEnclosedBy"></a>

```go
FieldOptionallyEnclosedBy *string
```

- *Type:* *string

Character used to enclose strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#field_optionally_enclosed_by FileFormat#field_optionally_enclosed_by}

---

##### `FileExtension`<sup>Optional</sup> <a name="FileExtension" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fileExtension"></a>

```go
FileExtension *string
```

- *Type:* *string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#file_extension FileFormat#file_extension}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#id FileFormat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreUtf8Errors`<sup>Optional</sup> <a name="IgnoreUtf8Errors" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.ignoreUtf8Errors"></a>

```go
IgnoreUtf8Errors interface{}
```

- *Type:* interface{}

Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#ignore_utf8_errors FileFormat#ignore_utf8_errors}

---

##### `NullIf`<sup>Optional</sup> <a name="NullIf" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.nullIf"></a>

```go
NullIf *[]*string
```

- *Type:* *[]*string

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#null_if FileFormat#null_if}

---

##### `PreserveSpace`<sup>Optional</sup> <a name="PreserveSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.preserveSpace"></a>

```go
PreserveSpace interface{}
```

- *Type:* interface{}

Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#preserve_space FileFormat#preserve_space}

---

##### `RecordDelimiter`<sup>Optional</sup> <a name="RecordDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.recordDelimiter"></a>

```go
RecordDelimiter *string
```

- *Type:* *string

Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or unloaded file (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#record_delimiter FileFormat#record_delimiter}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters interface{}
```

- *Type:* interface{}

Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#replace_invalid_characters FileFormat#replace_invalid_characters}

---

##### `SkipBlankLines`<sup>Optional</sup> <a name="SkipBlankLines" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipBlankLines"></a>

```go
SkipBlankLines interface{}
```

- *Type:* interface{}

Boolean that specifies to skip any blank lines encountered in the data files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#skip_blank_lines FileFormat#skip_blank_lines}

---

##### `SkipByteOrderMark`<sup>Optional</sup> <a name="SkipByteOrderMark" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipByteOrderMark"></a>

```go
SkipByteOrderMark interface{}
```

- *Type:* interface{}

Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#skip_byte_order_mark FileFormat#skip_byte_order_mark}

---

##### `SkipHeader`<sup>Optional</sup> <a name="SkipHeader" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipHeader"></a>

```go
SkipHeader *f64
```

- *Type:* *f64

Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#skip_header FileFormat#skip_header}

---

##### `StripNullValues`<sup>Optional</sup> <a name="StripNullValues" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripNullValues"></a>

```go
StripNullValues interface{}
```

- *Type:* interface{}

Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#strip_null_values FileFormat#strip_null_values}

---

##### `StripOuterArray`<sup>Optional</sup> <a name="StripOuterArray" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripOuterArray"></a>

```go
StripOuterArray interface{}
```

- *Type:* interface{}

Boolean that instructs the JSON parser to remove outer brackets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#strip_outer_array FileFormat#strip_outer_array}

---

##### `StripOuterElement`<sup>Optional</sup> <a name="StripOuterElement" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripOuterElement"></a>

```go
StripOuterElement interface{}
```

- *Type:* interface{}

Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#strip_outer_element FileFormat#strip_outer_element}

---

##### `TimeFormat`<sup>Optional</sup> <a name="TimeFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timeFormat"></a>

```go
TimeFormat *string
```

- *Type:* *string

Defines the format of time values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#time_format FileFormat#time_format}

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timestampFormat"></a>

```go
TimestampFormat *string
```

- *Type:* *string

Defines the format of timestamp values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#timestamp_format FileFormat#timestamp_format}

---

##### `TrimSpace`<sup>Optional</sup> <a name="TrimSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.trimSpace"></a>

```go
TrimSpace interface{}
```

- *Type:* interface{}

Boolean that specifies whether to remove white space from fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/file_format#trim_space FileFormat#trim_space}

---



