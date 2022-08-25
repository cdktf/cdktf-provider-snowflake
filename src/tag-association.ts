// https://www.terraform.io/docs/providers/snowflake/r/tag_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/tag_association#id TagAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the object identifier for the tag association.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/tag_association#object_name TagAssociation#object_name}
  */
  readonly objectName: string;
  /**
  * Specifies the type of object to add a tag to. ex: 'ACCOUNT', 'COLUMN', 'DATABASE', etc. For more information: https://docs.snowflake.com/en/user-guide/object-tagging.html#supported-objects
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/tag_association#object_type TagAssociation#object_type}
  */
  readonly objectType: string;
  /**
  * If true, skips validation of the tag association. It can take up to an hour for the SNOWFLAKE.TAG_REFERENCES table to update, and also requires ACCOUNT_ADMIN role to read from. https://docs.snowflake.com/en/sql-reference/account-usage/tag_references.html
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/tag_association#skip_validation TagAssociation#skip_validation}
  */
  readonly skipValidation?: boolean | cdktf.IResolvable;
  /**
  * Specifies the identifier for the tag. Note: format must follow: "databaseName"."schemaName"."tagName" or "databaseName.schemaName.tagName" or "databaseName|schemaName.tagName" (snowflake_tag.tag.id)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/tag_association#tag_id TagAssociation#tag_id}
  */
  readonly tagId: string;
  /**
  * Specifies the value of the tag, (e.g. 'finance' or 'engineering')
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/tag_association#tag_value TagAssociation#tag_value}
  */
  readonly tagValue: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/tag_association#timeouts TagAssociation#timeouts}
  */
  readonly timeouts?: TagAssociationTimeouts;
}
export interface TagAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/tag_association#create TagAssociation#create}
  */
  readonly create?: string;
}

export function tagAssociationTimeoutsToTerraform(struct?: TagAssociationTimeoutsOutputReference | TagAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class TagAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/tag_association snowflake_tag_association}
*/
export class TagAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_tag_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/tag_association snowflake_tag_association} Resource
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
        providerVersion: '0.42.1',
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
    this._objectName = config.objectName;
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

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
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
      object_name: cdktf.stringToTerraform(this._objectName),
      object_type: cdktf.stringToTerraform(this._objectType),
      skip_validation: cdktf.booleanToTerraform(this._skipValidation),
      tag_id: cdktf.stringToTerraform(this._tagId),
      tag_value: cdktf.stringToTerraform(this._tagValue),
      timeouts: tagAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
