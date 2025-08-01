/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TableConstraintConfig extends cdktf.TerraformMetaArguments {
  /**
  * Columns to use in constraint key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#columns TableConstraint#columns}
  */
  readonly columns: string[];
  /**
  * Comment for the table constraint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#comment TableConstraint#comment}
  */
  readonly comment?: string;
  /**
  * (Default: `true`) Whether the constraint is deferrable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#deferrable TableConstraint#deferrable}
  */
  readonly deferrable?: boolean | cdktf.IResolvable;
  /**
  * (Default: `true`) Specifies whether the constraint is enabled or disabled. These properties are provided for compatibility with Oracle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#enable TableConstraint#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * (Default: `false`) Whether the constraint is enforced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#enforced TableConstraint#enforced}
  */
  readonly enforced?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#id TableConstraint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Default: `DEFERRED`) Whether the constraint is initially deferred or immediate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#initially TableConstraint#initially}
  */
  readonly initially?: string;
  /**
  * Name of constraint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#name TableConstraint#name}
  */
  readonly name: string;
  /**
  * (Default: `true`) Specifies whether a constraint in NOVALIDATE mode is taken into account during query rewrite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#rely TableConstraint#rely}
  */
  readonly rely?: boolean | cdktf.IResolvable;
  /**
  * Identifier for table to create constraint on. Format must follow: "\"&lt;db_name&gt;\".\"&lt;schema_name&gt;\".\"&lt;table_name&gt;\"" or "&lt;db_name&gt;.&lt;schema_name&gt;.&lt;table_name&gt;" (snowflake_table.my_table.id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#table_id TableConstraint#table_id}
  */
  readonly tableId: string;
  /**
  * Type of constraint, one of 'UNIQUE', 'PRIMARY KEY', or 'FOREIGN KEY'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#type TableConstraint#type}
  */
  readonly type: string;
  /**
  * (Default: `false`) Specifies whether to validate existing data on the table when a constraint is created. Only used in conjunction with the ENABLE property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#validate TableConstraint#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
  /**
  * foreign_key_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#foreign_key_properties TableConstraint#foreign_key_properties}
  */
  readonly foreignKeyProperties?: TableConstraintForeignKeyProperties;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#timeouts TableConstraint#timeouts}
  */
  readonly timeouts?: TableConstraintTimeouts;
}
export interface TableConstraintForeignKeyPropertiesReferences {
  /**
  * Columns to use in foreign key reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#columns TableConstraint#columns}
  */
  readonly columns: string[];
  /**
  * Name of constraint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#table_id TableConstraint#table_id}
  */
  readonly tableId: string;
}

export function tableConstraintForeignKeyPropertiesReferencesToTerraform(struct?: TableConstraintForeignKeyPropertiesReferencesOutputReference | TableConstraintForeignKeyPropertiesReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


export function tableConstraintForeignKeyPropertiesReferencesToHclTerraform(struct?: TableConstraintForeignKeyPropertiesReferencesOutputReference | TableConstraintForeignKeyPropertiesReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TableConstraintForeignKeyPropertiesReferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TableConstraintForeignKeyPropertiesReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableConstraintForeignKeyPropertiesReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns = undefined;
      this._tableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns = value.columns;
      this._tableId = value.tableId;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}
export interface TableConstraintForeignKeyProperties {
  /**
  * (Default: `FULL`) The match type for the foreign key. Not applicable for primary/unique keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#match TableConstraint#match}
  */
  readonly match?: string;
  /**
  * (Default: `NO ACTION`) Specifies the action performed when the primary/unique key for the foreign key is deleted. Not applicable for primary/unique keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#on_delete TableConstraint#on_delete}
  */
  readonly onDelete?: string;
  /**
  * (Default: `NO ACTION`) Specifies the action performed when the primary/unique key for the foreign key is updated. Not applicable for primary/unique keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#on_update TableConstraint#on_update}
  */
  readonly onUpdate?: string;
  /**
  * references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#references TableConstraint#references}
  */
  readonly references: TableConstraintForeignKeyPropertiesReferences;
}

export function tableConstraintForeignKeyPropertiesToTerraform(struct?: TableConstraintForeignKeyPropertiesOutputReference | TableConstraintForeignKeyProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    on_delete: cdktf.stringToTerraform(struct!.onDelete),
    on_update: cdktf.stringToTerraform(struct!.onUpdate),
    references: tableConstraintForeignKeyPropertiesReferencesToTerraform(struct!.references),
  }
}


