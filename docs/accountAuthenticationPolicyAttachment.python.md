# `accountAuthenticationPolicyAttachment` Submodule <a name="`accountAuthenticationPolicyAttachment` Submodule" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountAuthenticationPolicyAttachment <a name="AccountAuthenticationPolicyAttachment" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment snowflake_account_authentication_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import account_authentication_policy_attachment

accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication_policy: str,
  id: str = None,
  timeouts: AccountAuthenticationPolicyAttachmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.authenticationPolicy">authentication_policy</a></code> | <code>str</code> | Qualified name (`"db"."schema"."policy_name"`) of the authentication policy to apply to the current account. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#id AccountAuthenticationPolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts">AccountAuthenticationPolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `authentication_policy`<sup>Required</sup> <a name="authentication_policy" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.authenticationPolicy"></a>

- *Type:* str

Qualified name (`"db"."schema"."policy_name"`) of the authentication policy to apply to the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#authentication_policy AccountAuthenticationPolicyAttachment#authentication_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#id AccountAuthenticationPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts">AccountAuthenticationPolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#timeouts AccountAuthenticationPolicyAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#create AccountAuthenticationPolicyAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#delete AccountAuthenticationPolicyAttachment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#read AccountAuthenticationPolicyAttachment#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#update AccountAuthenticationPolicyAttachment#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AccountAuthenticationPolicyAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import account_authentication_policy_attachment

accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import account_authentication_policy_attachment

accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import account_authentication_policy_attachment

accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import account_authentication_policy_attachment

accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AccountAuthenticationPolicyAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccountAuthenticationPolicyAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccountAuthenticationPolicyAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccountAuthenticationPolicyAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference">AccountAuthenticationPolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.authenticationPolicyInput">authentication_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts">AccountAuthenticationPolicyAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.authenticationPolicy">authentication_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.timeouts"></a>

```python
timeouts: AccountAuthenticationPolicyAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference">AccountAuthenticationPolicyAttachmentTimeoutsOutputReference</a>

---

##### `authentication_policy_input`<sup>Optional</sup> <a name="authentication_policy_input" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.authenticationPolicyInput"></a>

```python
authentication_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | AccountAuthenticationPolicyAttachmentTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts">AccountAuthenticationPolicyAttachmentTimeouts</a>

---

##### `authentication_policy`<sup>Required</sup> <a name="authentication_policy" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.authenticationPolicy"></a>

```python
authentication_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccountAuthenticationPolicyAttachmentConfig <a name="AccountAuthenticationPolicyAttachmentConfig" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import account_authentication_policy_attachment

accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication_policy: str,
  id: str = None,
  timeouts: AccountAuthenticationPolicyAttachmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.authenticationPolicy">authentication_policy</a></code> | <code>str</code> | Qualified name (`"db"."schema"."policy_name"`) of the authentication policy to apply to the current account. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#id AccountAuthenticationPolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts">AccountAuthenticationPolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `authentication_policy`<sup>Required</sup> <a name="authentication_policy" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.authenticationPolicy"></a>

```python
authentication_policy: str
```

- *Type:* str

Qualified name (`"db"."schema"."policy_name"`) of the authentication policy to apply to the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#authentication_policy AccountAuthenticationPolicyAttachment#authentication_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#id AccountAuthenticationPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentConfig.property.timeouts"></a>

```python
timeouts: AccountAuthenticationPolicyAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts">AccountAuthenticationPolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#timeouts AccountAuthenticationPolicyAttachment#timeouts}

---

### AccountAuthenticationPolicyAttachmentTimeouts <a name="AccountAuthenticationPolicyAttachmentTimeouts" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import account_authentication_policy_attachment

accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#create AccountAuthenticationPolicyAttachment#create}. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#delete AccountAuthenticationPolicyAttachment#delete}. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#read AccountAuthenticationPolicyAttachment#read}. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#update AccountAuthenticationPolicyAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#create AccountAuthenticationPolicyAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#delete AccountAuthenticationPolicyAttachment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#read AccountAuthenticationPolicyAttachment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/account_authentication_policy_attachment#update AccountAuthenticationPolicyAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountAuthenticationPolicyAttachmentTimeoutsOutputReference <a name="AccountAuthenticationPolicyAttachmentTimeoutsOutputReference" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import account_authentication_policy_attachment

accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts">AccountAuthenticationPolicyAttachmentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AccountAuthenticationPolicyAttachmentTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.accountAuthenticationPolicyAttachment.AccountAuthenticationPolicyAttachmentTimeouts">AccountAuthenticationPolicyAttachmentTimeouts</a>

---



