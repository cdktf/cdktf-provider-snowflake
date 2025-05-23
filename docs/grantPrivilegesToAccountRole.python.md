# `grantPrivilegesToAccountRole` Submodule <a name="`grantPrivilegesToAccountRole` Submodule" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantPrivilegesToAccountRole <a name="GrantPrivilegesToAccountRole" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role snowflake_grant_privileges_to_account_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_role_name: str,
  all_privileges: typing.Union[bool, IResolvable] = None,
  always_apply: typing.Union[bool, IResolvable] = None,
  always_apply_trigger: str = None,
  id: str = None,
  on_account: typing.Union[bool, IResolvable] = None,
  on_account_object: GrantPrivilegesToAccountRoleOnAccountObject = None,
  on_schema: GrantPrivilegesToAccountRoleOnSchema = None,
  on_schema_object: GrantPrivilegesToAccountRoleOnSchemaObject = None,
  privileges: typing.List[str] = None,
  timeouts: GrantPrivilegesToAccountRoleTimeouts = None,
  with_grant_option: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.accountRoleName">account_role_name</a></code> | <code>str</code> | The fully qualified name of the account role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.allPrivileges">all_privileges</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `false`) Grant all privileges on the account role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.alwaysApply">always_apply</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `false`) If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.alwaysApplyTrigger">always_apply_trigger</a></code> | <code>str</code> | (Default: ``) This is a helper field and should not be set. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#id GrantPrivilegesToAccountRole#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.onAccount">on_account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `false`) If true, the privileges will be granted on the account. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.onAccountObject">on_account_object</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a></code> | on_account_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.onSchema">on_schema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a></code> | on_schema block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.onSchemaObject">on_schema_object</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a></code> | on_schema_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.privileges">privileges</a></code> | <code>typing.List[str]</code> | The privileges to grant on the account role. This field is case-sensitive; use only upper-case privileges. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts">GrantPrivilegesToAccountRoleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `false`) Specifies whether the grantee can grant the privileges to other users. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_role_name`<sup>Required</sup> <a name="account_role_name" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.accountRoleName"></a>

- *Type:* str

The fully qualified name of the account role to which privileges will be granted.

For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#account_role_name GrantPrivilegesToAccountRole#account_role_name}

---

##### `all_privileges`<sup>Optional</sup> <a name="all_privileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.allPrivileges"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `false`) Grant all privileges on the account role.

When all privileges cannot be granted, the provider returns a warning, which is aligned with the Snowsight behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#all_privileges GrantPrivilegesToAccountRole#all_privileges}

---

##### `always_apply`<sup>Optional</sup> <a name="always_apply" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.alwaysApply"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `false`) If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges.

It is supposed to be used only in “grant privileges on all X’s in database / schema Y” or “grant all privileges to X” scenarios to make sure that every new object in a given database / schema is granted by the account role and every new privilege is granted to the database role. Important note: this flag is not compliant with the Terraform assumptions of the config being eventually convergent (producing an empty plan).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#always_apply GrantPrivilegesToAccountRole#always_apply}

---

##### `always_apply_trigger`<sup>Optional</sup> <a name="always_apply_trigger" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.alwaysApplyTrigger"></a>

- *Type:* str

(Default: ``) This is a helper field and should not be set.

Its main purpose is to help to achieve the functionality described by the always_apply field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#always_apply_trigger GrantPrivilegesToAccountRole#always_apply_trigger}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#id GrantPrivilegesToAccountRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on_account`<sup>Optional</sup> <a name="on_account" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.onAccount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `false`) If true, the privileges will be granted on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#on_account GrantPrivilegesToAccountRole#on_account}

---

##### `on_account_object`<sup>Optional</sup> <a name="on_account_object" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.onAccountObject"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a>

on_account_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#on_account_object GrantPrivilegesToAccountRole#on_account_object}

---

##### `on_schema`<sup>Optional</sup> <a name="on_schema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.onSchema"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a>

on_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#on_schema GrantPrivilegesToAccountRole#on_schema}

---

##### `on_schema_object`<sup>Optional</sup> <a name="on_schema_object" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.onSchemaObject"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a>

on_schema_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#on_schema_object GrantPrivilegesToAccountRole#on_schema_object}

---

##### `privileges`<sup>Optional</sup> <a name="privileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.privileges"></a>

- *Type:* typing.List[str]

