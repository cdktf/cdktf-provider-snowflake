# `account` Submodule <a name="`account` Submodule" id="@cdktf/provider-snowflake.account"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Account <a name="Account" id="@cdktf/provider-snowflake.account.Account"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account snowflake_account}.

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
  grace_period_in_days: typing.Union[int, float],
  name: str,
  admin_password: str = None,
  admin_rsa_public_key: str = None,
  admin_user_type: str = None,
  comment: str = None,
  first_name: str = None,
  id: str = None,
  is_org_admin: str = None,
  last_name: str = None,
  must_change_password: str = None,
  region: str = None,
  region_group: str = None,
  timeouts: AccountTimeouts = None
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
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.edition">edition</a></code> | <code>str</code> | Snowflake Edition of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.email">email</a></code> | <code>str</code> | Email address of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.gracePeriodInDays">grace_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of days during which the account can be restored (“undropped”). |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the account. It must be unique within an organization, regardless of which Snowflake Region the account is in and must start with an alphabetic character and cannot contain spaces or special characters except for underscores (_). Note that if the account name includes underscores, features that do not accept account names with underscores (e.g. Okta SSO or SCIM) can reference a version of the account name that substitutes hyphens (-) for the underscores. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminPassword">admin_password</a></code> | <code>str</code> | Password for the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminRsaPublicKey">admin_rsa_public_key</a></code> | <code>str</code> | Assigns a public key to the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminUserType">admin_user_type</a></code> | <code>str</code> | Used for setting the type of the first user that is assigned the ACCOUNTADMIN role during account creation. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.firstName">first_name</a></code> | <code>str</code> | First name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#id Account#id}. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.isOrgAdmin">is_org_admin</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Sets an account property that determines whether the ORGADMIN role is enabled in the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.lastName">last_name</a></code> | <code>str</code> | Last name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.mustChangePassword">must_change_password</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the new user created to administer the account is forced to change their password upon first login into the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.region">region</a></code> | <code>str</code> | [Snowflake Region ID](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-snowflake-region-ids) of the region where the account is created. If no value is provided, Snowflake creates the account in the same Snowflake Region as the current account (i.e. the account in which the CREATE ACCOUNT statement is executed.). |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.regionGroup">region_group</a></code> | <code>str</code> | ID of the region group where the account is created. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.account.AccountTimeouts">AccountTimeouts</a></code> | timeouts block. |

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

A new user is created in the new account with this name and password and granted the ACCOUNTADMIN role in the account. A login name can be any string consisting of letters, numbers, and underscores. Login names are always case-insensitive. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#admin_name Account#admin_name}

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.edition"></a>

- *Type:* str

Snowflake Edition of the account.

