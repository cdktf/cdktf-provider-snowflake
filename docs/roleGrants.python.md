# `snowflake_role_grants`

Refer to the Terraform Registory for docs: [`snowflake_role_grants`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/role_grants).

# `roleGrants` Submodule <a name="`roleGrants` Submodule" id="@cdktf/provider-snowflake.roleGrants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RoleGrants <a name="RoleGrants" id="@cdktf/provider-snowflake.roleGrants.RoleGrants"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/role_grants snowflake_role_grants}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import role_grants

roleGrants.RoleGrants(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_name: str,
  enable_multiple_grants: typing.Union[bool, IResolvable] = None,
  id: str = None,
  roles: typing.List[str] = None,
  users: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | The name of the role we are granting. |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.enableMultipleGrants">enable_multiple_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to false, multiple grants of the same type cannot be created. |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/role_grants#id RoleGrants#id}. |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.roles">roles</a></code> | <code>typing.List[str]</code> | Grants role to this specified role. |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.users">users</a></code> | <code>typing.List[str]</code> | Grants role to this specified user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.roleName"></a>

- *Type:* str

The name of the role we are granting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/role_grants#role_name RoleGrants#role_name}

---

##### `enable_multiple_grants`<sup>Optional</sup> <a name="enable_multiple_grants" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.enableMultipleGrants"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to false, multiple grants of the same type cannot be created.

This will cause Terraform to revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/role_grants#enable_multiple_grants RoleGrants#enable_multiple_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/role_grants#id RoleGrants#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.roles"></a>

- *Type:* typing.List[str]

Grants role to this specified role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/role_grants#roles RoleGrants#roles}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.Initializer.parameter.users"></a>

- *Type:* typing.List[str]

Grants role to this specified user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/role_grants#users RoleGrants#users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.resetEnableMultipleGrants">reset_enable_multiple_grants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.resetUsers">reset_users</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_enable_multiple_grants` <a name="reset_enable_multiple_grants" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.resetEnableMultipleGrants"></a>

```python
def reset_enable_multiple_grants() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_users` <a name="reset_users" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.resetUsers"></a>

```python
def reset_users() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import role_grants

roleGrants.RoleGrants.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import role_grants

roleGrants.RoleGrants.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import role_grants

roleGrants.RoleGrants.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.enableMultipleGrantsInput">enable_multiple_grants_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.usersInput">users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.enableMultipleGrants">enable_multiple_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enable_multiple_grants_input`<sup>Optional</sup> <a name="enable_multiple_grants_input" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.enableMultipleGrantsInput"></a>

```python
enable_multiple_grants_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.usersInput"></a>

```python
users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_multiple_grants`<sup>Required</sup> <a name="enable_multiple_grants" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.enableMultipleGrants"></a>

```python
enable_multiple_grants: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrants.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.roleGrants.RoleGrants.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RoleGrantsConfig <a name="RoleGrantsConfig" id="@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import role_grants

roleGrants.RoleGrantsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_name: str,
  enable_multiple_grants: typing.Union[bool, IResolvable] = None,
  id: str = None,
  roles: typing.List[str] = None,
  users: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.roleName">role_name</a></code> | <code>str</code> | The name of the role we are granting. |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.enableMultipleGrants">enable_multiple_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to false, multiple grants of the same type cannot be created. |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/role_grants#id RoleGrants#id}. |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.roles">roles</a></code> | <code>typing.List[str]</code> | Grants role to this specified role. |
| <code><a href="#@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.users">users</a></code> | <code>typing.List[str]</code> | Grants role to this specified user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

The name of the role we are granting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/role_grants#role_name RoleGrants#role_name}

---

##### `enable_multiple_grants`<sup>Optional</sup> <a name="enable_multiple_grants" id="@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.enableMultipleGrants"></a>

```python
enable_multiple_grants: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to false, multiple grants of the same type cannot be created.

This will cause Terraform to revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/role_grants#enable_multiple_grants RoleGrants#enable_multiple_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/role_grants#id RoleGrants#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

Grants role to this specified role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/role_grants#roles RoleGrants#roles}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-snowflake.roleGrants.RoleGrantsConfig.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

Grants role to this specified user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/role_grants#users RoleGrants#users}

---