The privileges to grant on the account role. This field is case-sensitive; use only upper-case privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#privileges GrantPrivilegesToAccountRole#privileges}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts">GrantPrivilegesToAccountRoleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#timeouts GrantPrivilegesToAccountRole#timeouts}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.Initializer.parameter.withGrantOption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `false`) Specifies whether the grantee can grant the privileges to other users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#with_grant_option GrantPrivilegesToAccountRole#with_grant_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnAccountObject">put_on_account_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchema">put_on_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchemaObject">put_on_schema_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAllPrivileges">reset_all_privileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAlwaysApply">reset_always_apply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAlwaysApplyTrigger">reset_always_apply_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnAccount">reset_on_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnAccountObject">reset_on_account_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnSchema">reset_on_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnSchemaObject">reset_on_schema_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetPrivileges">reset_privileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetWithGrantOption">reset_with_grant_option</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_on_account_object` <a name="put_on_account_object" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnAccountObject"></a>

```python
def put_on_account_object(
  object_name: str,
  object_type: str
) -> None
```

###### `object_name`<sup>Required</sup> <a name="object_name" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnAccountObject.parameter.objectName"></a>

- *Type:* str

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#object_name GrantPrivilegesToAccountRole#object_name}

---

###### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnAccountObject.parameter.objectType"></a>

- *Type:* str

The object type of the account object on which privileges will be granted.

Valid values are: USER | RESOURCE MONITOR | WAREHOUSE | COMPUTE POOL | DATABASE | INTEGRATION | FAILOVER GROUP | REPLICATION GROUP | EXTERNAL VOLUME

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#object_type GrantPrivilegesToAccountRole#object_type}

---

##### `put_on_schema` <a name="put_on_schema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchema"></a>

```python
def put_on_schema(
  all_schemas_in_database: str = None,
  future_schemas_in_database: str = None,
  schema_name: str = None
) -> None
```

###### `all_schemas_in_database`<sup>Optional</sup> <a name="all_schemas_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchema.parameter.allSchemasInDatabase"></a>

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#all_schemas_in_database GrantPrivilegesToAccountRole#all_schemas_in_database}

---

###### `future_schemas_in_database`<sup>Optional</sup> <a name="future_schemas_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchema.parameter.futureSchemasInDatabase"></a>

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#future_schemas_in_database GrantPrivilegesToAccountRole#future_schemas_in_database}

---

###### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchema.parameter.schemaName"></a>

- *Type:* str

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#schema_name GrantPrivilegesToAccountRole#schema_name}

---

##### `put_on_schema_object` <a name="put_on_schema_object" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchemaObject"></a>

```python
def put_on_schema_object(
  all: GrantPrivilegesToAccountRoleOnSchemaObjectAll = None,
  future: GrantPrivilegesToAccountRoleOnSchemaObjectFuture = None,
  object_name: str = None,
  object_type: str = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchemaObject.parameter.all"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a>

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#all GrantPrivilegesToAccountRole#all}

---

###### `future`<sup>Optional</sup> <a name="future" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchemaObject.parameter.future"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a>

future block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#future GrantPrivilegesToAccountRole#future}

---

###### `object_name`<sup>Optional</sup> <a name="object_name" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchemaObject.parameter.objectName"></a>

- *Type:* str

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#object_name GrantPrivilegesToAccountRole#object_name}

---

###### `object_type`<sup>Optional</sup> <a name="object_type" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putOnSchemaObject.parameter.objectType"></a>

- *Type:* str

The object type of the schema object on which privileges will be granted.

Valid values are: AGGREGATION POLICY | ALERT | AUTHENTICATION POLICY | CORTEX SEARCH SERVICE | DATA METRIC FUNCTION | DYNAMIC TABLE | EVENT TABLE | EXTERNAL TABLE | FILE FORMAT | FUNCTION | GIT REPOSITORY | HYBRID TABLE | IMAGE REPOSITORY | ICEBERG TABLE | MASKING POLICY | MATERIALIZED VIEW | MODEL | NETWORK RULE | NOTEBOOK | PACKAGES POLICY | PASSWORD POLICY | PIPE | PROCEDURE | PROJECTION POLICY | ROW ACCESS POLICY | SECRET | SERVICE | SESSION POLICY | SEQUENCE | SNAPSHOT | STAGE | STREAM | TABLE | TAG | TASK | VIEW | STREAMLIT | DATASET

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#object_type GrantPrivilegesToAccountRole#object_type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#create GrantPrivilegesToAccountRole#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#delete GrantPrivilegesToAccountRole#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#read GrantPrivilegesToAccountRole#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#update GrantPrivilegesToAccountRole#update}.

---

##### `reset_all_privileges` <a name="reset_all_privileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAllPrivileges"></a>

```python
def reset_all_privileges() -> None
```

##### `reset_always_apply` <a name="reset_always_apply" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAlwaysApply"></a>

```python
def reset_always_apply() -> None
```

##### `reset_always_apply_trigger` <a name="reset_always_apply_trigger" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetAlwaysApplyTrigger"></a>

```python
def reset_always_apply_trigger() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_on_account` <a name="reset_on_account" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnAccount"></a>

```python
def reset_on_account() -> None
```

##### `reset_on_account_object` <a name="reset_on_account_object" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnAccountObject"></a>

```python
def reset_on_account_object() -> None
```

##### `reset_on_schema` <a name="reset_on_schema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnSchema"></a>

```python
def reset_on_schema() -> None
```

##### `reset_on_schema_object` <a name="reset_on_schema_object" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetOnSchemaObject"></a>

```python
def reset_on_schema_object() -> None
```

##### `reset_privileges` <a name="reset_privileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetPrivileges"></a>

```python
def reset_privileges() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_with_grant_option` <a name="reset_with_grant_option" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.resetWithGrantOption"></a>

```python
def reset_with_grant_option() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GrantPrivilegesToAccountRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GrantPrivilegesToAccountRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GrantPrivilegesToAccountRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GrantPrivilegesToAccountRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GrantPrivilegesToAccountRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountObject">on_account_object</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference">GrantPrivilegesToAccountRoleOnAccountObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchema">on_schema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference">GrantPrivilegesToAccountRoleOnSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaObject">on_schema_object</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference">GrantPrivilegesToAccountRoleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.accountRoleNameInput">account_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.allPrivilegesInput">all_privileges_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyInput">always_apply_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyTriggerInput">always_apply_trigger_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountInput">on_account_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountObjectInput">on_account_object_input</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaInput">on_schema_input</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaObjectInput">on_schema_object_input</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.privilegesInput">privileges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts">GrantPrivilegesToAccountRoleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.withGrantOptionInput">with_grant_option_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.accountRoleName">account_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.allPrivileges">all_privileges</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApply">always_apply</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyTrigger">always_apply_trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccount">on_account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `on_account_object`<sup>Required</sup> <a name="on_account_object" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountObject"></a>

