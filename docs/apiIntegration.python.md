# `apiIntegration` Submodule <a name="`apiIntegration` Submodule" id="@cdktf/provider-snowflake.apiIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegration <a name="ApiIntegration" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration snowflake_api_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_integration

apiIntegration.ApiIntegration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_allowed_prefixes: typing.List[str],
  api_provider: str,
  name: str,
  api_aws_role_arn: str = None,
  api_blocked_prefixes: typing.List[str] = None,
  api_gcp_service_account: str = None,
  api_key: str = None,
  azure_ad_application_id: str = None,
  azure_tenant_id: str = None,
  comment: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  google_audience: str = None,
  id: str = None,
  timeouts: ApiIntegrationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service endpoints and resources within those proxies. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiProvider">api_provider</a></code> | <code>str</code> | Specifies the HTTPS proxy service type. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the API integration. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiAwsRoleArn">api_aws_role_arn</a></code> | <code>str</code> | (Default: ``) ARN of a cloud platform role. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiGcpServiceAccount">api_gcp_service_account</a></code> | <code>str</code> | The service account used for communication with the Google API Gateway. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiKey">api_key</a></code> | <code>str</code> | The API key (also called a “subscription key”). |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.azureAdApplicationId">azure_ad_application_id</a></code> | <code>str</code> | (Default: ``) The 'Application (client) id' of the Azure AD app for your remote service. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | (Default: ``) Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#comment ApiIntegration#comment}. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `true`) Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.googleAudience">google_audience</a></code> | <code>str</code> | (Default: ``) The audience claim when generating the JWT (JSON Web Token) to authenticate to the Google API Gateway. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#id ApiIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts">ApiIntegrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiAllowedPrefixes"></a>

- *Type:* typing.List[str]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service endpoints and resources within those proxies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#api_allowed_prefixes ApiIntegration#api_allowed_prefixes}

---

##### `api_provider`<sup>Required</sup> <a name="api_provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiProvider"></a>

- *Type:* str

Specifies the HTTPS proxy service type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#api_provider ApiIntegration#api_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the API integration.

This name follows the rules for Object Identifiers. The name should be unique among api integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#name ApiIntegration#name}

---

##### `api_aws_role_arn`<sup>Optional</sup> <a name="api_aws_role_arn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiAwsRoleArn"></a>

- *Type:* str

(Default: ``) ARN of a cloud platform role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#api_aws_role_arn ApiIntegration#api_aws_role_arn}

---

##### `api_blocked_prefixes`<sup>Optional</sup> <a name="api_blocked_prefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiBlockedPrefixes"></a>

- *Type:* typing.List[str]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#api_blocked_prefixes ApiIntegration#api_blocked_prefixes}

---

##### `api_gcp_service_account`<sup>Optional</sup> <a name="api_gcp_service_account" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiGcpServiceAccount"></a>

- *Type:* str

The service account used for communication with the Google API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#api_gcp_service_account ApiIntegration#api_gcp_service_account}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.apiKey"></a>

- *Type:* str

The API key (also called a “subscription key”).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#api_key ApiIntegration#api_key}

---

##### `azure_ad_application_id`<sup>Optional</sup> <a name="azure_ad_application_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.azureAdApplicationId"></a>

- *Type:* str

(Default: ``) The 'Application (client) id' of the Azure AD app for your remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#azure_ad_application_id ApiIntegration#azure_ad_application_id}

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.azureTenantId"></a>

- *Type:* str

(Default: ``) Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#azure_tenant_id ApiIntegration#azure_tenant_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#comment ApiIntegration#comment}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `true`) Specifies whether this API integration is enabled or disabled.

If the API integration is disabled, any external function that relies on it will not work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#enabled ApiIntegration#enabled}

---

##### `google_audience`<sup>Optional</sup> <a name="google_audience" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.googleAudience"></a>

- *Type:* str

(Default: ``) The audience claim when generating the JWT (JSON Web Token) to authenticate to the Google API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#google_audience ApiIntegration#google_audience}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#id ApiIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts">ApiIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#timeouts ApiIntegration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiAwsRoleArn">reset_api_aws_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiBlockedPrefixes">reset_api_blocked_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiGcpServiceAccount">reset_api_gcp_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetAzureAdApplicationId">reset_azure_ad_application_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetAzureTenantId">reset_azure_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetGoogleAudience">reset_google_audience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#create ApiIntegration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#delete ApiIntegration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#read ApiIntegration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#update ApiIntegration#update}.

---

##### `reset_api_aws_role_arn` <a name="reset_api_aws_role_arn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiAwsRoleArn"></a>

```python
def reset_api_aws_role_arn() -> None
```

##### `reset_api_blocked_prefixes` <a name="reset_api_blocked_prefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiBlockedPrefixes"></a>

```python
def reset_api_blocked_prefixes() -> None
```