export function tableConstraintForeignKeyPropertiesToHclTerraform(struct?: TableConstraintForeignKeyPropertiesOutputReference | TableConstraintForeignKeyProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_delete: {
      value: cdktf.stringToHclTerraform(struct!.onDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_update: {
      value: cdktf.stringToHclTerraform(struct!.onUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    references: {
      value: tableConstraintForeignKeyPropertiesReferencesToHclTerraform(struct!.references),
      isBlock: true,
      type: "list",
      storageClassType: "TableConstraintForeignKeyPropertiesReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TableConstraintForeignKeyPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TableConstraintForeignKeyProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._onDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDelete = this._onDelete;
    }
    if (this._onUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUpdate = this._onUpdate;
    }
    if (this._references?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.references = this._references?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableConstraintForeignKeyProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._match = undefined;
      this._onDelete = undefined;
      this._onUpdate = undefined;
      this._references.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._match = value.match;
      this._onDelete = value.onDelete;
      this._onUpdate = value.onUpdate;
      this._references.internalValue = value.references;
    }
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // on_delete - computed: false, optional: true, required: false
  private _onDelete?: string; 
  public get onDelete() {
    return this.getStringAttribute('on_delete');
  }
  public set onDelete(value: string) {
    this._onDelete = value;
  }
  public resetOnDelete() {
    this._onDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDeleteInput() {
    return this._onDelete;
  }

  // on_update - computed: false, optional: true, required: false
  private _onUpdate?: string; 
  public get onUpdate() {
    return this.getStringAttribute('on_update');
  }
  public set onUpdate(value: string) {
    this._onUpdate = value;
  }
  public resetOnUpdate() {
    this._onUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUpdateInput() {
    return this._onUpdate;
  }

  // references - computed: false, optional: false, required: true
  private _references = new TableConstraintForeignKeyPropertiesReferencesOutputReference(this, "references");
  public get references() {
    return this._references;
  }
  public putReferences(value: TableConstraintForeignKeyPropertiesReferences) {
    this._references.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencesInput() {
    return this._references.internalValue;
  }
}
export interface TableConstraintTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#create TableConstraint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#delete TableConstraint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#read TableConstraint#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#update TableConstraint#update}
  */
  readonly update?: string;
}

export function tableConstraintTimeoutsToTerraform(struct?: TableConstraintTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function tableConstraintTimeoutsToHclTerraform(struct?: TableConstraintTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TableConstraintTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TableConstraintTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableConstraintTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint snowflake_table_constraint}
*/
export class TableConstraint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_table_constraint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TableConstraint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TableConstraint to import
  * @param importFromId The id of the existing TableConstraint that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TableConstraint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_table_constraint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint snowflake_table_constraint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TableConstraintConfig
  */
  public constructor(scope: Construct, id: string, config: TableConstraintConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_table_constraint',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.4.0',
        providerVersionConstraint: ' ~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._columns = config.columns;
    this._comment = config.comment;
    this._deferrable = config.deferrable;
    this._enable = config.enable;
    this._enforced = config.enforced;
    this._id = config.id;
    this._initially = config.initially;
    this._name = config.name;
    this._rely = config.rely;
    this._tableId = config.tableId;
    this._type = config.type;
    this._validate = config.validate;
    this._foreignKeyProperties.internalValue = config.foreignKeyProperties;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
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

  // deferrable - computed: false, optional: true, required: false
  private _deferrable?: boolean | cdktf.IResolvable; 
  public get deferrable() {
    return this.getBooleanAttribute('deferrable');
  }
  public set deferrable(value: boolean | cdktf.IResolvable) {
    this._deferrable = value;
  }
  public resetDeferrable() {
    this._deferrable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deferrableInput() {
    return this._deferrable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enforced - computed: false, optional: true, required: false
  private _enforced?: boolean | cdktf.IResolvable; 
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
  public set enforced(value: boolean | cdktf.IResolvable) {
    this._enforced = value;
  }
  public resetEnforced() {
    this._enforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
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

  // initially - computed: false, optional: true, required: false
  private _initially?: string; 
  public get initially() {
    return this.getStringAttribute('initially');
  }
  public set initially(value: string) {
    this._initially = value;
  }
  public resetInitially() {
    this._initially = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiallyInput() {
    return this._initially;
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

  // rely - computed: false, optional: true, required: false
  private _rely?: boolean | cdktf.IResolvable; 
  public get rely() {
    return this.getBooleanAttribute('rely');
  }
  public set rely(value: boolean | cdktf.IResolvable) {
    this._rely = value;
  }
  public resetRely() {
    this._rely = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relyInput() {
    return this._rely;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktf.IResolvable; 
  public get validate() {
    return this.getBooleanAttribute('validate');
  }
  public set validate(value: boolean | cdktf.IResolvable) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }

  // foreign_key_properties - computed: false, optional: true, required: false
  private _foreignKeyProperties = new TableConstraintForeignKeyPropertiesOutputReference(this, "foreign_key_properties");
  public get foreignKeyProperties() {
    return this._foreignKeyProperties;
  }
  public putForeignKeyProperties(value: TableConstraintForeignKeyProperties) {
    this._foreignKeyProperties.internalValue = value;
  }
  public resetForeignKeyProperties() {
    this._foreignKeyProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignKeyPropertiesInput() {
    return this._foreignKeyProperties.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TableConstraintTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TableConstraintTimeouts) {
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
      columns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._columns),
      comment: cdktf.stringToTerraform(this._comment),
      deferrable: cdktf.booleanToTerraform(this._deferrable),
      enable: cdktf.booleanToTerraform(this._enable),
      enforced: cdktf.booleanToTerraform(this._enforced),
      id: cdktf.stringToTerraform(this._id),
      initially: cdktf.stringToTerraform(this._initially),
      name: cdktf.stringToTerraform(this._name),
      rely: cdktf.booleanToTerraform(this._rely),
      table_id: cdktf.stringToTerraform(this._tableId),
      type: cdktf.stringToTerraform(this._type),
      validate: cdktf.booleanToTerraform(this._validate),
      foreign_key_properties: tableConstraintForeignKeyPropertiesToTerraform(this._foreignKeyProperties.internalValue),
      timeouts: tableConstraintTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      columns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._columns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deferrable: {
        value: cdktf.booleanToHclTerraform(this._deferrable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforced: {
        value: cdktf.booleanToHclTerraform(this._enforced),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initially: {
        value: cdktf.stringToHclTerraform(this._initially),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rely: {
        value: cdktf.booleanToHclTerraform(this._rely),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      table_id: {
        value: cdktf.stringToHclTerraform(this._tableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate: {
        value: cdktf.booleanToHclTerraform(this._validate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      foreign_key_properties: {
        value: tableConstraintForeignKeyPropertiesToHclTerraform(this._foreignKeyProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TableConstraintForeignKeyPropertiesList",
      },
      timeouts: {
        value: tableConstraintTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TableConstraintTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
