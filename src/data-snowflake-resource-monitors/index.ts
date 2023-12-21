// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/data-sources/resource_monitors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeResourceMonitorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/data-sources/resource_monitors#id DataSnowflakeResourceMonitors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataSnowflakeResourceMonitorsResourceMonitors {
}

export function dataSnowflakeResourceMonitorsResourceMonitorsToTerraform(struct?: DataSnowflakeResourceMonitorsResourceMonitors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataSnowflakeResourceMonitorsResourceMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeResourceMonitorsResourceMonitors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeResourceMonitorsResourceMonitors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // credit_quota - computed: true, optional: false, required: false
  public get creditQuota() {
    return this.getStringAttribute('credit_quota');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataSnowflakeResourceMonitorsResourceMonitorsList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeResourceMonitorsResourceMonitorsOutputReference {
    return new DataSnowflakeResourceMonitorsResourceMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/data-sources/resource_monitors snowflake_resource_monitors}
*/
export class DataSnowflakeResourceMonitors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_resource_monitors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSnowflakeResourceMonitors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeResourceMonitors to import
  * @param importFromId The id of the existing DataSnowflakeResourceMonitors that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/data-sources/resource_monitors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeResourceMonitors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_resource_monitors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/data-sources/resource_monitors snowflake_resource_monitors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeResourceMonitorsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeResourceMonitorsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_resource_monitors',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.82.0',
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

  // resource_monitors - computed: true, optional: false, required: false
  private _resourceMonitors = new DataSnowflakeResourceMonitorsResourceMonitorsList(this, "resource_monitors", false);
  public get resourceMonitors() {
    return this._resourceMonitors;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
