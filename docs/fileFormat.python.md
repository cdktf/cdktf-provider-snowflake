# `fileFormat` Submodule <a name="`fileFormat` Submodule" id="@cdktf/provider-snowflake.fileFormat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileFormat <a name="FileFormat" id="@cdktf/provider-snowflake.fileFormat.FileFormat"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format snowflake_file_format}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import file_format

fileFormat.FileFormat(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  format_type: str,
  name: str,
  schema: str,
  allow_duplicate: bool | IResolvable = None,
  binary_as_text: bool | IResolvable = None,
  binary_format: str = None,
  comment: str = None,
  compression: str = None,
  date_format: str = None,
  disable_auto_convert: bool | IResolvable = None,
  disable_snowflake_data: bool | IResolvable = None,
  empty_field_as_null: bool | IResolvable = None,
  enable_octal: bool | IResolvable = None,
  encoding: str = None,
  error_on_column_count_mismatch: bool | IResolvable = None,
  escape: str = None,
  escape_unenclosed_field: str = None,
  field_delimiter: str = None,
  field_optionally_enclosed_by: str = None,
  file_extension: str = None,
  id: str = None,
  ignore_utf8_errors: bool | IResolvable = None,
  null_if: typing.List[str] = None,
  parse_header: bool | IResolvable = None,
  preserve_space: bool | IResolvable = None,
  record_delimiter: str = None,
  replace_invalid_characters: bool | IResolvable = None,
  skip_blank_lines: bool | IResolvable = None,
  skip_byte_order_mark: bool | IResolvable = None,
  skip_header: typing.Union[int, float] = None,
  strip_null_values: bool | IResolvable = None,
  strip_outer_array: bool | IResolvable = None,
  strip_outer_element: bool | IResolvable = None,
  time_format: str = None,
  timeouts: FileFormatTimeouts = None,
  timestamp_format: str = None,
  trim_space: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.formatType">format_type</a></code> | <code>str</code> | Specifies the format of the input files (for data loading) or output files (for data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.allowDuplicate">allow_duplicate</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.binaryAsText">binary_as_text</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.binaryFormat">binary_format</a></code> | <code>str</code> | Defines the encoding format for binary input or output. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.compression">compression</a></code> | <code>str</code> | Specifies the current compression algorithm for the data file. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.dateFormat">date_format</a></code> | <code>str</code> | Defines the format of date values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.disableAutoConvert">disable_auto_convert</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.disableSnowflakeData">disable_snowflake_data</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.emptyFieldAsNull">empty_field_as_null</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive delimiters. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.enableOctal">enable_octal</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.encoding">encoding</a></code> | <code>str</code> | String (constant) that specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.escape">escape</a></code> | <code>str</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or unloaded file (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | Character used to enclose strings. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.fileExtension">file_extension</a></code> | <code>str</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#id FileFormat#id}. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.parseHeader">parse_header</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether to use the first row headers in the data files to determine column names. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.preserveSpace">preserve_space</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.recordDelimiter">record_delimiter</a></code> | <code>str</code> | Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or unloaded file (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.skipBlankLines">skip_blank_lines</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | Number of lines at the start of the file to skip. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.stripNullValues">strip_null_values</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.stripOuterArray">strip_outer_array</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.stripOuterElement">strip_outer_element</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.timeFormat">time_format</a></code> | <code>str</code> | Defines the format of time values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts">FileFormatTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.timestampFormat">timestamp_format</a></code> | <code>str</code> | Defines the format of timestamp values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.trimSpace">trim_space</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether to remove white space from fields. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#database FileFormat#database}

---

##### `format_type`<sup>Required</sup> <a name="format_type" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.formatType"></a>

- *Type:* str

Specifies the format of the input files (for data loading) or output files (for data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#format_type FileFormat#format_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#name FileFormat#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#schema FileFormat#schema}

---

##### `allow_duplicate`<sup>Optional</sup> <a name="allow_duplicate" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.allowDuplicate"></a>

- *Type:* bool | cdktf.IResolvable

Boolean that specifies to allow duplicate object field names (only the last one will be preserved).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#allow_duplicate FileFormat#allow_duplicate}

---

##### `binary_as_text`<sup>Optional</sup> <a name="binary_as_text" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.binaryAsText"></a>

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#binary_as_text FileFormat#binary_as_text}

---

##### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.binaryFormat"></a>

- *Type:* str

Defines the encoding format for binary input or output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#binary_format FileFormat#binary_format}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#comment FileFormat#comment}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.compression"></a>

- *Type:* str

Specifies the current compression algorithm for the data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#compression FileFormat#compression}

---

##### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.dateFormat"></a>

- *Type:* str

Defines the format of date values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#date_format FileFormat#date_format}

---

##### `disable_auto_convert`<sup>Optional</sup> <a name="disable_auto_convert" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.disableAutoConvert"></a>

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#disable_auto_convert FileFormat#disable_auto_convert}

---

##### `disable_snowflake_data`<sup>Optional</sup> <a name="disable_snowflake_data" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.disableSnowflakeData"></a>

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#disable_snowflake_data FileFormat#disable_snowflake_data}

---

##### `empty_field_as_null`<sup>Optional</sup> <a name="empty_field_as_null" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.emptyFieldAsNull"></a>

- *Type:* bool | cdktf.IResolvable

Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#empty_field_as_null FileFormat#empty_field_as_null}

---

##### `enable_octal`<sup>Optional</sup> <a name="enable_octal" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.enableOctal"></a>

- *Type:* bool | cdktf.IResolvable

Boolean that enables parsing of octal numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#enable_octal FileFormat#enable_octal}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.encoding"></a>

- *Type:* str

String (constant) that specifies the character set of the source data when loading data into a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#encoding FileFormat#encoding}

---

##### `error_on_column_count_mismatch`<sup>Optional</sup> <a name="error_on_column_count_mismatch" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.errorOnColumnCountMismatch"></a>

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input file does not match the number of columns in the corresponding table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#error_on_column_count_mismatch FileFormat#error_on_column_count_mismatch}

---

##### `escape`<sup>Optional</sup> <a name="escape" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.escape"></a>

- *Type:* str

Single character string used as the escape character for field values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#escape FileFormat#escape}

---

##### `escape_unenclosed_field`<sup>Optional</sup> <a name="escape_unenclosed_field" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.escapeUnenclosedField"></a>

- *Type:* str

Single character string used as the escape character for unenclosed field values only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#escape_unenclosed_field FileFormat#escape_unenclosed_field}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.fieldDelimiter"></a>

- *Type:* str

Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or unloaded file (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#field_delimiter FileFormat#field_delimiter}

---

##### `field_optionally_enclosed_by`<sup>Optional</sup> <a name="field_optionally_enclosed_by" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.fieldOptionallyEnclosedBy"></a>

- *Type:* str

Character used to enclose strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#field_optionally_enclosed_by FileFormat#field_optionally_enclosed_by}

---

##### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.fileExtension"></a>

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#file_extension FileFormat#file_extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#id FileFormat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_utf8_errors`<sup>Optional</sup> <a name="ignore_utf8_errors" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.ignoreUtf8Errors"></a>

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#ignore_utf8_errors FileFormat#ignore_utf8_errors}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.nullIf"></a>

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#null_if FileFormat#null_if}

---

##### `parse_header`<sup>Optional</sup> <a name="parse_header" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.parseHeader"></a>

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether to use the first row headers in the data files to determine column names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#parse_header FileFormat#parse_header}

---

##### `preserve_space`<sup>Optional</sup> <a name="preserve_space" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.preserveSpace"></a>

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#preserve_space FileFormat#preserve_space}

---

##### `record_delimiter`<sup>Optional</sup> <a name="record_delimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.recordDelimiter"></a>

- *Type:* str

Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or unloaded file (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#record_delimiter FileFormat#record_delimiter}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#replace_invalid_characters FileFormat#replace_invalid_characters}

---

##### `skip_blank_lines`<sup>Optional</sup> <a name="skip_blank_lines" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.skipBlankLines"></a>

- *Type:* bool | cdktf.IResolvable

Boolean that specifies to skip any blank lines encountered in the data files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#skip_blank_lines FileFormat#skip_blank_lines}

---

##### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.skipByteOrderMark"></a>

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#skip_byte_order_mark FileFormat#skip_byte_order_mark}

---

##### `skip_header`<sup>Optional</sup> <a name="skip_header" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.skipHeader"></a>

- *Type:* typing.Union[int, float]

Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#skip_header FileFormat#skip_header}

---

##### `strip_null_values`<sup>Optional</sup> <a name="strip_null_values" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.stripNullValues"></a>

- *Type:* bool | cdktf.IResolvable

Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#strip_null_values FileFormat#strip_null_values}

---

##### `strip_outer_array`<sup>Optional</sup> <a name="strip_outer_array" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.stripOuterArray"></a>

- *Type:* bool | cdktf.IResolvable

Boolean that instructs the JSON parser to remove outer brackets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#strip_outer_array FileFormat#strip_outer_array}

---

##### `strip_outer_element`<sup>Optional</sup> <a name="strip_outer_element" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.stripOuterElement"></a>

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#strip_outer_element FileFormat#strip_outer_element}

---

##### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.timeFormat"></a>

- *Type:* str

Defines the format of time values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#time_format FileFormat#time_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts">FileFormatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#timeouts FileFormat#timeouts}

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.timestampFormat"></a>

- *Type:* str

Defines the format of timestamp values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#timestamp_format FileFormat#timestamp_format}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktf/provider-snowflake.fileFormat.FileFormat.Initializer.parameter.trimSpace"></a>

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether to remove white space from fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#trim_space FileFormat#trim_space}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetAllowDuplicate">reset_allow_duplicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetBinaryAsText">reset_binary_as_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetBinaryFormat">reset_binary_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetDateFormat">reset_date_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetDisableAutoConvert">reset_disable_auto_convert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetDisableSnowflakeData">reset_disable_snowflake_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetEmptyFieldAsNull">reset_empty_field_as_null</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetEnableOctal">reset_enable_octal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetErrorOnColumnCountMismatch">reset_error_on_column_count_mismatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetEscape">reset_escape</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetEscapeUnenclosedField">reset_escape_unenclosed_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetFieldOptionallyEnclosedBy">reset_field_optionally_enclosed_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetFileExtension">reset_file_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetIgnoreUtf8Errors">reset_ignore_utf8_errors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetNullIf">reset_null_if</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetParseHeader">reset_parse_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetPreserveSpace">reset_preserve_space</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetRecordDelimiter">reset_record_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipBlankLines">reset_skip_blank_lines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipByteOrderMark">reset_skip_byte_order_mark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipHeader">reset_skip_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripNullValues">reset_strip_null_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripOuterArray">reset_strip_outer_array</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripOuterElement">reset_strip_outer_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetTimeFormat">reset_time_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetTimestampFormat">reset_timestamp_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.resetTrimSpace">reset_trim_space</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.fileFormat.FileFormat.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.fileFormat.FileFormat.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.fileFormat.FileFormat.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.fileFormat.FileFormat.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.fileFormat.FileFormat.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.fileFormat.FileFormat.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.fileFormat.FileFormat.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.fileFormat.FileFormat.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.fileFormat.FileFormat.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.fileFormat.FileFormat.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.fileFormat.FileFormat.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.fileFormat.FileFormat.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.fileFormat.FileFormat.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.fileFormat.FileFormat.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.fileFormat.FileFormat.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.fileFormat.FileFormat.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.fileFormat.FileFormat.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#create FileFormat#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.fileFormat.FileFormat.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#delete FileFormat#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.fileFormat.FileFormat.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#read FileFormat#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.fileFormat.FileFormat.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#update FileFormat#update}.

---

##### `reset_allow_duplicate` <a name="reset_allow_duplicate" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetAllowDuplicate"></a>

```python
def reset_allow_duplicate() -> None
```

##### `reset_binary_as_text` <a name="reset_binary_as_text" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetBinaryAsText"></a>

```python
def reset_binary_as_text() -> None
```

##### `reset_binary_format` <a name="reset_binary_format" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetBinaryFormat"></a>

```python
def reset_binary_format() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_date_format` <a name="reset_date_format" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetDateFormat"></a>

```python
def reset_date_format() -> None
```

##### `reset_disable_auto_convert` <a name="reset_disable_auto_convert" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetDisableAutoConvert"></a>

```python
def reset_disable_auto_convert() -> None
```

##### `reset_disable_snowflake_data` <a name="reset_disable_snowflake_data" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetDisableSnowflakeData"></a>

```python
def reset_disable_snowflake_data() -> None
```

##### `reset_empty_field_as_null` <a name="reset_empty_field_as_null" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEmptyFieldAsNull"></a>

```python
def reset_empty_field_as_null() -> None
```

##### `reset_enable_octal` <a name="reset_enable_octal" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEnableOctal"></a>

```python
def reset_enable_octal() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_error_on_column_count_mismatch` <a name="reset_error_on_column_count_mismatch" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetErrorOnColumnCountMismatch"></a>

```python
def reset_error_on_column_count_mismatch() -> None
```

##### `reset_escape` <a name="reset_escape" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEscape"></a>

```python
def reset_escape() -> None
```

##### `reset_escape_unenclosed_field` <a name="reset_escape_unenclosed_field" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetEscapeUnenclosedField"></a>

```python
def reset_escape_unenclosed_field() -> None
```

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```

##### `reset_field_optionally_enclosed_by` <a name="reset_field_optionally_enclosed_by" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetFieldOptionallyEnclosedBy"></a>

```python
def reset_field_optionally_enclosed_by() -> None
```

##### `reset_file_extension` <a name="reset_file_extension" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetFileExtension"></a>

```python
def reset_file_extension() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_utf8_errors` <a name="reset_ignore_utf8_errors" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetIgnoreUtf8Errors"></a>

```python
def reset_ignore_utf8_errors() -> None
```

##### `reset_null_if` <a name="reset_null_if" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetNullIf"></a>

```python
def reset_null_if() -> None
```

##### `reset_parse_header` <a name="reset_parse_header" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetParseHeader"></a>

```python
def reset_parse_header() -> None
```

##### `reset_preserve_space` <a name="reset_preserve_space" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetPreserveSpace"></a>

```python
def reset_preserve_space() -> None
```

##### `reset_record_delimiter` <a name="reset_record_delimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetRecordDelimiter"></a>

```python
def reset_record_delimiter() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_skip_blank_lines` <a name="reset_skip_blank_lines" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipBlankLines"></a>

```python
def reset_skip_blank_lines() -> None
```

##### `reset_skip_byte_order_mark` <a name="reset_skip_byte_order_mark" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipByteOrderMark"></a>

```python
def reset_skip_byte_order_mark() -> None
```

##### `reset_skip_header` <a name="reset_skip_header" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetSkipHeader"></a>

```python
def reset_skip_header() -> None
```

##### `reset_strip_null_values` <a name="reset_strip_null_values" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripNullValues"></a>

```python
def reset_strip_null_values() -> None
```

##### `reset_strip_outer_array` <a name="reset_strip_outer_array" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripOuterArray"></a>

```python
def reset_strip_outer_array() -> None
```

##### `reset_strip_outer_element` <a name="reset_strip_outer_element" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetStripOuterElement"></a>

```python
def reset_strip_outer_element() -> None
```

##### `reset_time_format` <a name="reset_time_format" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetTimeFormat"></a>

```python
def reset_time_format() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timestamp_format` <a name="reset_timestamp_format" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetTimestampFormat"></a>

```python
def reset_timestamp_format() -> None
```

##### `reset_trim_space` <a name="reset_trim_space" id="@cdktf/provider-snowflake.fileFormat.FileFormat.resetTrimSpace"></a>

```python
def reset_trim_space() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FileFormat resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import file_format

fileFormat.FileFormat.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import file_format

fileFormat.FileFormat.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import file_format

fileFormat.FileFormat.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.fileFormat.FileFormat.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.fileFormat.FileFormat.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import file_format

fileFormat.FileFormat.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FileFormat resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.fileFormat.FileFormat.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FileFormat to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FileFormat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.fileFormat.FileFormat.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FileFormat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference">FileFormatTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.allowDuplicateInput">allow_duplicate_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryAsTextInput">binary_as_text_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryFormatInput">binary_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.dateFormatInput">date_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableAutoConvertInput">disable_auto_convert_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableSnowflakeDataInput">disable_snowflake_data_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.emptyFieldAsNullInput">empty_field_as_null_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.enableOctalInput">enable_octal_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.errorOnColumnCountMismatchInput">error_on_column_count_mismatch_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeInput">escape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeUnenclosedFieldInput">escape_unenclosed_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldOptionallyEnclosedByInput">field_optionally_enclosed_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fileExtensionInput">file_extension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.formatTypeInput">format_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.ignoreUtf8ErrorsInput">ignore_utf8_errors_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.nullIfInput">null_if_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.parseHeaderInput">parse_header_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.preserveSpaceInput">preserve_space_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.recordDelimiterInput">record_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipBlankLinesInput">skip_blank_lines_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipByteOrderMarkInput">skip_byte_order_mark_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipHeaderInput">skip_header_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripNullValuesInput">strip_null_values_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterArrayInput">strip_outer_array_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterElementInput">strip_outer_element_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeFormatInput">time_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts">FileFormatTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timestampFormatInput">timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.trimSpaceInput">trim_space_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.allowDuplicate">allow_duplicate</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryAsText">binary_as_text</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryFormat">binary_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableAutoConvert">disable_auto_convert</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableSnowflakeData">disable_snowflake_data</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.emptyFieldAsNull">empty_field_as_null</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.enableOctal">enable_octal</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.escape">escape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.fileExtension">file_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.formatType">format_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.parseHeader">parse_header</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.preserveSpace">preserve_space</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipBlankLines">skip_blank_lines</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripNullValues">strip_null_values</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterArray">strip_outer_array</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterElement">strip_outer_element</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.trimSpace">trim_space</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeouts"></a>

```python
timeouts: FileFormatTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference">FileFormatTimeoutsOutputReference</a>

---

##### `allow_duplicate_input`<sup>Optional</sup> <a name="allow_duplicate_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.allowDuplicateInput"></a>

```python
allow_duplicate_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `binary_as_text_input`<sup>Optional</sup> <a name="binary_as_text_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryAsTextInput"></a>

```python
binary_as_text_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `binary_format_input`<sup>Optional</sup> <a name="binary_format_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryFormatInput"></a>

```python
binary_format_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `date_format_input`<sup>Optional</sup> <a name="date_format_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.dateFormatInput"></a>

```python
date_format_input: str
```

- *Type:* str

---

##### `disable_auto_convert_input`<sup>Optional</sup> <a name="disable_auto_convert_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableAutoConvertInput"></a>

```python
disable_auto_convert_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `disable_snowflake_data_input`<sup>Optional</sup> <a name="disable_snowflake_data_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableSnowflakeDataInput"></a>

```python
disable_snowflake_data_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `empty_field_as_null_input`<sup>Optional</sup> <a name="empty_field_as_null_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.emptyFieldAsNullInput"></a>

```python
empty_field_as_null_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_octal_input`<sup>Optional</sup> <a name="enable_octal_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.enableOctalInput"></a>

```python
enable_octal_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `error_on_column_count_mismatch_input`<sup>Optional</sup> <a name="error_on_column_count_mismatch_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.errorOnColumnCountMismatchInput"></a>

```python
error_on_column_count_mismatch_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `escape_input`<sup>Optional</sup> <a name="escape_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeInput"></a>

```python
escape_input: str
```

- *Type:* str

---

##### `escape_unenclosed_field_input`<sup>Optional</sup> <a name="escape_unenclosed_field_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeUnenclosedFieldInput"></a>

```python
escape_unenclosed_field_input: str
```

- *Type:* str

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `field_optionally_enclosed_by_input`<sup>Optional</sup> <a name="field_optionally_enclosed_by_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldOptionallyEnclosedByInput"></a>

```python
field_optionally_enclosed_by_input: str
```

- *Type:* str

---

##### `file_extension_input`<sup>Optional</sup> <a name="file_extension_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fileExtensionInput"></a>

```python
file_extension_input: str
```

- *Type:* str

---

##### `format_type_input`<sup>Optional</sup> <a name="format_type_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.formatTypeInput"></a>

```python
format_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_utf8_errors_input`<sup>Optional</sup> <a name="ignore_utf8_errors_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.ignoreUtf8ErrorsInput"></a>

```python
ignore_utf8_errors_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `null_if_input`<sup>Optional</sup> <a name="null_if_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.nullIfInput"></a>

```python
null_if_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parse_header_input`<sup>Optional</sup> <a name="parse_header_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.parseHeaderInput"></a>

```python
parse_header_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `preserve_space_input`<sup>Optional</sup> <a name="preserve_space_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.preserveSpaceInput"></a>

```python
preserve_space_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `record_delimiter_input`<sup>Optional</sup> <a name="record_delimiter_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.recordDelimiterInput"></a>

```python
record_delimiter_input: str
```

- *Type:* str

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `skip_blank_lines_input`<sup>Optional</sup> <a name="skip_blank_lines_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipBlankLinesInput"></a>

```python
skip_blank_lines_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `skip_byte_order_mark_input`<sup>Optional</sup> <a name="skip_byte_order_mark_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipByteOrderMarkInput"></a>

```python
skip_byte_order_mark_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `skip_header_input`<sup>Optional</sup> <a name="skip_header_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipHeaderInput"></a>

```python
skip_header_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strip_null_values_input`<sup>Optional</sup> <a name="strip_null_values_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripNullValuesInput"></a>

```python
strip_null_values_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `strip_outer_array_input`<sup>Optional</sup> <a name="strip_outer_array_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterArrayInput"></a>

```python
strip_outer_array_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `strip_outer_element_input`<sup>Optional</sup> <a name="strip_outer_element_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterElementInput"></a>

```python
strip_outer_element_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `time_format_input`<sup>Optional</sup> <a name="time_format_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeFormatInput"></a>

```python
time_format_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | FileFormatTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts">FileFormatTimeouts</a>

---

##### `timestamp_format_input`<sup>Optional</sup> <a name="timestamp_format_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timestampFormatInput"></a>

```python
timestamp_format_input: str
```

- *Type:* str

---

##### `trim_space_input`<sup>Optional</sup> <a name="trim_space_input" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.trimSpaceInput"></a>

```python
trim_space_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `allow_duplicate`<sup>Required</sup> <a name="allow_duplicate" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.allowDuplicate"></a>

```python
allow_duplicate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `binary_as_text`<sup>Required</sup> <a name="binary_as_text" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryAsText"></a>

```python
binary_as_text: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `binary_format`<sup>Required</sup> <a name="binary_format" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `disable_auto_convert`<sup>Required</sup> <a name="disable_auto_convert" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableAutoConvert"></a>

```python
disable_auto_convert: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `disable_snowflake_data`<sup>Required</sup> <a name="disable_snowflake_data" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.disableSnowflakeData"></a>

```python
disable_snowflake_data: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `empty_field_as_null`<sup>Required</sup> <a name="empty_field_as_null" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.emptyFieldAsNull"></a>

```python
empty_field_as_null: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_octal`<sup>Required</sup> <a name="enable_octal" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.enableOctal"></a>

```python
enable_octal: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `error_on_column_count_mismatch`<sup>Required</sup> <a name="error_on_column_count_mismatch" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.errorOnColumnCountMismatch"></a>

```python
error_on_column_count_mismatch: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.escape"></a>

```python
escape: str
```

- *Type:* str

---

##### `escape_unenclosed_field`<sup>Required</sup> <a name="escape_unenclosed_field" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.escapeUnenclosedField"></a>

```python
escape_unenclosed_field: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `field_optionally_enclosed_by`<sup>Required</sup> <a name="field_optionally_enclosed_by" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fieldOptionallyEnclosedBy"></a>

```python
field_optionally_enclosed_by: str
```

- *Type:* str

---

##### `file_extension`<sup>Required</sup> <a name="file_extension" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

---

##### `format_type`<sup>Required</sup> <a name="format_type" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.formatType"></a>

```python
format_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_utf8_errors`<sup>Required</sup> <a name="ignore_utf8_errors" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `null_if`<sup>Required</sup> <a name="null_if" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parse_header`<sup>Required</sup> <a name="parse_header" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.parseHeader"></a>

```python
parse_header: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `preserve_space`<sup>Required</sup> <a name="preserve_space" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.preserveSpace"></a>

```python
preserve_space: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `record_delimiter`<sup>Required</sup> <a name="record_delimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `skip_blank_lines`<sup>Required</sup> <a name="skip_blank_lines" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipBlankLines"></a>

```python
skip_blank_lines: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `skip_byte_order_mark`<sup>Required</sup> <a name="skip_byte_order_mark" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `skip_header`<sup>Required</sup> <a name="skip_header" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.skipHeader"></a>

```python
skip_header: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strip_null_values`<sup>Required</sup> <a name="strip_null_values" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripNullValues"></a>

```python
strip_null_values: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `strip_outer_array`<sup>Required</sup> <a name="strip_outer_array" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterArray"></a>

```python
strip_outer_array: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `strip_outer_element`<sup>Required</sup> <a name="strip_outer_element" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.stripOuterElement"></a>

```python
strip_outer_element: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `trim_space`<sup>Required</sup> <a name="trim_space" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.trimSpace"></a>

```python
trim_space: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormat.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.fileFormat.FileFormat.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FileFormatConfig <a name="FileFormatConfig" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import file_format

fileFormat.FileFormatConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  format_type: str,
  name: str,
  schema: str,
  allow_duplicate: bool | IResolvable = None,
  binary_as_text: bool | IResolvable = None,
  binary_format: str = None,
  comment: str = None,
  compression: str = None,
  date_format: str = None,
  disable_auto_convert: bool | IResolvable = None,
  disable_snowflake_data: bool | IResolvable = None,
  empty_field_as_null: bool | IResolvable = None,
  enable_octal: bool | IResolvable = None,
  encoding: str = None,
  error_on_column_count_mismatch: bool | IResolvable = None,
  escape: str = None,
  escape_unenclosed_field: str = None,
  field_delimiter: str = None,
  field_optionally_enclosed_by: str = None,
  file_extension: str = None,
  id: str = None,
  ignore_utf8_errors: bool | IResolvable = None,
  null_if: typing.List[str] = None,
  parse_header: bool | IResolvable = None,
  preserve_space: bool | IResolvable = None,
  record_delimiter: str = None,
  replace_invalid_characters: bool | IResolvable = None,
  skip_blank_lines: bool | IResolvable = None,
  skip_byte_order_mark: bool | IResolvable = None,
  skip_header: typing.Union[int, float] = None,
  strip_null_values: bool | IResolvable = None,
  strip_outer_array: bool | IResolvable = None,
  strip_outer_element: bool | IResolvable = None,
  time_format: str = None,
  timeouts: FileFormatTimeouts = None,
  timestamp_format: str = None,
  trim_space: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.formatType">format_type</a></code> | <code>str</code> | Specifies the format of the input files (for data loading) or output files (for data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.allowDuplicate">allow_duplicate</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.binaryAsText">binary_as_text</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.binaryFormat">binary_format</a></code> | <code>str</code> | Defines the encoding format for binary input or output. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.compression">compression</a></code> | <code>str</code> | Specifies the current compression algorithm for the data file. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.dateFormat">date_format</a></code> | <code>str</code> | Defines the format of date values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.disableAutoConvert">disable_auto_convert</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.disableSnowflakeData">disable_snowflake_data</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.emptyFieldAsNull">empty_field_as_null</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive delimiters. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.enableOctal">enable_octal</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.encoding">encoding</a></code> | <code>str</code> | String (constant) that specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.errorOnColumnCountMismatch">error_on_column_count_mismatch</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.escape">escape</a></code> | <code>str</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.escapeUnenclosedField">escape_unenclosed_field</a></code> | <code>str</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or unloaded file (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fieldOptionallyEnclosedBy">field_optionally_enclosed_by</a></code> | <code>str</code> | Character used to enclose strings. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fileExtension">file_extension</a></code> | <code>str</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#id FileFormat#id}. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.ignoreUtf8Errors">ignore_utf8_errors</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.nullIf">null_if</a></code> | <code>typing.List[str]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.parseHeader">parse_header</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether to use the first row headers in the data files to determine column names. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.preserveSpace">preserve_space</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.recordDelimiter">record_delimiter</a></code> | <code>str</code> | Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or unloaded file (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipBlankLines">skip_blank_lines</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipByteOrderMark">skip_byte_order_mark</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipHeader">skip_header</a></code> | <code>typing.Union[int, float]</code> | Number of lines at the start of the file to skip. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripNullValues">strip_null_values</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripOuterArray">strip_outer_array</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripOuterElement">strip_outer_element</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timeFormat">time_format</a></code> | <code>str</code> | Defines the format of time values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts">FileFormatTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | Defines the format of timestamp values in the data files (data loading) or table (data unloading). |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.trimSpace">trim_space</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean that specifies whether to remove white space from fields. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#database FileFormat#database}

---

##### `format_type`<sup>Required</sup> <a name="format_type" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.formatType"></a>

```python
format_type: str
```

- *Type:* str

Specifies the format of the input files (for data loading) or output files (for data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#format_type FileFormat#format_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#name FileFormat#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#schema FileFormat#schema}

---

##### `allow_duplicate`<sup>Optional</sup> <a name="allow_duplicate" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.allowDuplicate"></a>

```python
allow_duplicate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean that specifies to allow duplicate object field names (only the last one will be preserved).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#allow_duplicate FileFormat#allow_duplicate}

---

##### `binary_as_text`<sup>Optional</sup> <a name="binary_as_text" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.binaryAsText"></a>

```python
binary_as_text: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#binary_as_text FileFormat#binary_as_text}

---

##### `binary_format`<sup>Optional</sup> <a name="binary_format" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.binaryFormat"></a>

```python
binary_format: str
```

- *Type:* str

Defines the encoding format for binary input or output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#binary_format FileFormat#binary_format}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#comment FileFormat#comment}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.compression"></a>

```python
compression: str
```

- *Type:* str

Specifies the current compression algorithm for the data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#compression FileFormat#compression}

---

##### `date_format`<sup>Optional</sup> <a name="date_format" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

Defines the format of date values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#date_format FileFormat#date_format}

---

##### `disable_auto_convert`<sup>Optional</sup> <a name="disable_auto_convert" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.disableAutoConvert"></a>

```python
disable_auto_convert: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#disable_auto_convert FileFormat#disable_auto_convert}

---

##### `disable_snowflake_data`<sup>Optional</sup> <a name="disable_snowflake_data" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.disableSnowflakeData"></a>

```python
disable_snowflake_data: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#disable_snowflake_data FileFormat#disable_snowflake_data}

---

##### `empty_field_as_null`<sup>Optional</sup> <a name="empty_field_as_null" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.emptyFieldAsNull"></a>

```python
empty_field_as_null: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#empty_field_as_null FileFormat#empty_field_as_null}

---

##### `enable_octal`<sup>Optional</sup> <a name="enable_octal" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.enableOctal"></a>

```python
enable_octal: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean that enables parsing of octal numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#enable_octal FileFormat#enable_octal}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

String (constant) that specifies the character set of the source data when loading data into a table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#encoding FileFormat#encoding}

---

##### `error_on_column_count_mismatch`<sup>Optional</sup> <a name="error_on_column_count_mismatch" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.errorOnColumnCountMismatch"></a>

```python
error_on_column_count_mismatch: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input file does not match the number of columns in the corresponding table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#error_on_column_count_mismatch FileFormat#error_on_column_count_mismatch}

---

##### `escape`<sup>Optional</sup> <a name="escape" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.escape"></a>

```python
escape: str
```

- *Type:* str

Single character string used as the escape character for field values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#escape FileFormat#escape}

---

##### `escape_unenclosed_field`<sup>Optional</sup> <a name="escape_unenclosed_field" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.escapeUnenclosedField"></a>

```python
escape_unenclosed_field: str
```

- *Type:* str

Single character string used as the escape character for unenclosed field values only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#escape_unenclosed_field FileFormat#escape_unenclosed_field}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or unloaded file (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#field_delimiter FileFormat#field_delimiter}

---

##### `field_optionally_enclosed_by`<sup>Optional</sup> <a name="field_optionally_enclosed_by" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fieldOptionallyEnclosedBy"></a>

```python
field_optionally_enclosed_by: str
```

- *Type:* str

Character used to enclose strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#field_optionally_enclosed_by FileFormat#field_optionally_enclosed_by}

---

##### `file_extension`<sup>Optional</sup> <a name="file_extension" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.fileExtension"></a>

```python
file_extension: str
```

- *Type:* str

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#file_extension FileFormat#file_extension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#id FileFormat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_utf8_errors`<sup>Optional</sup> <a name="ignore_utf8_errors" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.ignoreUtf8Errors"></a>

```python
ignore_utf8_errors: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#ignore_utf8_errors FileFormat#ignore_utf8_errors}

---

##### `null_if`<sup>Optional</sup> <a name="null_if" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.nullIf"></a>

```python
null_if: typing.List[str]
```

- *Type:* typing.List[str]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#null_if FileFormat#null_if}

---

##### `parse_header`<sup>Optional</sup> <a name="parse_header" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.parseHeader"></a>

```python
parse_header: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether to use the first row headers in the data files to determine column names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#parse_header FileFormat#parse_header}

---

##### `preserve_space`<sup>Optional</sup> <a name="preserve_space" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.preserveSpace"></a>

```python
preserve_space: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#preserve_space FileFormat#preserve_space}

---

##### `record_delimiter`<sup>Optional</sup> <a name="record_delimiter" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.recordDelimiter"></a>

```python
record_delimiter: str
```

- *Type:* str

Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or unloaded file (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#record_delimiter FileFormat#record_delimiter}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#replace_invalid_characters FileFormat#replace_invalid_characters}

---

##### `skip_blank_lines`<sup>Optional</sup> <a name="skip_blank_lines" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipBlankLines"></a>

```python
skip_blank_lines: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean that specifies to skip any blank lines encountered in the data files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#skip_blank_lines FileFormat#skip_blank_lines}

---

##### `skip_byte_order_mark`<sup>Optional</sup> <a name="skip_byte_order_mark" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipByteOrderMark"></a>

```python
skip_byte_order_mark: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#skip_byte_order_mark FileFormat#skip_byte_order_mark}

---

##### `skip_header`<sup>Optional</sup> <a name="skip_header" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.skipHeader"></a>

```python
skip_header: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#skip_header FileFormat#skip_header}

---

##### `strip_null_values`<sup>Optional</sup> <a name="strip_null_values" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripNullValues"></a>

```python
strip_null_values: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#strip_null_values FileFormat#strip_null_values}

---

##### `strip_outer_array`<sup>Optional</sup> <a name="strip_outer_array" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripOuterArray"></a>

```python
strip_outer_array: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean that instructs the JSON parser to remove outer brackets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#strip_outer_array FileFormat#strip_outer_array}

---

##### `strip_outer_element`<sup>Optional</sup> <a name="strip_outer_element" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.stripOuterElement"></a>

```python
strip_outer_element: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#strip_outer_element FileFormat#strip_outer_element}

---

##### `time_format`<sup>Optional</sup> <a name="time_format" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

Defines the format of time values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#time_format FileFormat#time_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timeouts"></a>

```python
timeouts: FileFormatTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts">FileFormatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#timeouts FileFormat#timeouts}

---

##### `timestamp_format`<sup>Optional</sup> <a name="timestamp_format" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

Defines the format of timestamp values in the data files (data loading) or table (data unloading).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#timestamp_format FileFormat#timestamp_format}

---

##### `trim_space`<sup>Optional</sup> <a name="trim_space" id="@cdktf/provider-snowflake.fileFormat.FileFormatConfig.property.trimSpace"></a>

```python
trim_space: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean that specifies whether to remove white space from fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#trim_space FileFormat#trim_space}

---

### FileFormatTimeouts <a name="FileFormatTimeouts" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import file_format

fileFormat.FileFormatTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#create FileFormat#create}. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#delete FileFormat#delete}. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#read FileFormat#read}. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#update FileFormat#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#create FileFormat#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#delete FileFormat#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#read FileFormat#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/file_format#update FileFormat#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileFormatTimeoutsOutputReference <a name="FileFormatTimeoutsOutputReference" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import file_format

fileFormat.FileFormatTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts">FileFormatTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.fileFormat.FileFormatTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FileFormatTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.fileFormat.FileFormatTimeouts">FileFormatTimeouts</a>

---



