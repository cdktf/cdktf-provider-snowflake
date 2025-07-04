# `service` Submodule <a name="`service` Submodule" id="@cdktf/provider-snowflake.service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Service <a name="Service" id="@cdktf/provider-snowflake.service.Service"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service snowflake_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.Service.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.Service(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_pool: str,
  database: str,
  name: str,
  schema: str,
  auto_resume: str = None,
  auto_suspend_secs: typing.Union[int, float] = None,
  comment: str = None,
  external_access_integrations: typing.List[str] = None,
  from_specification: ServiceFromSpecification = None,
  from_specification_template: ServiceFromSpecificationTemplate = None,
  id: str = None,
  max_instances: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  min_ready_instances: typing.Union[int, float] = None,
  query_warehouse: str = None,
  timeouts: ServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.computePool">compute_pool</a></code> | <code>str</code> | Specifies the name of the compute pool in your account on which to run the service. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the service. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the service; |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the service. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.autoResume">auto_resume</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume a service. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.autoSuspendSecs">auto_suspend_secs</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity (service is idle) after which Snowflake automatically suspends the service. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the service. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | Specifies the names of the external access integrations that allow your service to access external sites. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.fromSpecification">from_specification</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification">ServiceFromSpecification</a></code> | from_specification block. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.fromSpecificationTemplate">from_specification_template</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate">ServiceFromSpecificationTemplate</a></code> | from_specification_template block. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of service instances to run. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | Specifies the minimum number of service instances to run. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.minReadyInstances">min_ready_instances</a></code> | <code>typing.Union[int, float]</code> | Indicates the minimum service instances that must be ready for Snowflake to consider the service is ready to process requests. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.queryWarehouse">query_warehouse</a></code> | <code>str</code> | Warehouse to use if a service container connects to Snowflake to execute a query but does not explicitly specify a warehouse to use. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeouts">ServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_pool`<sup>Required</sup> <a name="compute_pool" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.computePool"></a>

- *Type:* str

Specifies the name of the compute pool in your account on which to run the service.

Identifiers with special or lower-case characters are not supported. This limitation in the provider follows the limitation in Snowflake (see [docs](https://docs.snowflake.com/en/sql-reference/sql/create-compute-pool)). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#compute_pool Service#compute_pool}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the service.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#database Service#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the service;

must be unique for the schema in which the service is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#name Service#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the service.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#schema Service#schema}

---

##### `auto_resume`<sup>Optional</sup> <a name="auto_resume" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.autoResume"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume a service.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#auto_resume Service#auto_resume}

---

##### `auto_suspend_secs`<sup>Optional</sup> <a name="auto_suspend_secs" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.autoSuspendSecs"></a>

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity (service is idle) after which Snowflake automatically suspends the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#auto_suspend_secs Service#auto_suspend_secs}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#comment Service#comment}

---

##### `external_access_integrations`<sup>Optional</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.externalAccessIntegrations"></a>

- *Type:* typing.List[str]

Specifies the names of the external access integrations that allow your service to access external sites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#external_access_integrations Service#external_access_integrations}

---

##### `from_specification`<sup>Optional</sup> <a name="from_specification" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.fromSpecification"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification">ServiceFromSpecification</a>

from_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#from_specification Service#from_specification}

---

##### `from_specification_template`<sup>Optional</sup> <a name="from_specification_template" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.fromSpecificationTemplate"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate">ServiceFromSpecificationTemplate</a>

from_specification_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#from_specification_template Service#from_specification_template}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.maxInstances"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum number of service instances to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#max_instances Service#max_instances}

---

##### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.minInstances"></a>

- *Type:* typing.Union[int, float]

Specifies the minimum number of service instances to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#min_instances Service#min_instances}

---

##### `min_ready_instances`<sup>Optional</sup> <a name="min_ready_instances" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.minReadyInstances"></a>

- *Type:* typing.Union[int, float]

Indicates the minimum service instances that must be ready for Snowflake to consider the service is ready to process requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#min_ready_instances Service#min_ready_instances}

---

##### `query_warehouse`<sup>Optional</sup> <a name="query_warehouse" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.queryWarehouse"></a>

- *Type:* str

Warehouse to use if a service container connects to Snowflake to execute a query but does not explicitly specify a warehouse to use.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#query_warehouse Service#query_warehouse}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.service.Service.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceTimeouts">ServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#timeouts Service#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.Service.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.service.Service.putFromSpecification">put_from_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.putFromSpecificationTemplate">put_from_specification_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetAutoResume">reset_auto_resume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetAutoSuspendSecs">reset_auto_suspend_secs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetExternalAccessIntegrations">reset_external_access_integrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetFromSpecification">reset_from_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetFromSpecificationTemplate">reset_from_specification_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetMaxInstances">reset_max_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetMinInstances">reset_min_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetMinReadyInstances">reset_min_ready_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetQueryWarehouse">reset_query_warehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.service.Service.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.service.Service.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.service.Service.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.service.Service.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.service.Service.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.service.Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.service.Service.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.service.Service.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.service.Service.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.service.Service.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.service.Service.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.service.Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.service.Service.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.service.Service.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.service.Service.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.service.Service.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.service.Service.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.service.Service.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.service.Service.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.service.Service.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.service.Service.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.service.Service.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.service.Service.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.service.Service.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.service.Service.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.service.Service.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.service.Service.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.service.Service.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.service.Service.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.service.Service.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.service.Service.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.service.Service.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.service.Service.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_from_specification` <a name="put_from_specification" id="@cdktf/provider-snowflake.service.Service.putFromSpecification"></a>

