# `jobService` Submodule <a name="`jobService` Submodule" id="@cdktf/provider-snowflake.jobService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JobService <a name="JobService" id="@cdktf/provider-snowflake.jobService.JobService"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service snowflake_job_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobService.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobService(
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
  comment: str = None,
  external_access_integrations: typing.List[str] = None,
  from_specification: JobServiceFromSpecification = None,
  from_specification_template: JobServiceFromSpecificationTemplate = None,
  id: str = None,
  query_warehouse: str = None,
  timeouts: JobServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.computePool">compute_pool</a></code> | <code>str</code> | Specifies the name of the compute pool in your account on which to run the service. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the service. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the service; |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the service. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the service. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | Specifies the names of the external access integrations that allow your service to access external sites. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.fromSpecification">from_specification</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a></code> | from_specification block. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.fromSpecificationTemplate">from_specification_template</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a></code> | from_specification_template block. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#id JobService#id}. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.queryWarehouse">query_warehouse</a></code> | <code>str</code> | Warehouse to use if a service container connects to Snowflake to execute a query but does not explicitly specify a warehouse to use. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_pool`<sup>Required</sup> <a name="compute_pool" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.computePool"></a>

- *Type:* str

Specifies the name of the compute pool in your account on which to run the service.

Identifiers with special or lower-case characters are not supported. This limitation in the provider follows the limitation in Snowflake (see [docs](https://docs.snowflake.com/en/sql-reference/sql/create-compute-pool)). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#compute_pool JobService#compute_pool}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the service.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#database JobService#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the service;

must be unique for the schema in which the service is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#name JobService#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the service.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#schema JobService#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#comment JobService#comment}

---

##### `external_access_integrations`<sup>Optional</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.externalAccessIntegrations"></a>

- *Type:* typing.List[str]

Specifies the names of the external access integrations that allow your service to access external sites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#external_access_integrations JobService#external_access_integrations}

---

##### `from_specification`<sup>Optional</sup> <a name="from_specification" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.fromSpecification"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a>

from_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#from_specification JobService#from_specification}

---

##### `from_specification_template`<sup>Optional</sup> <a name="from_specification_template" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.fromSpecificationTemplate"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a>

from_specification_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#from_specification_template JobService#from_specification_template}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#id JobService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query_warehouse`<sup>Optional</sup> <a name="query_warehouse" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.queryWarehouse"></a>

- *Type:* str

Warehouse to use if a service container connects to Snowflake to execute a query but does not explicitly specify a warehouse to use.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#query_warehouse JobService#query_warehouse}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.jobService.JobService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#timeouts JobService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.putFromSpecification">put_from_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.putFromSpecificationTemplate">put_from_specification_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.resetExternalAccessIntegrations">reset_external_access_integrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.resetFromSpecification">reset_from_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.resetFromSpecificationTemplate">reset_from_specification_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.resetQueryWarehouse">reset_query_warehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.jobService.JobService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.jobService.JobService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.jobService.JobService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.jobService.JobService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.jobService.JobService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.jobService.JobService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.jobService.JobService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.jobService.JobService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.jobService.JobService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.jobService.JobService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.jobService.JobService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.jobService.JobService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.jobService.JobService.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.jobService.JobService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.jobService.JobService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.jobService.JobService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.jobService.JobService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.jobService.JobService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.jobService.JobService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.jobService.JobService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.jobService.JobService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.jobService.JobService.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.jobService.JobService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.jobService.JobService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_from_specification` <a name="put_from_specification" id="@cdktf/provider-snowflake.jobService.JobService.putFromSpecification"></a>

```python
def put_from_specification(
  file: str = None,
  path: str = None,
  stage: str = None,
  text: str = None
) -> None
```

###### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-snowflake.jobService.JobService.putFromSpecification.parameter.file"></a>

- *Type:* str

The file name of the service specification. Example: `spec.yaml`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#file JobService#file}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-snowflake.jobService.JobService.putFromSpecification.parameter.path"></a>

- *Type:* str

The path to the service specification file on the given stage.

When the path is specified, the `/` character is automatically added as a path prefix. Example: `path/to/spec`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#path JobService#path}

---

###### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-snowflake.jobService.JobService.putFromSpecification.parameter.stage"></a>

- *Type:* str

The fully qualified name of the stage containing the service specification file.