##### `reset_api_gcp_service_account` <a name="reset_api_gcp_service_account" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiGcpServiceAccount"></a>

```python
def reset_api_gcp_service_account() -> None
```

##### `reset_api_key` <a name="reset_api_key" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_azure_ad_application_id` <a name="reset_azure_ad_application_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetAzureAdApplicationId"></a>

```python
def reset_azure_ad_application_id() -> None
```

##### `reset_azure_tenant_id` <a name="reset_azure_tenant_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetAzureTenantId"></a>

```python
def reset_azure_tenant_id() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_google_audience` <a name="reset_google_audience" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetGoogleAudience"></a>

```python
def reset_google_audience() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApiIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import api_integration

apiIntegration.ApiIntegration.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import api_integration

apiIntegration.ApiIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import api_integration

apiIntegration.ApiIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import api_integration

apiIntegration.ApiIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApiIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsExternalId">api_aws_external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsIamUserArn">api_aws_iam_user_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureConsentUrl">azure_consent_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureMultiTenantAppName">azure_multi_tenant_app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference">ApiIntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAllowedPrefixesInput">api_allowed_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsRoleArnInput">api_aws_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiBlockedPrefixesInput">api_blocked_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiGcpServiceAccountInput">api_gcp_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiProviderInput">api_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureAdApplicationIdInput">azure_ad_application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureTenantIdInput">azure_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.googleAudienceInput">google_audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts">ApiIntegrationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsRoleArn">api_aws_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiGcpServiceAccount">api_gcp_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiProvider">api_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureAdApplicationId">azure_ad_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.googleAudience">google_audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_aws_external_id`<sup>Required</sup> <a name="api_aws_external_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsExternalId"></a>

```python
api_aws_external_id: str
```

- *Type:* str

---

##### `api_aws_iam_user_arn`<sup>Required</sup> <a name="api_aws_iam_user_arn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsIamUserArn"></a>

```python
api_aws_iam_user_arn: str
```

- *Type:* str

---

##### `azure_consent_url`<sup>Required</sup> <a name="azure_consent_url" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureConsentUrl"></a>

```python
azure_consent_url: str
```

- *Type:* str

---

##### `azure_multi_tenant_app_name`<sup>Required</sup> <a name="azure_multi_tenant_app_name" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureMultiTenantAppName"></a>

```python
azure_multi_tenant_app_name: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.timeouts"></a>

```python
timeouts: ApiIntegrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference">ApiIntegrationTimeoutsOutputReference</a>

---

##### `api_allowed_prefixes_input`<sup>Optional</sup> <a name="api_allowed_prefixes_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAllowedPrefixesInput"></a>

```python
api_allowed_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_aws_role_arn_input`<sup>Optional</sup> <a name="api_aws_role_arn_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsRoleArnInput"></a>

```python
api_aws_role_arn_input: str
```

- *Type:* str

---

##### `api_blocked_prefixes_input`<sup>Optional</sup> <a name="api_blocked_prefixes_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiBlockedPrefixesInput"></a>

```python
api_blocked_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_gcp_service_account_input`<sup>Optional</sup> <a name="api_gcp_service_account_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiGcpServiceAccountInput"></a>

```python
api_gcp_service_account_input: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `api_provider_input`<sup>Optional</sup> <a name="api_provider_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiProviderInput"></a>

```python
api_provider_input: str
```

- *Type:* str

---

##### `azure_ad_application_id_input`<sup>Optional</sup> <a name="azure_ad_application_id_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureAdApplicationIdInput"></a>

```python
azure_ad_application_id_input: str
```

- *Type:* str

---

##### `azure_tenant_id_input`<sup>Optional</sup> <a name="azure_tenant_id_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureTenantIdInput"></a>

```python
azure_tenant_id_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `google_audience_input`<sup>Optional</sup> <a name="google_audience_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.googleAudienceInput"></a>

```python
google_audience_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApiIntegrationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts">ApiIntegrationTimeouts</a>]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAllowedPrefixes"></a>

```python
api_allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_aws_role_arn`<sup>Required</sup> <a name="api_aws_role_arn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiAwsRoleArn"></a>

```python
api_aws_role_arn: str
```

- *Type:* str

---

##### `api_blocked_prefixes`<sup>Required</sup> <a name="api_blocked_prefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiBlockedPrefixes"></a>

```python
api_blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_gcp_service_account`<sup>Required</sup> <a name="api_gcp_service_account" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiGcpServiceAccount"></a>

```python
api_gcp_service_account: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `api_provider`<sup>Required</sup> <a name="api_provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.apiProvider"></a>

```python
api_provider: str
```

- *Type:* str

---

##### `azure_ad_application_id`<sup>Required</sup> <a name="azure_ad_application_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureAdApplicationId"></a>

```python
azure_ad_application_id: str
```

- *Type:* str

---

