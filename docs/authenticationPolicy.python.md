# `authenticationPolicy` Submodule <a name="`authenticationPolicy` Submodule" id="@cdktf/provider-snowflake.authenticationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticationPolicy <a name="AuthenticationPolicy" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy snowflake_authentication_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import authentication_policy

authenticationPolicy.AuthenticationPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  name: str,
  schema: str,
  authentication_methods: typing.List[str] = None,
  client_types: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  mfa_authentication_methods: typing.List[str] = None,
  mfa_enrollment: str = None,
  security_integrations: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.authenticationMethods">authentication_methods</a></code> | <code>typing.List[str]</code> | A list of authentication methods that are allowed during login. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.clientTypes">client_types</a></code> | <code>typing.List[str]</code> | A list of clients that can authenticate with Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#id AuthenticationPolicy#id}. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.mfaAuthenticationMethods">mfa_authentication_methods</a></code> | <code>typing.List[str]</code> | A list of authentication methods that enforce multi-factor authentication (MFA) during login. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.mfaEnrollment">mfa_enrollment</a></code> | <code>str</code> | Determines whether a user must enroll in multi-factor authentication. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.securityIntegrations">security_integrations</a></code> | <code>typing.List[str]</code> | A list of security integrations the authentication policy is associated with. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#database AuthenticationPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#name AuthenticationPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#schema AuthenticationPolicy#schema}

---

##### `authentication_methods`<sup>Optional</sup> <a name="authentication_methods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.authenticationMethods"></a>

- *Type:* typing.List[str]

A list of authentication methods that are allowed during login.

This parameter accepts one or more of the following values: `ALL` | `SAML` | `PASSWORD` | `OAUTH` | `KEYPAIR`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#authentication_methods AuthenticationPolicy#authentication_methods}

---

##### `client_types`<sup>Optional</sup> <a name="client_types" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.clientTypes"></a>

- *Type:* typing.List[str]

A list of clients that can authenticate with Snowflake.

If a client tries to connect, and the client is not one of the valid CLIENT_TYPES, then the login attempt fails. Allowed values are `ALL` | `SNOWFLAKE_UI` | `DRIVERS` | `SNOWSQL`. The CLIENT_TYPES property of an authentication policy is a best effort method to block user logins based on specific clients. It should not be used as the sole control to establish a security boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#client_types AuthenticationPolicy#client_types}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#comment AuthenticationPolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#id AuthenticationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mfa_authentication_methods`<sup>Optional</sup> <a name="mfa_authentication_methods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.mfaAuthenticationMethods"></a>

- *Type:* typing.List[str]

A list of authentication methods that enforce multi-factor authentication (MFA) during login.

Authentication methods not listed in this parameter do not prompt for multi-factor authentication. Allowed values are `ALL` | `SAML` | `PASSWORD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#mfa_authentication_methods AuthenticationPolicy#mfa_authentication_methods}

---

##### `mfa_enrollment`<sup>Optional</sup> <a name="mfa_enrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.mfaEnrollment"></a>

- *Type:* str

Determines whether a user must enroll in multi-factor authentication.

Allowed values are REQUIRED and OPTIONAL. When REQUIRED is specified, Enforces users to enroll in MFA. If this value is used, then the CLIENT_TYPES parameter must include SNOWFLAKE_UI, because Snowsight is the only place users can enroll in multi-factor authentication (MFA).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#mfa_enrollment AuthenticationPolicy#mfa_enrollment}

---

##### `security_integrations`<sup>Optional</sup> <a name="security_integrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.securityIntegrations"></a>

- *Type:* typing.List[str]

A list of security integrations the authentication policy is associated with.

This parameter has no effect when SAML or OAUTH are not in the AUTHENTICATION_METHODS list. All values in the SECURITY_INTEGRATIONS list must be compatible with the values in the AUTHENTICATION_METHODS list. For example, if SECURITY_INTEGRATIONS contains a SAML security integration, and AUTHENTICATION_METHODS contains OAUTH, then you cannot create the authentication policy. To allow all security integrations use ALL as parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#security_integrations AuthenticationPolicy#security_integrations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetAuthenticationMethods">reset_authentication_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetClientTypes">reset_client_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaAuthenticationMethods">reset_mfa_authentication_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaEnrollment">reset_mfa_enrollment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetSecurityIntegrations">reset_security_integrations</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_authentication_methods` <a name="reset_authentication_methods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetAuthenticationMethods"></a>

```python
def reset_authentication_methods() -> None
```

##### `reset_client_types` <a name="reset_client_types" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetClientTypes"></a>

