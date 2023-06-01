# `snowflake_file_format`

Refer to the Terraform Registory for docs: [`snowflake_file_format`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format).

# `fileFormat` Submodule <a name="`fileFormat` Submodule" id="@cdktf/provider-snowflake.fileFormat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileFormat <a name="FileFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format snowflake_file_format}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.file_format.FileFormat;

FileFormat.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .database(java.lang.String)
    .formatType(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .allowDuplicate(java.lang.Boolean)
//  .allowDuplicate(IResolvable)
//  .binaryAsText(java.lang.Boolean)
//  .binaryAsText(IResolvable)
//  .binaryFormat(java.lang.String)
//  .comment(java.lang.String)
//  .compression(java.lang.String)
//  .dateFormat(java.lang.String)
//  .disableAutoConvert(java.lang.Boolean)
//  .disableAutoConvert(IResolvable)
//  .disableSnowflakeData(java.lang.Boolean)
//  .disableSnowflakeData(IResolvable)
//  .emptyFieldAsNull(java.lang.Boolean)
//  .emptyFieldAsNull(IResolvable)
//  .enableOctal(java.lang.Boolean)
//  .enableOctal(IResolvable)
//  .encoding(java.lang.String)
//  .errorOnColumnCountMismatch(java.lang.Boolean)
//  .errorOnColumnCountMismatch(IResolvable)
//  .escape(java.lang.String)
//  .escapeUnenclosedField(java.lang.String)
//  .fieldDelimiter(java.lang.String)
//  .fieldOptionallyEnclosedBy(java.lang.String)
//  .fileExtension(java.lang.String)
//  .id(java.lang.String)
//  .ignoreUtf8Errors(java.lang.Boolean)
//  .ignoreUtf8Errors(IResolvable)
//  .nullIf(java.util.List<java.lang.String>)
//  .preserveSpace(java.lang.Boolean)
//  .preserveSpace(IResolvable)
//  .recordDelimiter(java.lang.String)
//  .replaceInvalidCharacters(java.lang.Boolean)
//  .replaceInvalidCharacters(IResolvable)
//  .skipBlankLines(java.lang.Boolean)
//  .skipBlankLines(IResolvable)
//  .skipByteOrderMark(java.lang.Boolean)
//  .skipByteOrderMark(IResolvable)
//  .skipHeader(java.lang.Number)
//  .stripNullValues(java.lang.Boolean)
//  .stripNullValues(IResolvable)
//  .stripOuterArray(java.lang.Boolean)
//  .stripOuterArray(IResolvable)
//  .stripOuterElement(java.lang.Boolean)
//  .stripOuterElement(IResolvable)
//  .timeFormat(java.lang.String)
//  .timestampFormat(java.lang.String)
//  .trimSpace(java.lang.Boolean)
//  .trimSpace(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.formatType">formatType</a></code> | <code>java.lang.String</code> | Specifies the format of the input files (for data loading) or output files (for data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.allowDuplicate">allowDuplicate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.binaryAsText">binaryAsText</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.binaryFormat">binaryFormat</a></code> | <code>java.lang.String</code> | Defines the encoding format for binary input or output. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.compression">compression</a></code> | <code>java.lang.String</code> | Specifies the current compression algorithm for the data file. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.dateFormat">dateFormat</a></code> | <code>java.lang.String</code> | Defines the format of date values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.disableAutoConvert">disableAutoConvert</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.disableSnowflakeData">disableSnowflakeData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.emptyFieldAsNull">emptyFieldAsNull</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive delimiters. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.enableOctal">enableOctal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.encoding">encoding</a></code> | <code>java.lang.String</code> | String (constant) that specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.errorOnColumnCountMismatch">errorOnColumnCountMismatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.escape">escape</a></code> | <code>java.lang.String</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.escapeUnenclosedField">escapeUnenclosedField</a></code> | <code>java.lang.String</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or unloaded file (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.fieldOptionallyEnclosedBy">fieldOptionallyEnclosedBy</a></code> | <code>java.lang.String</code> | Character used to enclose strings. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.fileExtension">fileExtension</a></code> | <code>java.lang.String</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#id FileFormat#id}. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.nullIf">nullIf</a></code> | <code>java.util.List<java.lang.String></code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.preserveSpace">preserveSpace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.recordDelimiter">recordDelimiter</a></code> | <code>java.lang.String</code> | Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or unloaded file (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.skipBlankLines">skipBlankLines</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.skipByteOrderMark">skipByteOrderMark</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.skipHeader">skipHeader</a></code> | <code>java.lang.Number</code> | Number of lines at the start of the file to skip. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.stripNullValues">stripNullValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.stripOuterArray">stripOuterArray</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.stripOuterElement">stripOuterElement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.timeFormat">timeFormat</a></code> | <code>java.lang.String</code> | Defines the format of time values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | Defines the format of timestamp values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.trimSpace">trimSpace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether to remove white space from fields. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#database FileFormat#database}

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.formatType"></a>

- *Type:* java.lang.String

Specifies the format of the input files (for data loading) or output files (for data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#format_type FileFormat#format_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#name FileFormat#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#schema FileFormat#schema}

---

##### `allowDuplicate`<sup>Optional</sup> <a name="allowDuplicate" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.allowDuplicate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies to allow duplicate object field names (only the last one will be preserved).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#allow_duplicate FileFormat#allow_duplicate}

---

##### `binaryAsText`<sup>Optional</sup> <a name="binaryAsText" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.binaryAsText"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#binary_as_text FileFormat#binary_as_text}

---

##### `binaryFormat`<sup>Optional</sup> <a name="binaryFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.binaryFormat"></a>

- *Type:* java.lang.String

Defines the encoding format for binary input or output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#binary_format FileFormat#binary_format}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#comment FileFormat#comment}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.compression"></a>

- *Type:* java.lang.String

Specifies the current compression algorithm for the data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#compression FileFormat#compression}

---

##### `dateFormat`<sup>Optional</sup> <a name="dateFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.dateFormat"></a>

- *Type:* java.lang.String

Defines the format of date values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#date_format FileFormat#date_format}

---

##### `disableAutoConvert`<sup>Optional</sup> <a name="disableAutoConvert" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.disableAutoConvert"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#disable_auto_convert FileFormat#disable_auto_convert}

---

##### `disableSnowflakeData`<sup>Optional</sup> <a name="disableSnowflakeData" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.disableSnowflakeData"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#disable_snowflake_data FileFormat#disable_snowflake_data}

---

##### `emptyFieldAsNull`<sup>Optional</sup> <a name="emptyFieldAsNull" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.emptyFieldAsNull"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#empty_field_as_null FileFormat#empty_field_as_null}

---

##### `enableOctal`<sup>Optional</sup> <a name="enableOctal" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.enableOctal"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that enables parsing of octal numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#enable_octal FileFormat#enable_octal}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.encoding"></a>

- *Type:* java.lang.String

String (constant) that specifies the character set of the source data when loading data into a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#encoding FileFormat#encoding}

---

##### `errorOnColumnCountMismatch`<sup>Optional</sup> <a name="errorOnColumnCountMismatch" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.errorOnColumnCountMismatch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input file does not match the number of columns in the corresponding table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#error_on_column_count_mismatch FileFormat#error_on_column_count_mismatch}

---

##### `escape`<sup>Optional</sup> <a name="escape" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.escape"></a>

- *Type:* java.lang.String

Single character string used as the escape character for field values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#escape FileFormat#escape}

---

##### `escapeUnenclosedField`<sup>Optional</sup> <a name="escapeUnenclosedField" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.escapeUnenclosedField"></a>

- *Type:* java.lang.String

Single character string used as the escape character for unenclosed field values only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#escape_unenclosed_field FileFormat#escape_unenclosed_field}

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.fieldDelimiter"></a>

- *Type:* java.lang.String

Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or unloaded file (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#field_delimiter FileFormat#field_delimiter}

---

##### `fieldOptionallyEnclosedBy`<sup>Optional</sup> <a name="fieldOptionallyEnclosedBy" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.fieldOptionallyEnclosedBy"></a>

- *Type:* java.lang.String

Character used to enclose strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#field_optionally_enclosed_by FileFormat#field_optionally_enclosed_by}

---

##### `fileExtension`<sup>Optional</sup> <a name="fileExtension" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.fileExtension"></a>

- *Type:* java.lang.String

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#file_extension FileFormat#file_extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#id FileFormat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreUtf8Errors`<sup>Optional</sup> <a name="ignoreUtf8Errors" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.ignoreUtf8Errors"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#ignore_utf8_errors FileFormat#ignore_utf8_errors}

---

##### `nullIf`<sup>Optional</sup> <a name="nullIf" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.nullIf"></a>

- *Type:* java.util.List<java.lang.String>

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#null_if FileFormat#null_if}

---

##### `preserveSpace`<sup>Optional</sup> <a name="preserveSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.preserveSpace"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#preserve_space FileFormat#preserve_space}

---

##### `recordDelimiter`<sup>Optional</sup> <a name="recordDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.recordDelimiter"></a>

- *Type:* java.lang.String

Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or unloaded file (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#record_delimiter FileFormat#record_delimiter}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#replace_invalid_characters FileFormat#replace_invalid_characters}

---

##### `skipBlankLines`<sup>Optional</sup> <a name="skipBlankLines" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.skipBlankLines"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies to skip any blank lines encountered in the data files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#skip_blank_lines FileFormat#skip_blank_lines}

---

##### `skipByteOrderMark`<sup>Optional</sup> <a name="skipByteOrderMark" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.skipByteOrderMark"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#skip_byte_order_mark FileFormat#skip_byte_order_mark}

---

##### `skipHeader`<sup>Optional</sup> <a name="skipHeader" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.skipHeader"></a>

- *Type:* java.lang.Number

Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#skip_header FileFormat#skip_header}

---

##### `stripNullValues`<sup>Optional</sup> <a name="stripNullValues" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.stripNullValues"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#strip_null_values FileFormat#strip_null_values}

---

##### `stripOuterArray`<sup>Optional</sup> <a name="stripOuterArray" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.stripOuterArray"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that instructs the JSON parser to remove outer brackets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#strip_outer_array FileFormat#strip_outer_array}

---

##### `stripOuterElement`<sup>Optional</sup> <a name="stripOuterElement" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.stripOuterElement"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#strip_outer_element FileFormat#strip_outer_element}

---

##### `timeFormat`<sup>Optional</sup> <a name="timeFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.timeFormat"></a>

- *Type:* java.lang.String

Defines the format of time values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#time_format FileFormat#time_format}

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.timestampFormat"></a>

- *Type:* java.lang.String

Defines the format of timestamp values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#timestamp_format FileFormat#timestamp_format}

---

##### `trimSpace`<sup>Optional</sup> <a name="trimSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.trimSpace"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether to remove white space from fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#trim_space FileFormat#trim_space}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.fileFormat.FileFormat.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.fileFormat.FileFormat.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.fileFormat.FileFormat.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.fileFormat.FileFormat.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.fileFormat.FileFormat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.fileFormat.FileFormat.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.fileFormat.FileFormat.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAllowDuplicate` <a name="resetAllowDuplicate" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetAllowDuplicate"></a>

```java
public void resetAllowDuplicate()
```

##### `resetBinaryAsText` <a name="resetBinaryAsText" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetBinaryAsText"></a>

```java
public void resetBinaryAsText()
```

##### `resetBinaryFormat` <a name="resetBinaryFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetBinaryFormat"></a>

```java
public void resetBinaryFormat()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetComment"></a>

```java
public void resetComment()
```

##### `resetCompression` <a name="resetCompression" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetCompression"></a>

```java
public void resetCompression()
```

##### `resetDateFormat` <a name="resetDateFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetDateFormat"></a>

```java
public void resetDateFormat()
```

##### `resetDisableAutoConvert` <a name="resetDisableAutoConvert" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetDisableAutoConvert"></a>

```java
public void resetDisableAutoConvert()
```

##### `resetDisableSnowflakeData` <a name="resetDisableSnowflakeData" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetDisableSnowflakeData"></a>

```java
public void resetDisableSnowflakeData()
```

##### `resetEmptyFieldAsNull` <a name="resetEmptyFieldAsNull" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEmptyFieldAsNull"></a>

```java
public void resetEmptyFieldAsNull()
```

##### `resetEnableOctal` <a name="resetEnableOctal" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEnableOctal"></a>

```java
public void resetEnableOctal()
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetErrorOnColumnCountMismatch` <a name="resetErrorOnColumnCountMismatch" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetErrorOnColumnCountMismatch"></a>

```java
public void resetErrorOnColumnCountMismatch()
```

##### `resetEscape` <a name="resetEscape" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEscape"></a>

```java
public void resetEscape()
```

##### `resetEscapeUnenclosedField` <a name="resetEscapeUnenclosedField" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEscapeUnenclosedField"></a>

```java
public void resetEscapeUnenclosedField()
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetFieldDelimiter"></a>

```java
public void resetFieldDelimiter()
```

##### `resetFieldOptionallyEnclosedBy` <a name="resetFieldOptionallyEnclosedBy" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetFieldOptionallyEnclosedBy"></a>

```java
public void resetFieldOptionallyEnclosedBy()
```

##### `resetFileExtension` <a name="resetFileExtension" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetFileExtension"></a>

```java
public void resetFileExtension()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreUtf8Errors` <a name="resetIgnoreUtf8Errors" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetIgnoreUtf8Errors"></a>

```java
public void resetIgnoreUtf8Errors()
```

##### `resetNullIf` <a name="resetNullIf" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetNullIf"></a>

```java
public void resetNullIf()
```

##### `resetPreserveSpace` <a name="resetPreserveSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetPreserveSpace"></a>

```java
public void resetPreserveSpace()
```

##### `resetRecordDelimiter` <a name="resetRecordDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetRecordDelimiter"></a>

```java
public void resetRecordDelimiter()
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetReplaceInvalidCharacters"></a>

```java
public void resetReplaceInvalidCharacters()
```

##### `resetSkipBlankLines` <a name="resetSkipBlankLines" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipBlankLines"></a>

```java
public void resetSkipBlankLines()
```

##### `resetSkipByteOrderMark` <a name="resetSkipByteOrderMark" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipByteOrderMark"></a>

```java
public void resetSkipByteOrderMark()
```

##### `resetSkipHeader` <a name="resetSkipHeader" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipHeader"></a>

```java
public void resetSkipHeader()
```

##### `resetStripNullValues` <a name="resetStripNullValues" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripNullValues"></a>

```java
public void resetStripNullValues()
```

##### `resetStripOuterArray` <a name="resetStripOuterArray" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripOuterArray"></a>

```java
public void resetStripOuterArray()
```

##### `resetStripOuterElement` <a name="resetStripOuterElement" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripOuterElement"></a>

```java
public void resetStripOuterElement()
```

##### `resetTimeFormat` <a name="resetTimeFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetTimeFormat"></a>

```java
public void resetTimeFormat()
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetTimestampFormat"></a>

```java
public void resetTimestampFormat()
```

##### `resetTrimSpace` <a name="resetTrimSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetTrimSpace"></a>

```java
public void resetTrimSpace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.file_format.FileFormat;

FileFormat.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.file_format.FileFormat;

FileFormat.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.file_format.FileFormat;

FileFormat.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.allowDuplicateInput">allowDuplicateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryAsTextInput">binaryAsTextInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryFormatInput">binaryFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.compressionInput">compressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.dateFormatInput">dateFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableAutoConvertInput">disableAutoConvertInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableSnowflakeDataInput">disableSnowflakeDataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.emptyFieldAsNullInput">emptyFieldAsNullInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.enableOctalInput">enableOctalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.errorOnColumnCountMismatchInput">errorOnColumnCountMismatchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeInput">escapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeUnenclosedFieldInput">escapeUnenclosedFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldOptionallyEnclosedByInput">fieldOptionallyEnclosedByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fileExtensionInput">fileExtensionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.formatTypeInput">formatTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.ignoreUtf8ErrorsInput">ignoreUtf8ErrorsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.nullIfInput">nullIfInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.preserveSpaceInput">preserveSpaceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.recordDelimiterInput">recordDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipBlankLinesInput">skipBlankLinesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipByteOrderMarkInput">skipByteOrderMarkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipHeaderInput">skipHeaderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripNullValuesInput">stripNullValuesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterArrayInput">stripOuterArrayInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterElementInput">stripOuterElementInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeFormatInput">timeFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timestampFormatInput">timestampFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.trimSpaceInput">trimSpaceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.allowDuplicate">allowDuplicate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryAsText">binaryAsText</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryFormat">binaryFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.compression">compression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.dateFormat">dateFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableAutoConvert">disableAutoConvert</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableSnowflakeData">disableSnowflakeData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.emptyFieldAsNull">emptyFieldAsNull</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.enableOctal">enableOctal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.errorOnColumnCountMismatch">errorOnColumnCountMismatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.escape">escape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeUnenclosedField">escapeUnenclosedField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldOptionallyEnclosedBy">fieldOptionallyEnclosedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fileExtension">fileExtension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.formatType">formatType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.nullIf">nullIf</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.preserveSpace">preserveSpace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.recordDelimiter">recordDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipBlankLines">skipBlankLines</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipHeader">skipHeader</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripNullValues">stripNullValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterArray">stripOuterArray</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterElement">stripOuterElement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeFormat">timeFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.trimSpace">trimSpace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowDuplicateInput`<sup>Optional</sup> <a name="allowDuplicateInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.allowDuplicateInput"></a>

```java
public java.lang.Object getAllowDuplicateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `binaryAsTextInput`<sup>Optional</sup> <a name="binaryAsTextInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryAsTextInput"></a>

```java
public java.lang.Object getBinaryAsTextInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `binaryFormatInput`<sup>Optional</sup> <a name="binaryFormatInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryFormatInput"></a>

```java
public java.lang.String getBinaryFormatInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.compressionInput"></a>

```java
public java.lang.String getCompressionInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `dateFormatInput`<sup>Optional</sup> <a name="dateFormatInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.dateFormatInput"></a>

```java
public java.lang.String getDateFormatInput();
```

- *Type:* java.lang.String

---

##### `disableAutoConvertInput`<sup>Optional</sup> <a name="disableAutoConvertInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableAutoConvertInput"></a>

```java
public java.lang.Object getDisableAutoConvertInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableSnowflakeDataInput`<sup>Optional</sup> <a name="disableSnowflakeDataInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableSnowflakeDataInput"></a>

```java
public java.lang.Object getDisableSnowflakeDataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emptyFieldAsNullInput`<sup>Optional</sup> <a name="emptyFieldAsNullInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.emptyFieldAsNullInput"></a>

```java
public java.lang.Object getEmptyFieldAsNullInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableOctalInput`<sup>Optional</sup> <a name="enableOctalInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.enableOctalInput"></a>

```java
public java.lang.Object getEnableOctalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `errorOnColumnCountMismatchInput`<sup>Optional</sup> <a name="errorOnColumnCountMismatchInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.errorOnColumnCountMismatchInput"></a>

```java
public java.lang.Object getErrorOnColumnCountMismatchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `escapeInput`<sup>Optional</sup> <a name="escapeInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeInput"></a>

```java
public java.lang.String getEscapeInput();
```

- *Type:* java.lang.String

---

##### `escapeUnenclosedFieldInput`<sup>Optional</sup> <a name="escapeUnenclosedFieldInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeUnenclosedFieldInput"></a>

```java
public java.lang.String getEscapeUnenclosedFieldInput();
```

- *Type:* java.lang.String

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldDelimiterInput"></a>

```java
public java.lang.String getFieldDelimiterInput();
```

- *Type:* java.lang.String

---

##### `fieldOptionallyEnclosedByInput`<sup>Optional</sup> <a name="fieldOptionallyEnclosedByInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldOptionallyEnclosedByInput"></a>

```java
public java.lang.String getFieldOptionallyEnclosedByInput();
```

- *Type:* java.lang.String

---

##### `fileExtensionInput`<sup>Optional</sup> <a name="fileExtensionInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fileExtensionInput"></a>

```java
public java.lang.String getFileExtensionInput();
```

- *Type:* java.lang.String

---

##### `formatTypeInput`<sup>Optional</sup> <a name="formatTypeInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.formatTypeInput"></a>

```java
public java.lang.String getFormatTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreUtf8ErrorsInput`<sup>Optional</sup> <a name="ignoreUtf8ErrorsInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.ignoreUtf8ErrorsInput"></a>

```java
public java.lang.Object getIgnoreUtf8ErrorsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nullIfInput`<sup>Optional</sup> <a name="nullIfInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.nullIfInput"></a>

```java
public java.util.List<java.lang.String> getNullIfInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preserveSpaceInput`<sup>Optional</sup> <a name="preserveSpaceInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.preserveSpaceInput"></a>

```java
public java.lang.Object getPreserveSpaceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recordDelimiterInput`<sup>Optional</sup> <a name="recordDelimiterInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.recordDelimiterInput"></a>

```java
public java.lang.String getRecordDelimiterInput();
```

- *Type:* java.lang.String

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.replaceInvalidCharactersInput"></a>

```java
public java.lang.Object getReplaceInvalidCharactersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `skipBlankLinesInput`<sup>Optional</sup> <a name="skipBlankLinesInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipBlankLinesInput"></a>

```java
public java.lang.Object getSkipBlankLinesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipByteOrderMarkInput`<sup>Optional</sup> <a name="skipByteOrderMarkInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipByteOrderMarkInput"></a>

```java
public java.lang.Object getSkipByteOrderMarkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipHeaderInput`<sup>Optional</sup> <a name="skipHeaderInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipHeaderInput"></a>

```java
public java.lang.Number getSkipHeaderInput();
```

- *Type:* java.lang.Number

---

##### `stripNullValuesInput`<sup>Optional</sup> <a name="stripNullValuesInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripNullValuesInput"></a>

```java
public java.lang.Object getStripNullValuesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stripOuterArrayInput`<sup>Optional</sup> <a name="stripOuterArrayInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterArrayInput"></a>

```java
public java.lang.Object getStripOuterArrayInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stripOuterElementInput`<sup>Optional</sup> <a name="stripOuterElementInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterElementInput"></a>

```java
public java.lang.Object getStripOuterElementInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeFormatInput`<sup>Optional</sup> <a name="timeFormatInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeFormatInput"></a>

```java
public java.lang.String getTimeFormatInput();
```

- *Type:* java.lang.String

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timestampFormatInput"></a>

```java
public java.lang.String getTimestampFormatInput();
```

- *Type:* java.lang.String

---

##### `trimSpaceInput`<sup>Optional</sup> <a name="trimSpaceInput" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.trimSpaceInput"></a>

```java
public java.lang.Object getTrimSpaceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowDuplicate`<sup>Required</sup> <a name="allowDuplicate" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.allowDuplicate"></a>

```java
public java.lang.Object getAllowDuplicate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `binaryAsText`<sup>Required</sup> <a name="binaryAsText" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryAsText"></a>

```java
public java.lang.Object getBinaryAsText();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `binaryFormat`<sup>Required</sup> <a name="binaryFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryFormat"></a>

```java
public java.lang.String getBinaryFormat();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.dateFormat"></a>

```java
public java.lang.String getDateFormat();
```

- *Type:* java.lang.String

---

##### `disableAutoConvert`<sup>Required</sup> <a name="disableAutoConvert" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableAutoConvert"></a>

```java
public java.lang.Object getDisableAutoConvert();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableSnowflakeData`<sup>Required</sup> <a name="disableSnowflakeData" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableSnowflakeData"></a>

```java
public java.lang.Object getDisableSnowflakeData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emptyFieldAsNull`<sup>Required</sup> <a name="emptyFieldAsNull" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.emptyFieldAsNull"></a>

```java
public java.lang.Object getEmptyFieldAsNull();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableOctal`<sup>Required</sup> <a name="enableOctal" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.enableOctal"></a>

```java
public java.lang.Object getEnableOctal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `errorOnColumnCountMismatch`<sup>Required</sup> <a name="errorOnColumnCountMismatch" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.errorOnColumnCountMismatch"></a>

```java
public java.lang.Object getErrorOnColumnCountMismatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.escape"></a>

```java
public java.lang.String getEscape();
```

- *Type:* java.lang.String

---

##### `escapeUnenclosedField`<sup>Required</sup> <a name="escapeUnenclosedField" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeUnenclosedField"></a>

```java
public java.lang.String getEscapeUnenclosedField();
```

- *Type:* java.lang.String

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

---

##### `fieldOptionallyEnclosedBy`<sup>Required</sup> <a name="fieldOptionallyEnclosedBy" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldOptionallyEnclosedBy"></a>

```java
public java.lang.String getFieldOptionallyEnclosedBy();
```

- *Type:* java.lang.String

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fileExtension"></a>

```java
public java.lang.String getFileExtension();
```

- *Type:* java.lang.String

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.formatType"></a>

```java
public java.lang.String getFormatType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="ignoreUtf8Errors" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.ignoreUtf8Errors"></a>

```java
public java.lang.Object getIgnoreUtf8Errors();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.nullIf"></a>

```java
public java.util.List<java.lang.String> getNullIf();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preserveSpace`<sup>Required</sup> <a name="preserveSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.preserveSpace"></a>

```java
public java.lang.Object getPreserveSpace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recordDelimiter`<sup>Required</sup> <a name="recordDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.recordDelimiter"></a>

```java
public java.lang.String getRecordDelimiter();
```

- *Type:* java.lang.String

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.replaceInvalidCharacters"></a>

```java
public java.lang.Object getReplaceInvalidCharacters();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `skipBlankLines`<sup>Required</sup> <a name="skipBlankLines" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipBlankLines"></a>

```java
public java.lang.Object getSkipBlankLines();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipByteOrderMark"></a>

```java
public java.lang.Object getSkipByteOrderMark();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipHeader`<sup>Required</sup> <a name="skipHeader" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipHeader"></a>

```java
public java.lang.Number getSkipHeader();
```

- *Type:* java.lang.Number

---

##### `stripNullValues`<sup>Required</sup> <a name="stripNullValues" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripNullValues"></a>

```java
public java.lang.Object getStripNullValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stripOuterArray`<sup>Required</sup> <a name="stripOuterArray" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterArray"></a>

```java
public java.lang.Object getStripOuterArray();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stripOuterElement`<sup>Required</sup> <a name="stripOuterElement" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterElement"></a>

```java
public java.lang.Object getStripOuterElement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeFormat"></a>

```java
public java.lang.String getTimeFormat();
```

- *Type:* java.lang.String

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timestampFormat"></a>

```java
public java.lang.String getTimestampFormat();
```

- *Type:* java.lang.String

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.trimSpace"></a>

```java
public java.lang.Object getTrimSpace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FileFormatConfig <a name="FileFormatConfig" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.file_format.FileFormatConfig;

FileFormatConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .database(java.lang.String)
    .formatType(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .allowDuplicate(java.lang.Boolean)
//  .allowDuplicate(IResolvable)
//  .binaryAsText(java.lang.Boolean)
//  .binaryAsText(IResolvable)
//  .binaryFormat(java.lang.String)
//  .comment(java.lang.String)
//  .compression(java.lang.String)
//  .dateFormat(java.lang.String)
//  .disableAutoConvert(java.lang.Boolean)
//  .disableAutoConvert(IResolvable)
//  .disableSnowflakeData(java.lang.Boolean)
//  .disableSnowflakeData(IResolvable)
//  .emptyFieldAsNull(java.lang.Boolean)
//  .emptyFieldAsNull(IResolvable)
//  .enableOctal(java.lang.Boolean)
//  .enableOctal(IResolvable)
//  .encoding(java.lang.String)
//  .errorOnColumnCountMismatch(java.lang.Boolean)
//  .errorOnColumnCountMismatch(IResolvable)
//  .escape(java.lang.String)
//  .escapeUnenclosedField(java.lang.String)
//  .fieldDelimiter(java.lang.String)
//  .fieldOptionallyEnclosedBy(java.lang.String)
//  .fileExtension(java.lang.String)
//  .id(java.lang.String)
//  .ignoreUtf8Errors(java.lang.Boolean)
//  .ignoreUtf8Errors(IResolvable)
//  .nullIf(java.util.List<java.lang.String>)
//  .preserveSpace(java.lang.Boolean)
//  .preserveSpace(IResolvable)
//  .recordDelimiter(java.lang.String)
//  .replaceInvalidCharacters(java.lang.Boolean)
//  .replaceInvalidCharacters(IResolvable)
//  .skipBlankLines(java.lang.Boolean)
//  .skipBlankLines(IResolvable)
//  .skipByteOrderMark(java.lang.Boolean)
//  .skipByteOrderMark(IResolvable)
//  .skipHeader(java.lang.Number)
//  .stripNullValues(java.lang.Boolean)
//  .stripNullValues(IResolvable)
//  .stripOuterArray(java.lang.Boolean)
//  .stripOuterArray(IResolvable)
//  .stripOuterElement(java.lang.Boolean)
//  .stripOuterElement(IResolvable)
//  .timeFormat(java.lang.String)
//  .timestampFormat(java.lang.String)
//  .trimSpace(java.lang.Boolean)
//  .trimSpace(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.formatType">formatType</a></code> | <code>java.lang.String</code> | Specifies the format of the input files (for data loading) or output files (for data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.allowDuplicate">allowDuplicate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.binaryAsText">binaryAsText</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.binaryFormat">binaryFormat</a></code> | <code>java.lang.String</code> | Defines the encoding format for binary input or output. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.compression">compression</a></code> | <code>java.lang.String</code> | Specifies the current compression algorithm for the data file. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.dateFormat">dateFormat</a></code> | <code>java.lang.String</code> | Defines the format of date values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.disableAutoConvert">disableAutoConvert</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.disableSnowflakeData">disableSnowflakeData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.emptyFieldAsNull">emptyFieldAsNull</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive delimiters. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.enableOctal">enableOctal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.encoding">encoding</a></code> | <code>java.lang.String</code> | String (constant) that specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.errorOnColumnCountMismatch">errorOnColumnCountMismatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.escape">escape</a></code> | <code>java.lang.String</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.escapeUnenclosedField">escapeUnenclosedField</a></code> | <code>java.lang.String</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or unloaded file (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fieldOptionallyEnclosedBy">fieldOptionallyEnclosedBy</a></code> | <code>java.lang.String</code> | Character used to enclose strings. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fileExtension">fileExtension</a></code> | <code>java.lang.String</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#id FileFormat#id}. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.nullIf">nullIf</a></code> | <code>java.util.List<java.lang.String></code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.preserveSpace">preserveSpace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.recordDelimiter">recordDelimiter</a></code> | <code>java.lang.String</code> | Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or unloaded file (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipBlankLines">skipBlankLines</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipHeader">skipHeader</a></code> | <code>java.lang.Number</code> | Number of lines at the start of the file to skip. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripNullValues">stripNullValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripOuterArray">stripOuterArray</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripOuterElement">stripOuterElement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timeFormat">timeFormat</a></code> | <code>java.lang.String</code> | Defines the format of time values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | Defines the format of timestamp values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.trimSpace">trimSpace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean that specifies whether to remove white space from fields. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#database FileFormat#database}

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.formatType"></a>

```java
public java.lang.String getFormatType();
```

- *Type:* java.lang.String

Specifies the format of the input files (for data loading) or output files (for data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#format_type FileFormat#format_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#name FileFormat#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#schema FileFormat#schema}

---

##### `allowDuplicate`<sup>Optional</sup> <a name="allowDuplicate" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.allowDuplicate"></a>

```java
public java.lang.Object getAllowDuplicate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies to allow duplicate object field names (only the last one will be preserved).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#allow_duplicate FileFormat#allow_duplicate}

---

##### `binaryAsText`<sup>Optional</sup> <a name="binaryAsText" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.binaryAsText"></a>

```java
public java.lang.Object getBinaryAsText();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#binary_as_text FileFormat#binary_as_text}

---

##### `binaryFormat`<sup>Optional</sup> <a name="binaryFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.binaryFormat"></a>

```java
public java.lang.String getBinaryFormat();
```

- *Type:* java.lang.String

Defines the encoding format for binary input or output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#binary_format FileFormat#binary_format}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#comment FileFormat#comment}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

Specifies the current compression algorithm for the data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#compression FileFormat#compression}

---

##### `dateFormat`<sup>Optional</sup> <a name="dateFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.dateFormat"></a>

```java
public java.lang.String getDateFormat();
```

- *Type:* java.lang.String

Defines the format of date values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#date_format FileFormat#date_format}

---

##### `disableAutoConvert`<sup>Optional</sup> <a name="disableAutoConvert" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.disableAutoConvert"></a>

```java
public java.lang.Object getDisableAutoConvert();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#disable_auto_convert FileFormat#disable_auto_convert}

---

##### `disableSnowflakeData`<sup>Optional</sup> <a name="disableSnowflakeData" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.disableSnowflakeData"></a>

```java
public java.lang.Object getDisableSnowflakeData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#disable_snowflake_data FileFormat#disable_snowflake_data}

---

##### `emptyFieldAsNull`<sup>Optional</sup> <a name="emptyFieldAsNull" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.emptyFieldAsNull"></a>

```java
public java.lang.Object getEmptyFieldAsNull();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#empty_field_as_null FileFormat#empty_field_as_null}

---

##### `enableOctal`<sup>Optional</sup> <a name="enableOctal" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.enableOctal"></a>

```java
public java.lang.Object getEnableOctal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that enables parsing of octal numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#enable_octal FileFormat#enable_octal}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

String (constant) that specifies the character set of the source data when loading data into a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#encoding FileFormat#encoding}

---

##### `errorOnColumnCountMismatch`<sup>Optional</sup> <a name="errorOnColumnCountMismatch" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.errorOnColumnCountMismatch"></a>

```java
public java.lang.Object getErrorOnColumnCountMismatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input file does not match the number of columns in the corresponding table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#error_on_column_count_mismatch FileFormat#error_on_column_count_mismatch}

---

##### `escape`<sup>Optional</sup> <a name="escape" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.escape"></a>

```java
public java.lang.String getEscape();
```

- *Type:* java.lang.String

Single character string used as the escape character for field values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#escape FileFormat#escape}

---

##### `escapeUnenclosedField`<sup>Optional</sup> <a name="escapeUnenclosedField" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.escapeUnenclosedField"></a>

```java
public java.lang.String getEscapeUnenclosedField();
```

- *Type:* java.lang.String

Single character string used as the escape character for unenclosed field values only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#escape_unenclosed_field FileFormat#escape_unenclosed_field}

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or unloaded file (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#field_delimiter FileFormat#field_delimiter}

---

##### `fieldOptionallyEnclosedBy`<sup>Optional</sup> <a name="fieldOptionallyEnclosedBy" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fieldOptionallyEnclosedBy"></a>

```java
public java.lang.String getFieldOptionallyEnclosedBy();
```

- *Type:* java.lang.String

Character used to enclose strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#field_optionally_enclosed_by FileFormat#field_optionally_enclosed_by}

---

##### `fileExtension`<sup>Optional</sup> <a name="fileExtension" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fileExtension"></a>

```java
public java.lang.String getFileExtension();
```

- *Type:* java.lang.String

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#file_extension FileFormat#file_extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#id FileFormat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreUtf8Errors`<sup>Optional</sup> <a name="ignoreUtf8Errors" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.ignoreUtf8Errors"></a>

```java
public java.lang.Object getIgnoreUtf8Errors();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#ignore_utf8_errors FileFormat#ignore_utf8_errors}

---

##### `nullIf`<sup>Optional</sup> <a name="nullIf" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.nullIf"></a>

```java
public java.util.List<java.lang.String> getNullIf();
```

- *Type:* java.util.List<java.lang.String>

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#null_if FileFormat#null_if}

---

##### `preserveSpace`<sup>Optional</sup> <a name="preserveSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.preserveSpace"></a>

```java
public java.lang.Object getPreserveSpace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#preserve_space FileFormat#preserve_space}

---

##### `recordDelimiter`<sup>Optional</sup> <a name="recordDelimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.recordDelimiter"></a>

```java
public java.lang.String getRecordDelimiter();
```

- *Type:* java.lang.String

Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or unloaded file (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#record_delimiter FileFormat#record_delimiter}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.replaceInvalidCharacters"></a>

```java
public java.lang.Object getReplaceInvalidCharacters();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#replace_invalid_characters FileFormat#replace_invalid_characters}

---

##### `skipBlankLines`<sup>Optional</sup> <a name="skipBlankLines" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipBlankLines"></a>

```java
public java.lang.Object getSkipBlankLines();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies to skip any blank lines encountered in the data files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#skip_blank_lines FileFormat#skip_blank_lines}

---

##### `skipByteOrderMark`<sup>Optional</sup> <a name="skipByteOrderMark" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipByteOrderMark"></a>

```java
public java.lang.Object getSkipByteOrderMark();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#skip_byte_order_mark FileFormat#skip_byte_order_mark}

---

##### `skipHeader`<sup>Optional</sup> <a name="skipHeader" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipHeader"></a>

```java
public java.lang.Number getSkipHeader();
```

- *Type:* java.lang.Number

Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#skip_header FileFormat#skip_header}

---

##### `stripNullValues`<sup>Optional</sup> <a name="stripNullValues" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripNullValues"></a>

```java
public java.lang.Object getStripNullValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#strip_null_values FileFormat#strip_null_values}

---

##### `stripOuterArray`<sup>Optional</sup> <a name="stripOuterArray" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripOuterArray"></a>

```java
public java.lang.Object getStripOuterArray();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that instructs the JSON parser to remove outer brackets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#strip_outer_array FileFormat#strip_outer_array}

---

##### `stripOuterElement`<sup>Optional</sup> <a name="stripOuterElement" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripOuterElement"></a>

```java
public java.lang.Object getStripOuterElement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#strip_outer_element FileFormat#strip_outer_element}

---

##### `timeFormat`<sup>Optional</sup> <a name="timeFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timeFormat"></a>

```java
public java.lang.String getTimeFormat();
```

- *Type:* java.lang.String

Defines the format of time values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#time_format FileFormat#time_format}

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timestampFormat"></a>

```java
public java.lang.String getTimestampFormat();
```

- *Type:* java.lang.String

Defines the format of timestamp values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#timestamp_format FileFormat#timestamp_format}

---

##### `trimSpace`<sup>Optional</sup> <a name="trimSpace" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.trimSpace"></a>

```java
public java.lang.Object getTrimSpace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean that specifies whether to remove white space from fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/file_format#trim_space FileFormat#trim_space}

---



