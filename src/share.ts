// https://www.terraform.io/docs/providers/snowflake/r/share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of accounts to be added to the share.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/share#accounts Share#accounts}
  */
  readonly accounts?: string[];
  /**
  * Specifies a comment for the managed account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/share#comment Share#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the identifier for the share; must be unique for the account in which the share is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/share#name Share#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/share snowflake_share}
*/
export class Share extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_share";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/share snowflake_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShareConfig
  */
  public constructor(scope: Construct, id: string, config: ShareConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_share',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.31.0',
        providerVersionConstraint: ' ~> 0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accounts = config.accounts;
    this._comment = config.comment;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounts - computed: false, optional: true, required: false
  private _accounts?: string[]; 
  public get accounts() {
    return this.getListAttribute('accounts');
  }
  public set accounts(value: string[]) {
    this._accounts = value;
  }
  public resetAccounts() {
    this._accounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accounts: cdktf.listMapper(cdktf.stringToTerraform)(this._accounts),
      comment: cdktf.stringToTerraform(this._comment),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