At symbol (`@`) is added automatically. Example: `"\"<db_name>\".\"<schema_name>\".\"<stage_name>\""`. For more information about this resource, see [docs](./stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#stage JobService#stage}

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-snowflake.jobService.JobService.putFromSpecification.parameter.text"></a>

- *Type:* str

The embedded text of the service specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#text JobService#text}

---

##### `put_from_specification_template` <a name="put_from_specification_template" id="@cdktf/provider-snowflake.jobService.JobService.putFromSpecificationTemplate"></a>

```python
def put_from_specification_template(
  using: typing.Union[IResolvable, typing.List[JobServiceFromSpecificationTemplateUsing]],
  file: str = None,
  path: str = None,
  stage: str = None,
  text: str = None
) -> None
```

###### `using`<sup>Required</sup> <a name="using" id="@cdktf/provider-snowflake.jobService.JobService.putFromSpecificationTemplate.parameter.using"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>]]

using block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#using JobService#using}

---

###### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-snowflake.jobService.JobService.putFromSpecificationTemplate.parameter.file"></a>

- *Type:* str

The file name of the service specification template. Example: `spec.yaml`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#file JobService#file}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-snowflake.jobService.JobService.putFromSpecificationTemplate.parameter.path"></a>

- *Type:* str

The path to the service specification template file on the given stage.

When the path is specified, the `/` character is automatically added as a path prefix. Example: `path/to/spec`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#path JobService#path}

---

###### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-snowflake.jobService.JobService.putFromSpecificationTemplate.parameter.stage"></a>

- *Type:* str

The fully qualified name of the stage containing the service specification template file.

At symbol (`@`) is added automatically. Example: `"\"<db_name>\".\"<schema_name>\".\"<stage_name>\""`. For more information about this resource, see [docs](./stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#stage JobService#stage}

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-snowflake.jobService.JobService.putFromSpecificationTemplate.parameter.text"></a>

- *Type:* str

The embedded text of the service specification template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#text JobService#text}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.jobService.JobService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.jobService.JobService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#create JobService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.jobService.JobService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#delete JobService#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.jobService.JobService.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#read JobService#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.jobService.JobService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#update JobService#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.jobService.JobService.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_external_access_integrations` <a name="reset_external_access_integrations" id="@cdktf/provider-snowflake.jobService.JobService.resetExternalAccessIntegrations"></a>

```python
def reset_external_access_integrations() -> None
```

##### `reset_from_specification` <a name="reset_from_specification" id="@cdktf/provider-snowflake.jobService.JobService.resetFromSpecification"></a>

```python
def reset_from_specification() -> None
```

##### `reset_from_specification_template` <a name="reset_from_specification_template" id="@cdktf/provider-snowflake.jobService.JobService.resetFromSpecificationTemplate"></a>

```python
def reset_from_specification_template() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.jobService.JobService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_query_warehouse` <a name="reset_query_warehouse" id="@cdktf/provider-snowflake.jobService.JobService.resetQueryWarehouse"></a>

```python
def reset_query_warehouse() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.jobService.JobService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a JobService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.jobService.JobService.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.jobService.JobService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.jobService.JobService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.jobService.JobService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.jobService.JobService.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.jobService.JobService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.jobService.JobService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a JobService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.jobService.JobService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.jobService.JobService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the JobService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.jobService.JobService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing JobService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.jobService.JobService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the JobService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList">JobServiceDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.fromSpecification">from_specification</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference">JobServiceFromSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.fromSpecificationTemplate">from_specification_template</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference">JobServiceFromSpecificationTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList">JobServiceShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference">JobServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.computePoolInput">compute_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.externalAccessIntegrationsInput">external_access_integrations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.fromSpecificationInput">from_specification_input</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.fromSpecificationTemplateInput">from_specification_template_input</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.queryWarehouseInput">query_warehouse_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.computePool">compute_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.queryWarehouse">query_warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.schema">schema</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.jobService.JobService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.jobService.JobService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.jobService.JobService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.jobService.JobService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.jobService.JobService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.jobService.JobService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.jobService.JobService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.jobService.JobService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.jobService.JobService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.jobService.JobService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.jobService.JobService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.jobService.JobService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.jobService.JobService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktf/provider-snowflake.jobService.JobService.property.describeOutput"></a>

```python
describe_output: JobServiceDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList">JobServiceDescribeOutputList</a>

---

##### `from_specification`<sup>Required</sup> <a name="from_specification" id="@cdktf/provider-snowflake.jobService.JobService.property.fromSpecification"></a>

```python
from_specification: JobServiceFromSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference">JobServiceFromSpecificationOutputReference</a>

---

##### `from_specification_template`<sup>Required</sup> <a name="from_specification_template" id="@cdktf/provider-snowflake.jobService.JobService.property.fromSpecificationTemplate"></a>

```python
from_specification_template: JobServiceFromSpecificationTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference">JobServiceFromSpecificationTemplateOutputReference</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.jobService.JobService.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktf/provider-snowflake.jobService.JobService.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.jobService.JobService.property.showOutput"></a>

```python
show_output: JobServiceShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList">JobServiceShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.jobService.JobService.property.timeouts"></a>

```python
timeouts: JobServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference">JobServiceTimeoutsOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.jobService.JobService.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `compute_pool_input`<sup>Optional</sup> <a name="compute_pool_input" id="@cdktf/provider-snowflake.jobService.JobService.property.computePoolInput"></a>

```python
compute_pool_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.jobService.JobService.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `external_access_integrations_input`<sup>Optional</sup> <a name="external_access_integrations_input" id="@cdktf/provider-snowflake.jobService.JobService.property.externalAccessIntegrationsInput"></a>

```python
external_access_integrations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `from_specification_input`<sup>Optional</sup> <a name="from_specification_input" id="@cdktf/provider-snowflake.jobService.JobService.property.fromSpecificationInput"></a>

```python
from_specification_input: JobServiceFromSpecification
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a>

---

##### `from_specification_template_input`<sup>Optional</sup> <a name="from_specification_template_input" id="@cdktf/provider-snowflake.jobService.JobService.property.fromSpecificationTemplateInput"></a>

```python
from_specification_template_input: JobServiceFromSpecificationTemplate
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.jobService.JobService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.jobService.JobService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_warehouse_input`<sup>Optional</sup> <a name="query_warehouse_input" id="@cdktf/provider-snowflake.jobService.JobService.property.queryWarehouseInput"></a>

```python
query_warehouse_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.jobService.JobService.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.jobService.JobService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, JobServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a>]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.jobService.JobService.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compute_pool`<sup>Required</sup> <a name="compute_pool" id="@cdktf/provider-snowflake.jobService.JobService.property.computePool"></a>

```python
compute_pool: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.jobService.JobService.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.jobService.JobService.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.jobService.JobService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.jobService.JobService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query_warehouse`<sup>Required</sup> <a name="query_warehouse" id="@cdktf/provider-snowflake.jobService.JobService.property.queryWarehouse"></a>

```python
query_warehouse: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.jobService.JobService.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.jobService.JobService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### JobServiceConfig <a name="JobServiceConfig" id="@cdktf/provider-snowflake.jobService.JobServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobServiceConfig(
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
  comment: str = None,
  external_access_integrations: typing.List[str] = None,
  from_specification: JobServiceFromSpecification = None,
  from_specification_template: JobServiceFromSpecificationTemplate = None,
  id: str = None,
  query_warehouse: str = None,
  timeouts: JobServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.computePool">compute_pool</a></code> | <code>str</code> | Specifies the name of the compute pool in your account on which to run the service. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the service. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the service; |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the service. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the service. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | Specifies the names of the external access integrations that allow your service to access external sites. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.fromSpecification">from_specification</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a></code> | from_specification block. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.fromSpecificationTemplate">from_specification_template</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a></code> | from_specification_template block. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#id JobService#id}. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.queryWarehouse">query_warehouse</a></code> | <code>str</code> | Warehouse to use if a service container connects to Snowflake to execute a query but does not explicitly specify a warehouse to use. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_pool`<sup>Required</sup> <a name="compute_pool" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.computePool"></a>

```python
compute_pool: str
```

- *Type:* str

Specifies the name of the compute pool in your account on which to run the service.

Identifiers with special or lower-case characters are not supported. This limitation in the provider follows the limitation in Snowflake (see [docs](https://docs.snowflake.com/en/sql-reference/sql/create-compute-pool)). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#compute_pool JobService#compute_pool}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the service.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#database JobService#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the service;

must be unique for the schema in which the service is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#name JobService#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the service.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#schema JobService#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#comment JobService#comment}

---

##### `external_access_integrations`<sup>Optional</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the names of the external access integrations that allow your service to access external sites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#external_access_integrations JobService#external_access_integrations}

---

##### `from_specification`<sup>Optional</sup> <a name="from_specification" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.fromSpecification"></a>

```python
from_specification: JobServiceFromSpecification
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a>

from_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#from_specification JobService#from_specification}

---

##### `from_specification_template`<sup>Optional</sup> <a name="from_specification_template" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.fromSpecificationTemplate"></a>

```python
from_specification_template: JobServiceFromSpecificationTemplate
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a>

from_specification_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#from_specification_template JobService#from_specification_template}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#id JobService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query_warehouse`<sup>Optional</sup> <a name="query_warehouse" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.queryWarehouse"></a>

```python
query_warehouse: str
```

- *Type:* str

Warehouse to use if a service container connects to Snowflake to execute a query but does not explicitly specify a warehouse to use.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#query_warehouse JobService#query_warehouse}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.jobService.JobServiceConfig.property.timeouts"></a>

```python
timeouts: JobServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#timeouts JobService#timeouts}

---

### JobServiceDescribeOutput <a name="JobServiceDescribeOutput" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobServiceDescribeOutput()
```


### JobServiceFromSpecification <a name="JobServiceFromSpecification" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobServiceFromSpecification(
  file: str = None,
  path: str = None,
  stage: str = None,
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.property.file">file</a></code> | <code>str</code> | The file name of the service specification. Example: `spec.yaml`. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.property.path">path</a></code> | <code>str</code> | The path to the service specification file on the given stage. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.property.stage">stage</a></code> | <code>str</code> | The fully qualified name of the stage containing the service specification file. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.property.text">text</a></code> | <code>str</code> | The embedded text of the service specification. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.property.file"></a>

```python
file: str
```

- *Type:* str

The file name of the service specification. Example: `spec.yaml`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#file JobService#file}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.property.path"></a>

```python
path: str
```

- *Type:* str

The path to the service specification file on the given stage.

When the path is specified, the `/` character is automatically added as a path prefix. Example: `path/to/spec`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#path JobService#path}

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.property.stage"></a>

```python
stage: str
```

- *Type:* str

The fully qualified name of the stage containing the service specification file.

At symbol (`@`) is added automatically. Example: `"\"<db_name>\".\"<schema_name>\".\"<stage_name>\""`. For more information about this resource, see [docs](./stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#stage JobService#stage}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecification.property.text"></a>

```python
text: str
```

- *Type:* str

The embedded text of the service specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#text JobService#text}

---

### JobServiceFromSpecificationTemplate <a name="JobServiceFromSpecificationTemplate" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobServiceFromSpecificationTemplate(
  using: typing.Union[IResolvable, typing.List[JobServiceFromSpecificationTemplateUsing]],
  file: str = None,
  path: str = None,
  stage: str = None,
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.using">using</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>]]</code> | using block. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.file">file</a></code> | <code>str</code> | The file name of the service specification template. Example: `spec.yaml`. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.path">path</a></code> | <code>str</code> | The path to the service specification template file on the given stage. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.stage">stage</a></code> | <code>str</code> | The fully qualified name of the stage containing the service specification template file. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.text">text</a></code> | <code>str</code> | The embedded text of the service specification template. |

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.using"></a>

```python
using: typing.Union[IResolvable, typing.List[JobServiceFromSpecificationTemplateUsing]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>]]

using block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#using JobService#using}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.file"></a>

```python
file: str
```

- *Type:* str

The file name of the service specification template. Example: `spec.yaml`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#file JobService#file}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.path"></a>

```python
path: str
```

- *Type:* str

The path to the service specification template file on the given stage.

When the path is specified, the `/` character is automatically added as a path prefix. Example: `path/to/spec`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#path JobService#path}

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.stage"></a>

```python
stage: str
```

- *Type:* str

The fully qualified name of the stage containing the service specification template file.

At symbol (`@`) is added automatically. Example: `"\"<db_name>\".\"<schema_name>\".\"<stage_name>\""`. For more information about this resource, see [docs](./stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#stage JobService#stage}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate.property.text"></a>

```python
text: str
```

- *Type:* str

The embedded text of the service specification template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#text JobService#text}

---

### JobServiceFromSpecificationTemplateUsing <a name="JobServiceFromSpecificationTemplateUsing" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobServiceFromSpecificationTemplateUsing(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing.property.key">key</a></code> | <code>str</code> | The name of the template variable. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing.property.value">value</a></code> | <code>str</code> | The value to assign to the variable in the template. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing.property.key"></a>

```python
key: str
```

- *Type:* str

The name of the template variable.

The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the spec definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#key JobService#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing.property.value"></a>

```python
value: str
```

- *Type:* str

The value to assign to the variable in the template.

The provider wraps it in `$$` by default, so be aware of that while referencing the argument in the spec definition. The value must either be alphanumeric or valid JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#value JobService#value}

---

### JobServiceShowOutput <a name="JobServiceShowOutput" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobServiceShowOutput()
```


### JobServiceTimeouts <a name="JobServiceTimeouts" id="@cdktf/provider-snowflake.jobService.JobServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.jobService.JobServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobServiceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#create JobService#create}. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#delete JobService#delete}. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#read JobService#read}. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#update JobService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.jobService.JobServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#create JobService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.jobService.JobServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#delete JobService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.jobService.JobServiceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#read JobService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.jobService.JobServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/job_service#update JobService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### JobServiceDescribeOutputList <a name="JobServiceDescribeOutputList" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobServiceDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> JobServiceDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### JobServiceDescribeOutputOutputReference <a name="JobServiceDescribeOutputOutputReference" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobServiceDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.autoResume">auto_resume</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.autoSuspendSecs">auto_suspend_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.computePool">compute_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.currentInstances">current_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.isAsyncJob">is_async_job</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.isJob">is_job</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.isUpgrading">is_upgrading</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.managingObjectDomain">managing_object_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.managingObjectName">managing_object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.minReadyInstances">min_ready_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.queryWarehouse">query_warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.resumedOn">resumed_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.spec">spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.specDigest">spec_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.suspendedOn">suspended_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.targetInstances">target_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutput">JobServiceDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_resume`<sup>Required</sup> <a name="auto_resume" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.autoResume"></a>

```python
auto_resume: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_suspend_secs`<sup>Required</sup> <a name="auto_suspend_secs" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.autoSuspendSecs"></a>

```python
auto_suspend_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compute_pool`<sup>Required</sup> <a name="compute_pool" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.computePool"></a>

```python
compute_pool: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `current_instances`<sup>Required</sup> <a name="current_instances" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.currentInstances"></a>

```python
current_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_async_job`<sup>Required</sup> <a name="is_async_job" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.isAsyncJob"></a>

```python
is_async_job: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_job`<sup>Required</sup> <a name="is_job" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.isJob"></a>

```python
is_job: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_upgrading`<sup>Required</sup> <a name="is_upgrading" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.isUpgrading"></a>

```python
is_upgrading: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `managing_object_domain`<sup>Required</sup> <a name="managing_object_domain" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.managingObjectDomain"></a>

```python
managing_object_domain: str
```

- *Type:* str

---

##### `managing_object_name`<sup>Required</sup> <a name="managing_object_name" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.managingObjectName"></a>

```python
managing_object_name: str
```

- *Type:* str

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ready_instances`<sup>Required</sup> <a name="min_ready_instances" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.minReadyInstances"></a>

```python
min_ready_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `query_warehouse`<sup>Required</sup> <a name="query_warehouse" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.queryWarehouse"></a>

```python
query_warehouse: str
```

- *Type:* str

---

##### `resumed_on`<sup>Required</sup> <a name="resumed_on" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.resumedOn"></a>

```python
resumed_on: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.spec"></a>

```python
spec: str
```

- *Type:* str

---

##### `spec_digest`<sup>Required</sup> <a name="spec_digest" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.specDigest"></a>

```python
spec_digest: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `suspended_on`<sup>Required</sup> <a name="suspended_on" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.suspendedOn"></a>

```python
suspended_on: str
```

- *Type:* str

---

##### `target_instances`<sup>Required</sup> <a name="target_instances" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.targetInstances"></a>

```python
target_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.jobService.JobServiceDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: JobServiceDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceDescribeOutput">JobServiceDescribeOutput</a>

---


### JobServiceFromSpecificationOutputReference <a name="JobServiceFromSpecificationOutputReference" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobServiceFromSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resetFile">reset_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resetStage">reset_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file` <a name="reset_file" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resetFile"></a>

```python
def reset_file() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_stage` <a name="reset_stage" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resetStage"></a>

```python
def reset_stage() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: JobServiceFromSpecification
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecification">JobServiceFromSpecification</a>

---


### JobServiceFromSpecificationTemplateOutputReference <a name="JobServiceFromSpecificationTemplateOutputReference" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobServiceFromSpecificationTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.putUsing">put_using</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resetFile">reset_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resetStage">reset_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_using` <a name="put_using" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.putUsing"></a>

```python
def put_using(
  value: typing.Union[IResolvable, typing.List[JobServiceFromSpecificationTemplateUsing]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.putUsing.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>]]

---

##### `reset_file` <a name="reset_file" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resetFile"></a>

```python
def reset_file() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_stage` <a name="reset_stage" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resetStage"></a>

```python
def reset_stage() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.using">using</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList">JobServiceFromSpecificationTemplateUsingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.usingInput">using_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.using"></a>

```python
using: JobServiceFromSpecificationTemplateUsingList
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList">JobServiceFromSpecificationTemplateUsingList</a>

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `using_input`<sup>Optional</sup> <a name="using_input" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.usingInput"></a>

```python
using_input: typing.Union[IResolvable, typing.List[JobServiceFromSpecificationTemplateUsing]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>]]

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateOutputReference.property.internalValue"></a>

```python
internal_value: JobServiceFromSpecificationTemplate
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplate">JobServiceFromSpecificationTemplate</a>

---


### JobServiceFromSpecificationTemplateUsingList <a name="JobServiceFromSpecificationTemplateUsingList" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobServiceFromSpecificationTemplateUsingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> JobServiceFromSpecificationTemplateUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[JobServiceFromSpecificationTemplateUsing]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>]]

---


### JobServiceFromSpecificationTemplateUsingOutputReference <a name="JobServiceFromSpecificationTemplateUsingOutputReference" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobServiceFromSpecificationTemplateUsingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, JobServiceFromSpecificationTemplateUsing]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.jobService.JobServiceFromSpecificationTemplateUsing">JobServiceFromSpecificationTemplateUsing</a>]

---


### JobServiceShowOutputList <a name="JobServiceShowOutputList" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobServiceShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> JobServiceShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### JobServiceShowOutputOutputReference <a name="JobServiceShowOutputOutputReference" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobServiceShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.autoResume">auto_resume</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.autoSuspendSecs">auto_suspend_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.computePool">compute_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.currentInstances">current_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.isAsyncJob">is_async_job</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.isJob">is_job</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.isUpgrading">is_upgrading</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.managingObjectDomain">managing_object_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.managingObjectName">managing_object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.minReadyInstances">min_ready_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.queryWarehouse">query_warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.resumedOn">resumed_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.specDigest">spec_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.suspendedOn">suspended_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.targetInstances">target_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutput">JobServiceShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_resume`<sup>Required</sup> <a name="auto_resume" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.autoResume"></a>

```python
auto_resume: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_suspend_secs`<sup>Required</sup> <a name="auto_suspend_secs" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.autoSuspendSecs"></a>

```python
auto_suspend_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compute_pool`<sup>Required</sup> <a name="compute_pool" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.computePool"></a>

```python
compute_pool: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `current_instances`<sup>Required</sup> <a name="current_instances" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.currentInstances"></a>

```python
current_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_async_job`<sup>Required</sup> <a name="is_async_job" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.isAsyncJob"></a>

```python
is_async_job: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_job`<sup>Required</sup> <a name="is_job" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.isJob"></a>

```python
is_job: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_upgrading`<sup>Required</sup> <a name="is_upgrading" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.isUpgrading"></a>

```python
is_upgrading: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `managing_object_domain`<sup>Required</sup> <a name="managing_object_domain" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.managingObjectDomain"></a>

```python
managing_object_domain: str
```

- *Type:* str

---

##### `managing_object_name`<sup>Required</sup> <a name="managing_object_name" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.managingObjectName"></a>

```python
managing_object_name: str
```

- *Type:* str

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ready_instances`<sup>Required</sup> <a name="min_ready_instances" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.minReadyInstances"></a>

```python
min_ready_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `query_warehouse`<sup>Required</sup> <a name="query_warehouse" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.queryWarehouse"></a>

```python
query_warehouse: str
```

- *Type:* str

---

##### `resumed_on`<sup>Required</sup> <a name="resumed_on" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.resumedOn"></a>

```python
resumed_on: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `spec_digest`<sup>Required</sup> <a name="spec_digest" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.specDigest"></a>

```python
spec_digest: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `suspended_on`<sup>Required</sup> <a name="suspended_on" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.suspendedOn"></a>

```python
suspended_on: str
```

- *Type:* str

---

##### `target_instances`<sup>Required</sup> <a name="target_instances" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.targetInstances"></a>

```python
target_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.jobService.JobServiceShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: JobServiceShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.jobService.JobServiceShowOutput">JobServiceShowOutput</a>

---


### JobServiceTimeoutsOutputReference <a name="JobServiceTimeoutsOutputReference" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import job_service

jobService.JobServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.jobService.JobServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, JobServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.jobService.JobServiceTimeouts">JobServiceTimeouts</a>]

---