```python
def reset_client_types() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mfa_authentication_methods` <a name="reset_mfa_authentication_methods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaAuthenticationMethods"></a>

```python
def reset_mfa_authentication_methods() -> None
```

##### `reset_mfa_enrollment` <a name="reset_mfa_enrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaEnrollment"></a>

```python
def reset_mfa_enrollment() -> None
```

##### `reset_security_integrations` <a name="reset_security_integrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetSecurityIntegrations"></a>

```python
def reset_security_integrations() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AuthenticationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import authentication_policy

authenticationPolicy.AuthenticationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import authentication_policy

authenticationPolicy.AuthenticationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import authentication_policy

authenticationPolicy.AuthenticationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import authentication_policy

authenticationPolicy.AuthenticationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AuthenticationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AuthenticationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AuthenticationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuthenticationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList">AuthenticationPolicyDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList">AuthenticationPolicyShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethodsInput">authentication_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypesInput">client_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethodsInput">mfa_authentication_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollmentInput">mfa_enrollment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrationsInput">security_integrations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethods">authentication_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypes">client_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethods">mfa_authentication_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollment">mfa_enrollment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrations">security_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.describeOutput"></a>

```python
describe_output: AuthenticationPolicyDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList">AuthenticationPolicyDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.showOutput"></a>

```python
show_output: AuthenticationPolicyShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList">AuthenticationPolicyShowOutputList</a>

---

##### `authentication_methods_input`<sup>Optional</sup> <a name="authentication_methods_input" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethodsInput"></a>

```python
authentication_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_types_input`<sup>Optional</sup> <a name="client_types_input" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypesInput"></a>

```python
client_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mfa_authentication_methods_input`<sup>Optional</sup> <a name="mfa_authentication_methods_input" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethodsInput"></a>

```python
mfa_authentication_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mfa_enrollment_input`<sup>Optional</sup> <a name="mfa_enrollment_input" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollmentInput"></a>

```python
mfa_enrollment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `security_integrations_input`<sup>Optional</sup> <a name="security_integrations_input" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrationsInput"></a>

```python
security_integrations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authentication_methods`<sup>Required</sup> <a name="authentication_methods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethods"></a>

```python
authentication_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_types`<sup>Required</sup> <a name="client_types" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypes"></a>

```python
client_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mfa_authentication_methods`<sup>Required</sup> <a name="mfa_authentication_methods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethods"></a>

```python
mfa_authentication_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mfa_enrollment`<sup>Required</sup> <a name="mfa_enrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollment"></a>

```python
mfa_enrollment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `security_integrations`<sup>Required</sup> <a name="security_integrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrations"></a>

```python
security_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticationPolicyConfig <a name="AuthenticationPolicyConfig" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import authentication_policy

authenticationPolicy.AuthenticationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  name: str,
  schema: str,
  authentication_methods: typing.List[str] = None,
  client_types: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  mfa_authentication_methods: typing.List[str] = None,
  mfa_enrollment: str = None,
  security_integrations: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.authenticationMethods">authentication_methods</a></code> | <code>typing.List[str]</code> | A list of authentication methods that are allowed during login. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.clientTypes">client_types</a></code> | <code>typing.List[str]</code> | A list of clients that can authenticate with Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the authentication policy. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#id AuthenticationPolicy#id}. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaAuthenticationMethods">mfa_authentication_methods</a></code> | <code>typing.List[str]</code> | A list of authentication methods that enforce multi-factor authentication (MFA) during login. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaEnrollment">mfa_enrollment</a></code> | <code>str</code> | Determines whether a user must enroll in multi-factor authentication. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.securityIntegrations">security_integrations</a></code> | <code>typing.List[str]</code> | A list of security integrations the authentication policy is associated with. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#database AuthenticationPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#name AuthenticationPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#schema AuthenticationPolicy#schema}

---

##### `authentication_methods`<sup>Optional</sup> <a name="authentication_methods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.authenticationMethods"></a>

```python
authentication_methods: typing.List[str]
```

- *Type:* typing.List[str]

A list of authentication methods that are allowed during login.

This parameter accepts one or more of the following values: `ALL` | `SAML` | `PASSWORD` | `OAUTH` | `KEYPAIR`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#authentication_methods AuthenticationPolicy#authentication_methods}

---

##### `client_types`<sup>Optional</sup> <a name="client_types" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.clientTypes"></a>

```python
client_types: typing.List[str]
```

- *Type:* typing.List[str]

A list of clients that can authenticate with Snowflake.

