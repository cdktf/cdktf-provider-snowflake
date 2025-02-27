/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecondaryConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the identifier for a primary connection from which to create a replica (i.e. a secondary connection). For more information about this resource, see [docs](./primary_connection).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_connection#as_replica_of SecondaryConnection#as_replica_of}
  */
  readonly asReplicaOf: string;
  /**
  * Specifies a comment for the secondary connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_connection#comment SecondaryConnection#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_connection#id SecondaryConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * String that specifies the identifier (i.e. name) for the connection. Must start with an alphabetic character and may only contain letters, decimal digits (0-9), and underscores (_). For a secondary connection, the name must match the name of its primary connection. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_connection#name SecondaryConnection#name}
  */
  readonly name: string;
}
export interface SecondaryConnectionShowOutput {
}

export function secondaryConnectionShowOutputToTerraform(struct?: SecondaryConnectionShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function secondaryConnectionShowOutputToHclTerraform(struct?: SecondaryConnectionShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecondaryConnectionShowOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SecondaryConnectionShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecondaryConnectionShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_locator - computed: true, optional: false, required: false
  public get accountLocator() {
    return this.getStringAttribute('account_locator');
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // connection_url - computed: true, optional: false, required: false
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // failover_allowed_to_accounts - computed: true, optional: false, required: false
  public get failoverAllowedToAccounts() {
    return this.getListAttribute('failover_allowed_to_accounts');
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getStringAttribute('primary');
  }

  // region_group - computed: true, optional: false, required: false
  public get regionGroup() {
    return this.getStringAttribute('region_group');
  }

  // snowflake_region - computed: true, optional: false, required: false
  public get snowflakeRegion() {
    return this.getStringAttribute('snowflake_region');
  }
}

export class SecondaryConnectionShowOutputList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecondaryConnectionShowOutputOutputReference {
    return new SecondaryConnectionShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_connection snowflake_secondary_connection}
*/
export class SecondaryConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_secondary_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecondaryConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecondaryConnection to import
  * @param importFromId The id of the existing SecondaryConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecondaryConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_secondary_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_connection snowflake_secondary_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecondaryConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: SecondaryConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_secondary_connection',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '1.0.4',
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
    this._asReplicaOf = config.asReplicaOf;
    this._comment = config.comment;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as_replica_of - computed: false, optional: false, required: true
  private _asReplicaOf?: string; 
  public get asReplicaOf() {
    return this.getStringAttribute('as_replica_of');
  }
  public set asReplicaOf(value: string) {
    this._asReplicaOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asReplicaOfInput() {
    return this._asReplicaOf;
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

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
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

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new SecondaryConnectionShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_replica_of: cdktf.stringToTerraform(this._asReplicaOf),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as_replica_of: {
        value: cdktf.stringToHclTerraform(this._asReplicaOf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