```python
on_account_object: GrantPrivilegesToAccountRoleOnAccountObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference">GrantPrivilegesToAccountRoleOnAccountObjectOutputReference</a>

---

##### `on_schema`<sup>Required</sup> <a name="on_schema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchema"></a>

```python
on_schema: GrantPrivilegesToAccountRoleOnSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference">GrantPrivilegesToAccountRoleOnSchemaOutputReference</a>

---

##### `on_schema_object`<sup>Required</sup> <a name="on_schema_object" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaObject"></a>

```python
on_schema_object: GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.timeouts"></a>

```python
timeouts: GrantPrivilegesToAccountRoleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference">GrantPrivilegesToAccountRoleTimeoutsOutputReference</a>

---

##### `account_role_name_input`<sup>Optional</sup> <a name="account_role_name_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.accountRoleNameInput"></a>

```python
account_role_name_input: str
```

- *Type:* str

---

##### `all_privileges_input`<sup>Optional</sup> <a name="all_privileges_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.allPrivilegesInput"></a>

```python
all_privileges_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `always_apply_input`<sup>Optional</sup> <a name="always_apply_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyInput"></a>

```python
always_apply_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `always_apply_trigger_input`<sup>Optional</sup> <a name="always_apply_trigger_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyTriggerInput"></a>

```python
always_apply_trigger_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `on_account_input`<sup>Optional</sup> <a name="on_account_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountInput"></a>

```python
on_account_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `on_account_object_input`<sup>Optional</sup> <a name="on_account_object_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccountObjectInput"></a>

```python
on_account_object_input: GrantPrivilegesToAccountRoleOnAccountObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a>

---

##### `on_schema_input`<sup>Optional</sup> <a name="on_schema_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaInput"></a>

```python
on_schema_input: GrantPrivilegesToAccountRoleOnSchema
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a>

---

##### `on_schema_object_input`<sup>Optional</sup> <a name="on_schema_object_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onSchemaObjectInput"></a>

```python
on_schema_object_input: GrantPrivilegesToAccountRoleOnSchemaObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a>

---

##### `privileges_input`<sup>Optional</sup> <a name="privileges_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.privilegesInput"></a>

```python
privileges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GrantPrivilegesToAccountRoleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts">GrantPrivilegesToAccountRoleTimeouts</a>]

---

##### `with_grant_option_input`<sup>Optional</sup> <a name="with_grant_option_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.withGrantOptionInput"></a>

```python
with_grant_option_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `account_role_name`<sup>Required</sup> <a name="account_role_name" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.accountRoleName"></a>

```python
account_role_name: str
```

- *Type:* str

---

##### `all_privileges`<sup>Required</sup> <a name="all_privileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.allPrivileges"></a>

```python
all_privileges: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `always_apply`<sup>Required</sup> <a name="always_apply" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApply"></a>

