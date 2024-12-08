/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CortexSearchServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the list of columns in the base table to enable filtering on when issuing queries to the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service#attributes CortexSearchService#attributes}
  */
  readonly attributes?: string[];
  /**
  * Specifies a comment for the Cortex search service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service#comment CortexSearchService#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the Cortex search service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service#database CortexSearchService#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service#id CortexSearchService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the Cortex search service. The name must be unique for the schema in which the service is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service#name CortexSearchService#name}
  */
  readonly name: string;
  /**
  * Specifies the column to use as the search column for the Cortex search service; must be a text value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service#on CortexSearchService#on}
  */
  readonly on: string;
  /**
  * Specifies the query to use to populate the Cortex search service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service#query CortexSearchService#query}
  */
  readonly query: string;
  /**
  * The schema in which to create the Cortex search service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service#schema CortexSearchService#schema}
  */
  readonly schema: string;
  /**
  * Specifies the maximum target lag time for the Cortex search service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service#target_lag CortexSearchService#target_lag}
  */
  readonly targetLag: string;
  /**
  * The warehouse in which to create the Cortex search service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service#warehouse CortexSearchService#warehouse}
  */
  readonly warehouse: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service#timeouts CortexSearchService#timeouts}
  */
  readonly timeouts?: CortexSearchServiceTimeouts;
}
export interface CortexSearchServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service#create CortexSearchService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service#update CortexSearchService#update}
  */
  readonly update?: string;
}

export function cortexSearchServiceTimeoutsToTerraform(struct?: CortexSearchServiceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cortexSearchServiceTimeoutsToHclTerraform(struct?: CortexSearchServiceTimeouts | cdktf.IResolvable): any {
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

export class CortexSearchServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CortexSearchServiceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CortexSearchServiceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service snowflake_cortex_search_service}
*/
export class CortexSearchService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_cortex_search_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CortexSearchService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CortexSearchService to import
  * @param importFromId The id of the existing CortexSearchService that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CortexSearchService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_cortex_search_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/cortex_search_service snowflake_cortex_search_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CortexSearchServiceConfig
  */
  public constructor(scope: Construct, id: string, config: CortexSearchServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_cortex_search_service',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.99.0',
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
    this._attributes = config.attributes;
    this._comment = config.comment;
    this._database = config.database;
    this._id = config.id;
    this._name = config.name;
    this._on = config.on;
    this._query = config.query;
    this._schema = config.schema;
    this._targetLag = config.targetLag;
    this._warehouse = config.warehouse;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes'));
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
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

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
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

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
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

  // on - computed: false, optional: false, required: true
  private _on?: string; 
  public get on() {
    return this.getStringAttribute('on');
  }
  public set on(value: string) {
    this._on = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onInput() {
    return this._on;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
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

  // target_lag - computed: false, optional: false, required: true
  private _targetLag?: string; 
  public get targetLag() {
    return this.getStringAttribute('target_lag');
  }
  public set targetLag(value: string) {
    this._targetLag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLagInput() {
    return this._targetLag;
  }

  // warehouse - computed: false, optional: false, required: true
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CortexSearchServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CortexSearchServiceTimeouts) {
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
      attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributes),
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      on: cdktf.stringToTerraform(this._on),
      query: cdktf.stringToTerraform(this._query),
      schema: cdktf.stringToTerraform(this._schema),
      target_lag: cdktf.stringToTerraform(this._targetLag),
      warehouse: cdktf.stringToTerraform(this._warehouse),
      timeouts: cortexSearchServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      on: {
        value: cdktf.stringToHclTerraform(this._on),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_lag: {
        value: cdktf.stringToHclTerraform(this._targetLag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warehouse: {
        value: cdktf.stringToHclTerraform(this._warehouse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cortexSearchServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CortexSearchServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