```python
def put_from_specification(
  file: str = None,
  path: str = None,
  stage: str = None,
  text: str = None
) -> None
```

###### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-snowflake.service.Service.putFromSpecification.parameter.file"></a>

- *Type:* str

The file name of the service specification. Example: `spec.yaml`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#file Service#file}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-snowflake.service.Service.putFromSpecification.parameter.path"></a>

- *Type:* str

The path to the service specification file on the given stage.

When the path is specified, the `/` character is automatically added as a path prefix. Example: `path/to/spec`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#path Service#path}

---

###### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-snowflake.service.Service.putFromSpecification.parameter.stage"></a>

- *Type:* str

The fully qualified name of the stage containing the service specification file.

At symbol (`@`) is added automatically. Example: `"\"<db_name>\".\"<schema_name>\".\"<stage_name>\""`. For more information about this resource, see [docs](./stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#stage Service#stage}

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-snowflake.service.Service.putFromSpecification.parameter.text"></a>

- *Type:* str

The embedded text of the service specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#text Service#text}

---

##### `put_from_specification_template` <a name="put_from_specification_template" id="@cdktf/provider-snowflake.service.Service.putFromSpecificationTemplate"></a>

```python
def put_from_specification_template(
  using: typing.Union[IResolvable, typing.List[ServiceFromSpecificationTemplateUsing]],
  file: str = None,
  path: str = None,
  stage: str = None,
  text: str = None
) -> None
```

###### `using`<sup>Required</sup> <a name="using" id="@cdktf/provider-snowflake.service.Service.putFromSpecificationTemplate.parameter.using"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>]]

using block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#using Service#using}

---

###### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-snowflake.service.Service.putFromSpecificationTemplate.parameter.file"></a>

- *Type:* str

The file name of the service specification template. Example: `spec.yaml`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#file Service#file}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-snowflake.service.Service.putFromSpecificationTemplate.parameter.path"></a>

- *Type:* str

The path to the service specification template file on the given stage.

When the path is specified, the `/` character is automatically added as a path prefix. Example: `path/to/spec`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#path Service#path}

---

###### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-snowflake.service.Service.putFromSpecificationTemplate.parameter.stage"></a>

- *Type:* str

The fully qualified name of the stage containing the service specification template file.

At symbol (`@`) is added automatically. Example: `"\"<db_name>\".\"<schema_name>\".\"<stage_name>\""`. For more information about this resource, see [docs](./stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#stage Service#stage}

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-snowflake.service.Service.putFromSpecificationTemplate.parameter.text"></a>

- *Type:* str

The embedded text of the service specification template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#text Service#text}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.service.Service.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.service.Service.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#create Service#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.service.Service.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#delete Service#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.service.Service.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#read Service#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.service.Service.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#update Service#update}.

---

##### `reset_auto_resume` <a name="reset_auto_resume" id="@cdktf/provider-snowflake.service.Service.resetAutoResume"></a>

```python
def reset_auto_resume() -> None
```

##### `reset_auto_suspend_secs` <a name="reset_auto_suspend_secs" id="@cdktf/provider-snowflake.service.Service.resetAutoSuspendSecs"></a>

```python
def reset_auto_suspend_secs() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.service.Service.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_external_access_integrations` <a name="reset_external_access_integrations" id="@cdktf/provider-snowflake.service.Service.resetExternalAccessIntegrations"></a>

```python
def reset_external_access_integrations() -> None
```

##### `reset_from_specification` <a name="reset_from_specification" id="@cdktf/provider-snowflake.service.Service.resetFromSpecification"></a>

```python
def reset_from_specification() -> None
```

##### `reset_from_specification_template` <a name="reset_from_specification_template" id="@cdktf/provider-snowflake.service.Service.resetFromSpecificationTemplate"></a>

```python
def reset_from_specification_template() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.service.Service.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_instances` <a name="reset_max_instances" id="@cdktf/provider-snowflake.service.Service.resetMaxInstances"></a>

```python
def reset_max_instances() -> None
```

##### `reset_min_instances` <a name="reset_min_instances" id="@cdktf/provider-snowflake.service.Service.resetMinInstances"></a>

```python
def reset_min_instances() -> None
```

##### `reset_min_ready_instances` <a name="reset_min_ready_instances" id="@cdktf/provider-snowflake.service.Service.resetMinReadyInstances"></a>

```python
def reset_min_ready_instances() -> None
```

##### `reset_query_warehouse` <a name="reset_query_warehouse" id="@cdktf/provider-snowflake.service.Service.resetQueryWarehouse"></a>

```python
def reset_query_warehouse() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.service.Service.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.Service.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.service.Service.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.Service.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.service.Service.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.service.Service.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.Service.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.service.Service.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.service.Service.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.Service.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.service.Service.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.service.Service.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.Service.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.service.Service.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.service.Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Service to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.service.Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.service.Service.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList">ServiceDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.fromSpecification">from_specification</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference">ServiceFromSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.fromSpecificationTemplate">from_specification_template</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference">ServiceFromSpecificationTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList">ServiceShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference">ServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.autoResumeInput">auto_resume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.autoSuspendSecsInput">auto_suspend_secs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.computePoolInput">compute_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.externalAccessIntegrationsInput">external_access_integrations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.fromSpecificationInput">from_specification_input</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification">ServiceFromSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.fromSpecificationTemplateInput">from_specification_template_input</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate">ServiceFromSpecificationTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.maxInstancesInput">max_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.minInstancesInput">min_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.minReadyInstancesInput">min_ready_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.queryWarehouseInput">query_warehouse_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.service.ServiceTimeouts">ServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.autoResume">auto_resume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.autoSuspendSecs">auto_suspend_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.computePool">compute_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.minReadyInstances">min_ready_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.queryWarehouse">query_warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.schema">schema</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.service.Service.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.service.Service.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.service.Service.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.service.Service.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.service.Service.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.service.Service.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.service.Service.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.service.Service.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.service.Service.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.service.Service.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.service.Service.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.service.Service.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.service.Service.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.service.Service.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktf/provider-snowflake.service.Service.property.describeOutput"></a>

```python
describe_output: ServiceDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList">ServiceDescribeOutputList</a>

---

##### `from_specification`<sup>Required</sup> <a name="from_specification" id="@cdktf/provider-snowflake.service.Service.property.fromSpecification"></a>

```python
from_specification: ServiceFromSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference">ServiceFromSpecificationOutputReference</a>

---

##### `from_specification_template`<sup>Required</sup> <a name="from_specification_template" id="@cdktf/provider-snowflake.service.Service.property.fromSpecificationTemplate"></a>

```python
from_specification_template: ServiceFromSpecificationTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference">ServiceFromSpecificationTemplateOutputReference</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.service.Service.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktf/provider-snowflake.service.Service.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.service.Service.property.showOutput"></a>

```python
show_output: ServiceShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList">ServiceShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.service.Service.property.timeouts"></a>

```python
timeouts: ServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference">ServiceTimeoutsOutputReference</a>

---

##### `auto_resume_input`<sup>Optional</sup> <a name="auto_resume_input" id="@cdktf/provider-snowflake.service.Service.property.autoResumeInput"></a>

```python
auto_resume_input: str
```

- *Type:* str

---

##### `auto_suspend_secs_input`<sup>Optional</sup> <a name="auto_suspend_secs_input" id="@cdktf/provider-snowflake.service.Service.property.autoSuspendSecsInput"></a>

```python
auto_suspend_secs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.service.Service.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `compute_pool_input`<sup>Optional</sup> <a name="compute_pool_input" id="@cdktf/provider-snowflake.service.Service.property.computePoolInput"></a>

```python
compute_pool_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.service.Service.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `external_access_integrations_input`<sup>Optional</sup> <a name="external_access_integrations_input" id="@cdktf/provider-snowflake.service.Service.property.externalAccessIntegrationsInput"></a>

```python
external_access_integrations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `from_specification_input`<sup>Optional</sup> <a name="from_specification_input" id="@cdktf/provider-snowflake.service.Service.property.fromSpecificationInput"></a>

```python
from_specification_input: ServiceFromSpecification
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification">ServiceFromSpecification</a>

---

##### `from_specification_template_input`<sup>Optional</sup> <a name="from_specification_template_input" id="@cdktf/provider-snowflake.service.Service.property.fromSpecificationTemplateInput"></a>

```python
from_specification_template_input: ServiceFromSpecificationTemplate
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate">ServiceFromSpecificationTemplate</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.service.Service.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_instances_input`<sup>Optional</sup> <a name="max_instances_input" id="@cdktf/provider-snowflake.service.Service.property.maxInstancesInput"></a>

```python
max_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances_input`<sup>Optional</sup> <a name="min_instances_input" id="@cdktf/provider-snowflake.service.Service.property.minInstancesInput"></a>

```python
min_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ready_instances_input`<sup>Optional</sup> <a name="min_ready_instances_input" id="@cdktf/provider-snowflake.service.Service.property.minReadyInstancesInput"></a>

```python
min_ready_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.service.Service.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_warehouse_input`<sup>Optional</sup> <a name="query_warehouse_input" id="@cdktf/provider-snowflake.service.Service.property.queryWarehouseInput"></a>

```python
query_warehouse_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.service.Service.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.service.Service.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.service.ServiceTimeouts">ServiceTimeouts</a>]

---

##### `auto_resume`<sup>Required</sup> <a name="auto_resume" id="@cdktf/provider-snowflake.service.Service.property.autoResume"></a>

```python
auto_resume: str
```

- *Type:* str

---

##### `auto_suspend_secs`<sup>Required</sup> <a name="auto_suspend_secs" id="@cdktf/provider-snowflake.service.Service.property.autoSuspendSecs"></a>

```python
auto_suspend_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.service.Service.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compute_pool`<sup>Required</sup> <a name="compute_pool" id="@cdktf/provider-snowflake.service.Service.property.computePool"></a>

```python
compute_pool: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.service.Service.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.service.Service.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.service.Service.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-snowflake.service.Service.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-snowflake.service.Service.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ready_instances`<sup>Required</sup> <a name="min_ready_instances" id="@cdktf/provider-snowflake.service.Service.property.minReadyInstances"></a>

```python
min_ready_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.service.Service.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query_warehouse`<sup>Required</sup> <a name="query_warehouse" id="@cdktf/provider-snowflake.service.Service.property.queryWarehouse"></a>

```python
query_warehouse: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.service.Service.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.Service.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.service.Service.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceConfig <a name="ServiceConfig" id="@cdktf/provider-snowflake.service.ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.service.ServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.ServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_pool: str,
  database: str,
  name: str,
  schema: str,
  auto_resume: str = None,
  auto_suspend_secs: typing.Union[int, float] = None,
  comment: str = None,
  external_access_integrations: typing.List[str] = None,
  from_specification: ServiceFromSpecification = None,
  from_specification_template: ServiceFromSpecificationTemplate = None,
  id: str = None,
  max_instances: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  min_ready_instances: typing.Union[int, float] = None,
  query_warehouse: str = None,
  timeouts: ServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.computePool">compute_pool</a></code> | <code>str</code> | Specifies the name of the compute pool in your account on which to run the service. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the service. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the service; |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the service. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.autoResume">auto_resume</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume a service. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.autoSuspendSecs">auto_suspend_secs</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity (service is idle) after which Snowflake automatically suspends the service. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the service. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | Specifies the names of the external access integrations that allow your service to access external sites. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.fromSpecification">from_specification</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification">ServiceFromSpecification</a></code> | from_specification block. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.fromSpecificationTemplate">from_specification_template</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate">ServiceFromSpecificationTemplate</a></code> | from_specification_template block. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of service instances to run. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | Specifies the minimum number of service instances to run. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.minReadyInstances">min_ready_instances</a></code> | <code>typing.Union[int, float]</code> | Indicates the minimum service instances that must be ready for Snowflake to consider the service is ready to process requests. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.queryWarehouse">query_warehouse</a></code> | <code>str</code> | Warehouse to use if a service container connects to Snowflake to execute a query but does not explicitly specify a warehouse to use. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeouts">ServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.service.ServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.service.ServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.service.ServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.service.ServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.service.ServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.service.ServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.service.ServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_pool`<sup>Required</sup> <a name="compute_pool" id="@cdktf/provider-snowflake.service.ServiceConfig.property.computePool"></a>

```python
compute_pool: str
```

- *Type:* str

Specifies the name of the compute pool in your account on which to run the service.

Identifiers with special or lower-case characters are not supported. This limitation in the provider follows the limitation in Snowflake (see [docs](https://docs.snowflake.com/en/sql-reference/sql/create-compute-pool)). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#compute_pool Service#compute_pool}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.service.ServiceConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the service.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#database Service#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.service.ServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the service;

must be unique for the schema in which the service is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#name Service#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.service.ServiceConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the service.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#schema Service#schema}

---

##### `auto_resume`<sup>Optional</sup> <a name="auto_resume" id="@cdktf/provider-snowflake.service.ServiceConfig.property.autoResume"></a>

```python
auto_resume: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume a service.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#auto_resume Service#auto_resume}

---

##### `auto_suspend_secs`<sup>Optional</sup> <a name="auto_suspend_secs" id="@cdktf/provider-snowflake.service.ServiceConfig.property.autoSuspendSecs"></a>

```python
auto_suspend_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity (service is idle) after which Snowflake automatically suspends the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#auto_suspend_secs Service#auto_suspend_secs}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.service.ServiceConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#comment Service#comment}

---

##### `external_access_integrations`<sup>Optional</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.service.ServiceConfig.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the names of the external access integrations that allow your service to access external sites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#external_access_integrations Service#external_access_integrations}

---

##### `from_specification`<sup>Optional</sup> <a name="from_specification" id="@cdktf/provider-snowflake.service.ServiceConfig.property.fromSpecification"></a>

```python
from_specification: ServiceFromSpecification
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification">ServiceFromSpecification</a>

from_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#from_specification Service#from_specification}

---

##### `from_specification_template`<sup>Optional</sup> <a name="from_specification_template" id="@cdktf/provider-snowflake.service.ServiceConfig.property.fromSpecificationTemplate"></a>

```python
from_specification_template: ServiceFromSpecificationTemplate
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate">ServiceFromSpecificationTemplate</a>

from_specification_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#from_specification_template Service#from_specification_template}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.service.ServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-snowflake.service.ServiceConfig.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum number of service instances to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#max_instances Service#max_instances}

---

##### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-snowflake.service.ServiceConfig.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the minimum number of service instances to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#min_instances Service#min_instances}

---

##### `min_ready_instances`<sup>Optional</sup> <a name="min_ready_instances" id="@cdktf/provider-snowflake.service.ServiceConfig.property.minReadyInstances"></a>

```python
min_ready_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates the minimum service instances that must be ready for Snowflake to consider the service is ready to process requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#min_ready_instances Service#min_ready_instances}

---

##### `query_warehouse`<sup>Optional</sup> <a name="query_warehouse" id="@cdktf/provider-snowflake.service.ServiceConfig.property.queryWarehouse"></a>

```python
query_warehouse: str
```

- *Type:* str

Warehouse to use if a service container connects to Snowflake to execute a query but does not explicitly specify a warehouse to use.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#query_warehouse Service#query_warehouse}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.service.ServiceConfig.property.timeouts"></a>

```python
timeouts: ServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceTimeouts">ServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#timeouts Service#timeouts}

---

### ServiceDescribeOutput <a name="ServiceDescribeOutput" id="@cdktf/provider-snowflake.service.ServiceDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.service.ServiceDescribeOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.ServiceDescribeOutput()
```


### ServiceFromSpecification <a name="ServiceFromSpecification" id="@cdktf/provider-snowflake.service.ServiceFromSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.service.ServiceFromSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.ServiceFromSpecification(
  file: str = None,
  path: str = None,
  stage: str = None,
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification.property.file">file</a></code> | <code>str</code> | The file name of the service specification. Example: `spec.yaml`. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification.property.path">path</a></code> | <code>str</code> | The path to the service specification file on the given stage. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification.property.stage">stage</a></code> | <code>str</code> | The fully qualified name of the stage containing the service specification file. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification.property.text">text</a></code> | <code>str</code> | The embedded text of the service specification. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-snowflake.service.ServiceFromSpecification.property.file"></a>

```python
file: str
```

- *Type:* str

The file name of the service specification. Example: `spec.yaml`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#file Service#file}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-snowflake.service.ServiceFromSpecification.property.path"></a>

```python
path: str
```

- *Type:* str

The path to the service specification file on the given stage.

When the path is specified, the `/` character is automatically added as a path prefix. Example: `path/to/spec`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#path Service#path}

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-snowflake.service.ServiceFromSpecification.property.stage"></a>

```python
stage: str
```

- *Type:* str

The fully qualified name of the stage containing the service specification file.

At symbol (`@`) is added automatically. Example: `"\"<db_name>\".\"<schema_name>\".\"<stage_name>\""`. For more information about this resource, see [docs](./stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#stage Service#stage}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-snowflake.service.ServiceFromSpecification.property.text"></a>

```python
text: str
```

- *Type:* str

The embedded text of the service specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#text Service#text}

---

### ServiceFromSpecificationTemplate <a name="ServiceFromSpecificationTemplate" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.ServiceFromSpecificationTemplate(
  using: typing.Union[IResolvable, typing.List[ServiceFromSpecificationTemplateUsing]],
  file: str = None,
  path: str = None,
  stage: str = None,
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.using">using</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>]]</code> | using block. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.file">file</a></code> | <code>str</code> | The file name of the service specification template. Example: `spec.yaml`. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.path">path</a></code> | <code>str</code> | The path to the service specification template file on the given stage. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.stage">stage</a></code> | <code>str</code> | The fully qualified name of the stage containing the service specification template file. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.text">text</a></code> | <code>str</code> | The embedded text of the service specification template. |

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.using"></a>

```python
using: typing.Union[IResolvable, typing.List[ServiceFromSpecificationTemplateUsing]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>]]

using block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#using Service#using}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.file"></a>

```python
file: str
```

- *Type:* str

The file name of the service specification template. Example: `spec.yaml`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#file Service#file}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.path"></a>

```python
path: str
```

- *Type:* str

The path to the service specification template file on the given stage.

When the path is specified, the `/` character is automatically added as a path prefix. Example: `path/to/spec`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#path Service#path}

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.stage"></a>

```python
stage: str
```

- *Type:* str

The fully qualified name of the stage containing the service specification template file.

At symbol (`@`) is added automatically. Example: `"\"<db_name>\".\"<schema_name>\".\"<stage_name>\""`. For more information about this resource, see [docs](./stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#stage Service#stage}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate.property.text"></a>

```python
text: str
```

- *Type:* str

The embedded text of the service specification template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#text Service#text}

---

### ServiceFromSpecificationTemplateUsing <a name="ServiceFromSpecificationTemplateUsing" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.ServiceFromSpecificationTemplateUsing(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing.property.key">key</a></code> | <code>str</code> | The name of the template variable. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing.property.value">value</a></code> | <code>str</code> | The value to assign to the variable in the template. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing.property.key"></a>

```python
key: str
```

- *Type:* str

The name of the template variable.

The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the spec definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#key Service#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing.property.value"></a>

```python
value: str
```

- *Type:* str

The value to assign to the variable in the template.

The provider wraps it in `$$` by default, so be aware of that while referencing the argument in the spec definition. The value must either be alphanumeric or valid JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#value Service#value}

---

### ServiceShowOutput <a name="ServiceShowOutput" id="@cdktf/provider-snowflake.service.ServiceShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.service.ServiceShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.ServiceShowOutput()
```


### ServiceTimeouts <a name="ServiceTimeouts" id="@cdktf/provider-snowflake.service.ServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.service.ServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.ServiceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#create Service#create}. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#delete Service#delete}. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#read Service#read}. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#update Service#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.service.ServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#create Service#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.service.ServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#delete Service#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.service.ServiceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#read Service#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.service.ServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/resources/service#update Service#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceDescribeOutputList <a name="ServiceDescribeOutputList" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.ServiceDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ServiceDescribeOutputOutputReference <a name="ServiceDescribeOutputOutputReference" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.ServiceDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.autoResume">auto_resume</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.autoSuspendSecs">auto_suspend_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.computePool">compute_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.currentInstances">current_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.isAsyncJob">is_async_job</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.isJob">is_job</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.isUpgrading">is_upgrading</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.managingObjectDomain">managing_object_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.managingObjectName">managing_object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.minReadyInstances">min_ready_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.queryWarehouse">query_warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.resumedOn">resumed_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.spec">spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.specDigest">spec_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.suspendedOn">suspended_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.targetInstances">target_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutput">ServiceDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_resume`<sup>Required</sup> <a name="auto_resume" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.autoResume"></a>

```python
auto_resume: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_suspend_secs`<sup>Required</sup> <a name="auto_suspend_secs" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.autoSuspendSecs"></a>

```python
auto_suspend_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compute_pool`<sup>Required</sup> <a name="compute_pool" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.computePool"></a>

```python
compute_pool: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `current_instances`<sup>Required</sup> <a name="current_instances" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.currentInstances"></a>

```python
current_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_async_job`<sup>Required</sup> <a name="is_async_job" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.isAsyncJob"></a>

```python
is_async_job: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_job`<sup>Required</sup> <a name="is_job" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.isJob"></a>

```python
is_job: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_upgrading`<sup>Required</sup> <a name="is_upgrading" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.isUpgrading"></a>

```python
is_upgrading: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `managing_object_domain`<sup>Required</sup> <a name="managing_object_domain" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.managingObjectDomain"></a>

```python
managing_object_domain: str
```

- *Type:* str

---

##### `managing_object_name`<sup>Required</sup> <a name="managing_object_name" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.managingObjectName"></a>

```python
managing_object_name: str
```

- *Type:* str

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ready_instances`<sup>Required</sup> <a name="min_ready_instances" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.minReadyInstances"></a>

```python
min_ready_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `query_warehouse`<sup>Required</sup> <a name="query_warehouse" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.queryWarehouse"></a>

```python
query_warehouse: str
```

- *Type:* str

---

##### `resumed_on`<sup>Required</sup> <a name="resumed_on" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.resumedOn"></a>

```python
resumed_on: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.spec"></a>

```python
spec: str
```

- *Type:* str

---

##### `spec_digest`<sup>Required</sup> <a name="spec_digest" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.specDigest"></a>

```python
spec_digest: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `suspended_on`<sup>Required</sup> <a name="suspended_on" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.suspendedOn"></a>

```python
suspended_on: str
```

- *Type:* str

---

##### `target_instances`<sup>Required</sup> <a name="target_instances" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.targetInstances"></a>

```python
target_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.service.ServiceDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: ServiceDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceDescribeOutput">ServiceDescribeOutput</a>

---


### ServiceFromSpecificationOutputReference <a name="ServiceFromSpecificationOutputReference" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.ServiceFromSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resetFile">reset_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resetStage">reset_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file` <a name="reset_file" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resetFile"></a>

```python
def reset_file() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_stage` <a name="reset_stage" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resetStage"></a>

```python
def reset_stage() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification">ServiceFromSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: ServiceFromSpecification
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecification">ServiceFromSpecification</a>

---


### ServiceFromSpecificationTemplateOutputReference <a name="ServiceFromSpecificationTemplateOutputReference" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.ServiceFromSpecificationTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.putUsing">put_using</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resetFile">reset_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resetStage">reset_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_using` <a name="put_using" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.putUsing"></a>

```python
def put_using(
  value: typing.Union[IResolvable, typing.List[ServiceFromSpecificationTemplateUsing]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.putUsing.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>]]

---

##### `reset_file` <a name="reset_file" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resetFile"></a>

```python
def reset_file() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_stage` <a name="reset_stage" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resetStage"></a>

```python
def reset_stage() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.using">using</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList">ServiceFromSpecificationTemplateUsingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.usingInput">using_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate">ServiceFromSpecificationTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.using"></a>

```python
using: ServiceFromSpecificationTemplateUsingList
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList">ServiceFromSpecificationTemplateUsingList</a>

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `using_input`<sup>Optional</sup> <a name="using_input" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.usingInput"></a>

```python
using_input: typing.Union[IResolvable, typing.List[ServiceFromSpecificationTemplateUsing]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>]]

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateOutputReference.property.internalValue"></a>

```python
internal_value: ServiceFromSpecificationTemplate
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplate">ServiceFromSpecificationTemplate</a>

---


### ServiceFromSpecificationTemplateUsingList <a name="ServiceFromSpecificationTemplateUsingList" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.ServiceFromSpecificationTemplateUsingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceFromSpecificationTemplateUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceFromSpecificationTemplateUsing]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>]]

---


### ServiceFromSpecificationTemplateUsingOutputReference <a name="ServiceFromSpecificationTemplateUsingOutputReference" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.ServiceFromSpecificationTemplateUsingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceFromSpecificationTemplateUsing]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.service.ServiceFromSpecificationTemplateUsing">ServiceFromSpecificationTemplateUsing</a>]

---


### ServiceShowOutputList <a name="ServiceShowOutputList" id="@cdktf/provider-snowflake.service.ServiceShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.ServiceShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.service.ServiceShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ServiceShowOutputOutputReference <a name="ServiceShowOutputOutputReference" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.ServiceShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.autoResume">auto_resume</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.autoSuspendSecs">auto_suspend_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.computePool">compute_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.currentInstances">current_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.isAsyncJob">is_async_job</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.isJob">is_job</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.isUpgrading">is_upgrading</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.managingObjectDomain">managing_object_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.managingObjectName">managing_object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.minReadyInstances">min_ready_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.queryWarehouse">query_warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.resumedOn">resumed_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.specDigest">spec_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.suspendedOn">suspended_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.targetInstances">target_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.service.ServiceShowOutput">ServiceShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_resume`<sup>Required</sup> <a name="auto_resume" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.autoResume"></a>

```python
auto_resume: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_suspend_secs`<sup>Required</sup> <a name="auto_suspend_secs" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.autoSuspendSecs"></a>

```python
auto_suspend_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compute_pool`<sup>Required</sup> <a name="compute_pool" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.computePool"></a>

```python
compute_pool: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `current_instances`<sup>Required</sup> <a name="current_instances" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.currentInstances"></a>

```python
current_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_async_job`<sup>Required</sup> <a name="is_async_job" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.isAsyncJob"></a>

```python
is_async_job: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_job`<sup>Required</sup> <a name="is_job" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.isJob"></a>

```python
is_job: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_upgrading`<sup>Required</sup> <a name="is_upgrading" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.isUpgrading"></a>

```python
is_upgrading: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `managing_object_domain`<sup>Required</sup> <a name="managing_object_domain" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.managingObjectDomain"></a>

```python
managing_object_domain: str
```

- *Type:* str

---

##### `managing_object_name`<sup>Required</sup> <a name="managing_object_name" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.managingObjectName"></a>

```python
managing_object_name: str
```

- *Type:* str

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ready_instances`<sup>Required</sup> <a name="min_ready_instances" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.minReadyInstances"></a>

```python
min_ready_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `query_warehouse`<sup>Required</sup> <a name="query_warehouse" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.queryWarehouse"></a>

```python
query_warehouse: str
```

- *Type:* str

---

##### `resumed_on`<sup>Required</sup> <a name="resumed_on" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.resumedOn"></a>

```python
resumed_on: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `spec_digest`<sup>Required</sup> <a name="spec_digest" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.specDigest"></a>

```python
spec_digest: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `suspended_on`<sup>Required</sup> <a name="suspended_on" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.suspendedOn"></a>

```python
suspended_on: str
```

- *Type:* str

---

##### `target_instances`<sup>Required</sup> <a name="target_instances" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.targetInstances"></a>

```python
target_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.service.ServiceShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: ServiceShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.service.ServiceShowOutput">ServiceShowOutput</a>

---


### ServiceTimeoutsOutputReference <a name="ServiceTimeoutsOutputReference" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import service

service.ServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.service.ServiceTimeouts">ServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.service.ServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.service.ServiceTimeouts">ServiceTimeouts</a>]

---