```python
always_apply: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `always_apply_trigger`<sup>Required</sup> <a name="always_apply_trigger" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.alwaysApplyTrigger"></a>

```python
always_apply_trigger: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `on_account`<sup>Required</sup> <a name="on_account" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.onAccount"></a>

```python
on_account: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `with_grant_option`<sup>Required</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.withGrantOption"></a>

```python
with_grant_option: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GrantPrivilegesToAccountRoleConfig <a name="GrantPrivilegesToAccountRoleConfig" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_role_name: str,
  all_privileges: typing.Union[bool, IResolvable] = None,
  always_apply: typing.Union[bool, IResolvable] = None,
  always_apply_trigger: str = None,
  id: str = None,
  on_account: typing.Union[bool, IResolvable] = None,
  on_account_object: GrantPrivilegesToAccountRoleOnAccountObject = None,
  on_schema: GrantPrivilegesToAccountRoleOnSchema = None,
  on_schema_object: GrantPrivilegesToAccountRoleOnSchemaObject = None,
  privileges: typing.List[str] = None,
  timeouts: GrantPrivilegesToAccountRoleTimeouts = None,
  with_grant_option: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.accountRoleName">account_role_name</a></code> | <code>str</code> | The fully qualified name of the account role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.allPrivileges">all_privileges</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `false`) Grant all privileges on the account role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.alwaysApply">always_apply</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `false`) If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.alwaysApplyTrigger">always_apply_trigger</a></code> | <code>str</code> | (Default: ``) This is a helper field and should not be set. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#id GrantPrivilegesToAccountRole#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onAccount">on_account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `false`) If true, the privileges will be granted on the account. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onAccountObject">on_account_object</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a></code> | on_account_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onSchema">on_schema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a></code> | on_schema block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onSchemaObject">on_schema_object</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a></code> | on_schema_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | The privileges to grant on the account role. This field is case-sensitive; use only upper-case privileges. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts">GrantPrivilegesToAccountRoleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `false`) Specifies whether the grantee can grant the privileges to other users. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_role_name`<sup>Required</sup> <a name="account_role_name" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.accountRoleName"></a>

```python
account_role_name: str
```

- *Type:* str

The fully qualified name of the account role to which privileges will be granted.

For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#account_role_name GrantPrivilegesToAccountRole#account_role_name}

---

##### `all_privileges`<sup>Optional</sup> <a name="all_privileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.allPrivileges"></a>

```python
all_privileges: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `false`) Grant all privileges on the account role.

When all privileges cannot be granted, the provider returns a warning, which is aligned with the Snowsight behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#all_privileges GrantPrivilegesToAccountRole#all_privileges}

---

##### `always_apply`<sup>Optional</sup> <a name="always_apply" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.alwaysApply"></a>

```python
always_apply: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `false`) If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges.

It is supposed to be used only in “grant privileges on all X’s in database / schema Y” or “grant all privileges to X” scenarios to make sure that every new object in a given database / schema is granted by the account role and every new privilege is granted to the database role. Important note: this flag is not compliant with the Terraform assumptions of the config being eventually convergent (producing an empty plan).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#always_apply GrantPrivilegesToAccountRole#always_apply}

---

##### `always_apply_trigger`<sup>Optional</sup> <a name="always_apply_trigger" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.alwaysApplyTrigger"></a>

```python
always_apply_trigger: str
```

- *Type:* str

(Default: ``) This is a helper field and should not be set.

Its main purpose is to help to achieve the functionality described by the always_apply field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#always_apply_trigger GrantPrivilegesToAccountRole#always_apply_trigger}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#id GrantPrivilegesToAccountRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on_account`<sup>Optional</sup> <a name="on_account" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onAccount"></a>

```python
on_account: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `false`) If true, the privileges will be granted on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#on_account GrantPrivilegesToAccountRole#on_account}

---

##### `on_account_object`<sup>Optional</sup> <a name="on_account_object" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onAccountObject"></a>

```python
on_account_object: GrantPrivilegesToAccountRoleOnAccountObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a>

on_account_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#on_account_object GrantPrivilegesToAccountRole#on_account_object}

---

##### `on_schema`<sup>Optional</sup> <a name="on_schema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onSchema"></a>

```python
on_schema: GrantPrivilegesToAccountRoleOnSchema
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a>

on_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#on_schema GrantPrivilegesToAccountRole#on_schema}

---

##### `on_schema_object`<sup>Optional</sup> <a name="on_schema_object" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.onSchemaObject"></a>

```python
on_schema_object: GrantPrivilegesToAccountRoleOnSchemaObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a>

on_schema_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#on_schema_object GrantPrivilegesToAccountRole#on_schema_object}

