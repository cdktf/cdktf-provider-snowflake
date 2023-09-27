# `snowflake_resource_monitor_grant`

Refer to the Terraform Registory for docs: [`snowflake_resource_monitor_grant`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor_grant).

# `resourceMonitorGrant` Submodule <a name="`resourceMonitorGrant` Submodule" id="@cdktf/provider-snowflake.resourceMonitorGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceMonitorGrant <a name="ResourceMonitorGrant" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor_grant snowflake_resource_monitor_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import resource_monitor_grant

resourceMonitorGrant.ResourceMonitorGrant(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  monitor_name: str,
  enable_multiple_grants: typing.Union[bool, IResolvable] = None,
  id: str = None,
  privilege: str = None,
  roles: typing.List[str] = None,
  with_grant_option: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.monitorName">monitor_name</a></code> | <code>str</code> | Identifier for the resource monitor; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.enableMultipleGrants">enable_multiple_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor_grant#id ResourceMonitorGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.privilege">privilege</a></code> | <code>str</code> | The privilege to grant on the resource monitor. To grant all privileges, use the value `ALL PRIVILEGES`. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.roles">roles</a></code> | <code>typing.List[str]</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.monitorName"></a>

- *Type:* str

Identifier for the resource monitor; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor_grant#monitor_name ResourceMonitorGrant#monitor_name}

---

##### `enable_multiple_grants`<sup>Optional</sup> <a name="enable_multiple_grants" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.enableMultipleGrants"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor_grant#enable_multiple_grants ResourceMonitorGrant#enable_multiple_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor_grant#id ResourceMonitorGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privilege`<sup>Optional</sup> <a name="privilege" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.privilege"></a>

- *Type:* str

The privilege to grant on the resource monitor. To grant all privileges, use the value `ALL PRIVILEGES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor_grant#privilege ResourceMonitorGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.roles"></a>

- *Type:* typing.List[str]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor_grant#roles ResourceMonitorGrant#roles}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.Initializer.parameter.withGrantOption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor_grant#with_grant_option ResourceMonitorGrant#with_grant_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetEnableMultipleGrants">reset_enable_multiple_grants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetPrivilege">reset_privilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetWithGrantOption">reset_with_grant_option</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_enable_multiple_grants` <a name="reset_enable_multiple_grants" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetEnableMultipleGrants"></a>

```python
def reset_enable_multiple_grants() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_privilege` <a name="reset_privilege" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetPrivilege"></a>

```python
def reset_privilege() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_with_grant_option` <a name="reset_with_grant_option" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.resetWithGrantOption"></a>

```python
def reset_with_grant_option() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import resource_monitor_grant

resourceMonitorGrant.ResourceMonitorGrant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import resource_monitor_grant

resourceMonitorGrant.ResourceMonitorGrant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import resource_monitor_grant

resourceMonitorGrant.ResourceMonitorGrant.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.enableMultipleGrantsInput">enable_multiple_grants_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.monitorNameInput">monitor_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.privilegeInput">privilege_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.withGrantOptionInput">with_grant_option_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.enableMultipleGrants">enable_multiple_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.monitorName">monitor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.privilege">privilege</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enable_multiple_grants_input`<sup>Optional</sup> <a name="enable_multiple_grants_input" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.enableMultipleGrantsInput"></a>

```python
enable_multiple_grants_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `monitor_name_input`<sup>Optional</sup> <a name="monitor_name_input" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.monitorNameInput"></a>

```python
monitor_name_input: str
```

- *Type:* str

---

##### `privilege_input`<sup>Optional</sup> <a name="privilege_input" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.privilegeInput"></a>

```python
privilege_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `with_grant_option_input`<sup>Optional</sup> <a name="with_grant_option_input" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.withGrantOptionInput"></a>

```python
with_grant_option_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_multiple_grants`<sup>Required</sup> <a name="enable_multiple_grants" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.enableMultipleGrants"></a>

```python
enable_multiple_grants: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.monitorName"></a>

```python
monitor_name: str
```

- *Type:* str

---

##### `privilege`<sup>Required</sup> <a name="privilege" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.privilege"></a>

```python
privilege: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `with_grant_option`<sup>Required</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.withGrantOption"></a>

```python
with_grant_option: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceMonitorGrantConfig <a name="ResourceMonitorGrantConfig" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import resource_monitor_grant

resourceMonitorGrant.ResourceMonitorGrantConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  monitor_name: str,
  enable_multiple_grants: typing.Union[bool, IResolvable] = None,
  id: str = None,
  privilege: str = None,
  roles: typing.List[str] = None,
  with_grant_option: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.monitorName">monitor_name</a></code> | <code>str</code> | Identifier for the resource monitor; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.enableMultipleGrants">enable_multiple_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor_grant#id ResourceMonitorGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.privilege">privilege</a></code> | <code>str</code> | The privilege to grant on the resource monitor. To grant all privileges, use the value `ALL PRIVILEGES`. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.roles">roles</a></code> | <code>typing.List[str]</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.monitorName"></a>

```python
monitor_name: str
```

- *Type:* str

Identifier for the resource monitor; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor_grant#monitor_name ResourceMonitorGrant#monitor_name}

---

##### `enable_multiple_grants`<sup>Optional</sup> <a name="enable_multiple_grants" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.enableMultipleGrants"></a>

```python
enable_multiple_grants: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor_grant#enable_multiple_grants ResourceMonitorGrant#enable_multiple_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor_grant#id ResourceMonitorGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privilege`<sup>Optional</sup> <a name="privilege" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.privilege"></a>

```python
privilege: str
```

- *Type:* str

The privilege to grant on the resource monitor. To grant all privileges, use the value `ALL PRIVILEGES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor_grant#privilege ResourceMonitorGrant#privilege}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor_grant#roles ResourceMonitorGrant#roles}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.resourceMonitorGrant.ResourceMonitorGrantConfig.property.withGrantOption"></a>

```python
with_grant_option: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.71.0/docs/resources/resource_monitor_grant#with_grant_option ResourceMonitorGrant#with_grant_option}

---



