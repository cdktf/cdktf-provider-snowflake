// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.86.0/docs/resources/storage_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.86.0/docs/resources/storage_integration#azure_tenant_id StorageIntegration#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.86.0/docs/resources/storage_integration#comment StorageIntegration#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.86.0/docs/resources/storage_integration#enabled StorageIntegration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.86.0/docs/resources/storage_integration#id StorageIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.86.0/docs/resources/storage_integration#name StorageIntegration#name}
  */
  readonly name: string;
  /**
  * Explicitly limits external stages that use the integration to reference one or more storage locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.86.0/docs/resources/storage_integration#storage_allowed_locations StorageIntegration#storage_allowed_locations}
  */
  readonly storageAllowedLocations: string[];
  /**
  * "bucket-owner-full-control" Enables support for AWS access control lists (ACLs) to grant the bucket owner full control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.86.0/docs/resources/storage_integration#storage_aws_object_acl StorageIntegration#storage_aws_object_acl}
  */
  readonly storageAwsObjectAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.86.0/docs/resources/storage_integration#storage_aws_role_arn StorageIntegration#storage_aws_role_arn}
  */
  readonly storageAwsRoleArn?: string;
  /**
  * Explicitly prohibits external stages that use the integration from referencing one or more storage locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.86.0/docs/resources/storage_integration#storage_blocked_locations StorageIntegration#storage_blocked_locations}
  */
  readonly storageBlockedLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.86.0/docs/resources/storage_integration#storage_provider StorageIntegration#storage_provider}
  */
  readonly storageProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.86.0/docs/resources/storage_integration#type StorageIntegration#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.86.0/docs/resources/storage_integration snowflake_storage_integration}
*/
export class StorageIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_storage_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageIntegration to import
  * @param importFromId The id of the existing StorageIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.86.0/docs/resources/storage_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_storage_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.86.0/docs/resources/storage_integration snowflake_storage_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: StorageIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_storage_integration',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.86.0',
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
    this._azureTenantId = config.azureTenantId;
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._storageAllowedLocations = config.storageAllowedLocations;
    this._storageAwsObjectAcl = config.storageAwsObjectAcl;
    this._storageAwsRoleArn = config.storageAwsRoleArn;
    this._storageBlockedLocations = config.storageBlockedLocations;
    this._storageProvider = config.storageProvider;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_consent_url - computed: true, optional: false, required: false
  public get azureConsentUrl() {
    return this.getStringAttribute('azure_consent_url');
  }

  // azure_multi_tenant_app_name - computed: true, optional: false, required: false
  public get azureMultiTenantAppName() {
    return this.getStringAttribute('azure_multi_tenant_app_name');
  }

  // azure_tenant_id - computed: false, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // storage_allowed_locations - computed: false, optional: false, required: true
  private _storageAllowedLocations?: string[]; 
  public get storageAllowedLocations() {
    return this.getListAttribute('storage_allowed_locations');
  }
  public set storageAllowedLocations(value: string[]) {
    this._storageAllowedLocations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAllowedLocationsInput() {
    return this._storageAllowedLocations;
  }

  // storage_aws_external_id - computed: true, optional: false, required: false
  public get storageAwsExternalId() {
    return this.getStringAttribute('storage_aws_external_id');
  }

  // storage_aws_iam_user_arn - computed: true, optional: false, required: false
  public get storageAwsIamUserArn() {
    return this.getStringAttribute('storage_aws_iam_user_arn');
  }

  // storage_aws_object_acl - computed: false, optional: true, required: false
  private _storageAwsObjectAcl?: string; 
  public get storageAwsObjectAcl() {
    return this.getStringAttribute('storage_aws_object_acl');
  }
  public set storageAwsObjectAcl(value: string) {
    this._storageAwsObjectAcl = value;
  }
  public resetStorageAwsObjectAcl() {
    this._storageAwsObjectAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAwsObjectAclInput() {
    return this._storageAwsObjectAcl;
  }

  // storage_aws_role_arn - computed: false, optional: true, required: false
  private _storageAwsRoleArn?: string; 
  public get storageAwsRoleArn() {
    return this.getStringAttribute('storage_aws_role_arn');
  }
  public set storageAwsRoleArn(value: string) {
    this._storageAwsRoleArn = value;
  }
  public resetStorageAwsRoleArn() {
    this._storageAwsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAwsRoleArnInput() {
    return this._storageAwsRoleArn;
  }

  // storage_blocked_locations - computed: false, optional: true, required: false
  private _storageBlockedLocations?: string[]; 
  public get storageBlockedLocations() {
    return this.getListAttribute('storage_blocked_locations');
  }
  public set storageBlockedLocations(value: string[]) {
    this._storageBlockedLocations = value;
  }
  public resetStorageBlockedLocations() {
    this._storageBlockedLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBlockedLocationsInput() {
    return this._storageBlockedLocations;
  }

  // storage_gcp_service_account - computed: true, optional: false, required: false
  public get storageGcpServiceAccount() {
    return this.getStringAttribute('storage_gcp_service_account');
  }

  // storage_provider - computed: false, optional: false, required: true
  private _storageProvider?: string; 
  public get storageProvider() {
    return this.getStringAttribute('storage_provider');
  }
  public set storageProvider(value: string) {
    this._storageProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProviderInput() {
    return this._storageProvider;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_tenant_id: cdktf.stringToTerraform(this._azureTenantId),
      comment: cdktf.stringToTerraform(this._comment),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      storage_allowed_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._storageAllowedLocations),
      storage_aws_object_acl: cdktf.stringToTerraform(this._storageAwsObjectAcl),
      storage_aws_role_arn: cdktf.stringToTerraform(this._storageAwsRoleArn),
      storage_blocked_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._storageBlockedLocations),
      storage_provider: cdktf.stringToTerraform(this._storageProvider),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_tenant_id: {
        value: cdktf.stringToHclTerraform(this._azureTenantId),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_allowed_locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._storageAllowedLocations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      storage_aws_object_acl: {
        value: cdktf.stringToHclTerraform(this._storageAwsObjectAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_aws_role_arn: {
        value: cdktf.stringToHclTerraform(this._storageAwsRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_blocked_locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._storageBlockedLocations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      storage_provider: {
        value: cdktf.stringToHclTerraform(this._storageProvider),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