---

##### `privileges`<sup>Optional</sup> <a name="privileges" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

The privileges to grant on the account role. This field is case-sensitive; use only upper-case privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#privileges GrantPrivilegesToAccountRole#privileges}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.timeouts"></a>

```python
timeouts: GrantPrivilegesToAccountRoleTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts">GrantPrivilegesToAccountRoleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#timeouts GrantPrivilegesToAccountRole#timeouts}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleConfig.property.withGrantOption"></a>

```python
with_grant_option: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `false`) Specifies whether the grantee can grant the privileges to other users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#with_grant_option GrantPrivilegesToAccountRole#with_grant_option}

---

### GrantPrivilegesToAccountRoleOnAccountObject <a name="GrantPrivilegesToAccountRoleOnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject(
  object_name: str,
  object_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject.property.objectName">object_name</a></code> | <code>str</code> | The fully qualified name of the object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject.property.objectType">object_type</a></code> | <code>str</code> | The object type of the account object on which privileges will be granted. |

---

##### `object_name`<sup>Required</sup> <a name="object_name" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject.property.objectName"></a>

```python
object_name: str
```

- *Type:* str

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#object_name GrantPrivilegesToAccountRole#object_name}

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

The object type of the account object on which privileges will be granted.

Valid values are: USER | RESOURCE MONITOR | WAREHOUSE | COMPUTE POOL | DATABASE | INTEGRATION | FAILOVER GROUP | REPLICATION GROUP | EXTERNAL VOLUME

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#object_type GrantPrivilegesToAccountRole#object_type}

---

### GrantPrivilegesToAccountRoleOnSchema <a name="GrantPrivilegesToAccountRoleOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema(
  all_schemas_in_database: str = None,
  future_schemas_in_database: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.allSchemasInDatabase">all_schemas_in_database</a></code> | <code>str</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.futureSchemasInDatabase">future_schemas_in_database</a></code> | <code>str</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.schemaName">schema_name</a></code> | <code>str</code> | The fully qualified name of the schema. |

---

##### `all_schemas_in_database`<sup>Optional</sup> <a name="all_schemas_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.allSchemasInDatabase"></a>

```python
all_schemas_in_database: str
```

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#all_schemas_in_database GrantPrivilegesToAccountRole#all_schemas_in_database}

---

##### `future_schemas_in_database`<sup>Optional</sup> <a name="future_schemas_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.futureSchemasInDatabase"></a>

```python
future_schemas_in_database: str
```

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#future_schemas_in_database GrantPrivilegesToAccountRole#future_schemas_in_database}

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#schema_name GrantPrivilegesToAccountRole#schema_name}

---

### GrantPrivilegesToAccountRoleOnSchemaObject <a name="GrantPrivilegesToAccountRoleOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject(
  all: GrantPrivilegesToAccountRoleOnSchemaObjectAll = None,
  future: GrantPrivilegesToAccountRoleOnSchemaObjectFuture = None,
  object_name: str = None,
  object_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.all">all</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a></code> | all block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.future">future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a></code> | future block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.objectName">object_name</a></code> | <code>str</code> | The fully qualified name of the object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.objectType">object_type</a></code> | <code>str</code> | The object type of the schema object on which privileges will be granted. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.all"></a>

```python
all: GrantPrivilegesToAccountRoleOnSchemaObjectAll
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a>

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#all GrantPrivilegesToAccountRole#all}

---

##### `future`<sup>Optional</sup> <a name="future" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.future"></a>

```python
future: GrantPrivilegesToAccountRoleOnSchemaObjectFuture
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a>

future block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#future GrantPrivilegesToAccountRole#future}

---

##### `object_name`<sup>Optional</sup> <a name="object_name" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.objectName"></a>

```python
object_name: str
```

- *Type:* str

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#object_name GrantPrivilegesToAccountRole#object_name}

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

The object type of the schema object on which privileges will be granted.

Valid values are: AGGREGATION POLICY | ALERT | AUTHENTICATION POLICY | CORTEX SEARCH SERVICE | DATA METRIC FUNCTION | DYNAMIC TABLE | EVENT TABLE | EXTERNAL TABLE | FILE FORMAT | FUNCTION | GIT REPOSITORY | HYBRID TABLE | IMAGE REPOSITORY | ICEBERG TABLE | MASKING POLICY | MATERIALIZED VIEW | MODEL | NETWORK RULE | NOTEBOOK | PACKAGES POLICY | PASSWORD POLICY | PIPE | PROCEDURE | PROJECTION POLICY | ROW ACCESS POLICY | SECRET | SERVICE | SESSION POLICY | SEQUENCE | SNAPSHOT | STAGE | STREAM | TABLE | TAG | TASK | VIEW | STREAMLIT | DATASET

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#object_type GrantPrivilegesToAccountRole#object_type}