See more about Snowflake Editions in the [official documentation](https://docs.snowflake.com/en/user-guide/intro-editions). Valid options are: `STANDARD` | `ENTERPRISE` | `BUSINESS_CRITICAL`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#edition Account#edition}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.email"></a>

- *Type:* str

Email address of the initial administrative user of the account.

This email address is used to send any notifications about the account. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#email Account#email}

---

##### `grace_period_in_days`<sup>Required</sup> <a name="grace_period_in_days" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.gracePeriodInDays"></a>

- *Type:* typing.Union[int, float]

Specifies the number of days during which the account can be restored (“undropped”).

The minimum is 3 days and the maximum is 90 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#grace_period_in_days Account#grace_period_in_days}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier (i.e. name) for the account. It must be unique within an organization, regardless of which Snowflake Region the account is in and must start with an alphabetic character and cannot contain spaces or special characters except for underscores (_). Note that if the account name includes underscores, features that do not accept account names with underscores (e.g. Okta SSO or SCIM) can reference a version of the account name that substitutes hyphens (-) for the underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#name Account#name}

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminPassword"></a>

- *Type:* str

Password for the initial administrative user of the account.

Either admin_password or admin_rsa_public_key has to be specified. This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#admin_password Account#admin_password}

---

##### `admin_rsa_public_key`<sup>Optional</sup> <a name="admin_rsa_public_key" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminRsaPublicKey"></a>

- *Type:* str

Assigns a public key to the initial administrative user of the account.

Either admin_password or admin_rsa_public_key has to be specified. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#admin_rsa_public_key Account#admin_rsa_public_key}

---

##### `admin_user_type`<sup>Optional</sup> <a name="admin_user_type" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminUserType"></a>

- *Type:* str

Used for setting the type of the first user that is assigned the ACCOUNTADMIN role during account creation.

Valid options are: `PERSON` | `SERVICE` | `LEGACY_SERVICE` External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#admin_user_type Account#admin_user_type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#comment Account#comment}

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.firstName"></a>

- *Type:* str

First name of the initial administrative user of the account.

This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#first_name Account#first_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#id Account#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_org_admin`<sup>Optional</sup> <a name="is_org_admin" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.isOrgAdmin"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Sets an account property that determines whether the ORGADMIN role is enabled in the account.

Only an organization administrator (i.e. user with the ORGADMIN role) can set the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#is_org_admin Account#is_org_admin}

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.lastName"></a>

- *Type:* str

Last name of the initial administrative user of the account.

This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#last_name Account#last_name}

---

##### `must_change_password`<sup>Optional</sup> <a name="must_change_password" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.mustChangePassword"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the new user created to administer the account is forced to change their password upon first login into the account.

This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#must_change_password Account#must_change_password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.region"></a>

- *Type:* str

[Snowflake Region ID](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-snowflake-region-ids) of the region where the account is created. If no value is provided, Snowflake creates the account in the same Snowflake Region as the current account (i.e. the account in which the CREATE ACCOUNT statement is executed.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#region Account#region}

---

##### `region_group`<sup>Optional</sup> <a name="region_group" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.regionGroup"></a>

- *Type:* str

ID of the region group where the account is created.

To retrieve the region group ID for existing accounts in your organization, execute the [SHOW REGIONS](https://docs.snowflake.com/en/sql-reference/sql/show-regions) command. For information about when you might need to specify region group, see [Region groups](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-region-groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#region_group Account#region_group}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.account.AccountTimeouts">AccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#timeouts Account#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.account.Account.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetAdminPassword">reset_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetAdminRsaPublicKey">reset_admin_rsa_public_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetAdminUserType">reset_admin_user_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetIsOrgAdmin">reset_is_org_admin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetMustChangePassword">reset_must_change_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetRegionGroup">reset_region_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetTimeouts">reset_timeouts</a></code> | *No description.* |

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

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.account.Account.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.account.Account.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.account.Account.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.account.Account.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.account.Account.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

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

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.account.Account.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.account.Account.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.account.Account.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

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

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.account.Account.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.account.Account.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.account.Account.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.account.Account.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.account.Account.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.account.Account.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.account.Account.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#create Account#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.account.Account.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#delete Account#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.account.Account.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#read Account#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.account.Account.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#update Account#update}.

---

##### `reset_admin_password` <a name="reset_admin_password" id="@cdktf/provider-snowflake.account.Account.resetAdminPassword"></a>

```python
def reset_admin_password() -> None
```

##### `reset_admin_rsa_public_key` <a name="reset_admin_rsa_public_key" id="@cdktf/provider-snowflake.account.Account.resetAdminRsaPublicKey"></a>

```python
def reset_admin_rsa_public_key() -> None
```

##### `reset_admin_user_type` <a name="reset_admin_user_type" id="@cdktf/provider-snowflake.account.Account.resetAdminUserType"></a>

```python
def reset_admin_user_type() -> None
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

##### `reset_is_org_admin` <a name="reset_is_org_admin" id="@cdktf/provider-snowflake.account.Account.resetIsOrgAdmin"></a>

```python
def reset_is_org_admin() -> None
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

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.account.Account.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Account resource upon running "cdktf plan <stack-name>". |

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

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.account.Account.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import account

account.Account.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Account resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.account.Account.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.account.Account.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Account to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.account.Account.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Account that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.account.Account.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Account to import is found.

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
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList">AccountShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference">AccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminNameInput">admin_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminRsaPublicKeyInput">admin_rsa_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminUserTypeInput">admin_user_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.editionInput">edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.gracePeriodInDaysInput">grace_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.isOrgAdminInput">is_org_admin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.mustChangePasswordInput">must_change_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.regionGroupInput">region_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-snowflake.account.AccountTimeouts">AccountTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminName">admin_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminRsaPublicKey">admin_rsa_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminUserType">admin_user_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.gracePeriodInDays">grace_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.isOrgAdmin">is_org_admin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.mustChangePassword">must_change_password</a></code> | <code>str</code> | *No description.* |
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

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.account.Account.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.account.Account.property.showOutput"></a>

```python
show_output: AccountShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.account.AccountShowOutputList">AccountShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.account.Account.property.timeouts"></a>

```python
timeouts: AccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference">AccountTimeoutsOutputReference</a>

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

##### `admin_user_type_input`<sup>Optional</sup> <a name="admin_user_type_input" id="@cdktf/provider-snowflake.account.Account.property.adminUserTypeInput"></a>

```python
admin_user_type_input: str
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

##### `grace_period_in_days_input`<sup>Optional</sup> <a name="grace_period_in_days_input" id="@cdktf/provider-snowflake.account.Account.property.gracePeriodInDaysInput"></a>

```python
grace_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.account.Account.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_org_admin_input`<sup>Optional</sup> <a name="is_org_admin_input" id="@cdktf/provider-snowflake.account.Account.property.isOrgAdminInput"></a>

```python
is_org_admin_input: str
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
must_change_password_input: str
```

- *Type:* str

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

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.account.Account.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[AccountTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-snowflake.account.AccountTimeouts">AccountTimeouts</a>, cdktf.IResolvable]

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

##### `admin_user_type`<sup>Required</sup> <a name="admin_user_type" id="@cdktf/provider-snowflake.account.Account.property.adminUserType"></a>

```python
admin_user_type: str
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

##### `grace_period_in_days`<sup>Required</sup> <a name="grace_period_in_days" id="@cdktf/provider-snowflake.account.Account.property.gracePeriodInDays"></a>

```python
grace_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_org_admin`<sup>Required</sup> <a name="is_org_admin" id="@cdktf/provider-snowflake.account.Account.property.isOrgAdmin"></a>

```python
is_org_admin: str
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
must_change_password: str
```

- *Type:* str

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
  grace_period_in_days: typing.Union[int, float],
  name: str,
  admin_password: str = None,
  admin_rsa_public_key: str = None,
  admin_user_type: str = None,
  comment: str = None,
  first_name: str = None,
  id: str = None,
  is_org_admin: str = None,
  last_name: str = None,
  must_change_password: str = None,
  region: str = None,
  region_group: str = None,
  timeouts: AccountTimeouts = None
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
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.edition">edition</a></code> | <code>str</code> | Snowflake Edition of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.email">email</a></code> | <code>str</code> | Email address of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.gracePeriodInDays">grace_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of days during which the account can be restored (“undropped”). |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the account. It must be unique within an organization, regardless of which Snowflake Region the account is in and must start with an alphabetic character and cannot contain spaces or special characters except for underscores (_). Note that if the account name includes underscores, features that do not accept account names with underscores (e.g. Okta SSO or SCIM) can reference a version of the account name that substitutes hyphens (-) for the underscores. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.adminPassword">admin_password</a></code> | <code>str</code> | Password for the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.adminRsaPublicKey">admin_rsa_public_key</a></code> | <code>str</code> | Assigns a public key to the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.adminUserType">admin_user_type</a></code> | <code>str</code> | Used for setting the type of the first user that is assigned the ACCOUNTADMIN role during account creation. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.firstName">first_name</a></code> | <code>str</code> | First name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#id Account#id}. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.isOrgAdmin">is_org_admin</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Sets an account property that determines whether the ORGADMIN role is enabled in the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.lastName">last_name</a></code> | <code>str</code> | Last name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.mustChangePassword">must_change_password</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the new user created to administer the account is forced to change their password upon first login into the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.region">region</a></code> | <code>str</code> | [Snowflake Region ID](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-snowflake-region-ids) of the region where the account is created. If no value is provided, Snowflake creates the account in the same Snowflake Region as the current account (i.e. the account in which the CREATE ACCOUNT statement is executed.). |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.regionGroup">region_group</a></code> | <code>str</code> | ID of the region group where the account is created. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.account.AccountTimeouts">AccountTimeouts</a></code> | timeouts block. |

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

A new user is created in the new account with this name and password and granted the ACCOUNTADMIN role in the account. A login name can be any string consisting of letters, numbers, and underscores. Login names are always case-insensitive. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#admin_name Account#admin_name}

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-snowflake.account.AccountConfig.property.edition"></a>

```python
edition: str
```

- *Type:* str

Snowflake Edition of the account.

See more about Snowflake Editions in the [official documentation](https://docs.snowflake.com/en/user-guide/intro-editions). Valid options are: `STANDARD` | `ENTERPRISE` | `BUSINESS_CRITICAL`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#edition Account#edition}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-snowflake.account.AccountConfig.property.email"></a>

```python
email: str
```

- *Type:* str

Email address of the initial administrative user of the account.

This email address is used to send any notifications about the account. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#email Account#email}

---

##### `grace_period_in_days`<sup>Required</sup> <a name="grace_period_in_days" id="@cdktf/provider-snowflake.account.AccountConfig.property.gracePeriodInDays"></a>

```python
grace_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of days during which the account can be restored (“undropped”).

The minimum is 3 days and the maximum is 90 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#grace_period_in_days Account#grace_period_in_days}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.account.AccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier (i.e. name) for the account. It must be unique within an organization, regardless of which Snowflake Region the account is in and must start with an alphabetic character and cannot contain spaces or special characters except for underscores (_). Note that if the account name includes underscores, features that do not accept account names with underscores (e.g. Okta SSO or SCIM) can reference a version of the account name that substitutes hyphens (-) for the underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#name Account#name}

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-snowflake.account.AccountConfig.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Password for the initial administrative user of the account.

Either admin_password or admin_rsa_public_key has to be specified. This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#admin_password Account#admin_password}

---

##### `admin_rsa_public_key`<sup>Optional</sup> <a name="admin_rsa_public_key" id="@cdktf/provider-snowflake.account.AccountConfig.property.adminRsaPublicKey"></a>

```python
admin_rsa_public_key: str
```

- *Type:* str

Assigns a public key to the initial administrative user of the account.

Either admin_password or admin_rsa_public_key has to be specified. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#admin_rsa_public_key Account#admin_rsa_public_key}

---

##### `admin_user_type`<sup>Optional</sup> <a name="admin_user_type" id="@cdktf/provider-snowflake.account.AccountConfig.property.adminUserType"></a>

```python
admin_user_type: str
```

- *Type:* str

Used for setting the type of the first user that is assigned the ACCOUNTADMIN role during account creation.

Valid options are: `PERSON` | `SERVICE` | `LEGACY_SERVICE` External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#admin_user_type Account#admin_user_type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.account.AccountConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#comment Account#comment}

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-snowflake.account.AccountConfig.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

First name of the initial administrative user of the account.

This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#first_name Account#first_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.account.AccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#id Account#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_org_admin`<sup>Optional</sup> <a name="is_org_admin" id="@cdktf/provider-snowflake.account.AccountConfig.property.isOrgAdmin"></a>

```python
is_org_admin: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Sets an account property that determines whether the ORGADMIN role is enabled in the account.

Only an organization administrator (i.e. user with the ORGADMIN role) can set the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#is_org_admin Account#is_org_admin}

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-snowflake.account.AccountConfig.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Last name of the initial administrative user of the account.

This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#last_name Account#last_name}

---

##### `must_change_password`<sup>Optional</sup> <a name="must_change_password" id="@cdktf/provider-snowflake.account.AccountConfig.property.mustChangePassword"></a>

```python
must_change_password: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the new user created to administer the account is forced to change their password upon first login into the account.

This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#must_change_password Account#must_change_password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-snowflake.account.AccountConfig.property.region"></a>

```python
region: str
```

- *Type:* str

[Snowflake Region ID](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-snowflake-region-ids) of the region where the account is created. If no value is provided, Snowflake creates the account in the same Snowflake Region as the current account (i.e. the account in which the CREATE ACCOUNT statement is executed.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#region Account#region}

---

##### `region_group`<sup>Optional</sup> <a name="region_group" id="@cdktf/provider-snowflake.account.AccountConfig.property.regionGroup"></a>

```python
region_group: str
```

- *Type:* str

ID of the region group where the account is created.

To retrieve the region group ID for existing accounts in your organization, execute the [SHOW REGIONS](https://docs.snowflake.com/en/sql-reference/sql/show-regions) command. For information about when you might need to specify region group, see [Region groups](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-region-groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#region_group Account#region_group}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.account.AccountConfig.property.timeouts"></a>

```python
timeouts: AccountTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.account.AccountTimeouts">AccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#timeouts Account#timeouts}

---

### AccountShowOutput <a name="AccountShowOutput" id="@cdktf/provider-snowflake.account.AccountShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.account.AccountShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import account

account.AccountShowOutput()
```


### AccountTimeouts <a name="AccountTimeouts" id="@cdktf/provider-snowflake.account.AccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.account.AccountTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import account

account.AccountTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#create Account#create}. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#delete Account#delete}. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#read Account#read}. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#update Account#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.account.AccountTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#create Account#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.account.AccountTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#delete Account#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.account.AccountTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#read Account#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.account.AccountTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/account#update Account#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountShowOutputList <a name="AccountShowOutputList" id="@cdktf/provider-snowflake.account.AccountShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import account

account.AccountShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.account.AccountShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.account.AccountShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.account.AccountShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.account.AccountShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.account.AccountShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.account.AccountShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.account.AccountShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccountShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.account.AccountShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.account.AccountShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.account.AccountShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AccountShowOutputOutputReference <a name="AccountShowOutputOutputReference" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import account

account.AccountShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountLocator">account_locator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountLocatorUrl">account_locator_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountOldUrlLastUsed">account_old_url_last_used</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountOldUrlSavedOn">account_old_url_saved_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountUrl">account_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.consumptionBillingEntityName">consumption_billing_entity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.droppedOn">dropped_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isEventsAccount">is_events_account</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isOrgAdmin">is_org_admin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isOrganizationAccount">is_organization_account</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.managedAccounts">managed_accounts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.marketplaceConsumerBillingEntityName">marketplace_consumer_billing_entity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.marketplaceProviderBillingEntityName">marketplace_provider_billing_entity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.movedOn">moved_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.movedToOrganization">moved_to_organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.oldAccountUrl">old_account_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrl">organization_old_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrlLastUsed">organization_old_url_last_used</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrlSavedOn">organization_old_url_saved_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationUrlExpirationOn">organization_url_expiration_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.regionGroup">region_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.restoredOn">restored_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.scheduledDeletionTime">scheduled_deletion_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.snowflakeRegion">snowflake_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutput">AccountShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_locator`<sup>Required</sup> <a name="account_locator" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountLocator"></a>

```python
account_locator: str
```

- *Type:* str

---

##### `account_locator_url`<sup>Required</sup> <a name="account_locator_url" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountLocatorUrl"></a>

```python
account_locator_url: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `account_old_url_last_used`<sup>Required</sup> <a name="account_old_url_last_used" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountOldUrlLastUsed"></a>

```python
account_old_url_last_used: str
```

- *Type:* str

---

##### `account_old_url_saved_on`<sup>Required</sup> <a name="account_old_url_saved_on" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountOldUrlSavedOn"></a>

```python
account_old_url_saved_on: str
```

- *Type:* str

---

##### `account_url`<sup>Required</sup> <a name="account_url" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountUrl"></a>

```python
account_url: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `consumption_billing_entity_name`<sup>Required</sup> <a name="consumption_billing_entity_name" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.consumptionBillingEntityName"></a>

```python
consumption_billing_entity_name: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `dropped_on`<sup>Required</sup> <a name="dropped_on" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.droppedOn"></a>

```python
dropped_on: str
```

- *Type:* str

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `is_events_account`<sup>Required</sup> <a name="is_events_account" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isEventsAccount"></a>

```python
is_events_account: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_org_admin`<sup>Required</sup> <a name="is_org_admin" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isOrgAdmin"></a>

```python
is_org_admin: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_organization_account`<sup>Required</sup> <a name="is_organization_account" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isOrganizationAccount"></a>

```python
is_organization_account: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `managed_accounts`<sup>Required</sup> <a name="managed_accounts" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.managedAccounts"></a>

```python
managed_accounts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `marketplace_consumer_billing_entity_name`<sup>Required</sup> <a name="marketplace_consumer_billing_entity_name" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.marketplaceConsumerBillingEntityName"></a>

```python
marketplace_consumer_billing_entity_name: str
```

- *Type:* str

---

##### `marketplace_provider_billing_entity_name`<sup>Required</sup> <a name="marketplace_provider_billing_entity_name" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.marketplaceProviderBillingEntityName"></a>

```python
marketplace_provider_billing_entity_name: str
```

- *Type:* str

---

##### `moved_on`<sup>Required</sup> <a name="moved_on" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.movedOn"></a>

```python
moved_on: str
```

- *Type:* str

---

##### `moved_to_organization`<sup>Required</sup> <a name="moved_to_organization" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.movedToOrganization"></a>

```python
moved_to_organization: str
```

- *Type:* str

---

##### `old_account_url`<sup>Required</sup> <a name="old_account_url" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.oldAccountUrl"></a>

```python
old_account_url: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `organization_old_url`<sup>Required</sup> <a name="organization_old_url" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrl"></a>

```python
organization_old_url: str
```

- *Type:* str

---

##### `organization_old_url_last_used`<sup>Required</sup> <a name="organization_old_url_last_used" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrlLastUsed"></a>

```python
organization_old_url_last_used: str
```

- *Type:* str

---

##### `organization_old_url_saved_on`<sup>Required</sup> <a name="organization_old_url_saved_on" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrlSavedOn"></a>

```python
organization_old_url_saved_on: str
```

- *Type:* str

---

##### `organization_url_expiration_on`<sup>Required</sup> <a name="organization_url_expiration_on" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationUrlExpirationOn"></a>

```python
organization_url_expiration_on: str
```

- *Type:* str

---

##### `region_group`<sup>Required</sup> <a name="region_group" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.regionGroup"></a>

```python
region_group: str
```

- *Type:* str

---

##### `restored_on`<sup>Required</sup> <a name="restored_on" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.restoredOn"></a>

```python
restored_on: str
```

- *Type:* str

---

##### `scheduled_deletion_time`<sup>Required</sup> <a name="scheduled_deletion_time" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.scheduledDeletionTime"></a>

```python
scheduled_deletion_time: str
```

- *Type:* str

---

##### `snowflake_region`<sup>Required</sup> <a name="snowflake_region" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.snowflakeRegion"></a>

```python
snowflake_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: AccountShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.account.AccountShowOutput">AccountShowOutput</a>

---


### AccountTimeoutsOutputReference <a name="AccountTimeoutsOutputReference" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import account

account.AccountTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-snowflake.account.AccountTimeouts">AccountTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.account.AccountTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccountTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-snowflake.account.AccountTimeouts">AccountTimeouts</a>, cdktf.IResolvable]

---



