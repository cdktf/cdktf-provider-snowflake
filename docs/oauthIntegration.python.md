# `snowflake_oauth_integration`

Refer to the Terraform Registory for docs: [`snowflake_oauth_integration`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration).

# `oauthIntegration` Submodule <a name="`oauthIntegration` Submodule" id="@cdktf/provider-snowflake.oauthIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthIntegration <a name="OauthIntegration" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration snowflake_oauth_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import oauth_integration

oauthIntegration.OauthIntegration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  oauth_client: str,
  blocked_roles_list: typing.List[str] = None,
  comment: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  oauth_client_type: str = None,
  oauth_issue_refresh_tokens: typing.Union[bool, IResolvable] = None,
  oauth_redirect_uri: str = None,
  oauth_refresh_token_validity: typing.Union[int, float] = None,
  oauth_use_secondary_roles: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.oauthClient">oauth_client</a></code> | <code>str</code> | Specifies the OAuth client type. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.blockedRolesList">blocked_roles_list</a></code> | <code>typing.List[str]</code> | List of roles that a user cannot explicitly consent to using after authenticating. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether this OAuth integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#id OauthIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.oauthClientType">oauth_client_type</a></code> | <code>str</code> | Specifies the type of client being registered. Snowflake supports both confidential and public clients. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.oauthIssueRefreshTokens">oauth_issue_refresh_tokens</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.oauthRedirectUri">oauth_redirect_uri</a></code> | <code>str</code> | Specifies the client URI. After a user is authenticated, the web browser is redirected to this URI. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.oauthRefreshTokenValidity">oauth_refresh_token_validity</a></code> | <code>typing.Union[int, float]</code> | Specifies how long refresh tokens should be valid (in seconds). OAUTH_ISSUE_REFRESH_TOKENS must be set to TRUE. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.oauthUseSecondaryRoles">oauth_use_secondary_roles</a></code> | <code>str</code> | Specifies whether default secondary roles set in the user properties are activated by default in the session being opened. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the OAuth integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#name OauthIntegration#name}

---

##### `oauth_client`<sup>Required</sup> <a name="oauth_client" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.oauthClient"></a>

- *Type:* str

Specifies the OAuth client type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_client OauthIntegration#oauth_client}

---

##### `blocked_roles_list`<sup>Optional</sup> <a name="blocked_roles_list" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.blockedRolesList"></a>

- *Type:* typing.List[str]

List of roles that a user cannot explicitly consent to using after authenticating.

Do not include ACCOUNTADMIN, ORGADMIN or SECURITYADMIN as they are already implicitly enforced and will cause in-place updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#blocked_roles_list OauthIntegration#blocked_roles_list}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the OAuth integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#comment OauthIntegration#comment}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether this OAuth integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#enabled OauthIntegration#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#id OauthIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauth_client_type`<sup>Optional</sup> <a name="oauth_client_type" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.oauthClientType"></a>

- *Type:* str

Specifies the type of client being registered. Snowflake supports both confidential and public clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_client_type OauthIntegration#oauth_client_type}

---

##### `oauth_issue_refresh_tokens`<sup>Optional</sup> <a name="oauth_issue_refresh_tokens" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.oauthIssueRefreshTokens"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_issue_refresh_tokens OauthIntegration#oauth_issue_refresh_tokens}

---

##### `oauth_redirect_uri`<sup>Optional</sup> <a name="oauth_redirect_uri" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.oauthRedirectUri"></a>

- *Type:* str

Specifies the client URI. After a user is authenticated, the web browser is redirected to this URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_redirect_uri OauthIntegration#oauth_redirect_uri}

---

##### `oauth_refresh_token_validity`<sup>Optional</sup> <a name="oauth_refresh_token_validity" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.oauthRefreshTokenValidity"></a>

- *Type:* typing.Union[int, float]

Specifies how long refresh tokens should be valid (in seconds). OAUTH_ISSUE_REFRESH_TOKENS must be set to TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_refresh_token_validity OauthIntegration#oauth_refresh_token_validity}

---

##### `oauth_use_secondary_roles`<sup>Optional</sup> <a name="oauth_use_secondary_roles" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.oauthUseSecondaryRoles"></a>

- *Type:* str

