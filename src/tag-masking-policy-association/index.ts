/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/tag_masking_policy_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagMaskingPolicyAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/tag_masking_policy_association#id TagMaskingPolicyAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource id of the masking policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/tag_masking_policy_association#masking_policy_id TagMaskingPolicyAssociation#masking_policy_id}
  */
  readonly maskingPolicyId: string;
  /**
  * Specifies the identifier for the tag. Note: format must follow: "databaseName"."schemaName"."tagName" or "databaseName.schemaName.tagName" or "databaseName|schemaName.tagName" (snowflake_tag.tag.id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/tag_masking_policy_association#tag_id TagMaskingPolicyAssociation#tag_id}
  */
  readonly tagId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/tag_masking_policy_association snowflake_tag_masking_policy_association}
*/
export class TagMaskingPolicyAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_tag_masking_policy_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TagMaskingPolicyAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TagMaskingPolicyAssociation to import
  * @param importFromId The id of the existing TagMaskingPolicyAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/tag_masking_policy_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TagMaskingPolicyAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_tag_masking_policy_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/tag_masking_policy_association snowflake_tag_masking_policy_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagMaskingPolicyAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: TagMaskingPolicyAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_tag_masking_policy_association',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.79.1',
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
    this._id = config.id;
    this._maskingPolicyId = config.maskingPolicyId;
    this._tagId = config.tagId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // masking_policy_id - computed: false, optional: false, required: true
  private _maskingPolicyId?: string; 
  public get maskingPolicyId() {
    return this.getStringAttribute('masking_policy_id');
  }
  public set maskingPolicyId(value: string) {
    this._maskingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingPolicyIdInput() {
    return this._maskingPolicyId;
  }

  // tag_id - computed: false, optional: false, required: true
  private _tagId?: string; 
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }
  public set tagId(value: string) {
    this._tagId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdInput() {
    return this._tagId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      masking_policy_id: cdktf.stringToTerraform(this._maskingPolicyId),
      tag_id: cdktf.stringToTerraform(this._tagId),
    };
  }
}
