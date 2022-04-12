// https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeSystemGetAwsSnsIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Amazon Resource Name (ARN) of the SNS topic for your S3 bucket
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy#aws_sns_topic_arn DataSnowflakeSystemGetAwsSnsIamPolicy#aws_sns_topic_arn}
  */
  readonly awsSnsTopicArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy snowflake_system_get_aws_sns_iam_policy}
*/
export class DataSnowflakeSystemGetAwsSnsIamPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_system_get_aws_sns_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy snowflake_system_get_aws_sns_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeSystemGetAwsSnsIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeSystemGetAwsSnsIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_system_get_aws_sns_iam_policy',
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
    this._awsSnsTopicArn = config.awsSnsTopicArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_sns_topic_arn - computed: false, optional: false, required: true
  private _awsSnsTopicArn?: string; 
  public get awsSnsTopicArn() {
    return this.getStringAttribute('aws_sns_topic_arn');
  }
  public set awsSnsTopicArn(value: string) {
    this._awsSnsTopicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSnsTopicArnInput() {
    return this._awsSnsTopicArn;
  }

  // aws_sns_topic_policy_json - computed: true, optional: false, required: false
  public get awsSnsTopicPolicyJson() {
    return this.getStringAttribute('aws_sns_topic_policy_json');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_sns_topic_arn: cdktf.stringToTerraform(this._awsSnsTopicArn),
    };
  }
}