Specifies whether default secondary roles set in the user properties are activated by default in the session being opened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_use_secondary_roles OauthIntegration#oauth_use_secondary_roles}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetBlockedRolesList">reset_blocked_roles_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthClientType">reset_oauth_client_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthIssueRefreshTokens">reset_oauth_issue_refresh_tokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthRedirectUri">reset_oauth_redirect_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthRefreshTokenValidity">reset_oauth_refresh_token_validity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthUseSecondaryRoles">reset_oauth_use_secondary_roles</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_blocked_roles_list` <a name="reset_blocked_roles_list" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetBlockedRolesList"></a>

```python
def reset_blocked_roles_list() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_oauth_client_type` <a name="reset_oauth_client_type" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthClientType"></a>

```python
def reset_oauth_client_type() -> None
```

##### `reset_oauth_issue_refresh_tokens` <a name="reset_oauth_issue_refresh_tokens" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthIssueRefreshTokens"></a>

```python
def reset_oauth_issue_refresh_tokens() -> None
```

##### `reset_oauth_redirect_uri` <a name="reset_oauth_redirect_uri" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthRedirectUri"></a>

```python
def reset_oauth_redirect_uri() -> None
```

##### `reset_oauth_refresh_token_validity` <a name="reset_oauth_refresh_token_validity" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthRefreshTokenValidity"></a>

```python
def reset_oauth_refresh_token_validity() -> None
```

##### `reset_oauth_use_secondary_roles` <a name="reset_oauth_use_secondary_roles" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthUseSecondaryRoles"></a>

```python
def reset_oauth_use_secondary_roles() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import oauth_integration

oauthIntegration.OauthIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import oauth_integration

oauthIntegration.OauthIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import oauth_integration

oauthIntegration.OauthIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.blockedRolesListInput">blocked_roles_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientInput">oauth_client_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientTypeInput">oauth_client_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthIssueRefreshTokensInput">oauth_issue_refresh_tokens_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRedirectUriInput">oauth_redirect_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRefreshTokenValidityInput">oauth_refresh_token_validity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthUseSecondaryRolesInput">oauth_use_secondary_roles_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.blockedRolesList">blocked_roles_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClient">oauth_client</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientType">oauth_client_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthIssueRefreshTokens">oauth_issue_refresh_tokens</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRedirectUri">oauth_redirect_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRefreshTokenValidity">oauth_refresh_token_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthUseSecondaryRoles">oauth_use_secondary_roles</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `blocked_roles_list_input`<sup>Optional</sup> <a name="blocked_roles_list_input" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.blockedRolesListInput"></a>

```python
blocked_roles_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oauth_client_input`<sup>Optional</sup> <a name="oauth_client_input" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientInput"></a>

```python
oauth_client_input: str
```

- *Type:* str

---

##### `oauth_client_type_input`<sup>Optional</sup> <a name="oauth_client_type_input" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientTypeInput"></a>

```python
oauth_client_type_input: str
```

- *Type:* str

---

##### `oauth_issue_refresh_tokens_input`<sup>Optional</sup> <a name="oauth_issue_refresh_tokens_input" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthIssueRefreshTokensInput"></a>

```python
oauth_issue_refresh_tokens_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `oauth_redirect_uri_input`<sup>Optional</sup> <a name="oauth_redirect_uri_input" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRedirectUriInput"></a>

```python
oauth_redirect_uri_input: str
```

- *Type:* str

---

##### `oauth_refresh_token_validity_input`<sup>Optional</sup> <a name="oauth_refresh_token_validity_input" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRefreshTokenValidityInput"></a>

```python
oauth_refresh_token_validity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_use_secondary_roles_input`<sup>Optional</sup> <a name="oauth_use_secondary_roles_input" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthUseSecondaryRolesInput"></a>

```python
oauth_use_secondary_roles_input: str
```

- *Type:* str

---

##### `blocked_roles_list`<sup>Required</sup> <a name="blocked_roles_list" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.blockedRolesList"></a>

```python
blocked_roles_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oauth_client`<sup>Required</sup> <a name="oauth_client" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClient"></a>

```python
oauth_client: str
```

- *Type:* str

---

##### `oauth_client_type`<sup>Required</sup> <a name="oauth_client_type" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientType"></a>

```python
oauth_client_type: str
```

- *Type:* str

---

##### `oauth_issue_refresh_tokens`<sup>Required</sup> <a name="oauth_issue_refresh_tokens" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthIssueRefreshTokens"></a>