---

### GrantPrivilegesToAccountRoleOnSchemaObjectAll <a name="GrantPrivilegesToAccountRoleOnSchemaObjectAll" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll(
  object_type_plural: str,
  in_database: str = None,
  in_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.objectTypePlural">object_type_plural</a></code> | <code>str</code> | The plural object type of the schema object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.inDatabase">in_database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#in_database GrantPrivilegesToAccountRole#in_database}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.inSchema">in_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#in_schema GrantPrivilegesToAccountRole#in_schema}. |

---

##### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.objectTypePlural"></a>

```python
object_type_plural: str
```

- *Type:* str

The plural object type of the schema object on which privileges will be granted.

Valid values are: AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | CORTEX SEARCH SERVICES | DATA METRIC FUNCTIONS | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | IMAGE REPOSITORIES | ICEBERG TABLES | MASKING POLICIES | MATERIALIZED VIEWS | MODELS | NETWORK RULES | NOTEBOOKS | PACKAGES POLICIES | PASSWORD POLICIES | PIPES | PROCEDURES | PROJECTION POLICIES | ROW ACCESS POLICIES | SECRETS | SERVICES | SESSION POLICIES | SEQUENCES | SNAPSHOTS | STAGES | STREAMS | TABLES | TAGS | TASKS | VIEWS | STREAMLITS | DATASETS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#object_type_plural GrantPrivilegesToAccountRole#object_type_plural}

---

##### `in_database`<sup>Optional</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.inDatabase"></a>

```python
in_database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#in_database GrantPrivilegesToAccountRole#in_database}.

---

##### `in_schema`<sup>Optional</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll.property.inSchema"></a>

```python
in_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#in_schema GrantPrivilegesToAccountRole#in_schema}.

---

### GrantPrivilegesToAccountRoleOnSchemaObjectFuture <a name="GrantPrivilegesToAccountRoleOnSchemaObjectFuture" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture(
  object_type_plural: str,
  in_database: str = None,
  in_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.objectTypePlural">object_type_plural</a></code> | <code>str</code> | The plural object type of the schema object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.inDatabase">in_database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#in_database GrantPrivilegesToAccountRole#in_database}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.inSchema">in_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#in_schema GrantPrivilegesToAccountRole#in_schema}. |

---

##### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.objectTypePlural"></a>

```python
object_type_plural: str
```

- *Type:* str

The plural object type of the schema object on which privileges will be granted.

Valid values are: ALERTS | AUTHENTICATION POLICIES | DATA METRIC FUNCTIONS | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | ICEBERG TABLES | MATERIALIZED VIEWS | MODELS | NETWORK RULES | NOTEBOOKS | PASSWORD POLICIES | PIPES | PROCEDURES | SECRETS | SERVICES | SEQUENCES | SNAPSHOTS | STAGES | STREAMS | TABLES | TASKS | VIEWS | STREAMLITS | DATASETS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#object_type_plural GrantPrivilegesToAccountRole#object_type_plural}

---

##### `in_database`<sup>Optional</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.inDatabase"></a>

```python
in_database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#in_database GrantPrivilegesToAccountRole#in_database}.

---

##### `in_schema`<sup>Optional</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture.property.inSchema"></a>

```python
in_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#in_schema GrantPrivilegesToAccountRole#in_schema}.

---

### GrantPrivilegesToAccountRoleTimeouts <a name="GrantPrivilegesToAccountRoleTimeouts" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#create GrantPrivilegesToAccountRole#create}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#delete GrantPrivilegesToAccountRole#delete}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#read GrantPrivilegesToAccountRole#read}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#update GrantPrivilegesToAccountRole#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#create GrantPrivilegesToAccountRole#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#delete GrantPrivilegesToAccountRole#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#read GrantPrivilegesToAccountRole#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#update GrantPrivilegesToAccountRole#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrantPrivilegesToAccountRoleOnAccountObjectOutputReference <a name="GrantPrivilegesToAccountRoleOnAccountObjectOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectNameInput">object_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectName">object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_name_input`<sup>Optional</sup> <a name="object_name_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectNameInput"></a>

```python
object_name_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `object_name`<sup>Required</sup> <a name="object_name" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectName"></a>

```python
object_name: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObjectOutputReference.property.internalValue"></a>

```python
internal_value: GrantPrivilegesToAccountRoleOnAccountObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnAccountObject">GrantPrivilegesToAccountRoleOnAccountObject</a>

---


### GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference <a name="GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resetInDatabase">reset_in_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resetInSchema">reset_in_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_in_database` <a name="reset_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resetInDatabase"></a>

