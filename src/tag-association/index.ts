/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/tag_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/tag_association#id TagAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the object identifiers for the tag association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/tag_association#object_identifiers TagAssociation#object_identifiers}
  */
  readonly objectIdentifiers: string[];
  /**
  * Specifies the type of object to add a tag. Allowed object types: [ACCOUNT APPLICATION APPLICATION PACKAGE DATABASE FAILOVER GROUP INTEGRATION NETWORK POLICY REPLICATION GROUP ROLE SHARE USER WAREHOUSE DATABASE ROLE SCHEMA ALERT SNOWFLAKE.CORE.BUDGET SNOWFLAKE.ML.CLASSIFICATION EXTERNAL FUNCTION EXTERNAL TABLE FUNCTION GIT REPOSITORY ICEBERG TABLE MATERIALIZED VIEW PIPE MASKING POLICY PASSWORD POLICY ROW ACCESS POLICY SESSION POLICY PRIVACY POLICY PROCEDURE STAGE STREAM TABLE TASK VIEW COLUMN EVENT TABLE].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/tag_association#object_type TagAssociation#object_type}
  */
  readonly objectType: string;
  /**
  * If true, skips validation of the tag association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/tag_association#skip_validation TagAssociation#skip_validation}
  */
  readonly skipValidation?: boolean | cdktf.IResolvable;
  /**
  * Specifies the identifier for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/tag_association#tag_id TagAssociation#tag_id}
  */
  readonly tagId: string;
  /**
  * Specifies the value of the tag, (e.g. 'finance' or 'engineering')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/tag_association#tag_value TagAssociation#tag_value}
  */
  readonly tagValue: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/tag_association#timeouts TagAssociation#timeouts}
  */
  readonly timeouts?: TagAssociationTimeouts;
}
export interface TagAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/tag_association#create TagAssociation#create}
  */
  readonly create?: string;
}

export function tagAssociationTimeoutsToTerraform(struct?: TagAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function tagAssociationTimeoutsToHclTerraform(struct?: TagAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TagAssociationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagAssociationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/tag_association snowflake_tag_association}
*/
export class TagAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_tag_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TagAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TagAssociation to import
  * @param importFromId The id of the existing TagAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/tag_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TagAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_tag_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/tag_association snowflake_tag_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: TagAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_tag_association',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '1.0.5',
        providerVersionConstraint: ' ~> 1.0'
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
    this._objectIdentifiers = config.objectIdentifiers;
    this._objectType = config.objectType;
    this._skipValidation = config.skipValidation;
    this._tagId = config.tagId;
    this._tagValue = config.tagValue;
    this._timeouts.internalValue = config.timeouts;
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

  // object_identifiers - computed: false, optional: false, required: true
  private _objectIdentifiers?: string[]; 
  public get objectIdentifiers() {
    return cdktf.Fn.tolist(this.getListAttribute('object_identifiers'));
  }
  public set objectIdentifiers(value: string[]) {
    this._objectIdentifiers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdentifiersInput() {
    return this._objectIdentifiers;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // skip_validation - computed: false, optional: true, required: false
  private _skipValidation?: boolean | cdktf.IResolvable; 
  public get skipValidation() {
    return this.getBooleanAttribute('skip_validation');
  }
  public set skipValidation(value: boolean | cdktf.IResolvable) {
    this._skipValidation = value;
  }
  public resetSkipValidation() {
    this._skipValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipValidationInput() {
    return this._skipValidation;
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

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TagAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TagAssociationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      object_identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectIdentifiers),
      object_type: cdktf.stringToTerraform(this._objectType),
      skip_validation: cdktf.booleanToTerraform(this._skipValidation),
      tag_id: cdktf.stringToTerraform(this._tagId),
      tag_value: cdktf.stringToTerraform(this._tagValue),
      timeouts: tagAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_identifiers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectIdentifiers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_validation: {
        value: cdktf.booleanToHclTerraform(this._skipValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_id: {
        value: cdktf.stringToHclTerraform(this._tagId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_value: {
        value: cdktf.stringToHclTerraform(this._tagValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: tagAssociationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TagAssociationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
