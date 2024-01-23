# `resourceMonitor` Submodule <a name="`resourceMonitor` Submodule" id="@cdktf/provider-snowflake.resourceMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceMonitor <a name="ResourceMonitor" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor snowflake_resource_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import resource_monitor

resourceMonitor.ResourceMonitor(
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
  credit_quota: typing.Union[int, float] = None,
  end_timestamp: str = None,
  frequency: str = None,
  id: str = None,
  notify_triggers: typing.List[typing.Union[int, float]] = None,
  notify_users: typing.List[str] = None,
  set_for_account: typing.Union[bool, IResolvable] = None,
  start_timestamp: str = None,
  suspend_immediate_trigger: typing.Union[int, float] = None,
  suspend_immediate_triggers: typing.List[typing.Union[int, float]] = None,
  suspend_trigger: typing.Union[int, float] = None,
  suspend_triggers: typing.List[typing.Union[int, float]] = None,
  warehouses: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.name">name</a></code> | <code>str</code> | Identifier for the resource monitor; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.creditQuota">credit_quota</a></code> | <code>typing.Union[int, float]</code> | The number of credits allocated monthly to the resource monitor. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.endTimestamp">end_timestamp</a></code> | <code>str</code> | The date and time when the resource monitor suspends the assigned warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.frequency">frequency</a></code> | <code>str</code> | The frequency interval at which the credit usage resets to 0. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#id ResourceMonitor#id}. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.notifyTriggers">notify_triggers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A list of percentage thresholds at which to send an alert to subscribed users. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.notifyUsers">notify_users</a></code> | <code>typing.List[str]</code> | Specifies the list of users to receive email notifications on resource monitors. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.setForAccount">set_for_account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the resource monitor should be applied globally to your Snowflake account (defaults to false). |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.startTimestamp">start_timestamp</a></code> | <code>str</code> | The date and time when the resource monitor starts monitoring credit usage for the assigned warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.suspendImmediateTrigger">suspend_immediate_trigger</a></code> | <code>typing.Union[int, float]</code> | The number that represents the percentage threshold at which to immediately suspend all warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.suspendImmediateTriggers">suspend_immediate_triggers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A list of percentage thresholds at which to suspend all warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.suspendTrigger">suspend_trigger</a></code> | <code>typing.Union[int, float]</code> | The number that represents the percentage threshold at which to suspend all warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.suspendTriggers">suspend_triggers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A list of percentage thresholds at which to suspend all warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.warehouses">warehouses</a></code> | <code>typing.List[str]</code> | A list of warehouses to apply the resource monitor to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.name"></a>

- *Type:* str

Identifier for the resource monitor; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#name ResourceMonitor#name}

---

##### `credit_quota`<sup>Optional</sup> <a name="credit_quota" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.creditQuota"></a>

- *Type:* typing.Union[int, float]

The number of credits allocated monthly to the resource monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#credit_quota ResourceMonitor#credit_quota}

---

##### `end_timestamp`<sup>Optional</sup> <a name="end_timestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.endTimestamp"></a>

- *Type:* str

The date and time when the resource monitor suspends the assigned warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#end_timestamp ResourceMonitor#end_timestamp}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.frequency"></a>

- *Type:* str

The frequency interval at which the credit usage resets to 0.

If you set a frequency for a resource monitor, you must also set START_TIMESTAMP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#frequency ResourceMonitor#frequency}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#id ResourceMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notify_triggers`<sup>Optional</sup> <a name="notify_triggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.notifyTriggers"></a>

- *Type:* typing.List[typing.Union[int, float]]

A list of percentage thresholds at which to send an alert to subscribed users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#notify_triggers ResourceMonitor#notify_triggers}

---

##### `notify_users`<sup>Optional</sup> <a name="notify_users" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.notifyUsers"></a>

- *Type:* typing.List[str]

Specifies the list of users to receive email notifications on resource monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#notify_users ResourceMonitor#notify_users}

---

##### `set_for_account`<sup>Optional</sup> <a name="set_for_account" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.setForAccount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the resource monitor should be applied globally to your Snowflake account (defaults to false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#set_for_account ResourceMonitor#set_for_account}

---

##### `start_timestamp`<sup>Optional</sup> <a name="start_timestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.startTimestamp"></a>

- *Type:* str

The date and time when the resource monitor starts monitoring credit usage for the assigned warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#start_timestamp ResourceMonitor#start_timestamp}

---

##### `suspend_immediate_trigger`<sup>Optional</sup> <a name="suspend_immediate_trigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.suspendImmediateTrigger"></a>

- *Type:* typing.Union[int, float]

The number that represents the percentage threshold at which to immediately suspend all warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#suspend_immediate_trigger ResourceMonitor#suspend_immediate_trigger}

---

##### `suspend_immediate_triggers`<sup>Optional</sup> <a name="suspend_immediate_triggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.suspendImmediateTriggers"></a>

- *Type:* typing.List[typing.Union[int, float]]

A list of percentage thresholds at which to suspend all warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#suspend_immediate_triggers ResourceMonitor#suspend_immediate_triggers}

---

##### `suspend_trigger`<sup>Optional</sup> <a name="suspend_trigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.suspendTrigger"></a>

- *Type:* typing.Union[int, float]

The number that represents the percentage threshold at which to suspend all warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#suspend_trigger ResourceMonitor#suspend_trigger}

---

##### `suspend_triggers`<sup>Optional</sup> <a name="suspend_triggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.suspendTriggers"></a>

- *Type:* typing.List[typing.Union[int, float]]

A list of percentage thresholds at which to suspend all warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#suspend_triggers ResourceMonitor#suspend_triggers}

---

##### `warehouses`<sup>Optional</sup> <a name="warehouses" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.warehouses"></a>

- *Type:* typing.List[str]

A list of warehouses to apply the resource monitor to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#warehouses ResourceMonitor#warehouses}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetCreditQuota">reset_credit_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetEndTimestamp">reset_end_timestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyTriggers">reset_notify_triggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyUsers">reset_notify_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSetForAccount">reset_set_for_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetStartTimestamp">reset_start_timestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendImmediateTrigger">reset_suspend_immediate_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendImmediateTriggers">reset_suspend_immediate_triggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendTrigger">reset_suspend_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendTriggers">reset_suspend_triggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetWarehouses">reset_warehouses</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_credit_quota` <a name="reset_credit_quota" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetCreditQuota"></a>

```python
def reset_credit_quota() -> None
```

##### `reset_end_timestamp` <a name="reset_end_timestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetEndTimestamp"></a>

```python
def reset_end_timestamp() -> None
```

##### `reset_frequency` <a name="reset_frequency" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notify_triggers` <a name="reset_notify_triggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyTriggers"></a>

```python
def reset_notify_triggers() -> None
```

##### `reset_notify_users` <a name="reset_notify_users" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyUsers"></a>

```python
def reset_notify_users() -> None
```

##### `reset_set_for_account` <a name="reset_set_for_account" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSetForAccount"></a>

```python
def reset_set_for_account() -> None
```

##### `reset_start_timestamp` <a name="reset_start_timestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetStartTimestamp"></a>

```python
def reset_start_timestamp() -> None
```

##### `reset_suspend_immediate_trigger` <a name="reset_suspend_immediate_trigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendImmediateTrigger"></a>

```python
def reset_suspend_immediate_trigger() -> None
```

##### `reset_suspend_immediate_triggers` <a name="reset_suspend_immediate_triggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendImmediateTriggers"></a>

```python
def reset_suspend_immediate_triggers() -> None
```

##### `reset_suspend_trigger` <a name="reset_suspend_trigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendTrigger"></a>

```python
def reset_suspend_trigger() -> None
```

##### `reset_suspend_triggers` <a name="reset_suspend_triggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendTriggers"></a>

```python
def reset_suspend_triggers() -> None
```

##### `reset_warehouses` <a name="reset_warehouses" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.resetWarehouses"></a>

```python
def reset_warehouses() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ResourceMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import resource_monitor

resourceMonitor.ResourceMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import resource_monitor

resourceMonitor.ResourceMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import resource_monitor

resourceMonitor.ResourceMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import resource_monitor

resourceMonitor.ResourceMonitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ResourceMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResourceMonitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResourceMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourceMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuotaInput">credit_quota_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestampInput">end_timestamp_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggersInput">notify_triggers_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsersInput">notify_users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.setForAccountInput">set_for_account_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestampInput">start_timestamp_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggerInput">suspend_immediate_trigger_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggersInput">suspend_immediate_triggers_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggerInput">suspend_trigger_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggersInput">suspend_triggers_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.warehousesInput">warehouses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuota">credit_quota</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestamp">end_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggers">notify_triggers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsers">notify_users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.setForAccount">set_for_account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestamp">start_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTrigger">suspend_immediate_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggers">suspend_immediate_triggers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTrigger">suspend_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggers">suspend_triggers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.warehouses">warehouses</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credit_quota_input`<sup>Optional</sup> <a name="credit_quota_input" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuotaInput"></a>

```python
credit_quota_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_timestamp_input`<sup>Optional</sup> <a name="end_timestamp_input" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestampInput"></a>

```python
end_timestamp_input: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notify_triggers_input`<sup>Optional</sup> <a name="notify_triggers_input" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggersInput"></a>

```python
notify_triggers_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `notify_users_input`<sup>Optional</sup> <a name="notify_users_input" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsersInput"></a>

```python
notify_users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set_for_account_input`<sup>Optional</sup> <a name="set_for_account_input" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.setForAccountInput"></a>

```python
set_for_account_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `start_timestamp_input`<sup>Optional</sup> <a name="start_timestamp_input" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestampInput"></a>

```python
start_timestamp_input: str
```

- *Type:* str

---

##### `suspend_immediate_trigger_input`<sup>Optional</sup> <a name="suspend_immediate_trigger_input" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggerInput"></a>

```python
suspend_immediate_trigger_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suspend_immediate_triggers_input`<sup>Optional</sup> <a name="suspend_immediate_triggers_input" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggersInput"></a>

```python
suspend_immediate_triggers_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `suspend_trigger_input`<sup>Optional</sup> <a name="suspend_trigger_input" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggerInput"></a>

```python
suspend_trigger_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suspend_triggers_input`<sup>Optional</sup> <a name="suspend_triggers_input" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggersInput"></a>

```python
suspend_triggers_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `warehouses_input`<sup>Optional</sup> <a name="warehouses_input" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.warehousesInput"></a>

```python
warehouses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `credit_quota`<sup>Required</sup> <a name="credit_quota" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuota"></a>

```python
credit_quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_timestamp`<sup>Required</sup> <a name="end_timestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestamp"></a>

```python
end_timestamp: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notify_triggers`<sup>Required</sup> <a name="notify_triggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggers"></a>

```python
notify_triggers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `notify_users`<sup>Required</sup> <a name="notify_users" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsers"></a>

```python
notify_users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set_for_account`<sup>Required</sup> <a name="set_for_account" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.setForAccount"></a>

```python
set_for_account: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `start_timestamp`<sup>Required</sup> <a name="start_timestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestamp"></a>

```python
start_timestamp: str
```

- *Type:* str

---

##### `suspend_immediate_trigger`<sup>Required</sup> <a name="suspend_immediate_trigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTrigger"></a>

```python
suspend_immediate_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suspend_immediate_triggers`<sup>Required</sup> <a name="suspend_immediate_triggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggers"></a>

```python
suspend_immediate_triggers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `suspend_trigger`<sup>Required</sup> <a name="suspend_trigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTrigger"></a>

```python
suspend_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suspend_triggers`<sup>Required</sup> <a name="suspend_triggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggers"></a>

```python
suspend_triggers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `warehouses`<sup>Required</sup> <a name="warehouses" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.warehouses"></a>

```python
warehouses: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceMonitorConfig <a name="ResourceMonitorConfig" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import resource_monitor

resourceMonitor.ResourceMonitorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  credit_quota: typing.Union[int, float] = None,
  end_timestamp: str = None,
  frequency: str = None,
  id: str = None,
  notify_triggers: typing.List[typing.Union[int, float]] = None,
  notify_users: typing.List[str] = None,
  set_for_account: typing.Union[bool, IResolvable] = None,
  start_timestamp: str = None,
  suspend_immediate_trigger: typing.Union[int, float] = None,
  suspend_immediate_triggers: typing.List[typing.Union[int, float]] = None,
  suspend_trigger: typing.Union[int, float] = None,
  suspend_triggers: typing.List[typing.Union[int, float]] = None,
  warehouses: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.name">name</a></code> | <code>str</code> | Identifier for the resource monitor; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.creditQuota">credit_quota</a></code> | <code>typing.Union[int, float]</code> | The number of credits allocated monthly to the resource monitor. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.endTimestamp">end_timestamp</a></code> | <code>str</code> | The date and time when the resource monitor suspends the assigned warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.frequency">frequency</a></code> | <code>str</code> | The frequency interval at which the credit usage resets to 0. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#id ResourceMonitor#id}. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyTriggers">notify_triggers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A list of percentage thresholds at which to send an alert to subscribed users. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyUsers">notify_users</a></code> | <code>typing.List[str]</code> | Specifies the list of users to receive email notifications on resource monitors. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.setForAccount">set_for_account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the resource monitor should be applied globally to your Snowflake account (defaults to false). |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.startTimestamp">start_timestamp</a></code> | <code>str</code> | The date and time when the resource monitor starts monitoring credit usage for the assigned warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendImmediateTrigger">suspend_immediate_trigger</a></code> | <code>typing.Union[int, float]</code> | The number that represents the percentage threshold at which to immediately suspend all warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendImmediateTriggers">suspend_immediate_triggers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A list of percentage thresholds at which to suspend all warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendTrigger">suspend_trigger</a></code> | <code>typing.Union[int, float]</code> | The number that represents the percentage threshold at which to suspend all warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendTriggers">suspend_triggers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A list of percentage thresholds at which to suspend all warehouses. |
| <code><a href="#@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.warehouses">warehouses</a></code> | <code>typing.List[str]</code> | A list of warehouses to apply the resource monitor to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Identifier for the resource monitor; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#name ResourceMonitor#name}

---

##### `credit_quota`<sup>Optional</sup> <a name="credit_quota" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.creditQuota"></a>

```python
credit_quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of credits allocated monthly to the resource monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#credit_quota ResourceMonitor#credit_quota}

---

##### `end_timestamp`<sup>Optional</sup> <a name="end_timestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.endTimestamp"></a>

```python
end_timestamp: str
```

- *Type:* str

The date and time when the resource monitor suspends the assigned warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#end_timestamp ResourceMonitor#end_timestamp}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

The frequency interval at which the credit usage resets to 0.

If you set a frequency for a resource monitor, you must also set START_TIMESTAMP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#frequency ResourceMonitor#frequency}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#id ResourceMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notify_triggers`<sup>Optional</sup> <a name="notify_triggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyTriggers"></a>

```python
notify_triggers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

A list of percentage thresholds at which to send an alert to subscribed users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#notify_triggers ResourceMonitor#notify_triggers}

---

##### `notify_users`<sup>Optional</sup> <a name="notify_users" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyUsers"></a>

```python
notify_users: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of users to receive email notifications on resource monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#notify_users ResourceMonitor#notify_users}

---

##### `set_for_account`<sup>Optional</sup> <a name="set_for_account" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.setForAccount"></a>

```python
set_for_account: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the resource monitor should be applied globally to your Snowflake account (defaults to false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#set_for_account ResourceMonitor#set_for_account}

---

##### `start_timestamp`<sup>Optional</sup> <a name="start_timestamp" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.startTimestamp"></a>

```python
start_timestamp: str
```

- *Type:* str

The date and time when the resource monitor starts monitoring credit usage for the assigned warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#start_timestamp ResourceMonitor#start_timestamp}

---

##### `suspend_immediate_trigger`<sup>Optional</sup> <a name="suspend_immediate_trigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendImmediateTrigger"></a>

```python
suspend_immediate_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number that represents the percentage threshold at which to immediately suspend all warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#suspend_immediate_trigger ResourceMonitor#suspend_immediate_trigger}

---

##### `suspend_immediate_triggers`<sup>Optional</sup> <a name="suspend_immediate_triggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendImmediateTriggers"></a>

```python
suspend_immediate_triggers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

A list of percentage thresholds at which to suspend all warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#suspend_immediate_triggers ResourceMonitor#suspend_immediate_triggers}

---

##### `suspend_trigger`<sup>Optional</sup> <a name="suspend_trigger" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendTrigger"></a>

```python
suspend_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number that represents the percentage threshold at which to suspend all warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#suspend_trigger ResourceMonitor#suspend_trigger}

---

##### `suspend_triggers`<sup>Optional</sup> <a name="suspend_triggers" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendTriggers"></a>

```python
suspend_triggers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

A list of percentage thresholds at which to suspend all warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#suspend_triggers ResourceMonitor#suspend_triggers}

---

##### `warehouses`<sup>Optional</sup> <a name="warehouses" id="@cdktf/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.warehouses"></a>

```python
warehouses: typing.List[str]
```

- *Type:* typing.List[str]

A list of warehouses to apply the resource monitor to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/resource_monitor#warehouses ResourceMonitor#warehouses}

---