```python
def reset_in_database() -> None
```

##### `reset_in_schema` <a name="reset_in_schema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.resetInSchema"></a>

```python
def reset_in_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inDatabaseInput">in_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inSchemaInput">in_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.objectTypePluralInput">object_type_plural_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inDatabase">in_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inSchema">in_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.objectTypePlural">object_type_plural</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_database_input`<sup>Optional</sup> <a name="in_database_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inDatabaseInput"></a>

```python
in_database_input: str
```

- *Type:* str

---

##### `in_schema_input`<sup>Optional</sup> <a name="in_schema_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inSchemaInput"></a>

```python
in_schema_input: str
```

- *Type:* str

---

##### `object_type_plural_input`<sup>Optional</sup> <a name="object_type_plural_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.objectTypePluralInput"></a>

```python
object_type_plural_input: str
```

- *Type:* str

---

##### `in_database`<sup>Required</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inDatabase"></a>

```python
in_database: str
```

- *Type:* str

---

##### `in_schema`<sup>Required</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.inSchema"></a>

```python
in_schema: str
```

- *Type:* str

---

##### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.objectTypePlural"></a>

```python
object_type_plural: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference.property.internalValue"></a>

```python
internal_value: GrantPrivilegesToAccountRoleOnSchemaObjectAll
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a>

---


### GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference <a name="GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resetInDatabase">reset_in_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resetInSchema">reset_in_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_in_database` <a name="reset_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resetInDatabase"></a>

```python
def reset_in_database() -> None
```

##### `reset_in_schema` <a name="reset_in_schema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.resetInSchema"></a>

```python
def reset_in_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inDatabaseInput">in_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inSchemaInput">in_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.objectTypePluralInput">object_type_plural_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inDatabase">in_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inSchema">in_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.objectTypePlural">object_type_plural</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_database_input`<sup>Optional</sup> <a name="in_database_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inDatabaseInput"></a>

```python
in_database_input: str
```

- *Type:* str

---

##### `in_schema_input`<sup>Optional</sup> <a name="in_schema_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inSchemaInput"></a>

```python
in_schema_input: str
```

- *Type:* str

---

##### `object_type_plural_input`<sup>Optional</sup> <a name="object_type_plural_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.objectTypePluralInput"></a>

```python
object_type_plural_input: str
```

- *Type:* str

---

##### `in_database`<sup>Required</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inDatabase"></a>

```python
in_database: str
```

- *Type:* str

---

##### `in_schema`<sup>Required</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.inSchema"></a>

```python
in_schema: str
```

- *Type:* str

---

##### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.objectTypePlural"></a>

```python
object_type_plural: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference.property.internalValue"></a>

```python
internal_value: GrantPrivilegesToAccountRoleOnSchemaObjectFuture
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a>

---


### GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference <a name="GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putAll">put_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putFuture">put_future</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetFuture">reset_future</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetObjectName">reset_object_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetObjectType">reset_object_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_all` <a name="put_all" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putAll"></a>

```python
def put_all(
  object_type_plural: str,
  in_database: str = None,
  in_schema: str = None
) -> None
```

###### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putAll.parameter.objectTypePlural"></a>

- *Type:* str

The plural object type of the schema object on which privileges will be granted.

Valid values are: AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | CORTEX SEARCH SERVICES | DATA METRIC FUNCTIONS | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | IMAGE REPOSITORIES | ICEBERG TABLES | MASKING POLICIES | MATERIALIZED VIEWS | MODELS | NETWORK RULES | NOTEBOOKS | PACKAGES POLICIES | PASSWORD POLICIES | PIPES | PROCEDURES | PROJECTION POLICIES | ROW ACCESS POLICIES | SECRETS | SERVICES | SESSION POLICIES | SEQUENCES | SNAPSHOTS | STAGES | STREAMS | TABLES | TAGS | TASKS | VIEWS | STREAMLITS | DATASETS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#object_type_plural GrantPrivilegesToAccountRole#object_type_plural}

---

###### `in_database`<sup>Optional</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putAll.parameter.inDatabase"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#in_database GrantPrivilegesToAccountRole#in_database}.

---

###### `in_schema`<sup>Optional</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putAll.parameter.inSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#in_schema GrantPrivilegesToAccountRole#in_schema}.

---

##### `put_future` <a name="put_future" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putFuture"></a>

```python
def put_future(
  object_type_plural: str,
  in_database: str = None,
  in_schema: str = None
) -> None
```

###### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putFuture.parameter.objectTypePlural"></a>

- *Type:* str

The plural object type of the schema object on which privileges will be granted.