If a client tries to connect, and the client is not one of the valid CLIENT_TYPES, then the login attempt fails. Allowed values are `ALL` | `SNOWFLAKE_UI` | `DRIVERS` | `SNOWSQL`. The CLIENT_TYPES property of an authentication policy is a best effort method to block user logins based on specific clients. It should not be used as the sole control to establish a security boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#client_types AuthenticationPolicy#client_types}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#comment AuthenticationPolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#id AuthenticationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mfa_authentication_methods`<sup>Optional</sup> <a name="mfa_authentication_methods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaAuthenticationMethods"></a>

```python
mfa_authentication_methods: typing.List[str]
```

- *Type:* typing.List[str]

A list of authentication methods that enforce multi-factor authentication (MFA) during login.

Authentication methods not listed in this parameter do not prompt for multi-factor authentication. Allowed values are `ALL` | `SAML` | `PASSWORD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#mfa_authentication_methods AuthenticationPolicy#mfa_authentication_methods}

---

##### `mfa_enrollment`<sup>Optional</sup> <a name="mfa_enrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaEnrollment"></a>

```python
mfa_enrollment: str
```

- *Type:* str

Determines whether a user must enroll in multi-factor authentication.

Allowed values are REQUIRED and OPTIONAL. When REQUIRED is specified, Enforces users to enroll in MFA. If this value is used, then the CLIENT_TYPES parameter must include SNOWFLAKE_UI, because Snowsight is the only place users can enroll in multi-factor authentication (MFA).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#mfa_enrollment AuthenticationPolicy#mfa_enrollment}

---

##### `security_integrations`<sup>Optional</sup> <a name="security_integrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.securityIntegrations"></a>

```python
security_integrations: typing.List[str]
```

- *Type:* typing.List[str]

A list of security integrations the authentication policy is associated with.

This parameter has no effect when SAML or OAUTH are not in the AUTHENTICATION_METHODS list. All values in the SECURITY_INTEGRATIONS list must be compatible with the values in the AUTHENTICATION_METHODS list. For example, if SECURITY_INTEGRATIONS contains a SAML security integration, and AUTHENTICATION_METHODS contains OAUTH, then you cannot create the authentication policy. To allow all security integrations use ALL as parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/authentication_policy#security_integrations AuthenticationPolicy#security_integrations}

---

### AuthenticationPolicyDescribeOutput <a name="AuthenticationPolicyDescribeOutput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import authentication_policy

authenticationPolicy.AuthenticationPolicyDescribeOutput()
```


### AuthenticationPolicyShowOutput <a name="AuthenticationPolicyShowOutput" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import authentication_policy

authenticationPolicy.AuthenticationPolicyShowOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### AuthenticationPolicyDescribeOutputList <a name="AuthenticationPolicyDescribeOutputList" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import authentication_policy

authenticationPolicy.AuthenticationPolicyDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuthenticationPolicyDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AuthenticationPolicyDescribeOutputOutputReference <a name="AuthenticationPolicyDescribeOutputOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import authentication_policy

authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.authenticationMethods">authentication_methods</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.clientTypes">client_types</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaAuthenticationMethods">mfa_authentication_methods</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaEnrollment">mfa_enrollment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.securityIntegrations">security_integrations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput">AuthenticationPolicyDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_methods`<sup>Required</sup> <a name="authentication_methods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.authenticationMethods"></a>

```python
authentication_methods: str
```

- *Type:* str

---

##### `client_types`<sup>Required</sup> <a name="client_types" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.clientTypes"></a>

```python
client_types: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `mfa_authentication_methods`<sup>Required</sup> <a name="mfa_authentication_methods" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaAuthenticationMethods"></a>

```python
mfa_authentication_methods: str
```

- *Type:* str

---

##### `mfa_enrollment`<sup>Required</sup> <a name="mfa_enrollment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaEnrollment"></a>

```python
mfa_enrollment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `security_integrations`<sup>Required</sup> <a name="security_integrations" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.securityIntegrations"></a>

```python
security_integrations: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: AuthenticationPolicyDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput">AuthenticationPolicyDescribeOutput</a>

---


### AuthenticationPolicyShowOutputList <a name="AuthenticationPolicyShowOutputList" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import authentication_policy

authenticationPolicy.AuthenticationPolicyShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuthenticationPolicyShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AuthenticationPolicyShowOutputOutputReference <a name="AuthenticationPolicyShowOutputOutputReference" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import authentication_policy

authenticationPolicy.AuthenticationPolicyShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.options">options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput">AuthenticationPolicyShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.options"></a>

```python
options: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: AuthenticationPolicyShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput">AuthenticationPolicyShowOutput</a>

---



