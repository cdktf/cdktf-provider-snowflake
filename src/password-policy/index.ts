/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PasswordPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Adds a comment or overwrites an existing comment for the password policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy#comment PasswordPolicy#comment}
  */
  readonly comment?: string;
  /**
  * The database this password policy belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy#database PasswordPolicy#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy#id PasswordPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Prevent overwriting a previous password policy with the same name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy#if_not_exists PasswordPolicy#if_not_exists}
  */
  readonly ifNotExists?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES). Supported range: 1 to 999, inclusive. Default: 15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy#lockout_time_mins PasswordPolicy#lockout_time_mins}
  */
  readonly lockoutTimeMins?: number;
  /**
  * Specifies the maximum number of days before the password must be changed. Supported range: 0 to 999, inclusive. A value of zero (i.e. 0) indicates that the password does not need to be changed. Snowflake does not recommend choosing this value for a default account-level password policy or for any user-level policy. Instead, choose a value that meets your internal security guidelines. Default: 90, which means the password must be changed every 90 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy#max_age_days PasswordPolicy#max_age_days}
  */
  readonly maxAgeDays?: number;
  /**
  * Specifies the maximum number of characters the password must contain. This number must be greater than or equal to the sum of PASSWORD_MIN_LENGTH, PASSWORD_MIN_UPPER_CASE_CHARS, and PASSWORD_MIN_LOWER_CASE_CHARS. Supported range: 8 to 256, inclusive. Default: 256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy#max_length PasswordPolicy#max_length}
  */
  readonly maxLength?: number;
  /**
  * Specifies the maximum number of attempts to enter a password before being locked out. Supported range: 1 to 10, inclusive. Default: 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy#max_retries PasswordPolicy#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Specifies the minimum number of characters the password must contain. Supported range: 8 to 256, inclusive. Default: 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy#min_length PasswordPolicy#min_length}
  */
  readonly minLength?: number;
  /**
  * Specifies the minimum number of lowercase characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy#min_lower_case_chars PasswordPolicy#min_lower_case_chars}
  */
  readonly minLowerCaseChars?: number;
  /**
  * Specifies the minimum number of numeric characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy#min_numeric_chars PasswordPolicy#min_numeric_chars}
  */
  readonly minNumericChars?: number;
  /**
  * Specifies the minimum number of special characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy#min_special_chars PasswordPolicy#min_special_chars}
  */
  readonly minSpecialChars?: number;
  /**
  * Specifies the minimum number of uppercase characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy#min_upper_case_chars PasswordPolicy#min_upper_case_chars}
  */
  readonly minUpperCaseChars?: number;
  /**
  * Identifier for the password policy; must be unique for your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy#name PasswordPolicy#name}
  */
  readonly name: string;
  /**
  * Whether to override a previous password policy with the same name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy#or_replace PasswordPolicy#or_replace}
  */
  readonly orReplace?: boolean | cdktf.IResolvable;
  /**
  * The schema this password policy belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy#schema PasswordPolicy#schema}
  */
  readonly schema: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy snowflake_password_policy}
