# `snowflake_user_ownership_grant`

Refer to the Terraform Registory for docs: [`snowflake_user_ownership_grant`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/resources/user_ownership_grant).

# `userOwnershipGrant` Submodule <a name="`userOwnershipGrant` Submodule" id="@cdktf/provider-snowflake.userOwnershipGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserOwnershipGrant <a name="UserOwnershipGrant" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/resources/user_ownership_grant snowflake_user_ownership_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import user_ownership_grant

userOwnershipGrant.UserOwnershipGrant(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  on_user_name: str,
  to_role_name: str,
  current_grants: str = None,
  id: str = None,
  revert_ownership_to_role_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.onUserName">on_user_name</a></code> | <code>str</code> | The name of the user ownership is granted on. |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.toRoleName">to_role_name</a></code> | <code>str</code> | The name of the role to grant ownership. |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.currentGrants">current_grants</a></code> | <code>str</code> | Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role. |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/resources/user_ownership_grant#id UserOwnershipGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.revertOwnershipToRoleName">revert_ownership_to_role_name</a></code> | <code>str</code> | The name of the role to revert ownership to on destroy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `on_user_name`<sup>Required</sup> <a name="on_user_name" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.onUserName"></a>

- *Type:* str

The name of the user ownership is granted on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/resources/user_ownership_grant#on_user_name UserOwnershipGrant#on_user_name}

---

##### `to_role_name`<sup>Required</sup> <a name="to_role_name" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.toRoleName"></a>

- *Type:* str

The name of the role to grant ownership.

Please ensure that the role that terraform is using is granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/resources/user_ownership_grant#to_role_name UserOwnershipGrant#to_role_name}

---

##### `current_grants`<sup>Optional</sup> <a name="current_grants" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.currentGrants"></a>

- *Type:* str

Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/resources/user_ownership_grant#current_grants UserOwnershipGrant#current_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/resources/user_ownership_grant#id UserOwnershipGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `revert_ownership_to_role_name`<sup>Optional</sup> <a name="revert_ownership_to_role_name" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.Initializer.parameter.revertOwnershipToRoleName"></a>

- *Type:* str

The name of the role to revert ownership to on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/resources/user_ownership_grant#revert_ownership_to_role_name UserOwnershipGrant#revert_ownership_to_role_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.resetCurrentGrants">reset_current_grants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.resetRevertOwnershipToRoleName">reset_revert_ownership_to_role_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_current_grants` <a name="reset_current_grants" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.resetCurrentGrants"></a>

```python
def reset_current_grants() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_revert_ownership_to_role_name` <a name="reset_revert_ownership_to_role_name" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.resetRevertOwnershipToRoleName"></a>

```python
def reset_revert_ownership_to_role_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import user_ownership_grant

userOwnershipGrant.UserOwnershipGrant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import user_ownership_grant

userOwnershipGrant.UserOwnershipGrant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import user_ownership_grant

userOwnershipGrant.UserOwnershipGrant.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.currentGrantsInput">current_grants_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.onUserNameInput">on_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.revertOwnershipToRoleNameInput">revert_ownership_to_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.toRoleNameInput">to_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.currentGrants">current_grants</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.onUserName">on_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.revertOwnershipToRoleName">revert_ownership_to_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.toRoleName">to_role_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `current_grants_input`<sup>Optional</sup> <a name="current_grants_input" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.currentGrantsInput"></a>

```python
current_grants_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `on_user_name_input`<sup>Optional</sup> <a name="on_user_name_input" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.onUserNameInput"></a>

```python
on_user_name_input: str
```

- *Type:* str

---

##### `revert_ownership_to_role_name_input`<sup>Optional</sup> <a name="revert_ownership_to_role_name_input" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.revertOwnershipToRoleNameInput"></a>

```python
revert_ownership_to_role_name_input: str
```

- *Type:* str

---

##### `to_role_name_input`<sup>Optional</sup> <a name="to_role_name_input" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.toRoleNameInput"></a>

```python
to_role_name_input: str
```

- *Type:* str

---

##### `current_grants`<sup>Required</sup> <a name="current_grants" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.currentGrants"></a>

```python
current_grants: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `on_user_name`<sup>Required</sup> <a name="on_user_name" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.onUserName"></a>

```python
on_user_name: str
```

- *Type:* str

---

##### `revert_ownership_to_role_name`<sup>Required</sup> <a name="revert_ownership_to_role_name" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.revertOwnershipToRoleName"></a>

```python
revert_ownership_to_role_name: str
```

- *Type:* str

---

##### `to_role_name`<sup>Required</sup> <a name="to_role_name" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.toRoleName"></a>

```python
to_role_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserOwnershipGrantConfig <a name="UserOwnershipGrantConfig" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import user_ownership_grant

userOwnershipGrant.UserOwnershipGrantConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  on_user_name: str,
  to_role_name: str,
  current_grants: str = None,
  id: str = None,
  revert_ownership_to_role_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.onUserName">on_user_name</a></code> | <code>str</code> | The name of the user ownership is granted on. |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.toRoleName">to_role_name</a></code> | <code>str</code> | The name of the role to grant ownership. |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.currentGrants">current_grants</a></code> | <code>str</code> | Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role. |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/resources/user_ownership_grant#id UserOwnershipGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.revertOwnershipToRoleName">revert_ownership_to_role_name</a></code> | <code>str</code> | The name of the role to revert ownership to on destroy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `on_user_name`<sup>Required</sup> <a name="on_user_name" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.onUserName"></a>

```python
on_user_name: str
```

- *Type:* str

The name of the user ownership is granted on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/resources/user_ownership_grant#on_user_name UserOwnershipGrant#on_user_name}

---

##### `to_role_name`<sup>Required</sup> <a name="to_role_name" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.toRoleName"></a>

```python
to_role_name: str
```

- *Type:* str

The name of the role to grant ownership.

Please ensure that the role that terraform is using is granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/resources/user_ownership_grant#to_role_name UserOwnershipGrant#to_role_name}

---

##### `current_grants`<sup>Optional</sup> <a name="current_grants" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.currentGrants"></a>

```python
current_grants: str
```

- *Type:* str

Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/resources/user_ownership_grant#current_grants UserOwnershipGrant#current_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/resources/user_ownership_grant#id UserOwnershipGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `revert_ownership_to_role_name`<sup>Optional</sup> <a name="revert_ownership_to_role_name" id="@cdktf/provider-snowflake.userOwnershipGrant.UserOwnershipGrantConfig.property.revertOwnershipToRoleName"></a>

```python
revert_ownership_to_role_name: str
```

- *Type:* str

The name of the role to revert ownership to on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs/resources/user_ownership_grant#revert_ownership_to_role_name UserOwnershipGrant#revert_ownership_to_role_name}

---