##### `azure_tenant_id`<sup>Required</sup> <a name="azure_tenant_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `google_audience`<sup>Required</sup> <a name="google_audience" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.googleAudience"></a>

```python
google_audience: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationConfig <a name="ApiIntegrationConfig" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_integration

apiIntegration.ApiIntegrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_allowed_prefixes: typing.List[str],
  api_provider: str,
  name: str,
  api_aws_role_arn: str = None,
  api_blocked_prefixes: typing.List[str] = None,
  api_gcp_service_account: str = None,
  api_key: str = None,
  azure_ad_application_id: str = None,
  azure_tenant_id: str = None,
  comment: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  google_audience: str = None,
  id: str = None,
  timeouts: ApiIntegrationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service endpoints and resources within those proxies. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiProvider">api_provider</a></code> | <code>str</code> | Specifies the HTTPS proxy service type. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the API integration. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiAwsRoleArn">api_aws_role_arn</a></code> | <code>str</code> | (Default: ``) ARN of a cloud platform role. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiGcpServiceAccount">api_gcp_service_account</a></code> | <code>str</code> | The service account used for communication with the Google API Gateway. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiKey">api_key</a></code> | <code>str</code> | The API key (also called a “subscription key”). |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.azureAdApplicationId">azure_ad_application_id</a></code> | <code>str</code> | (Default: ``) The 'Application (client) id' of the Azure AD app for your remote service. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | (Default: ``) Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#comment ApiIntegration#comment}. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `true`) Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.googleAudience">google_audience</a></code> | <code>str</code> | (Default: ``) The audience claim when generating the JWT (JSON Web Token) to authenticate to the Google API Gateway. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#id ApiIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts">ApiIntegrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiAllowedPrefixes"></a>

```python
api_allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service endpoints and resources within those proxies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#api_allowed_prefixes ApiIntegration#api_allowed_prefixes}

---

##### `api_provider`<sup>Required</sup> <a name="api_provider" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiProvider"></a>

```python
api_provider: str
```

- *Type:* str

Specifies the HTTPS proxy service type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#api_provider ApiIntegration#api_provider}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the API integration.

This name follows the rules for Object Identifiers. The name should be unique among api integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#name ApiIntegration#name}

---

##### `api_aws_role_arn`<sup>Optional</sup> <a name="api_aws_role_arn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiAwsRoleArn"></a>

```python
api_aws_role_arn: str
```

- *Type:* str

(Default: ``) ARN of a cloud platform role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#api_aws_role_arn ApiIntegration#api_aws_role_arn}

---

##### `api_blocked_prefixes`<sup>Optional</sup> <a name="api_blocked_prefixes" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiBlockedPrefixes"></a>

```python
api_blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#api_blocked_prefixes ApiIntegration#api_blocked_prefixes}

---

##### `api_gcp_service_account`<sup>Optional</sup> <a name="api_gcp_service_account" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiGcpServiceAccount"></a>

```python
api_gcp_service_account: str
```

- *Type:* str

The service account used for communication with the Google API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#api_gcp_service_account ApiIntegration#api_gcp_service_account}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

The API key (also called a “subscription key”).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#api_key ApiIntegration#api_key}

---

##### `azure_ad_application_id`<sup>Optional</sup> <a name="azure_ad_application_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.azureAdApplicationId"></a>

```python
azure_ad_application_id: str
```

- *Type:* str

(Default: ``) The 'Application (client) id' of the Azure AD app for your remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#azure_ad_application_id ApiIntegration#azure_ad_application_id}

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

(Default: ``) Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#azure_tenant_id ApiIntegration#azure_tenant_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#comment ApiIntegration#comment}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `true`) Specifies whether this API integration is enabled or disabled.

If the API integration is disabled, any external function that relies on it will not work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#enabled ApiIntegration#enabled}

---

##### `google_audience`<sup>Optional</sup> <a name="google_audience" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.googleAudience"></a>

```python
google_audience: str
```

- *Type:* str

(Default: ``) The audience claim when generating the JWT (JSON Web Token) to authenticate to the Google API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#google_audience ApiIntegration#google_audience}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#id ApiIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationConfig.property.timeouts"></a>

```python
timeouts: ApiIntegrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts">ApiIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#timeouts ApiIntegration#timeouts}

---

### ApiIntegrationTimeouts <a name="ApiIntegrationTimeouts" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_integration

apiIntegration.ApiIntegrationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#create ApiIntegration#create}. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#delete ApiIntegration#delete}. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#read ApiIntegration#read}. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#update ApiIntegration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#create ApiIntegration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#delete ApiIntegration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#read ApiIntegration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_integration#update ApiIntegration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationTimeoutsOutputReference <a name="ApiIntegrationTimeoutsOutputReference" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_integration

apiIntegration.ApiIntegrationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts">ApiIntegrationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiIntegrationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.apiIntegration.ApiIntegrationTimeouts">ApiIntegrationTimeouts</a>]

---