```python
oauth_issue_refresh_tokens: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `oauth_redirect_uri`<sup>Required</sup> <a name="oauth_redirect_uri" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRedirectUri"></a>

```python
oauth_redirect_uri: str
```

- *Type:* str

---

##### `oauth_refresh_token_validity`<sup>Required</sup> <a name="oauth_refresh_token_validity" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRefreshTokenValidity"></a>

```python
oauth_refresh_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_use_secondary_roles`<sup>Required</sup> <a name="oauth_use_secondary_roles" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthUseSecondaryRoles"></a>

```python
oauth_use_secondary_roles: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OauthIntegrationConfig <a name="OauthIntegrationConfig" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import oauth_integration

oauthIntegration.OauthIntegrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  oauth_client: str,
  blocked_roles_list: typing.List[str] = None,
  comment: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  oauth_client_type: str = None,
  oauth_issue_refresh_tokens: typing.Union[bool, IResolvable] = None,
  oauth_redirect_uri: str = None,
  oauth_refresh_token_validity: typing.Union[int, float] = None,
  oauth_use_secondary_roles: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthClient">oauth_client</a></code> | <code>str</code> | Specifies the OAuth client type. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.blockedRolesList">blocked_roles_list</a></code> | <code>typing.List[str]</code> | List of roles that a user cannot explicitly consent to using after authenticating. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether this OAuth integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#id OauthIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthClientType">oauth_client_type</a></code> | <code>str</code> | Specifies the type of client being registered. Snowflake supports both confidential and public clients. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthIssueRefreshTokens">oauth_issue_refresh_tokens</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthRedirectUri">oauth_redirect_uri</a></code> | <code>str</code> | Specifies the client URI. After a user is authenticated, the web browser is redirected to this URI. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthRefreshTokenValidity">oauth_refresh_token_validity</a></code> | <code>typing.Union[int, float]</code> | Specifies how long refresh tokens should be valid (in seconds). OAUTH_ISSUE_REFRESH_TOKENS must be set to TRUE. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthUseSecondaryRoles">oauth_use_secondary_roles</a></code> | <code>str</code> | Specifies whether default secondary roles set in the user properties are activated by default in the session being opened. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the OAuth integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#name OauthIntegration#name}

---

##### `oauth_client`<sup>Required</sup> <a name="oauth_client" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthClient"></a>

```python
oauth_client: str
```

- *Type:* str

Specifies the OAuth client type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_client OauthIntegration#oauth_client}

---

##### `blocked_roles_list`<sup>Optional</sup> <a name="blocked_roles_list" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.blockedRolesList"></a>

```python
blocked_roles_list: typing.List[str]
```

- *Type:* typing.List[str]

List of roles that a user cannot explicitly consent to using after authenticating.

Do not include ACCOUNTADMIN, ORGADMIN or SECURITYADMIN as they are already implicitly enforced and will cause in-place updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#blocked_roles_list OauthIntegration#blocked_roles_list}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the OAuth integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#comment OauthIntegration#comment}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether this OAuth integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#enabled OauthIntegration#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#id OauthIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauth_client_type`<sup>Optional</sup> <a name="oauth_client_type" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthClientType"></a>

```python
oauth_client_type: str
```

- *Type:* str

Specifies the type of client being registered. Snowflake supports both confidential and public clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_client_type OauthIntegration#oauth_client_type}

---

##### `oauth_issue_refresh_tokens`<sup>Optional</sup> <a name="oauth_issue_refresh_tokens" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthIssueRefreshTokens"></a>

```python
oauth_issue_refresh_tokens: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_issue_refresh_tokens OauthIntegration#oauth_issue_refresh_tokens}

---

##### `oauth_redirect_uri`<sup>Optional</sup> <a name="oauth_redirect_uri" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthRedirectUri"></a>

```python
oauth_redirect_uri: str
```

- *Type:* str

Specifies the client URI. After a user is authenticated, the web browser is redirected to this URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_redirect_uri OauthIntegration#oauth_redirect_uri}

---

##### `oauth_refresh_token_validity`<sup>Optional</sup> <a name="oauth_refresh_token_validity" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthRefreshTokenValidity"></a>

```python
oauth_refresh_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies how long refresh tokens should be valid (in seconds). OAUTH_ISSUE_REFRESH_TOKENS must be set to TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_refresh_token_validity OauthIntegration#oauth_refresh_token_validity}

---

##### `oauth_use_secondary_roles`<sup>Optional</sup> <a name="oauth_use_secondary_roles" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthUseSecondaryRoles"></a>

```python
oauth_use_secondary_roles: str
```

- *Type:* str

Specifies whether default secondary roles set in the user properties are activated by default in the session being opened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_use_secondary_roles OauthIntegration#oauth_use_secondary_roles}

---