*/
export class PasswordPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_password_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/password_policy snowflake_password_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PasswordPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PasswordPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_password_policy',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.73.0',
        providerVersionConstraint: ' ~> 0.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._database = config.database;
    this._id = config.id;
    this._ifNotExists = config.ifNotExists;
    this._lockoutTimeMins = config.lockoutTimeMins;
    this._maxAgeDays = config.maxAgeDays;
    this._maxLength = config.maxLength;
    this._maxRetries = config.maxRetries;
    this._minLength = config.minLength;
    this._minLowerCaseChars = config.minLowerCaseChars;
    this._minNumericChars = config.minNumericChars;
    this._minSpecialChars = config.minSpecialChars;
    this._minUpperCaseChars = config.minUpperCaseChars;
    this._name = config.name;
    this._orReplace = config.orReplace;
    this._schema = config.schema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // if_not_exists - computed: false, optional: true, required: false
  private _ifNotExists?: boolean | cdktf.IResolvable; 
  public get ifNotExists() {
    return this.getBooleanAttribute('if_not_exists');
  }
  public set ifNotExists(value: boolean | cdktf.IResolvable) {
    this._ifNotExists = value;
  }
  public resetIfNotExists() {
    this._ifNotExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNotExistsInput() {
    return this._ifNotExists;
  }

  // lockout_time_mins - computed: false, optional: true, required: false
  private _lockoutTimeMins?: number; 
  public get lockoutTimeMins() {
    return this.getNumberAttribute('lockout_time_mins');
  }
  public set lockoutTimeMins(value: number) {
    this._lockoutTimeMins = value;
  }
  public resetLockoutTimeMins() {
    this._lockoutTimeMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutTimeMinsInput() {
    return this._lockoutTimeMins;
  }

  // max_age_days - computed: false, optional: true, required: false
  private _maxAgeDays?: number; 
  public get maxAgeDays() {
    return this.getNumberAttribute('max_age_days');
  }
  public set maxAgeDays(value: number) {
    this._maxAgeDays = value;
  }
  public resetMaxAgeDays() {
    this._maxAgeDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeDaysInput() {
    return this._maxAgeDays;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // min_lower_case_chars - computed: false, optional: true, required: false
  private _minLowerCaseChars?: number; 
  public get minLowerCaseChars() {
    return this.getNumberAttribute('min_lower_case_chars');
  }
  public set minLowerCaseChars(value: number) {
    this._minLowerCaseChars = value;
  }
  public resetMinLowerCaseChars() {
    this._minLowerCaseChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLowerCaseCharsInput() {
    return this._minLowerCaseChars;
  }

  // min_numeric_chars - computed: false, optional: true, required: false
  private _minNumericChars?: number; 
  public get minNumericChars() {
    return this.getNumberAttribute('min_numeric_chars');
  }
  public set minNumericChars(value: number) {
    this._minNumericChars = value;
  }
  public resetMinNumericChars() {
    this._minNumericChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumericCharsInput() {
    return this._minNumericChars;
  }

  // min_special_chars - computed: false, optional: true, required: false
  private _minSpecialChars?: number; 
  public get minSpecialChars() {
    return this.getNumberAttribute('min_special_chars');
  }
  public set minSpecialChars(value: number) {
    this._minSpecialChars = value;
  }
  public resetMinSpecialChars() {
    this._minSpecialChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSpecialCharsInput() {
    return this._minSpecialChars;
  }

  // min_upper_case_chars - computed: false, optional: true, required: false
  private _minUpperCaseChars?: number; 
  public get minUpperCaseChars() {
    return this.getNumberAttribute('min_upper_case_chars');
  }
  public set minUpperCaseChars(value: number) {
    this._minUpperCaseChars = value;
  }
  public resetMinUpperCaseChars() {
    this._minUpperCaseChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUpperCaseCharsInput() {
    return this._minUpperCaseChars;
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

  // or_replace - computed: false, optional: true, required: false
  private _orReplace?: boolean | cdktf.IResolvable; 
  public get orReplace() {
    return this.getBooleanAttribute('or_replace');
  }
  public set orReplace(value: boolean | cdktf.IResolvable) {
    this._orReplace = value;
  }
  public resetOrReplace() {
    this._orReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orReplaceInput() {
    return this._orReplace;
  }

  // qualified_name - computed: true, optional: false, required: false
  public get qualifiedName() {
    return this.getStringAttribute('qualified_name');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      id: cdktf.stringToTerraform(this._id),
      if_not_exists: cdktf.booleanToTerraform(this._ifNotExists),
      lockout_time_mins: cdktf.numberToTerraform(this._lockoutTimeMins),
      max_age_days: cdktf.numberToTerraform(this._maxAgeDays),
      max_length: cdktf.numberToTerraform(this._maxLength),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      min_length: cdktf.numberToTerraform(this._minLength),
      min_lower_case_chars: cdktf.numberToTerraform(this._minLowerCaseChars),
      min_numeric_chars: cdktf.numberToTerraform(this._minNumericChars),
      min_special_chars: cdktf.numberToTerraform(this._minSpecialChars),
      min_upper_case_chars: cdktf.numberToTerraform(this._minUpperCaseChars),
      name: cdktf.stringToTerraform(this._name),
      or_replace: cdktf.booleanToTerraform(this._orReplace),
      schema: cdktf.stringToTerraform(this._schema),
    };
  }
}