Valid values are: ALERTS | AUTHENTICATION POLICIES | DATA METRIC FUNCTIONS | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | ICEBERG TABLES | MATERIALIZED VIEWS | MODELS | NETWORK RULES | NOTEBOOKS | PASSWORD POLICIES | PIPES | PROCEDURES | SECRETS | SERVICES | SEQUENCES | SNAPSHOTS | STAGES | STREAMS | TABLES | TASKS | VIEWS | STREAMLITS | DATASETS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#object_type_plural GrantPrivilegesToAccountRole#object_type_plural}

---

###### `in_database`<sup>Optional</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putFuture.parameter.inDatabase"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#in_database GrantPrivilegesToAccountRole#in_database}.

---

###### `in_schema`<sup>Optional</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.putFuture.parameter.inSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/grant_privileges_to_account_role#in_schema GrantPrivilegesToAccountRole#in_schema}.

---

##### `reset_all` <a name="reset_all" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_future` <a name="reset_future" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetFuture"></a>

```python
def reset_future() -> None
```

##### `reset_object_name` <a name="reset_object_name" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetObjectName"></a>

```python
def reset_object_name() -> None
```

##### `reset_object_type` <a name="reset_object_type" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.resetObjectType"></a>

```python
def reset_object_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.all">all</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.future">future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.allInput">all_input</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.futureInput">future_input</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectNameInput">object_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectName">object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.all"></a>

```python
all: GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectAllOutputReference</a>

---

##### `future`<sup>Required</sup> <a name="future" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.future"></a>

```python
future: GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference">GrantPrivilegesToAccountRoleOnSchemaObjectFutureOutputReference</a>

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.allInput"></a>

```python
all_input: GrantPrivilegesToAccountRoleOnSchemaObjectAll
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectAll">GrantPrivilegesToAccountRoleOnSchemaObjectAll</a>

---

##### `future_input`<sup>Optional</sup> <a name="future_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.futureInput"></a>

```python
future_input: GrantPrivilegesToAccountRoleOnSchemaObjectFuture
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectFuture">GrantPrivilegesToAccountRoleOnSchemaObjectFuture</a>

---

##### `object_name_input`<sup>Optional</sup> <a name="object_name_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectNameInput"></a>

```python
object_name_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `object_name`<sup>Required</sup> <a name="object_name" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectName"></a>

```python
object_name: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObjectOutputReference.property.internalValue"></a>

```python
internal_value: GrantPrivilegesToAccountRoleOnSchemaObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaObject">GrantPrivilegesToAccountRoleOnSchemaObject</a>

---


### GrantPrivilegesToAccountRoleOnSchemaOutputReference <a name="GrantPrivilegesToAccountRoleOnSchemaOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetAllSchemasInDatabase">reset_all_schemas_in_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetFutureSchemasInDatabase">reset_future_schemas_in_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all_schemas_in_database` <a name="reset_all_schemas_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetAllSchemasInDatabase"></a>

```python
def reset_all_schemas_in_database() -> None
```

##### `reset_future_schemas_in_database` <a name="reset_future_schemas_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetFutureSchemasInDatabase"></a>

```python
def reset_future_schemas_in_database() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.allSchemasInDatabaseInput">all_schemas_in_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.futureSchemasInDatabaseInput">future_schemas_in_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.allSchemasInDatabase">all_schemas_in_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.futureSchemasInDatabase">future_schemas_in_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_schemas_in_database_input`<sup>Optional</sup> <a name="all_schemas_in_database_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.allSchemasInDatabaseInput"></a>

```python
all_schemas_in_database_input: str
```

- *Type:* str

---

##### `future_schemas_in_database_input`<sup>Optional</sup> <a name="future_schemas_in_database_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.futureSchemasInDatabaseInput"></a>

```python
future_schemas_in_database_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `all_schemas_in_database`<sup>Required</sup> <a name="all_schemas_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.allSchemasInDatabase"></a>

```python
all_schemas_in_database: str
```

- *Type:* str

---

##### `future_schemas_in_database`<sup>Required</sup> <a name="future_schemas_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.futureSchemasInDatabase"></a>

```python
future_schemas_in_database: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchemaOutputReference.property.internalValue"></a>

```python
internal_value: GrantPrivilegesToAccountRoleOnSchema
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleOnSchema">GrantPrivilegesToAccountRoleOnSchema</a>

---


### GrantPrivilegesToAccountRoleTimeoutsOutputReference <a name="GrantPrivilegesToAccountRoleTimeoutsOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_account_role

grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts">GrantPrivilegesToAccountRoleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GrantPrivilegesToAccountRoleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.grantPrivilegesToAccountRole.GrantPrivilegesToAccountRoleTimeouts">GrantPrivilegesToAccountRoleTimeouts</a>]

---



