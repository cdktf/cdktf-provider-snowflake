# `snowflake_account`

Refer to the Terraform Registory for docs: [`snowflake_account`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account).

# `account` Submodule <a name="`account` Submodule" id="@cdktf/provider-snowflake.account"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Account <a name="Account" id="@cdktf/provider-snowflake.account.Account"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account snowflake_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.account.Account.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import account

account.Account(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_name: str,
  edition: str,
  email: str,
  name: str,
  admin_password: str = None,
  admin_rsa_public_key: str = None,
  comment: str = None,
  first_name: str = None,
  id: str = None,
  last_name: str = None,
  must_change_password: typing.Union[bool, IResolvable] = None,
  region: str = None,
  region_group: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminName">admin_name</a></code> | <code>str</code> | Login name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.edition">edition</a></code> | <code>str</code> | [Snowflake Edition](https://docs.snowflake.com/en/user-guide/intro-editions.html) of the account. Valid values are: STANDARD \| ENTERPRISE \| BUSINESS_CRITICAL. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.email">email</a></code> | <code>str</code> | Email address of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the account; must be unique within an organization, regardless of which Snowflake Region the account is in. In addition, the identifier must start with an alphabetic character and cannot contain spaces or special characters except for underscores (_). Note that if the account name includes underscores, features that do not accept account names with underscores (e.g. Okta SSO or SCIM) can reference a version of the account name that substitutes hyphens (-) for the underscores. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminPassword">admin_password</a></code> | <code>str</code> | Password for the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminRsaPublicKey">admin_rsa_public_key</a></code> | <code>str</code> | Assigns a public key to the initial administrative user of the account in order to implement [key pair authentication](https://docs.snowflake.com/en/sql-reference/sql/create-account.html#:~:text=key%20pair%20authentication) for the user. Optional if the `ADMIN_PASSWORD` parameter is specified. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.firstName">first_name</a></code> | <code>str</code> | First name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#id Account#id}. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.lastName">last_name</a></code> | <code>str</code> | Last name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.mustChangePassword">must_change_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the new user created to administer the account is forced to change their password upon first login into the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.region">region</a></code> | <code>str</code> | ID of the Snowflake Region where the account is created. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.regionGroup">region_group</a></code> | <code>str</code> | ID of the Snowflake Region where the account is created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_name`<sup>Required</sup> <a name="admin_name" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminName"></a>

- *Type:* str

Login name of the initial administrative user of the account.

A new user is created in the new account with this name and password and granted the ACCOUNTADMIN role in the account. A login name can be any string consisting of letters, numbers, and underscores. Login names are always case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#admin_name Account#admin_name}

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.edition"></a>

- *Type:* str

[Snowflake Edition](https://docs.snowflake.com/en/user-guide/intro-editions.html) of the account. Valid values are: STANDARD | ENTERPRISE | BUSINESS_CRITICAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#edition Account#edition}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.email"></a>

- *Type:* str

Email address of the initial administrative user of the account.

This email address is used to send any notifications about the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#email Account#email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier (i.e. name) for the account; must be unique within an organization, regardless of which Snowflake Region the account is in. In addition, the identifier must start with an alphabetic character and cannot contain spaces or special characters except for underscores (_). Note that if the account name includes underscores, features that do not accept account names with underscores (e.g. Okta SSO or SCIM) can reference a version of the account name that substitutes hyphens (-) for the underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#name Account#name}

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminPassword"></a>

- *Type:* str

Password for the initial administrative user of the account.

Optional if the `ADMIN_RSA_PUBLIC_KEY` parameter is specified. For more information about passwords in Snowflake, see [Snowflake-provided Password Policy](https://docs.snowflake.com/en/sql-reference/sql/create-account.html#:~:text=Snowflake%2Dprovided%20Password%20Policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#admin_password Account#admin_password}

---

##### `admin_rsa_public_key`<sup>Optional</sup> <a name="admin_rsa_public_key" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminRsaPublicKey"></a>

- *Type:* str

Assigns a public key to the initial administrative user of the account in order to implement [key pair authentication](https://docs.snowflake.com/en/sql-reference/sql/create-account.html#:~:text=key%20pair%20authentication) for the user. Optional if the `ADMIN_PASSWORD` parameter is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#admin_rsa_public_key Account#admin_rsa_public_key}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#comment Account#comment}

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.firstName"></a>

- *Type:* str

First name of the initial administrative user of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#first_name Account#first_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#id Account#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.lastName"></a>

- *Type:* str

Last name of the initial administrative user of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#last_name Account#last_name}

---

##### `must_change_password`<sup>Optional</sup> <a name="must_change_password" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.mustChangePassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the new user created to administer the account is forced to change their password upon first login into the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#must_change_password Account#must_change_password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.region"></a>

- *Type:* str

ID of the Snowflake Region where the account is created.

If no value is provided, Snowflake creates the account in the same Snowflake Region as the current account (i.e. the account in which the CREATE ACCOUNT statement is executed.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#region Account#region}

---

##### `region_group`<sup>Optional</sup> <a name="region_group" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.regionGroup"></a>

- *Type:* str

ID of the Snowflake Region where the account is created.

If no value is provided, Snowflake creates the account in the same Snowflake Region as the current account (i.e. the account in which the CREATE ACCOUNT statement is executed.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#region_group Account#region_group}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetAdminPassword">reset_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetAdminRsaPublicKey">reset_admin_rsa_public_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetMustChangePassword">reset_must_change_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetRegionGroup">reset_region_group</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.account.Account.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.account.Account.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.account.Account.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.account.Account.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.account.Account.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.account.Account.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.account.Account.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.account.Account.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.account.Account.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.account.Account.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.Account.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.account.Account.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.Account.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.account.Account.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.Account.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.account.Account.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.Account.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.account.Account.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.Account.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.account.Account.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.Account.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.account.Account.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.Account.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.account.Account.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.Account.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.account.Account.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.Account.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.account.Account.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.Account.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_admin_password` <a name="reset_admin_password" id="@cdktf/provider-snowflake.account.Account.resetAdminPassword"></a>

```python
def reset_admin_password() -> None
```

##### `reset_admin_rsa_public_key` <a name="reset_admin_rsa_public_key" id="@cdktf/provider-snowflake.account.Account.resetAdminRsaPublicKey"></a>

```python
def reset_admin_rsa_public_key() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.account.Account.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="@cdktf/provider-snowflake.account.Account.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.account.Account.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktf/provider-snowflake.account.Account.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_must_change_password` <a name="reset_must_change_password" id="@cdktf/provider-snowflake.account.Account.resetMustChangePassword"></a>

```python
def reset_must_change_password() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-snowflake.account.Account.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_region_group` <a name="reset_region_group" id="@cdktf/provider-snowflake.account.Account.resetRegionGroup"></a>

```python
def reset_region_group() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.account.Account.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import account

account.Account.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.account.Account.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.account.Account.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import account

account.Account.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.account.Account.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.account.Account.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import account

account.Account.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.account.Account.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.isOrgAdmin">is_org_admin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminNameInput">admin_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminRsaPublicKeyInput">admin_rsa_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.editionInput">edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.mustChangePasswordInput">must_change_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.regionGroupInput">region_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminName">admin_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminRsaPublicKey">admin_rsa_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.mustChangePassword">must_change_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.regionGroup">region_group</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.account.Account.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.account.Account.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.account.Account.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.account.Account.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.account.Account.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.account.Account.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.account.Account.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.account.Account.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.account.Account.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.account.Account.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.account.Account.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.account.Account.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.account.Account.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.account.Account.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `is_org_admin`<sup>Required</sup> <a name="is_org_admin" id="@cdktf/provider-snowflake.account.Account.property.isOrgAdmin"></a>

```python
is_org_admin: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `admin_name_input`<sup>Optional</sup> <a name="admin_name_input" id="@cdktf/provider-snowflake.account.Account.property.adminNameInput"></a>

```python
admin_name_input: str
```

- *Type:* str

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktf/provider-snowflake.account.Account.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `admin_rsa_public_key_input`<sup>Optional</sup> <a name="admin_rsa_public_key_input" id="@cdktf/provider-snowflake.account.Account.property.adminRsaPublicKeyInput"></a>

```python
admin_rsa_public_key_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.account.Account.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `edition_input`<sup>Optional</sup> <a name="edition_input" id="@cdktf/provider-snowflake.account.Account.property.editionInput"></a>

```python
edition_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-snowflake.account.Account.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-snowflake.account.Account.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.account.Account.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-snowflake.account.Account.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `must_change_password_input`<sup>Optional</sup> <a name="must_change_password_input" id="@cdktf/provider-snowflake.account.Account.property.mustChangePasswordInput"></a>

```python
must_change_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.account.Account.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_group_input`<sup>Optional</sup> <a name="region_group_input" id="@cdktf/provider-snowflake.account.Account.property.regionGroupInput"></a>

```python
region_group_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-snowflake.account.Account.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `admin_name`<sup>Required</sup> <a name="admin_name" id="@cdktf/provider-snowflake.account.Account.property.adminName"></a>

```python
admin_name: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-snowflake.account.Account.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `admin_rsa_public_key`<sup>Required</sup> <a name="admin_rsa_public_key" id="@cdktf/provider-snowflake.account.Account.property.adminRsaPublicKey"></a>

```python
admin_rsa_public_key: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.account.Account.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-snowflake.account.Account.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-snowflake.account.Account.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-snowflake.account.Account.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-snowflake.account.Account.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `must_change_password`<sup>Required</sup> <a name="must_change_password" id="@cdktf/provider-snowflake.account.Account.property.mustChangePassword"></a>

```python
must_change_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.account.Account.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-snowflake.account.Account.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `region_group`<sup>Required</sup> <a name="region_group" id="@cdktf/provider-snowflake.account.Account.property.regionGroup"></a>

```python
region_group: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.account.Account.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccountConfig <a name="AccountConfig" id="@cdktf/provider-snowflake.account.AccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.account.AccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import account

account.AccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admin_name: str,
  edition: str,
  email: str,
  name: str,
  admin_password: str = None,
  admin_rsa_public_key: str = None,
  comment: str = None,
  first_name: str = None,
  id: str = None,
  last_name: str = None,
  must_change_password: typing.Union[bool, IResolvable] = None,
  region: str = None,
  region_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.adminName">admin_name</a></code> | <code>str</code> | Login name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.edition">edition</a></code> | <code>str</code> | [Snowflake Edition](https://docs.snowflake.com/en/user-guide/intro-editions.html) of the account. Valid values are: STANDARD \| ENTERPRISE \| BUSINESS_CRITICAL. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.email">email</a></code> | <code>str</code> | Email address of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the account; must be unique within an organization, regardless of which Snowflake Region the account is in. In addition, the identifier must start with an alphabetic character and cannot contain spaces or special characters except for underscores (_). Note that if the account name includes underscores, features that do not accept account names with underscores (e.g. Okta SSO or SCIM) can reference a version of the account name that substitutes hyphens (-) for the underscores. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.adminPassword">admin_password</a></code> | <code>str</code> | Password for the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.adminRsaPublicKey">admin_rsa_public_key</a></code> | <code>str</code> | Assigns a public key to the initial administrative user of the account in order to implement [key pair authentication](https://docs.snowflake.com/en/sql-reference/sql/create-account.html#:~:text=key%20pair%20authentication) for the user. Optional if the `ADMIN_PASSWORD` parameter is specified. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.firstName">first_name</a></code> | <code>str</code> | First name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#id Account#id}. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.lastName">last_name</a></code> | <code>str</code> | Last name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.mustChangePassword">must_change_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the new user created to administer the account is forced to change their password upon first login into the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.region">region</a></code> | <code>str</code> | ID of the Snowflake Region where the account is created. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.regionGroup">region_group</a></code> | <code>str</code> | ID of the Snowflake Region where the account is created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.account.AccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.account.AccountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.account.AccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.account.AccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.account.AccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.account.AccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.account.AccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_name`<sup>Required</sup> <a name="admin_name" id="@cdktf/provider-snowflake.account.AccountConfig.property.adminName"></a>

```python
admin_name: str
```

- *Type:* str

Login name of the initial administrative user of the account.

A new user is created in the new account with this name and password and granted the ACCOUNTADMIN role in the account. A login name can be any string consisting of letters, numbers, and underscores. Login names are always case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#admin_name Account#admin_name}

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-snowflake.account.AccountConfig.property.edition"></a>

```python
edition: str
```

- *Type:* str

[Snowflake Edition](https://docs.snowflake.com/en/user-guide/intro-editions.html) of the account. Valid values are: STANDARD | ENTERPRISE | BUSINESS_CRITICAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#edition Account#edition}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-snowflake.account.AccountConfig.property.email"></a>

```python
email: str
```

- *Type:* str

Email address of the initial administrative user of the account.

This email address is used to send any notifications about the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#email Account#email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.account.AccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier (i.e. name) for the account; must be unique within an organization, regardless of which Snowflake Region the account is in. In addition, the identifier must start with an alphabetic character and cannot contain spaces or special characters except for underscores (_). Note that if the account name includes underscores, features that do not accept account names with underscores (e.g. Okta SSO or SCIM) can reference a version of the account name that substitutes hyphens (-) for the underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#name Account#name}

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-snowflake.account.AccountConfig.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Password for the initial administrative user of the account.

Optional if the `ADMIN_RSA_PUBLIC_KEY` parameter is specified. For more information about passwords in Snowflake, see [Snowflake-provided Password Policy](https://docs.snowflake.com/en/sql-reference/sql/create-account.html#:~:text=Snowflake%2Dprovided%20Password%20Policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#admin_password Account#admin_password}

---

##### `admin_rsa_public_key`<sup>Optional</sup> <a name="admin_rsa_public_key" id="@cdktf/provider-snowflake.account.AccountConfig.property.adminRsaPublicKey"></a>

```python
admin_rsa_public_key: str
```

- *Type:* str

Assigns a public key to the initial administrative user of the account in order to implement [key pair authentication](https://docs.snowflake.com/en/sql-reference/sql/create-account.html#:~:text=key%20pair%20authentication) for the user. Optional if the `ADMIN_PASSWORD` parameter is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#admin_rsa_public_key Account#admin_rsa_public_key}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.account.AccountConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#comment Account#comment}

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-snowflake.account.AccountConfig.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

First name of the initial administrative user of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#first_name Account#first_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.account.AccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#id Account#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-snowflake.account.AccountConfig.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Last name of the initial administrative user of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#last_name Account#last_name}

---

##### `must_change_password`<sup>Optional</sup> <a name="must_change_password" id="@cdktf/provider-snowflake.account.AccountConfig.property.mustChangePassword"></a>

```python
must_change_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the new user created to administer the account is forced to change their password upon first login into the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#must_change_password Account#must_change_password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-snowflake.account.AccountConfig.property.region"></a>

```python
region: str
```

- *Type:* str

ID of the Snowflake Region where the account is created.

If no value is provided, Snowflake creates the account in the same Snowflake Region as the current account (i.e. the account in which the CREATE ACCOUNT statement is executed.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#region Account#region}

---

##### `region_group`<sup>Optional</sup> <a name="region_group" id="@cdktf/provider-snowflake.account.AccountConfig.property.regionGroup"></a>

```python
region_group: str
```

- *Type:* str

ID of the Snowflake Region where the account is created.

If no value is provided, Snowflake creates the account in the same Snowflake Region as the current account (i.e. the account in which the CREATE ACCOUNT statement is executed.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/account#region_group Account#region_group}

---



