// https://www.terraform.io/docs/providers/snowflake/r/stage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#aws_external_id Stage#aws_external_id}
  */
  readonly awsExternalId?: string;
  /**
  * Specifies a comment for the stage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#comment Stage#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the copy options for the stage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#copy_options Stage#copy_options}
  */
  readonly copyOptions?: string;
  /**
  * Specifies the credentials for the stage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#credentials Stage#credentials}
  */
  readonly credentials?: string;
  /**
  * The database in which to create the stage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#database Stage#database}
  */
  readonly database: string;
  /**
  * Specifies the directory settings for the stage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#directory Stage#directory}
  */
  readonly directory?: string;
  /**
  * Specifies the encryption settings for the stage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#encryption Stage#encryption}
  */
  readonly encryption?: string;
  /**
  * Specifies the file format for the stage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#file_format Stage#file_format}
  */
  readonly fileFormat?: string;
  /**
  * Specifies the identifier for the stage; must be unique for the database and schema in which the stage is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#name Stage#name}
  */
  readonly name: string;
  /**
  * The schema in which to create the stage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#schema Stage#schema}
  */
  readonly schema: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#snowflake_iam_user Stage#snowflake_iam_user}
  */
  readonly snowflakeIamUser?: string;
  /**
  * Specifies the name of the storage integration used to delegate authentication responsibility for external cloud storage to a Snowflake identity and access management (IAM) entity.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#storage_integration Stage#storage_integration}
  */
  readonly storageIntegration?: string;
  /**
  * Specifies the URL for the stage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#url Stage#url}
  */
  readonly url?: string;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#tag Stage#tag}
  */
  readonly tag?: StageTag[] | cdktf.IResolvable;
}
export interface StageTag {
  /**
  * Name of the database that the tag was created in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#database Stage#database}
  */
  readonly database?: string;
  /**
  * Tag name, e.g. department.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#name Stage#name}
  */
  readonly name: string;
  /**
  * Name of the schema that the tag was created in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#schema Stage#schema}
  */
  readonly schema?: string;
  /**
  * Tag value, e.g. marketing_info.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stage#value Stage#value}
  */
  readonly value: string;
}

export function stageTagToTerraform(struct?: StageTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    name: cdktf.stringToTerraform(struct!.name),
    schema: cdktf.stringToTerraform(struct!.schema),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/stage snowflake_stage}
*/
export class Stage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_stage";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/stage snowflake_stage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StageConfig
  */
  public constructor(scope: Construct, id: string, config: StageConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_stage',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.30.0',
        providerVersionConstraint: ' ~> 0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._awsExternalId = config.awsExternalId;
    this._comment = config.comment;
    this._copyOptions = config.copyOptions;
    this._credentials = config.credentials;
    this._database = config.database;
    this._directory = config.directory;
    this._encryption = config.encryption;
    this._fileFormat = config.fileFormat;
    this._name = config.name;
    this._schema = config.schema;
    this._snowflakeIamUser = config.snowflakeIamUser;
    this._storageIntegration = config.storageIntegration;
    this._url = config.url;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_external_id - computed: true, optional: true, required: false
  private _awsExternalId?: string; 
  public get awsExternalId() {
    return this.getStringAttribute('aws_external_id');
  }
  public set awsExternalId(value: string) {
    this._awsExternalId = value;
  }
  public resetAwsExternalId() {
    this._awsExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsExternalIdInput() {
    return this._awsExternalId;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // copy_options - computed: false, optional: true, required: false
  private _copyOptions?: string; 
  public get copyOptions() {
    return this.getStringAttribute('copy_options');
  }
  public set copyOptions(value: string) {
    this._copyOptions = value;
  }
  public resetCopyOptions() {
    this._copyOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyOptionsInput() {
    return this._copyOptions;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // file_format - computed: false, optional: true, required: false
  private _fileFormat?: string; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  public resetFileFormat() {
    this._fileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // snowflake_iam_user - computed: true, optional: true, required: false
  private _snowflakeIamUser?: string; 
  public get snowflakeIamUser() {
    return this.getStringAttribute('snowflake_iam_user');
  }
  public set snowflakeIamUser(value: string) {
    this._snowflakeIamUser = value;
  }
  public resetSnowflakeIamUser() {
    this._snowflakeIamUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeIamUserInput() {
    return this._snowflakeIamUser;
  }

  // storage_integration - computed: false, optional: true, required: false
  private _storageIntegration?: string; 
  public get storageIntegration() {
    return this.getStringAttribute('storage_integration');
  }
  public set storageIntegration(value: string) {
    this._storageIntegration = value;
  }
  public resetStorageIntegration() {
    this._storageIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIntegrationInput() {
    return this._storageIntegration;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: StageTag[] | cdktf.IResolvable; 
  public get tag() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tag');
  }
  public set tag(value: StageTag[] | cdktf.IResolvable) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_external_id: cdktf.stringToTerraform(this._awsExternalId),
      comment: cdktf.stringToTerraform(this._comment),
      copy_options: cdktf.stringToTerraform(this._copyOptions),
      credentials: cdktf.stringToTerraform(this._credentials),
      database: cdktf.stringToTerraform(this._database),
      directory: cdktf.stringToTerraform(this._directory),
      encryption: cdktf.stringToTerraform(this._encryption),
      file_format: cdktf.stringToTerraform(this._fileFormat),
      name: cdktf.stringToTerraform(this._name),
      schema: cdktf.stringToTerraform(this._schema),
      snowflake_iam_user: cdktf.stringToTerraform(this._snowflakeIamUser),
      storage_integration: cdktf.stringToTerraform(this._storageIntegration),
      url: cdktf.stringToTerraform(this._url),
      tag: cdktf.listMapper(stageTagToTerraform)(this._tag),
    };
  }
}
