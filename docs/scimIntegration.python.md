# `snowflake_scim_integration`

Refer to the Terraform Registory for docs: [`snowflake_scim_integration`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/scim_integration).

# `scimIntegration` Submodule <a name="`scimIntegration` Submodule" id="@cdktf/provider-snowflake.scimIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ScimIntegration <a name="ScimIntegration" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/scim_integration snowflake_scim_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import scim_integration

scimIntegration.ScimIntegration(
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
  provisioner_role: str,
  scim_client: str,
  id: str = None,
  network_policy: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the SCIM integration. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.provisionerRole">provisioner_role</a></code> | <code>str</code> | Specify the SCIM role in Snowflake that owns any users and roles that are imported from the identity provider into Snowflake using SCIM. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.scimClient">scim_client</a></code> | <code>str</code> | Specifies the client type for the scim integration. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/scim_integration#id ScimIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.networkPolicy">network_policy</a></code> | <code>str</code> | Specifies an existing network policy active for your account. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the SCIM integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/scim_integration#name ScimIntegration#name}

---

##### `provisioner_role`<sup>Required</sup> <a name="provisioner_role" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.provisionerRole"></a>

- *Type:* str

Specify the SCIM role in Snowflake that owns any users and roles that are imported from the identity provider into Snowflake using SCIM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/scim_integration#provisioner_role ScimIntegration#provisioner_role}

---

##### `scim_client`<sup>Required</sup> <a name="scim_client" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.scimClient"></a>

- *Type:* str

Specifies the client type for the scim integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/scim_integration#scim_client ScimIntegration#scim_client}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/scim_integration#id ScimIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_policy`<sup>Optional</sup> <a name="network_policy" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.Initializer.parameter.networkPolicy"></a>

- *Type:* str

Specifies an existing network policy active for your account.

The network policy restricts the list of user IP addresses when exchanging an authorization code for an access or refresh token and when using a refresh token to obtain a new access token. If this parameter is not set, the network policy for the account (if any) is used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/scim_integration#network_policy ScimIntegration#network_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.resetNetworkPolicy">reset_network_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network_policy` <a name="reset_network_policy" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.resetNetworkPolicy"></a>

```python
def reset_network_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import scim_integration

scimIntegration.ScimIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import scim_integration

scimIntegration.ScimIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import scim_integration

scimIntegration.ScimIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.networkPolicyInput">network_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.provisionerRoleInput">provisioner_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.scimClientInput">scim_client_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.networkPolicy">network_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.provisionerRole">provisioner_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.scimClient">scim_client</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_policy_input`<sup>Optional</sup> <a name="network_policy_input" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.networkPolicyInput"></a>

```python
network_policy_input: str
```

- *Type:* str

---

##### `provisioner_role_input`<sup>Optional</sup> <a name="provisioner_role_input" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.provisionerRoleInput"></a>

```python
provisioner_role_input: str
```

- *Type:* str

---

##### `scim_client_input`<sup>Optional</sup> <a name="scim_client_input" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.scimClientInput"></a>

```python
scim_client_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_policy`<sup>Required</sup> <a name="network_policy" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.networkPolicy"></a>

```python
network_policy: str
```

- *Type:* str

---

##### `provisioner_role`<sup>Required</sup> <a name="provisioner_role" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.provisionerRole"></a>

```python
provisioner_role: str
```

- *Type:* str

---

##### `scim_client`<sup>Required</sup> <a name="scim_client" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.scimClient"></a>

```python
scim_client: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ScimIntegrationConfig <a name="ScimIntegrationConfig" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import scim_integration

scimIntegration.ScimIntegrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  provisioner_role: str,
  scim_client: str,
  id: str = None,
  network_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the SCIM integration. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.provisionerRole">provisioner_role</a></code> | <code>str</code> | Specify the SCIM role in Snowflake that owns any users and roles that are imported from the identity provider into Snowflake using SCIM. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.scimClient">scim_client</a></code> | <code>str</code> | Specifies the client type for the scim integration. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/scim_integration#id ScimIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.networkPolicy">network_policy</a></code> | <code>str</code> | Specifies an existing network policy active for your account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the SCIM integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/scim_integration#name ScimIntegration#name}

---

##### `provisioner_role`<sup>Required</sup> <a name="provisioner_role" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.provisionerRole"></a>

```python
provisioner_role: str
```

- *Type:* str

Specify the SCIM role in Snowflake that owns any users and roles that are imported from the identity provider into Snowflake using SCIM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/scim_integration#provisioner_role ScimIntegration#provisioner_role}

---

##### `scim_client`<sup>Required</sup> <a name="scim_client" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.scimClient"></a>

```python
scim_client: str
```

- *Type:* str

Specifies the client type for the scim integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/scim_integration#scim_client ScimIntegration#scim_client}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/scim_integration#id ScimIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_policy`<sup>Optional</sup> <a name="network_policy" id="@cdktf/provider-snowflake.scimIntegration.ScimIntegrationConfig.property.networkPolicy"></a>

```python
network_policy: str
```

- *Type:* str

Specifies an existing network policy active for your account.

The network policy restricts the list of user IP addresses when exchanging an authorization code for an access or refresh token and when using a refresh token to obtain a new access token. If this parameter is not set, the network policy for the account (if any) is used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.61.0/docs/resources/scim_integration#network_policy ScimIntegration#network_policy}

---



