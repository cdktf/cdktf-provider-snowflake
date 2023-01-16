// https://www.terraform.io/docs/providers/snowflake/r/scim_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScimIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration#id ScimIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the SCIM integration. This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration#name ScimIntegration#name}
  */
  readonly name: string;
  /**
  * Specifies an existing network policy active for your account. The network policy restricts the list of user IP addresses when exchanging an authorization code for an access or refresh token and when using a refresh token to obtain a new access token. If this parameter is not set, the network policy for the account (if any) is used instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration#network_policy ScimIntegration#network_policy}
  */
  readonly networkPolicy?: string;
  /**
  * Specify the SCIM role in Snowflake that owns any users and roles that are imported from the identity provider into Snowflake using SCIM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration#provisioner_role ScimIntegration#provisioner_role}
  */
  readonly provisionerRole: string;
  /**
  * Specifies the client type for the scim integration
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration#scim_client ScimIntegration#scim_client}
  */
  readonly scimClient: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration snowflake_scim_integration}
*/
export class ScimIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_scim_integration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/scim_integration snowflake_scim_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScimIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ScimIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_scim_integration',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.55.1',
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
    this._name = config.name;
    this._networkPolicy = config.networkPolicy;
    this._provisionerRole = config.provisionerRole;
    this._scimClient = config.scimClient;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
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

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy?: string; 
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }
  public set networkPolicy(value: string) {
    this._networkPolicy = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy;
  }

  // provisioner_role - computed: false, optional: false, required: true
  private _provisionerRole?: string; 
  public get provisionerRole() {
    return this.getStringAttribute('provisioner_role');
  }
  public set provisionerRole(value: string) {
    this._provisionerRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerRoleInput() {
    return this._provisionerRole;
  }

  // scim_client - computed: false, optional: false, required: true
  private _scimClient?: string; 
  public get scimClient() {
    return this.getStringAttribute('scim_client');
  }
  public set scimClient(value: string) {
    this._scimClient = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scimClientInput() {
    return this._scimClient;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_policy: cdktf.stringToTerraform(this._networkPolicy),
      provisioner_role: cdktf.stringToTerraform(this._provisionerRole),
      scim_client: cdktf.stringToTerraform(this._scimClient),
    };
  }
}
